const express = require('express');
const router = express.Router();
const divisaoController = require('../controllers/divisaoDespesasController')

router.get('/', async (req, res) => {
    const divisoes = await divisaoController.getDivisoes();
    return res.json(divisoes)
});


router.get('/:id', async (req, res) => {
    const divisao = await divisaoController.getDivisaoById(req.params.id);
    if (!divisao) return res.status(404).json({ message: 'divisão não encontrada' });
    res.json(divisao);
  });
  
  router.post('/', async (req, res) => {
    const divisao = await divisaoController.createDivisao(req.body);
    res.json(divisao); 
  });
  
  router.put('/:id', async (req, res) => { 
    const divisao = await divisaoController.updateDivisao(req.params.id, req.body);
    
    if (!divisao) return res.status(404).json({ message: 'divisão não encontrada' });
    res.json(divisao);
  });
  
  router.delete('/:id', async (req, res) => {
    const result = await divisaoController.deleteDivisao(req.params.id);
    
    if (!result) return res.status(404).json({ message: 'divisão não encontrada' });
    res.sendStatus(204);

});
  
module.exports = router;