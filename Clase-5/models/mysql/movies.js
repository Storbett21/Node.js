import mysql from 'mysql2/promise'

const config = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '1234',
    database: 'moviesdb'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
    static async getAll ({genre}) {
        const result = await connection.query(
            'SELECT title, year, director, duration, poster, rate,  BIN_TO_UUID(id) FROM movie; '
        )

        console.log(result)

    }

    static async getById ({id}) {

    }
}