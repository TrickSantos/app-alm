import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import Constants from "expo-constants";
import { Usuario } from "../types";

type Props = {
  children?: React.ReactNode;
};

interface AuthenticatationData {
  usuario: Usuario | null;
  setUsuario: Dispatch<SetStateAction<Usuario | null>>;
  login: (email: string, password: string) => Promise<void>;
  socket: Socket;
  signed: boolean;
}

const TOKEN_API = "TOKEN_API";
const STORAGE_USER = "STORAGE_USER";
const storageToken = localStorage.getItem(TOKEN_API);
const storageUser = localStorage.getItem(STORAGE_USER);

const AuthenticationContext = createContext<AuthenticatationData>(
  {} as AuthenticatationData
);

export const AuthtenticationProvider: React.FC<Props> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(
    storageUser ? JSON.parse(storageUser) : null
  );

  const [token, setToken] = useState(storageToken);
  const socket = io(
    __DEV__ ? "ws://localhost:3000" : "wss://api-alm.host.sysirius.com",
    {
      autoConnect: false,
      auth: { token },
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: `Bearer ${token}`,
          },
        },
      },
    }
  );

  useEffect(() => {
    socket.connect();
    socket.on("exception", (res) => {
      if (res.message === "Forbidden resource") {
        localStorage.clear();
        setToken(null);
        setUsuario(null);
      }
    });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  useEffect(() => {
    const storageUser = localStorage.getItem(STORAGE_USER);
    const storageToken = localStorage.getItem(TOKEN_API);

    if (storageToken && storageUser) {
      socket.disconnect();
      socket.auth = { token: storageToken };
      socket.connect();
    }
  }, [socket, token]);

  const login = (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      socket.emit(
        "login",
        {
          email,
          password,
        },
        (res: any) => {
          if (res.status === "error") reject(res);

          localStorage.setItem(STORAGE_USER, JSON.stringify(res.usuario));
          localStorage.setItem(TOKEN_API, res.token);

          setToken(res.token);
          setUsuario(res.usuario);
          resolve(res);
        }
      );
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        signed: !!usuario,
        usuario,
        setUsuario,
        login,
        socket,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;

export function useAuth() {
  return useContext(AuthenticationContext);
}
