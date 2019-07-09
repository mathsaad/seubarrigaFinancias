module.exports = (app) => {
  app.route('/auth/signin').post(app.routes.auth.signin);
  app.route('/auth/signup').post(app.routes.userRoutes.create);

  app.route('/users')
    .all(app.config.passport.authenticate())
    .get(app.routes.userRoutes.findAll)
    .post(app.routes.userRoutes.create);

  app.route('/accounts')
    .all(app.config.passport.authenticate())
    .get(app.routes.accountsRoutes.getAll)
    .post(app.routes.accountsRoutes.create);

  app.route('/accounts/:id')
    .all(app.config.passport.authenticate())
    .get(app.routes.accountsRoutes.get)
    .put(app.routes.accountsRoutes.update)
    .delete(app.routes.accountsRoutes.remove);
};
