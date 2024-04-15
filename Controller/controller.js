const fs = require("fs/promises");
const path = require("path");
const dbPath = path.join(__dirname,"..","Database", "Db.json");


class DBTask{
    static getData(weather){
        return new Promise (async (resolve, reject)=>{
            try{
                const response = await fs.readFile(dbPath);
                const data = await JSON.parse(response);
                const link = data[`${weather}`];
                resolve(link);
            }
            catch(err){
                reject(err);
            }
        })
    }
}

module.exports = DBTask;

