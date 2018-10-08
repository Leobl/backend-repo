/**
 * We’ll create a user Schema, aka a user model. 
 * Everything in Mongoose starts with a Schema. 
 * Each schema maps to a MongoDB collection and defines 
 * the shape of the documents within that collection. 
 * Here we are declaring all of the properties we can 
 * expect users to have attached to their model, what 
 * data type they are, if they are unique or not, 
 * and if we want them to be required or not.
 */

 /**
  * Mongoose Schema (mongoose is mongoDB object modeling for node)
  */

//This is how we create new users
const userSchema = mongoose.Schema({
    passwordHash: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    tokenSeed: { type: String, required: true, unique: true },
    created: { type: Date, default : () => new Date()},
  });
  
  const User = module.exports = mongoose.model('user', userSchema)