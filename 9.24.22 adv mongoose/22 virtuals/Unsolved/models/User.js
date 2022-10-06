const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      // done: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
      virtuals: true,
    },
    id: false,
  }
);

// done: Create a virtual property `fullName` on the userSchema
userSchema.virtual('fullName')
.get(function() {
  return `${this.first} ${this.last}`
})
.set(function(v) {
  const first = v.split(' ')[0];
  const last = v.split(' ')[1];
  this.set({ first, last });
});
// done: Create a getter for the virtual that returns the full name of the user (first + last)

// done: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`


// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
