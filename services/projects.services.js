import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb+srv://eaoven89_db_user:CYMdfQ6I75osibm5@clusteraplicacioneshibr.chxaswv.mongodb.net/eaoven89_db_user")
const db = client.db("eaoven89_db_user")

export async function getProyectos(filter = {}) {
    try {
        await client.connect()
        const filterMongo = {}
        
        if (filter?.section) {
            filterMongo.section = filter.section
        }
        
        const proyectos = await db.collection("Projects").find(filterMongo).toArray()
        await client.close()
        return proyectos
    } catch (error) {
        console.log("Error:", error)
        return []
    }
}

import { ObjectId } from "mongodb"

export async function getProyectoById(id) {
    try {
        await client.connect()
        const proyecto = await db.collection("Projects").findOne({ _id: new ObjectId(id) })
        await client.close()
        return proyecto
    } catch (error) {
        console.log("Error:", error)
        return null
    }
}