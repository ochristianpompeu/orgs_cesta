import { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";

interface TextoProps extends TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle> | undefined;
}

function Texto({ children, style }: TextoProps) {
  let estilo = styles.texto;

  if (style?.fontWeight == "bold") {
    estilo = styles.textoNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal"
  },
  textoNegrito: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});

export { Texto };
