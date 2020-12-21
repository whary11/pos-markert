const JSONdb = require('simple-json-db');
const dbdb = require('electron-db');
const path = require('path')
export  default class Model {
    db = null
    fileName = 'orders'
    primaryKey = 'id'
    location = ''
    
    constructor(){
        this.location = path.join(__dirname, '/db_files/')
    }


    get(){
        this.conexion()
        let data = this.db.get(`${this.fileName}`)
        return data ? data : [] 
    }
    newGet(){
        
        let records = []
        dbdb.getAll(this.fileName,this.location, (succ, data) => {
            // succ - boolean, tells if the call is successful
            // data - array of objects that represents the rows.
            if (succ) {
                records = data
            }

            return "Algo"
        })

        // console.log("result");
        return records

    }

    find(id){
        let data = this.get()
        const records = data.find(element => element[this.primaryKey] == id);
        return records;
    }

    conexion(){
        try {
            const db = new JSONdb(`/static/pos-market-${this.fileName}.json`);
            window.db = db
            this.setDb(db)
            return {status: true, db: this.db};
        } catch (error) {
            console.log(error);
           return {status: false, error}; 
        }
    }

    setDb(val){
        this.db = val
    } 
    create(data){
        try {
            let orders = this.get()
            if (!orders) {
                orders = []
            }
            data = {...data, id: orders.length +1}
            orders.push(data)
            let insert = this.db.set(this.fileName, orders)
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    newCreate(data){
        try {

            // return 

            dbdb.createTable(this.fileName, this.location, (succ, msg) => {
                // succ - boolean, tells if the call is successful
                if (succ) {
                    console.log("Success: tabla creada" + succ);
                }else{
                    
                    console.log("Error: no se pudo crear la tabla: " + msg);
                }
            })

            console.log(dbdb.valid(this.fileName));
            

            dbdb.insertTableContent(this.fileName, data, (succ, msg) => {
                // succ - boolean, tells if the call is successful
                if (succ) {
                    console.log("Success, producto creado: " + msg);
                    
                }else{

                    console.log("Error: " + msg);
                }
              })
            // let orders = this.get()
            // if (!orders) {
            //     orders = []
            // }
            // data = {...data, id: +1}
            // orders.push(data)
            // let insert = this.db.set(this.fileName, orders)
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}