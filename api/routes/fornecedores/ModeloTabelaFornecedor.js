const Sequelize = require("sequelize");

const instancia = require("../../database");

const columns = {
  empresa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.ENUM("ração", "brinquedos"),
    allowNull: false,
  },
};

const opcoes = {
  freezeTableName: true,
  tableName: "fornecedores",
  createdAt: "dataCriacao",
  updatedAt: "dataAtualizacao",
  verions: "versao",
};

module.exports = instancia.define("fornecedor", colunas, opcoes);
