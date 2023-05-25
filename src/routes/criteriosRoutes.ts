const express = require('express');
const router = express.Router();
const criterioController = require('../controllers/criteriosController');

router.get('/', async (req, res) => {
    const criterios = await criterioController.getCriterios();
    return res.json(criterios)
});


router.get('/:id', async (req, res) => {
    const criterio = await criterioController.getCriterioById(req.params.id);
    if (!criterio) return res.status(404).json({ message: 'critério não encontrado' });
    res.json(criterio);
  });
  
  router.post('/', async (req, res) => {
    const criterio = await criterioController.createCriterio(req.body);
    res.json(criterio); 
  });
  
  router.put('/:id', async (req, res) => { 
    const criterio = await criterioController.updateCriterio(req.params.id, req.body);
    
    if (!criterio) return res.status(404).json({ message: 'critério não encontrado' });
    res.json(criterio);
  });
  
  router.delete('/:id', async (req, res) => {
    const result = await criterioController.deleteCriterio(req.params.id);
    
    if (!result) return res.status(404).json({ message: 'critério não encontrado' });
    res.sendStatus(204);

});
  
module.exports = router;