import { SafeAreaView, StatusBar, View } from "react-native";
import { Cesta } from "./src/telas/Cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { cesta } from "./src/mocks/Cesta";

export default function App() {
  const [fontesCarregadas] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontesCarregadas) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...cesta} />
    </SafeAreaView>
  );
}
