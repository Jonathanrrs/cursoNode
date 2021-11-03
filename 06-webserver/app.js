const http = require('http');

http.createServer((req,res) => {
    
    // res.writeHead(200, {'Content-Type': 'application/json'});
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    // const persona = {
    //     id: 1,
    //     nombr: 'Jonathan'
    // }

    // res.write(JSON.stringify(persona));
    res.write('id, nombre\n');
    res.write('1, Jonathan\n');
    res.write('2, Ramiro\n');
    res.end();
})
.listen(8080);

console.log('Escuchando en el puerto', 8080);