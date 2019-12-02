// var mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/COBOL" , ()=>{
//   console.log("connection was successful")
// } );
// var Schema = mongoose.Schema;

// var personSchema = Schema({
//   _id: Schema.Types.ObjectId,
//   name: String,
//   age: Number,
//   stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
// });

// var storySchema = Schema({
//   author: { type: Schema.Types.ObjectId, ref: 'Person' },
//   title: String,
//   fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
// });

// var Story = mongoose.model('Story', storySchema);
// var Person = mongoose.model('Person', personSchema);


// var author = new Person({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'Ian Fleming',
//     age: 50
//   });
  
//   author.save(function (err , author) {
//     if (err) return handleError(err);
    
//     var story1 = new Story({
//       title: 'Casino Royale',
//       author: author._id    // assign the _id from the person
//     });
    
//     // story1.save(function (err , story) {
//     //   if (err) return handleError(err);
      
//     // });
  

//   });

// //   Story.
// //   findOne({ title: /casino royale/i }).
// //   populate('author', 'name'). // only return the Persons name
// //   exec(function (err, story) {
// //     if (err) return handleError(err);
    
// //     console.log('The author is %s', story.author.name);
// //     // prints "The author is Ian Fleming"
    
// //     console.log('The authors age is %s', story.author.age);
// //     // prints "The authors age is null'
// //   })


// var PersonSchema = new Schema({
//     name: String,
//     band: String
//   });
  
//   var BandSchema = new Schema({
//     name: String
//   });
//   BandSchema.virtual('members', {
//     ref: 'Person', // The model to use
//     localField: 'name', // Find people where `localField`
//     foreignField: 'band', // is equal to `foreignField`
//     // If `justOne` is true, 'members' will be a single doc as opposed to
//     // an array. `justOne` is false by default.
//     justOne: false
//   });

//   var Person = mongoose.model('Person', personSchema);
// var Band = mongoose.model('Band', bandSchema);

// const ali =new Person({
//     name:"ali"
// })
