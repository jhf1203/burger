const connection = require("./connection.js")

const orm = {
    selectall(){
        console.log(`selectall`)
    },
    insertOne() {
        console.log(`insertone`)
    },
    updateOne() {
        console.log(`updateone`)
    }
}
