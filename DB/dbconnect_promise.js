const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
dotenv.config();


const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;
const DBNAME = process.env.DBNAME;

//const URL=`mongodb+srv://SurajitD:SurajitD@cluster0.ynsbr.mongodb.net/MEANDB?retryWrites=true&w=majority`;
const URL=`mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.ynsbr.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(
    URL,
    {
       useNewUrlParser:true,
       useUnifiedTopology:true,
    //    useFindAndModify:true, 
    }
)
.then(()=>{
    console.log('NODEJS to MONGODB Connection Establish....')
})
.catch(err => {
    console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
    process.exit();
  });
module.exports = mongoose;
