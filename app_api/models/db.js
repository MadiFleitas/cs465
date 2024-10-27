const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const conn_uri = `mongodb://${host}/travlr`;

const {seed, blogSeed, latestSeed, mealSeed, newsSeed, pageSeed, roomSeed, testimonialSeed, tripSeed, tipSeed } = require('./seed');

// Register models
// Commenting out unnecessary models for now, only `trips` is needed
// require('../../app_api/models/blog-posts');
// require('../../app_api/models/latest-posts');
// require('../../app_api/models/meal-posts');
// require('../../app_api/models/news-posts');
// require('../../app_api/models/pages');
// require('../../app_api/models/rooms');
// require('../../app_api/models/testimonials');
require('./travlr'); // Keep this one as it is needed for the `trips` collection
// require('../../app_api/models/vacation-tips');

mongoose.connection.on('connected', () => console.log('CONNECTED!'));
mongoose.connection.on('error', (err) => console.log(err));
mongoose.connection.on('disconnected', () => console.log('DISCONNECTED!'));

mongoose.set('strictQuery', false);

// Kill MongoDB connections before exiting app
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected due to ${msg}`);
        callback();
    });
}

process.once('SIGUSR2', () => gracefulShutdown('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => gracefulShutdown('app termination', () => process.exit(0)));

async function main() {
    await mongoose.connect(conn_uri);
    // Commenting out other seed functions unless they are necessary
    // await blogSeed();
    // await latestSeed();
    // await mealSeed();
    // await newsSeed();
    // await pageSeed();
    // await roomSeed();
    // await testimonialSeed();
    await tripSeed(); // Keep this one as you need to seed trips
    // await tipSeed();
}

main().catch(console.log);
