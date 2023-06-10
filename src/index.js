const express = require('express')
const app = express()

app.use(express.json()) //Trabajar con formatos tipo json

// ============ QUERY PARAMS ============

app.get('/search', (req,res) => {
    console.log(req.query);
    if(req.query.data === 'opcion'){
        res.send("Productos de la tienda")
    } else {
        res.send("Productos otros")
    }
})

// ============ TOMAR DATOS DE LA URL (NOMBRE Y PUEDE SER EDAD) ============

// app.get('/user/:profile/photo', (req, res) => {
//     console.log(req);
//     if (req.params.profile === 'Dex'){
//         res.sendFile('./logo2.png', {
//             root: __dirname
//         })
//     } else {
//         res.send("Acceso negado")
//     }
// })

// ============ TOMAR DATOS DE LA URL (DOS) ============
// app.get('/operacion/:num1/:num2', (req,res) => {
//     const {num1,num2} = req.params
//Se muestra la operacion, pero no se realiza la misma
//     // res.send(`La suma es: ${num1} + ${num2}`)
//     res.send(`La suma es: ${Number(num1) + Number(num2)}`)
// })

// ============ TOMAR DATOS DE LA URL ============

// app.get('/user/:data', (req, res) => {
//     console.log(typeof (req.params.data))
//     res.send(`Bienvenido - ${req.params.data}`)
// })

// app.post('/productos', (req,res) => {
// ============ OBTENER DATOS DEL REQUEST ============
// console.log(req.body)
// const {nombre,edad} = req.body
// console.log(nombre);
// console.log(edad);
// Este code no funciona
// res.send(`Los datos enviados son: ${nombre} ${edad}`)

// console.log(req.body)
// const {nombre,edad} = req.body
// res.status(200).json({
//     nombre,
//     edad
// })
// })

app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');