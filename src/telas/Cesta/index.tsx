import { StyleSheet, View } from "react-native";
import { Topo } from "./Topo";
import { Detalhes } from "./Detalhes";

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
}

function Cesta({ topo, detalhes }: CestaProps) {
  return (
    <>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </>
  );
}

export { Cesta };

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
