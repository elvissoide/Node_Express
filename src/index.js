const express = require('express')
const app = express()

app.use((req,res,next) => {
    console.log(`Ruta invocada ${req.path} - metodo ${req.method}`);
    next()
})

app.get('/profile', (req,res) => {
    res.send("Perfil del usuario")
})

app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');