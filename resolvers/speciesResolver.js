import Species from '../models/species.js';

export default {
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
