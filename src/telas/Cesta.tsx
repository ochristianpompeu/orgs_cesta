import { Dimensions, Image, StyleSheet, Text } from "react-native";

const screenWidth = Dimensions.get("screen").width;

function Cesta() {
  return (
    <>
      <Image source={require("../../assets/topo.png")} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes da Cesta</Text>
    </>
  );
}

export { Cesta };

const estilos = StyleSheet.create({
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
