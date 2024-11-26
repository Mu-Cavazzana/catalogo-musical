module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Discos', [
        { titulo: 'Dark Side of the Moon', ano: 1973, createdAt: new Date(), updatedAt: new Date() },
        { titulo: 'Thriller', ano: 1982, createdAt: new Date(), updatedAt: new Date() },
        { titulo: 'Kind of Blue', ano: 1959, createdAt: new Date(), updatedAt: new Date() },
        { titulo: 'Abbey Road', ano: 1969, createdAt: new Date(), updatedAt: new Date() },
        { titulo: 'The Wall', ano: 1979, createdAt: new Date(), updatedAt: new Date() }
    ]);
    },
  
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Discos', null, {});
    }
};