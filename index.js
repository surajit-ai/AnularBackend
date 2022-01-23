const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
const cors = require ('cors');
const dbconnect = require('./DB/dbconnect_promise.js');
const UserRoute = require('./routes/user_route');
const ContactRoute = require('./routes/contact_route');
const PostRoute = require('./routes/post_route');



const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

//route

app.use('/user',UserRoute);
app.use('/post',PostRoute);
app.use('/contactroute',ContactRoute);







const PORT=process.env.PORT||7000;
app.listen(PORT, () => console.log('EXPRESS Server Started at Port No: '+`${PORT}`));