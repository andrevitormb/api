const sqlite3 = require('sqlite3'); //driver to concection sql
const sqlite = require('sqlite'); //version to use sqlite library
const path = require('path'); // library paths for another environments linux or windows

async function sqliteConnection(){
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..","database.db"),
        driver: sqlite3.Database
    })
    return database
}

module.exports = sqliteConnection