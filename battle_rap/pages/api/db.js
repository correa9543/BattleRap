import mysql from 'mysql2/promise'



export default async function handler(req, res){
    
    var dbConnection = await connectDb();

    try{
        const query = "select * from battlers where name = 'Z'";
        const values = [];

        console.log("About to query");

        const [data] = await dbConnection.execute(query, values);
        endDbConnect(dbConnection);

        // if(JSON.stringify(data) === '{}'){
        //     console.log("The data is not empty");
        // }else{
        //     console.log("the data is empty");
        // }

        res.status(200).json({results: data});

    }catch(error){
        res.status(500).json({results: "You not good bro"});
    }

}


export async function connectDb(){
    // console.log("In the connectDB function");
    var dbConnection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'battle_rap',
        password: 'YE2n4qh4wV',
        port: '3306',
    });
    

    // res.status(200).json({message: "Connection was made"});
    return dbConnection;
}

export function endDbConnect(connection){
    connection.end();
}

// async function ()
// modules.exports = connectDb;


