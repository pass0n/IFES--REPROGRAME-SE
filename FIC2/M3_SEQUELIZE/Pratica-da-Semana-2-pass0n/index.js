//ATENÇÃO NÃO ESQUEÇA DE INSTALAR AS BIBLIOTECAS SQLITE3 E SEQUELIZE
//comando de instalação

// npm install sqlite3 sequelize

// Importando as biliotecas
const { Sequelize, Model, DataTypes } = require("sequelize");
//Abrindo conexão com o Banco de dados ou criando um novo caso não exista
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite"
});

class Setor extends Model {
  static init(sequelize) {
    super.init({
      idsetor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      ramal: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(30),
      }
    }, { sequelize, modelname: "setor", tableName: "setores" });
  };
};

//Iniciação do modelo create table setor
Setor.init(sequelize);

class Funcionario extends Model {
  static init(sequelize) {
    super.init({
      matricula: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      idsetor: {
        type: DataTypes.INTEGER,
        references: {
          model: Setor,
          key: "idsetor"
        }
      },
      nome: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      nascimento: {
        type: DataTypes.DATE
      },
      telefone: {
        type: DataTypes.STRING(15)
      }
    }, { sequelize, modelname: "funcionario", tableName: "funcionarios" });
  };
};

Funcionario.init(sequelize);

// Sincronismo
(async () => {
  await sequelize.sync({ force: true });

  const setor_create = await Setor.create({
    nome: "Financeiro",
    ramal: "2134",
    email: "financeiro@empresa.com"
  });

  const setor_create_S = await Setor.create({
    nome: "Secretaria",
    ramal: "2135",
    email: "secretaria@empresa.com"
  });

  const setor_create_P = await Setor.create({
    nome: "Portaria",
    ramal: "2136",
    email: "portaria@empresa.com"
  });

  const setor_create_C = await Setor.create({
    nome: "Contabilidade",
    ramal: "3134",
    email: "contabilidade@empresa.com"
  });

  const setor_create_D = await Setor.create({
    nome: "Diretoria",
    ramal: "3135",
    email: "diretoria@empresa.com"
  });

  const setor_create_RH = await Setor.create({
    nome: "Recursos Humanos",
    ramal: "3136",
    email: "r_humanos@empresa.com"
  });

  const setor_delete_contabilidade = await Setor.findByPk(4);
  setor_delete_contabilidade.destroy()

  const setor_novo_RH = await Setor.findByPk(6);
  setor_novo_RH.nome = "Departamento Pessoal";
  await setor_novo_RH.save();

  const setores_listar = await Setor.findAll();
  console.log(`Lista de setores:\n ${JSON.stringify(setores_listar, null, 2)} \n\n`);
  
})();