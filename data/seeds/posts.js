
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'Welcome Developers', contents: 'Java'},
        {title: 'Hellooooo', contents: 'Python'},
	{title: 'Hellooooo', contents: 'C'},
	{title: 'Hellooooo', contents: 'JavaScript'},
	{title: 'Hellooooo', contents: 'HTML'},
	{title: 'Hellooooo', contents: 'JQuery'},
	{title: 'Hellooooo', contents: 'C++'},
	{title: 'Hellooooo', contents: 'CSS'}      
      ]);
    });
};
