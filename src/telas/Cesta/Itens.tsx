import { FlatList, Image, StyleSheet, View } from "react-native";
import { Texto } from "../../components/Texto";

interface ItensProps {
  itens: {
    titulo: string;
    lista: {
      nome: string;
      imagem: any;
    }[];
  };
}

function Itens({ itens }: ItensProps) {
  return (
    <>
      <Texto style={styles.titulo}>{itens.titulo}</Texto>
      {itens.lista.map(({ nome, imagem }) => {
        return (
          <View key={nome} style={styles.item}>
            <Image source={imagem} style={styles.imagem} />
            <Texto style={styles.nome}>{nome}</Texto>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center",
  },
  imagem:{
    width: 46,
    height: 46,
  },
  nome:{
    fontSize: 16,
    lineHeight:26,
    marginLeft: 12,
    color: "#464646"
  }
});

export { Itens };
