import { ScrollView, StyleSheet, View } from "react-native";
import { Topo } from "./Topo";
import { Detalhes } from "./Detalhes";
import { Itens } from "./Itens";

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
    <ScrollView>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
        <Itens itens={itens} />
      </View>
    </ScrollView>
  );
}

export { Cesta };

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
