// Import section
//import hierarchyServices from "../../services/hierarchyServices"


//Resolvers
const resolvers = 
{
    Query:
    {
        // Resolver for allHierarchies : [Hierarchy]
        newsSections : () =>{
            return ["Banner", "NewsFlash", "Headlines"];
        }

    }
};


// Export schema
module.exports = resolvers;