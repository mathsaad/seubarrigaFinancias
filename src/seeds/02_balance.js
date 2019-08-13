
const moment = require('moment');

exports.seed = (knex) => {
  return knex('users').insert([
    {
      id: 1000100, name: 'User #3', mail: 'user3@mail.com', passwd: '$2a$10$bobhZNMayNVK/b5RxaeYw.ai/VFGW01TfqPYYFlwKOFNpIGLoxhqa',
    },
    {
      id: 1000101, name: 'User #4', mail: 'user4@mail.com', passwd: '$2a$10$bobhZNMayNVK/b5RxaeYw.ai/VFGW01TfqPYYFlwKOFNpIGLoxhqa',
    },
    {
      id: 1000102, name: 'User #5', mail: 'user5@mail.com', passwd: '$2a$10$bobhZNMayNVK/b5RxaeYw.ai/VFGW01TfqPYYFlwKOFNpIGLoxhqa',
    },
  ])
    .then(() => knex('accounts').insert([
      { id: 1000100, name: 'Acc Saldo Principal', user_id: 1000100 },
      { id: 1000101, name: 'Acc Saldo Secundário', user_id: 1000100 },
      { id: 1000102, name: 'Acc Alternativa 1', user_id: 1000101 },
      { id: 1000103, name: 'Acc Alternativa 2', user_id: 1000101 },
      { id: 1000104, name: 'Acc Geral Principal', user_id: 1000102 },
      { id: 1000105, name: 'Acc Geral Secundária', user_id: 1000102 },
    ]))
    .then(() => knex('transfers').insert([
      {
        id: 1000100, description: 'Transfer #1', user_id: 1000102, acc_ori_id: 1000105, acc_dest_id: 1000104, ammount: 256, date: new Date(),
      },
      {
        id: 1000101, description: 'Transfer #2', user_id: 1000101, acc_ori_id: 1000102, acc_dest_id: 1000103, ammount: 512, date: new Date(),
      },
    ]))
    .then(() => knex('transactions').insert([
      {
        description: '2', date: new Date(), ammount: 2, type: 'I', acc_id: 1000104, status: true,
      },
      {
        description: '2', date: new Date(), ammount: 4, type: 'I', acc_id: 1000102, status: true,
      },
      {
        description: '2', date: new Date(), ammount: 8, type: 'I', acc_id: 1000105, status: true,
      },
      {
        description: '2', date: new Date(), ammount: 16, type: 'I', acc_id: 1000104, status: false,
      },
      {
        description: '2', date: moment().subtract({ days: 5 }), ammount: 32, type: 'I', acc_id: 1000104, status: true,
      },
      {
        description: '2', date: moment().add({ days: 5 }), ammount: 64, type: 'I', acc_id: 1000104, status: true,
      },
      {
        description: '2', date: moment(), ammount: -128, type: 'O', acc_id: 1000104, status: true,
      },
      {
        description: '2', date: moment(), ammount: 256, type: 'I', acc_id: 1000104, status: true,
      },
      {
        description: '2', date: moment(), ammount: -256, type: 'O', acc_id: 1000105, status: true,
      },
      {
        description: '2', date: moment(), ammount: 512, type: 'I', acc_id: 1000102, status: true,
      },
      {
        description: '2', date: moment(), ammount: -512, type: 'O', acc_id: 1000103, status: true,
      },
    ]));
};
