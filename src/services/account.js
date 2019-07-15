const ValidationError = require('../errors/validationError');

module.exports = (app) => {
  const findAll = (filter = {}) => {
    return app.db('accounts').where(filter);
  };

  const find = (filter = {}) => {
    return app.db('accounts').where(filter).first();
  };

  const save = async (account) => {
    if (!account.name) throw new ValidationError('Nome é um atributo obrigatório');
    const accountUser = await find({ name: account.name, user_id: account.user_id });
    if(accountUser) throw new ValidationError('Já existe uma conta com esse nome');

    return app.db('accounts').insert(account, '*');
  };

  const update = (id, account) => {
    return app.db('accounts').where({ id }).update(account, '*');
  };

  const remove = (id) => {
    return app.db('accounts').where({ id }).del();
  };

  return {
    save, findAll, find, update, remove,
  };
};
