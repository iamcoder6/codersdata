var mongoose = require(mongoose);

var schema = mongoose.schema;

var StorySchema = new Schema({

    creator: { type: Schema.Type.ObjectId,ref:'User'},
    content: string,
    created
})