//importar dependencias
const express = require('express');
const path = require('path')
const pages = require('./pages.js');

//iniciando o express
const server = express()
server

//utilizar body do req
.use(express.urlencoded({extended: true}))

//configurar arquivos estaticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

//rotas da apicação
.get('/',pages.index) 
.get('/orphanages', pages.orphanages)   
.get('/orphanage',pages.orphanage)    
.get('/create-orphanage',pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)


//ligar o servidor
server.listen(5000)