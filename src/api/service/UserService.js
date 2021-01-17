const UserResources = require('../resource/UserResources');

module.exports = {
  async create(user) {
    const userRegister = await UserResources.create(user);
    return userRegister;
  },
  async index() {
    const userIndex = await UserResources.show();

    return userIndex;
  },
};
