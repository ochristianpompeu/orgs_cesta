import { Image, StyleSheet, View } from "react-native";
import { Texto } from "../../components/Texto";
type ItemProps = {
  nome: string;
  imagem: any;
};
function Item({ nome, imagem }: ItemProps) {
  return (
    <View key={nome} style={styles.item}>
      <Image source={imagem} style={styles.imagem} />
      <Texto style={styles.nome}>{nome}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: "#464646",
  },
});

export { Item };
