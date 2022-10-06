export type Role =
  | "desbravador"
  | "administrador"
  | "diretoria"
  | "apoio"
  | "staff";

export interface Clube {
  nome: string;
  ativo: boolean;
  cidade: string;
  id: number;
  logo?: string;
  membros: Usuario[];
}

export interface Usuario {
  id: number;
  clube: Clube;
  nome: string;
  aniversario: string;
  funcao: Role;
  clubeId: number;
  email: string;
  foto: string;
  presencas: any[];
  ativo: boolean;
}

export interface Evento {
  id: number;
  nome: string;
  descricao: string;
  pontos: number;
  inicio: string;
  fim: string;
  ativo: boolean;
}
