import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Texto } from "./Texto";

interface ButtonProps {
  texto: string;
}

function Button({ texto }: ButtonProps) {
  return (
    <>
      <TouchableOpacity style={styles.botao} onPress={() => {}}>
        <Texto style={styles.textoBotao}>{texto}</Texto>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "center",
  },
});
export { Button };
