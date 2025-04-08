const {Client}=require("pg")
const client=new Client({
    host:'localhost',
    port:5432,
    database:'FSD-IT-B',
    user:'postgres',
    password:'root'

});
client.connect()
.then(()=>{
    console.log("POSTGRES Conneted")
})
.catch(err=>{
    console.log("DB Error",err.message)
})
const createUser=()=>{
    try{
        const res =client.query("insert into users(name,email,age) values('Ashish Gupta','Ashish35483@gmail.com','24')")
        console.log("USer created Succesfully")
    }

    catch(err){
        console.log("insert querry Error",err.message)
    }
}
createUser();

get

const geteUser=async()=>{
    try{
        const res =await client.query("select * from users order by age desc")
        console.log("User Data",res.rows);
    }

    catch(err){
        console.log("select querry Error",err.message)
    }
}
geteUser();

const updateUser=async()=>{
    try{
        const res =await client.query("update users set age=45 where age=24")
        console.log("User Edited Successfuly",res.rowCount)
    }

    catch(err){
        console.log("update querry Error",err.message)
    }
}
updateUser();
