const router = require('express').Router();

const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

// rotas
router.get('/', IndexController.index);

// registro
router.get('/register', CustomersController.index);
router.post('/register/add', CustomersController.add);

// listar
router.get('/list', CustomersController.listUsers)

module.exports = router;