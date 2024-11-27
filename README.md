# Iteration 6:

## Analyze the following:

### What is the purpose of userSchema.statics.login in userModel.js?

Logic for the userLogin. Validates that all field are filled, searches the user with the email, and validates that the password matches.

### Compare User.findOne({ email }) to this.findOne({ email }). When and why do we use this instead of the model's name?

The userSchema.statics.login is a static function inside user model, so calling this refers to the model itself. In userController the User refers to the imported user model

### Why is bcrypt imported in userController.js and not in userModel.js?

bcrypt is required when hashing the password to compare to the password stored in database. In backend v2 the password is compared in userController.

## Discuss which approach you plan to use for your project and explain why.

Its more clear to separate data structure from functionality.

# Iteration 7:

## Analyze the following:

### What is the purpose of userSchema.statics.signup in userModel.js?

Encapsulates user registration logic. Validates email and password fields. Hashes the password.

### Compare User.create({ email, password: hash }) to this.create({ email, password: hash }). When and why do we use this instead of the model's name?

The userSchema.statics.signUp is a static function inside user model, so calling this refers to the model itself. In userController the User refers to the imported user model

### Why is validator imported in userController.js and not in userModel.js?

Validator is used to validate that email is an actual email address, and that the password is strong. This happens inside the logic, which is now moved into userController. Its not needed in userModel anymore.

## Discuss which approach you plan to use for your project and explain why.

Its better to keep logic and data structure separate.



