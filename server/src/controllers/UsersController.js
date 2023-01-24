const { hash, compare } = require('bcryptjs')
const AppError = require("../utils/AppError");
const sqliteConnection = require('../database/sqlite')

class UsersController {
    async create(request, response) {
        const { name, surname, email, password } = request.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists) {
            throw new AppError("Este email já está em uso")
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)", [name, surname, email, hashedPassword])

        return response.status(201).json()
    }

    async update(request, response) {
        const { name, surname, email, password, old_password } = request.body
        const user_id = request.user.id

        const database = await sqliteConnection()
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id])

        if(!user) {
            throw new AppError("Usuário não encontrado")
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso!")
        }

        user.name = name ?? user.name
        user.surname = surname ?? user.surname
        user.email = email ?? user.email

        if(password && !old_password) {
            throw new AppError("VocÊ precisa informar a senha antiga para definir a nova senha!")
        }

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password)

            if(!checkOldPassword) {
                throw new AppError("A senha antiga não confere.")
            }

            user.password = await hash(password, 8)
        }

        await database.run(`
            UPDATE users SET
            name = ?,
            surname = ?,
            email = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?`, 
            [user.name, user.surname, user.email, user.password, user_id]
        )

        return response.status(200).json()
    }
}

module.exports = UsersController

/**
     * 5 métodos são utilizados (não necessariamente todos eles) 
     * index - GET para listar vários registros
     * show - GET para exibir um registro específico
     * create - POST para criar um registro
     * update - PUT para atualizar um registro
     * delete - DELETE para remover um registro
*/