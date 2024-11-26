module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Generos', [
        { nome: 'Rock', createdAt: new Date(), updatedAt: new Date() },
        { nome: 'Pop', createdAt: new Date(), updatedAt: new Date() },
        { nome: 'Jazz', createdAt: new Date(), updatedAt: new Date() },
        { nome: 'Classical', createdAt: new Date(), updatedAt: new Date() },
        { nome: 'Hip Hop', createdAt: new Date(), updatedAt: new Date() }
    ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Generos', null, {});
    }
};