import Category from '../models/category.js';

export default {
    Species: {
        async category(parent, args) {
            console.log('category', parent);
            return await Category.findById(parent.category);
        },
    },
    Mutation: {
        addCategory: (parent, args) => {
           console.log('categoryResolver, addCategory', args);
           const newCategory = new Category(args);
           return newCategory.save();
        },
    },  
};
