
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'Welcome Developers', contents: 'Java'},
        {title: 'Hellooooo', contents: 'Python'}
      ]);
    });
};
