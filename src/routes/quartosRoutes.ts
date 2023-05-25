const express = require('express');
const router = express.Router();
const quartosController = require('../controllers/quartosController')

router.get('/', async (req, res) => {
    const quartos = await quartosController.getQuartos();
    return res.json(quartos)
});


router.get('/:id', async (req, res) => {
    const quarto = await quartosController.getQuartoById(req.params.id);
    if (!quarto) return res.status(404).json({ message: 'quarto não encontrado' });
    res.json(quarto);
  });
  
  router.post('/', async (req, res) => {
    const quarto = await quartosController.createQuarto(req.body);
    res.json(quarto); 
  });
  
  router.put('/:id', async (req, res) => { 
    const quarto = await quartosController.updateQuarto(req.params.id, req.body);
    
    if (!quarto) return res.status(404).json({ message: 'quarto não encontrado' });
    res.json(quarto);
  });
  
  router.delete('/:id', async (req, res) => {
    const result = await quartosController.deleteQuarto(req.params.id);
    
    if (!result) return res.status(404).json({ message: 'quarto não encontrado' });
    res.sendStatus(204);

});
  
module.exports = router;
