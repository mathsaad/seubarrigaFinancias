module.exports = (app) => {
  app.route('/users')
    .get(app.routes.userRoutes.findAll)
    .post(app.routes.userRoutes.create);

  app.route('/accounts')
    .get(app.routes.accountsRoutes.getAll)
    .post(app.routes.accountsRoutes.create);

  app.route('/accounts/:id')
    .get(app.routes.accountsRoutes.get)
    .put(app.routes.accountsRoutes.update)
    .delete(app.routes.accountsRoutes.remove);
};
