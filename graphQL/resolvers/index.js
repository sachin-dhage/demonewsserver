import { merge } from "lodash";

//Importing resolvers
import NewsSectionsResolvers from './NewsSectionsResolvers';

// Merge all of the resolver objects together
const resolvers = merge(
    NewsSectionsResolvers
);

// Export merged resolvers
module.exports = resolvers;