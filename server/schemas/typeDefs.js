const { gql } = require('apollo-server-express');

// the return all users query is a temporary one that will be removed later
// It is here for the sole purpose of testing whether the Apollo server and gql stuff works,
//      without having to worry about the authorization stuff
const typeDefs = gql`
    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Query {
        users: [User]
    }
`;

module.exports = typeDefs;