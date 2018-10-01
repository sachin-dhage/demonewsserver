import { gql } from "apollo-server";


const typeDefs = gql`
    
    type Query
    {
        newsSections : [String]
    }
`;


// Export typeDefs
module.exports = typeDefs;