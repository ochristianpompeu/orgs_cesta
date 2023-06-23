const cesta = {
  topo: {
    titulos: "Título daa Cesta",
    imagem: require("../../assets/topo.png"),
  },
  detalhes: {
    nomeCesta: "Nome da Cesta",
    logoFazenda: require("../../assets/logo.png"),
    nomeFazenda: "Nome da Fazenda",
    descricaoFazenda:
      "Uma descrição razoavel da fazenda par ser exibida para os usuáriosfinais",
    valor: "R$ 40,00",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: require("../../assets/frutas/Tomate.png"),
      },
      {
        nome: "Brócolis",
        imagem: require("../../assets/frutas/Brócolis.png"),
      },
      {
        nome: "Batata",
        imagem: require("../../assets/frutas/Batata.png"),
      },
      {
        nome: "Pepino",
        imagem: require("../../assets/frutas/Pepino.png"),
      },
      {
        nome: "Abóbora",
        imagem: require("../../assets/frutas/Abóbora.png"),
      },
    ],
  },
};

export { cesta };
