const express = require('express');
const router = express.Router();
const despesasController = require('../controllers/despesasController')

router.get('/', async (req, res) => {
    const despesas = await despesasController.getDespesas();
    return res.json(despesas)
});


router.get('/:id', async (req, res) => {
    const despesa = await despesasController.getDespesaById(req.params.id);
    if (!despesa) return res.status(404).json({ message: 'despesa não encontrada' });
    res.json(despesa);
  });
  
  router.post('/', async (req, res) => {
    const despesa = await despesasController.createDespesa(req.body);
    res.json(despesa); 
  });
  
  router.put('/:id', async (req, res) => { 
    const despesa = await despesasController.updateDespesa(req.params.id, req.body);
    
    if (!despesa) return res.status(404).json({ message: 'despesa não encontrada' });
    res.json(despesa);
  });
  
  router.delete('/:id', async (req, res) => {
    const result = await despesasController.deleteDespesa(req.params.id);
    
    if (!result) return res.status(404).json({ message: 'despesa não encontrada' });
    res.sendStatus(204);

});
  
module.exports = router;
