const http = require("http");

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Este es un texto nivel 1</h1>");
    res.write("<h2>Este es un texto nivel 2</h2>");
    res.write("<h3>Este es un texto nivel 3</h3>");
    res.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>");
    res.end()
})

server.listen(3000)

console.log("Servidor ejecutandose en el puerto 3000");