import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("screen").width;

function Cesta() {
  return (
    <>
      <Image source={require("../../assets/topo.png")} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes da Cesta</Text>

      <View style={estilos.cesta}>
        <Text style={estilos.nomeCesta}>Nome da Cesta</Text>
        <View style={estilos.fazenda}>
          <Image
            source={require("../../assets/logo.png")}
            style={estilos.imagemFazenda}
          />
          <Text style={estilos.nomeFazenda}>Nome da Fazenda</Text>
        </View>
        <Text style={estilos.descricaoCesta}>
          Uma descrição razoavel da fazenda par ser exibida para os usuários
          finais
        </Text>
        <Text style={estilos.precoCesta}>R$ 40,00</Text>
      </View>
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
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  nomeCesta: {
    lineHeight: 46,
    fontSize: 26,
    color: "#464646",
    fontFamily: "MontserratBold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    lineHeight: 26,
    fontSize: 16,
    marginLeft: 12,
    fontFamily: "MontserratRegular"
  },
  descricaoCesta: {
    lineHeight: 26,
    fontSize: 16,
    color: "#A3A3A3",
  },
  precoCesta: {
    color: "#2A9F85",
    lineHeight: 42,
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 8,
  },
});
