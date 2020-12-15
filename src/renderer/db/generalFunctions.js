import db from './sequelize'
import dbconfig from './env'

let f = {
    getNameTables(){
        let query = `SELECT *
        FROM information_schema.tables WHERE table_schema = '${dbconfig.database}'`

        
        let tableNames = []
        db.query(query, function(err, rows, fields) {
            if(err){
                console.log("An error ocurred performing the query.");
                console.log(err);
                return;
            }

            console.log(rows)


            rows.map(row=>{
                tableNames.push({
                    name:row['TABLE_NAME']
                })
                
            })

        });
        return tableNames
    },

    getNameColumns(tableName){
        let query = `
        SELECT * 
        FROM information_schema.columns 
        WHERE TABLE_SCHEMA='${dbconfig.database}' 
            AND TABLE_NAME='${tableName}'`
            let columnsName = []
        
            db.query(query, function(err, rows, fields) {
                if(err){
                    console.log("An error ocurred performing the query.");
                    console.log(err);
                    return;
                }
                
    
                rows.map(row=>{
                    columnsName.push({
                        name:row['COLUMN_NAME']
                    })
                    
                })
    
            });
            return columnsName

        
    }
}



export default f;