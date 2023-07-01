import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Texto } from "./Texto";

interface ButtonProps {
  texto: string;
}

function Button({ texto }: ButtonProps) {
  return (
    <>
      <TouchableOpacity style={styles.botao}>
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
    alignItems: "center",
    borderRadius: 10,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize:16
  },
});
export { Button };
