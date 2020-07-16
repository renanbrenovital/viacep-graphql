module.exports = {
  Query: {
    endereco: (_,{ cep }, { dataSources }) => dataSources.viaCEP.buscarEndereco(cep),
  }
}