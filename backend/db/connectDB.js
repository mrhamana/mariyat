import {MongoClient} from 'mongodb'
const uri='mongodb://localhost:27017'
const client =new MongoClient(uri)

let db

export async function connectDB(){
    await client.connect()
    console.log('db connected successfully')
    db=client.db('chat')
}

export function getDB(){
    if(!db){
        throw new Error('Database not connected')
    }
    return db
}

connectDB()