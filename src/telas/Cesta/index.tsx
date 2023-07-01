import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Topo } from "./Topo";
import { Detalhes } from "./Detalhes";
import { Item } from "./Item";
import { Texto } from "../../components/Texto";

interface CestaProps {
  topo?: {
    titulo?: string;
    imagem?: any;
  };
  detalhes: {
    nomeCesta?: string | undefined;
    logoFazenda?: any;
    nomeFazenda?: string | undefined;
    descricaoFazenda?: string | undefined;
    valor?: string | undefined;
    botao: string;
  };
  itens: {
    titulo: string;
    lista: {
      nome: string;
      imagem: any;
    }[];
  };
}

function Cesta({ topo, detalhes, itens }: CestaProps) {
  return (
    <FlatList
      data={itens.lista}
      renderItem={({ item }) => <Item imagem={item.imagem} nome={item.nome} />}
      keyExtractor={(item) => item.nome}
      ListHeaderComponent={
        <>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
          </View>
          <Texto style={estilos.titulo}>{itens.titulo}</Texto>
        </>
      }
    />
  );
}

export { Cesta };

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    paddingHorizontal: 16,
  },
});
