import { Image, StyleSheet, View } from "react-native";
import { Texto } from "../../components/Texto";
import { Button } from "../../components/Button";

interface DetalhesProps {
  nomeCesta?: string | undefined;
  logoFazenda?: any;
  nomeFazenda?: string | undefined;
  descricaoFazenda?: string | undefined;
  valor?: string | undefined;
  botao: string;
}

function Detalhes({
  nomeCesta,
  logoFazenda,
  nomeFazenda,
  descricaoFazenda,
  valor,
  botao,
}: DetalhesProps) {
  return (
    <>
      <Texto style={styles.nomeCesta}>{nomeCesta}</Texto>
      <View style={styles.fazenda}>
        <Image source={logoFazenda} style={styles.imagemFazenda} />
        <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
      </View>
      <Texto style={styles.descricaoCesta}>{descricaoFazenda}</Texto>
      <Texto style={styles.precoCesta}>{valor}</Texto>
      <Button texto={botao} />
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
