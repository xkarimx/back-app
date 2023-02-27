import User from "../User.js";
import 'dotenv/config.js'
import '../../config/database.js'


let users = [
    {   
        name: "Karen",
        mail: "callefalsa@mh.com.ar",
        password: "1234",
        confirm_password: "1234",
    }
]


User.insertMany(users)