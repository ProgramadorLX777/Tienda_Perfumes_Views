const { Router } = require('express');
const router = Router();

// INDEX <--> ROUTES <--> CONTROLADORES <-- CONEXION

router.get('/', (req, res) => {
    const titulo = "Home"
    res.render('home', {titulo})
})

router.get('/productos', (req, res) => {
    const titulo = "Productos"
    res.render('productos', {titulo})
})

router.get('/proveedores', (req, res) => {
    const titulo = "Proveedores"
    res.render('proveedores', {titulo})
})

router.get('/clientes', (req, res) => {
    const titulo = "Clientes"
    res.render('clientes', {titulo})
})

router.get('/pedidos', (req, res) => {
    const titulo = "Pedidos"
    res.render('pedidos', {titulo})
})

router.get('/about', (req, res) => {
    res.send('about')
})

// Imports: (Uno por cada archivo de rutas)
const productosRoutes = require('./productos.routes');
const proveedoresRoutes = require('./proveedores.routes');
const clientesRoutes = require('./clientes.routes');
const pedidosRoutes = require('./pedidos.routes');

// Uses: (Uno por cada archivo de rutas)
router.use(productosRoutes)
router.use(proveedoresRoutes)
router.use(clientesRoutes)
router.use(pedidosRoutes)

module.exports = router
