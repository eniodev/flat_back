const express = require('express');
const router = express.Router();

// Importe os controllers aqui
const criteriosController = require('../controllers/criteriosController');
const divisaoDespesasController = require('../controllers/divisaoDespesasController');
const despesasController = require('../controllers/despesasController');
const modalidadesPagamentoController = require('../controllers/modalidadesPagamentoController');
const moradoresController = require('../controllers/moradoresController');
const quartosController = require('../controllers/quartosController');
/*
// Rotas para CriteriosDivisaoDespesas
router.get('/criterios', criteriosController.getCriterios);
router.get('/criterios/:id', criteriosController.getCriterioById);
router.post('/criterios', criteriosController.createCriterio);
router.put('/criterios/:id', criteriosController.updateCriterio);
router.delete('/criterios/:id', criteriosController.deleteCriterio);

// Rotas para DivisaoDespesas
router.get('/divisao-despesas', divisaoDespesasController.getDivisaoDespesas);
router.get('/divisao-despesas/:id', divisaoDespesasController.getDivisaoDespesaById);
router.post('/divisao-despesas', divisaoDespesasController.createDivisaoDespesa);
router.put('/divisao-despesas/:id', divisaoDespesasController.updateDivisaoDespesa);
router.delete('/divisao-despesas/:id', divisaoDespesasController.deleteDivisaoDespesa);

// Rotas para Despesas
router.get('/despesas', despesasController.getDespesas);
router.get('/despesas/:id', despesasController.getDespesaById);
router.post('/despesas', despesasController.createDespesa);
router.put('/despesas/:id', despesasController.updateDespesa);
router.delete('/despesas/:id', despesasController.deleteDespesa);

// Rotas para ModalidadesPagamento
router.get('/modalidades-pagamento', modalidadesPagamentoController.getModalidadesPagamento);
router.get('/modalidades-pagamento/:id', modalidadesPagamentoController.getModalidadePagamentoById);
router.post('/modalidades-pagamento', modalidadesPagamentoController.createModalidadePagamento);
router.put('/modalidades-pagamento/:id', modalidadesPagamentoController.updateModalidadePagamento);
router.delete('/modalidades-pagamento/:id', modalidadesPagamentoController.deleteModalidadePagamento);
*/
// Rotas para Moradores
router.get('/', moradoresController.getMoradores);
router.get('/:id', moradoresController.getMoradorById);
router.post('/', moradoresController.createMorador);
router.put('/:id', moradoresController.updateMorador);
router.delete('/:id', moradoresController.deleteMorador);
/*
// Rotas para Quartos
router.get('/quartos', quartosController.getQuartos);
router.get('/quartos/:id', quartosController.getQuartoById);
router.post('/quartos', quartosController.createQuarto);
router.put('/quartos/:id', quartosController.updateQuarto);
router.delete('/quartos/:id', quartosController.deleteQuarto);
*/
module.exports = router;


