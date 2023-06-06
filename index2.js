const http = require("http");

const server = http.createServer((req,res)=>{
    persona = {
        nombre:"Elvis",
        apellido:"Guanoluisas",
        telefono: {
            celular: "0988815272",
            convencional: "2889528"
        },
        email:"dex@hotmail.com"
    }
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(persona));
    res.end()
})

server.listen(3000)

console.log("Servidor ejecutandose en el puerto 3000");