module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Artistas', [
        { nome: 'Pink Floyd', genero: 'Rock', discos: JSON.stringify(['Dark Side of the Moon', 'The Wall']), createdAt: new Date(), updatedAt: new Date() },
        { nome: 'Michael Jackson', genero: 'Pop', discos: JSON.stringify(['Thriller']), createdAt: new Date(), updatedAt: new Date() },
        { nome: 'Miles Davis', genero: 'Jazz', discos: JSON.stringify(['Kind of Blue']), createdAt: new Date(), updatedAt: new Date() },
        { nome: 'The Beatles', genero: 'Rock', discos: JSON.stringify(['Abbey Road']), createdAt: new Date(), updatedAt: new Date() }
    ]);
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Artistas', null, {});
    }
};