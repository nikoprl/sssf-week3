import Species from '../models/species.js';

export default {
    Query: {
        async species(parent, args) {
            console.log('species', args);
            return await Species.find();
        },
        async specie(parent, args) {
            return await Species.find(args.id);
        }
    },
    Animal: {
        async species(parent, args) {
            console.log('species', parent);
            return await Species.findById(parent.species);
        },
    },
    Mutation: {
        addSpecies: (parent, args) => {
           console.log('speciesResolver, addSpecies', args);
           const newSpecies = new Species(args);
           return newSpecies.save();
        },
    },
};
