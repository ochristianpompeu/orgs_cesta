import { Image, StyleSheet, View } from "react-native";
import { Texto } from "../../components/Texto";

function Detalhes() {
  return (
    <>
      <Texto style={styles.nomeCesta}>Nome da Cesta</Texto>
      <View style={styles.fazenda}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.imagemFazenda}
        />
        <Texto style={styles.nomeFazenda}>Nome da Fazenda</Texto>
      </View>
      <Texto style={styles.descricaoCesta}>
        Uma descrição razoavel da fazenda par ser exibida para os usuários
        finais
      </Texto>
      <Texto style={styles.precoCesta}>R$ 40,00</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  nomeCesta: {
    lineHeight: 46,
    fontSize: 26,
    color: "#464646",
    fontWeight: "bold",
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

export { Detalhes };
