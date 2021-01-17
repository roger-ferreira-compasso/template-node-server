const UserService = require('../../service/UserService');
const messages = require('../../../constants/messages');

module.exports = {
  async create(req, res) {
    const userRegister = await UserService.create(req.body);

    res.status(200).json({ message: messages.userSuccess, userRegister });
  },
  async index(req, res) {
    const userIndex = await UserService.index();

    res.status(200).json(userIndex);
  },

  /**
 * No primeiro parametro é o nome da pagina a ser renderizada ela deve ficar na pasta views
 * Segundo parâmetro é um objeto com valores que podem ser renderizado na pagina
 */
  async render(req, res) {
    res.render('index',
      {
        hello: 'hello',
        world: 'world',
        message: 'Esse conteudo sera renderizado pelo handlebars',
      });
  },
};
