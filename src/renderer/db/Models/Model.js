const JSONdb = require('simple-json-db');
export  default class Model {
    db = null
    fileName = 'orders'
    primaryKey = 'id'
    constructor(){}


    get(){
        this.conexion()
        let data = this.db.get(`${this.fileName}`)
        return data ? data : [] 
    }

    find(id){
        let data = this.get()
        const records = data.find(element => element[this.primaryKey] == id);
        return records;
    }

    conexion(){
        try {
            const db = new JSONdb(`./pos-market-${this.fileName}.json`);
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
}