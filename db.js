const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog-liftoff', 'evanbates',"", {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;

// sequelize
//     .authenticate()
//     .then(()=> {
//         console.log('that totally worked.');
//     })
//     .catch((err) => {
//         console.error('oh, no that doesnt work')
//     });

// Users.sync({})
//     .then(() => {
//         console.log('it should have created the table')
//         return Users.create({
//             firstName:'Evan',
//             lastName: 'Bates'
//         });
//     });



