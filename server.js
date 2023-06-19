const express = require('express')
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routesVenta = require('./routesVenta');
const routesCliente = require('./routesCliente');
const routesProducto = require('./routesProducto');
const app = express();

app.set('port', process.env.PORT || 9000);

const dbOptions = {

    host: 'database-1.cr2asz0iu4ls.us-east-1.rds.amazonaws.com',
    port:3306,
    user: 'admin',
    password: 'Lolasso2232',
    database:'ProyectoIntegrador'

}
    


//middelwares--------------------------------------------
app.use(myconn(mysql,dbOptions,'single'));
app.use(express.json());


//rutas--------------------------------------------------
app.get('/',(req,res)=>{
    res.send('Bienvenido a la api')
})

app.use('/Cliente',routesCliente)
app.use('/Producto',routesProducto)
app.use('/Venta',routesVenta)


//Servidor corriendo--------------------------------------
app.listen(app.get('port'),()=>{
    console.log('server corriendo en el puerto', app.get('port'));
});
