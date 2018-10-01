import { mergeTypes } from "merge-graphql-schemas";

// Importing types
import NewsSectionsTypes from './NewsSectionsTypes';


// Merge all of the types together
const types = [
                NewsSectionsTypes
];
  
// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
const typeDefs =  mergeTypes(types, { all: true });


module.exports = typeDefs;
