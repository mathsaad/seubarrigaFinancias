
exports.seed = (knex) => {
  return knex('transactions').del()
    .then(() => knex('transfers').del())
    .then(() => knex('accounts').del())
    .then(() => knex('users').del())
    .then(() => knex('users').insert([
      { id: 1000000, name: 'User #1', mail: 'user1@mail.com', passwd: '$2a$10$bobhZNMayNVK/b5RxaeYw.ai/VFGW01TfqPYYFlwKOFNpIGLoxhqa' },
      { id: 1000001, name: 'User #2', mail: 'user2@mail.com', passwd: '$2a$10$bobhZNMayNVK/b5RxaeYw.ai/VFGW01TfqPYYFlwKOFNpIGLoxhqa' },
    ]))
    .then(() => knex('accounts').insert([
      { id: 1000000, name: 'AccO #1', user_id: 1000000 },
      { id: 1000001, name: 'AccD #1', user_id: 1000000 },
      { id: 1000002, name: 'AccO #2', user_id: 1000001 },
      { id: 1000003, name: 'AccD #2', user_id: 1000001 },
    ]))
    .then(() => knex('transfers').insert([
      { id: 1000000, description: 'Transfer #1', user_id: 1000000, acc_ori_id: 1000000, acc_dest_id: 1000001, ammount: 100, date: new Date() },
      { id: 1000001, description: 'Transfer #2', user_id: 1000001, acc_ori_id: 1000002, acc_dest_id: 1000003, ammount: 100, date: new Date() },
    ]))
    .then(() => knex('transactions').insert([
      { description: 'Transfer from AccO #1', date: new Date(), ammount: 100, type: 'I', acc_id: 1000001, transfer_id: 1000000 },
      { description: 'Transfer from AccD #1', date: new Date(), ammount: -100, type: 'O', acc_id: 1000000, transfer_id: 1000000 },
      { description: 'Transfer from AccO #2', date: new Date(), ammount: 100, type: 'I', acc_id: 1000003, transfer_id: 1000001 },
      { description: 'Transfer from AccD #2', date: new Date(), ammount: -100, type: 'O', acc_id: 1000002, transfer_id: 1000001 },
    ]));
};
