import { Dimensions, Image, StyleSheet } from "react-native";
import { Texto } from "../../components/Texto";

const screenWidth = Dimensions.get("screen").width;

interface TopoProps {
  titulo?: string;
  imagem?: any;
}

function Topo({ titulo, imagem }: TopoProps) {
  return (
    <>
      <Image source={imagem} style={styles.topo} />
      <Texto style={styles.titulo}>Detalhes da Cesta</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * screenWidth,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    lineHeight: 26,
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
    color: "#FFFFFF",
  },
});

export { Topo };
