import db from './sequelize'
import dbconfig from './env'
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
const JSONdb = require('simple-json-db');



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

        
    },

    // Local DB
    conexion(fileName){
        try {
            const db = new JSONdb(`./pos-market-${fileName}.json`);
            return db;
        } catch (error) {
            console.log(error);
           return error; 
        }
    },

    








    productRandom(){
        const db = new JSONdb('./pos-market-products.json');
        let products = db.get('products');
        console.log(typeof products);
        
        if (typeof products == "object") {
            products = [products]
        }else{
            products = [] 
        }
        for (let index = 0; index < 200; index++) {
            products.push({
                name: `Producto test ${index+1}`,
                description: `Producto test ${index+1}`,
                id:index+1,
                sku: 756873496+(index+1),
                stock: 10,
                image: `https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/67654490_10218672031367891_7179299875513696256_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFwgr_ovkUKC1ENwdFwR6rFFxEEJMBgIc4XEQQkwGAhzrOAJIteF9NDXvcvVOObqc8&_nc_ohc=LN6Nd0GugA4AX9ErVkB&_nc_ht=scontent.fbog11-1.fna&oh=f3b792890fb0e9828222363e0924cd2f&oe=5FFBEDB9`,
                price: 30000,
            })
        }
        db.set('products', products)
        console.log(db.get('products'));
    },
    brandRandom(){
        const db = new JSONdb('./pos-market-brands.json');
        let brands = db.get('brands');
        console.log(typeof brands);
        
        if (typeof brands == "object") {
            brands = [brands]
        }else{
            brands = [] 
        }
        for (let index = 0; index < 20; index++) {
            brands.push({
                name: `Marca test ${index+1}`,
                description: `Marca test ${index+1}`,
                id:index+1,
                // sku: 756873496+(index+1),
                // stock: 10,
                image: `https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/67654490_10218672031367891_7179299875513696256_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFwgr_ovkUKC1ENwdFwR6rFFxEEJMBgIc4XEQQkwGAhzrOAJIteF9NDXvcvVOObqc8&_nc_ohc=LN6Nd0GugA4AX9ErVkB&_nc_ht=scontent.fbog11-1.fna&oh=f3b792890fb0e9828222363e0924cd2f&oe=5FFBEDB9`
            })
        }
        db.set('brands', brands)
        console.log(db.get('brands'));
    },
    subCategoryRandom(){
        const db = new JSONdb('./pos-market-subCategory.json');
        let subCategory = db.get('subCategory');
        console.log(typeof subCategory);
        
        if (typeof subCategory == "object") {
            subCategory = [subCategory]
        }else{
            subCategory = [] 
        }
        for (let index = 0; index < 20; index++) {
            subCategory.push({
                name: `subCategory test ${index+1}`,
                description: `Producto test ${index+1}`,
                id:index+1,
                sku: 756873496+(index+1),
                stock: 10,
                image: `https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/67654490_10218672031367891_7179299875513696256_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFwgr_ovkUKC1ENwdFwR6rFFxEEJMBgIc4XEQQkwGAhzrOAJIteF9NDXvcvVOObqc8&_nc_ohc=LN6Nd0GugA4AX9ErVkB&_nc_ht=scontent.fbog11-1.fna&oh=f3b792890fb0e9828222363e0924cd2f&oe=5FFBEDB9`
            })
        }
        db.set('subCategory', subCategory)
        console.log(db.get('subCategory'));
    },
    categoryRandom(){
        const db = new JSONdb('./pos-market-categoryRandom.json');
        let category = db.get('category');
        console.log(typeof category);
        
        if (typeof category == "object") {
            category = [category]
        }else{
            category = [] 
        }
        for (let index = 0; index < 20; index++) {
            category.push({
                name: `category test ${index+1}`,
                description: `Producto test ${index+1}`,
                id:index+1,
                sku: 756873496+(index+1),
                stock: 10,
                image: `https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/67654490_10218672031367891_7179299875513696256_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFwgr_ovkUKC1ENwdFwR6rFFxEEJMBgIc4XEQQkwGAhzrOAJIteF9NDXvcvVOObqc8&_nc_ohc=LN6Nd0GugA4AX9ErVkB&_nc_ht=scontent.fbog11-1.fna&oh=f3b792890fb0e9828222363e0924cd2f&oe=5FFBEDB9`
            })
        }
        db.set('category', category)
        console.log(db.get('category'));
    }
}



export default f;