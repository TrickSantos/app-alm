import {
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
  useFonts,
} from "@expo-google-fonts/roboto-condensed";
import AppLoading from "expo-app-loading";
import App from "./src";
import * as serviceRegistration from "./src/serviceWorkerRegistration";

export default function Main() {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
  });

  return fontsLoaded ? <App /> : <AppLoading />;
}

serviceRegistration.register();
