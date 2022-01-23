const mongoose=require('mongoose');

let PostSchema=mongoose.Schema({
    id:{type:'string'},
    title:{type:'string',required:true},
    body:{type:'string',required:true},
    image:{type:'string',required:true},
    // tag:{type:[String],default:[] },
    createrid:{type:'string'},
    creatername:{type:'string'},
    like:{type:[String],default:[] },
    isActive:{type:'bool',default:true},
    createdAt:{type:Date, default:Date.now},
    

},{timestamp:true});

module.exports=mongoose.model('posts',PostSchema)