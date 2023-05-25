const express = require('express');
const router = express.Router();
const moradoresController = require('../controllers/moradoresController')

router.get('/', async (req, res) => {
    const moradores = await moradoresController.getMoradores();
    return res.json(moradores)
});


router.get('/:id', async (req, res) => {
    const morador = await moradoresController.getMoradoreById(req.params.id);
    if (!morador) return res.status(404).json({ message: 'morador não encontrado' });
    res.json(morador);
  });
  
  router.post('/', async (req, res) => {
    const morador = await moradoresController.createMorador(req.body);
    res.json(morador); 
  });
  
  router.put('/:id', async (req, res) => { 
    const morador = await moradoresController.updateMorador(req.params.id, req.body);
    
    if (!morador) return res.status(404).json({ message: 'morador não encontrado' });
    res.json(morador);
  });
  
  router.delete('/:id', async (req, res) => {
    const result = await moradoresController.deleteMorador(req.params.id);
    
    if (!result) return res.status(404).json({ message: 'morador não encontrado' });
    res.sendStatus(204);

});
  
module.exports = router;


