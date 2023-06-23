import { StyleSheet, View } from "react-native";
import { Topo } from "./Topo";
import { Detalhes } from "./Detalhes";

function Cesta() {
  return (
    <>
      <Topo />
      <View style={estilos.cesta}>
        <Detalhes />
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
