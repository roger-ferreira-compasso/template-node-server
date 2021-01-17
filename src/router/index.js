const { Router } = require('express');

const userController = require('../api/controllers/Index/userController');
const validatorIndex = require('../validators/validatorIndex');

const routes = Router();

// EXEMPLO DE ROTA COMUM
routes.get('/', (req, res) => {
  res.json('Hello World');
});

/**
 * @swagger
 * /listagem/:
 *   get:
 *     summary: busca todos
 *     description: retorna todos os dados validos cadastrados
 *     tags:
 *       - index
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: retorna um array de objetos
 */
routes.get('/listagem', userController.index);

/**
 * @swagger
 *
 * /cadastro:
 *   post:
 *     description: rota de cadastro de usuarios
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nome do usuario
 *         description: nome do usuario que será cadastrado.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: sobrenome
 *         description: sobrenome do usuario.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Resposta http json
 */

/**
 * @swagger
 *
 * /cadastro:
 *   post:
 *     summary: Cadastra
 *     description: rota de cadastro
 *     tags:
 *       - index
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: nome do usuario
 *         description: nome do usuario que será cadastrado.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: sobrenome
 *         description: sobrenome do usuario.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Resposta http json
 *         schema:
 *           $ref: '#/definitions/User'
 */
routes.post('/cadastro', validatorIndex, userController.create);

// EXEMPLO DE ROTA RENDERIZANDO PAGINA HANDLEBARS

routes.get('/index', userController.render);

/**
* @swagger
* definitions:
*   User:
*     type: object
*     properties:
*       id:
*         type: integer
*         format: int64
*         example: 1
*       name:
*         type: string
*         example: nome
*         description: Nome do usuario
*       lastName:
*         type: string
*         example: lastName
*         description: sobrenome do usuario
*/

module.exports = routes;
