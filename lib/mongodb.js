const mongoose = require('mongoose');

const cache = globalThis.__mongooseCache || (globalThis.__mongooseCache = {
    connection: null,
    promise: null
});

async function connectToDatabase() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        const error = new Error('MONGODB_URI is not configured');
        error.code = 'MISSING_MONGODB_URI';
        throw error;
    }

    if (cache.connection && cache.connection.readyState === 1) {
        return cache.connection;
    }

    if (!cache.promise) {
        cache.promise = mongoose.connect(uri)
            .then(() => mongoose.connection)
            .catch(error => {
                cache.promise = null;
                throw error;
            });
    }

    cache.connection = await cache.promise;
    return cache.connection;
}

module.exports = { connectToDatabase };