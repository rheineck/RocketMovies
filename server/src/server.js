require("express-async-errors")
const migrationsRun = require('./database/sqlite/migrations')
const AppError = require('./utils/AppError')
const uploadConfig = require('./configs/upload')

// Importa o express
const express = require('express');
const cors = require('cors')

// importação das rotas
const routes = require("./routes")

migrationsRun()

// inicializa o express
const app = express();
app.use(cors())
app.use(express.json());

app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

// Tratamento de exceções
app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

// Endereço que o express irá atender as requisições
const PORT = 3000;

// App irá 'ouvir' as requisições
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));