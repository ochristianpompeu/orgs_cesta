import { useState, useCallback, useEffect } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { Cesta } from "./src/telas/Cesta";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { cesta } from "./src/mocks/Cesta";

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          MontserratRegular: Montserrat_400Regular,
          MontserratBold: Montserrat_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appReady) {
      SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <SafeAreaView>
      <View onLayout={onLayout}>
        <StatusBar />
        <Cesta {...cesta} />
      </View>
    </SafeAreaView>
  );
}
