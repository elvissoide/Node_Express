// const express = require('express')
// const app = express()

// ============= RUTAS, ENVIO DE CONTENIDO Y CODIGO DE STATUS =============

// app.get('/',(req,res)=>{
//     res.status(202).send(`
//         <h1> Pagina principal </h1>
//         <h2> Titulo nivel 2 </h2>
//     `)
// })

// app.get('/dashboard',(req,res) => {
//     res.status(202).send("Dashboard principal")
// })

// app.get('/contactos',(req,res) => {
//     res.status(202).send("Contactos")
// })

// app.get('/productos',(req,res) => {
//     res.status(202).send("Productos")
// })

// //Si se coloca primero, siempre se va a mostrar este mensaje
// app.use((req,res) => {
//     res.status(404).send("Page not found")
// })

// ============= TRABAJANDO CON VERBOS HTTP =============

// app.get("/", (req,res) => {
//     res.send("Obtener recursos del servidor")
// })

// app.post("/", (req,res) => {
//     res.send("Enviar un nuevo recurso al servidor")
// })

// app.put("/", (req,res) => {
//     res.send("Actualizar toda la informacion del recurso")
// })

// app.patch("/", (req,res) => {
//     res.send("Actualizar solo una porcion del recurso")
// })

// app.delete("/", (req,res) => {
//     res.send("Eliminar algun recurso del servidor")
// })

// ============= DEVOLVER CONTENIDO MULTIMEDIA =============

// app.get("/", (req,res) => {
//     res.sendFile('logo2.png',{
//         root:__dirname
//     })
// })
// console.log(__dirname);
// console.log("Hola");

// ============= DEVOLVER JSON =============

// app.get("/user", (req,res) => {
//     res.json([
//         {
//             "nombre":"Elvis",
//             "apellido":"Guanoluisa",
//             "edad":23
//         },
//         {
//             "nombre":"Alexis",
//             "apellido":"Chasi",
//             "edad": 28
//         },
//         {
//             "nombre":"Franklin",
//             "apellido":"Patiño",
//             "edad": 21
//         },
//         {
//             "nombre":"Roberto",
//             "apellido":"Shiao",
//             "edad": 21
//         }
//     ])
// })

// ============= DEVOLVER CODIGOS DE RESPUESTA  =============

// app.get("/isAlive",(req,res) => {
//     res.sendStatus(200).send("Servidor listo")
// })

// ============= DEVOLVER VISTAS (NO FUNCIONA ESTE CODE) =============

// const express = require("express")
// const {engine} = require("express-handlebars")

// const app = express()

// //Archivos con extension .hbs, especificar el motor
// app.engine('.hbs', engine({
//     extname: '.hbs'
// }))
// //Establecer el motor de plantillas
// app.set('view engine',".hbs")
// //Ubicacion de las vistas
// app.set('views','./src/views')

// //Ruta
// app.get('/', (req,res) => {
//     res.render('home');
// });

// app.listen(3000)
// console.log('Servidor ejecutandose en el puerto 3000');

// ============= DEVOLVER VISTAS (CODE DEL PROFE) =============

const express = require('express')
const {engine} = require('express-handlebars');
const path = require('path') //Arreglo de error

const app = express()

app.engine('.hbs',engine({
    extname:'.hbs'
}))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'views'));
console.log(__dirname)

//ENDPOINTS
app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/personal',(req,res)=>{
    res.render('personal')
})

app.get('/login',(req,res)=>{
    res.render('login')
})


app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');