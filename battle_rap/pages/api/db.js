import mysql from 'mysql2/promise'

export default async function handler(req, res){

    const dbConnection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'battle_rap',
            password: 'YE2n4qh4wV',
            port: '3306',
    });

    try{
        const query = "select name from battlers";
        const values = [];
        const [data] = await dbConnection.execute(query, values);
        dbConnection.end();
        res.status(200).json({results: data});

    }catch(error){
        res.status(500).json({results: data});
    }

}


