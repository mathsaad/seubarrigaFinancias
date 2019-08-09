module.exports = function recursoIndevidoError(message = 'Este recurso não pertence ao usuário') {
  this.name = 'recursoIndevidoError';
  this.message = message;
};
