const { User } = require('../models');

const resolvers = {
    Query: {
        // get all users
        // this is a temporary query that will be removed later.
        // It is here for the sole purpose of testing whether the Apollo server stuff
        //      works, without having to worry about the authorization stuff
        users: async() => {
            return User.find().select('-__v -password')
        }
    }
}

module.exports = resolvers;