const express = require('express');

module.exports = (app) => {
  app.use('/auth', app.routes.auth);
  const protectedRouter = express.Router();

  protectedRouter.use('/users', app.routes.userRoutes);
  protectedRouter.use('/accounts', app.routes.accountsRoutes);
  protectedRouter.use('/transactions', app.routes.transactionsRoutes);
  protectedRouter.use('/transfers', app.routes.transfersRoutes);

  app.use('/v1', app.config.passport.authenticate(), protectedRouter);
};
