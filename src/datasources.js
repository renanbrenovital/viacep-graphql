const { RESTDataSource } = require('apollo-datasource-rest');

class ViaCEP extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://viacep.com.br/ws';
  }

  async buscarEndereco(cep) {
    const response = await this.get(`${cep}/json`);
    return response ? response : {};
  }
}

module.exports = ViaCEP;