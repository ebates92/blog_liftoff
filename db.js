const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog-liftoff', 'evanbates',"", {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize
    .authenticate()
    .then(()=> {
        console.log('that totally worked.');
    })
    .catch((err) => {
        console.error('oh, no that doesnt work')
    });