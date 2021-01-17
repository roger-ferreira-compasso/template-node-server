const { User } = require('../models');

module.exports = {
  async create(user) {
    const { name, lastName } = user;

    const userCreate = await User.create({
      name,
      lastName,
    });

    return userCreate;
  },

  async show() {
    const userIndex = await User.findAll();

    return userIndex;
  },
};
