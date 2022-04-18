import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
        species: [Species],
        specie(id: ID!): Species
    }

    type Species {
        id: ID
        speciesName: String
        category: Category
    }
    extend type Mutation {
        addSpecies(speciesName: String!, category: ID!): Species
    }
`;
