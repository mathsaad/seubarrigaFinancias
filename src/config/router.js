const express = require('express');

module.exports = (app) => {
  app.use('/auth', app.routes.auth);
  const protectedRouter = express.Router();

  protectedRouter.use('/users', app.routes.userRoutes);
  protectedRouter.use('/accounts', app.routes.accountsRoutes);

  app.use('/v1', app.config.passport.authenticate(), protectedRouter);
};
