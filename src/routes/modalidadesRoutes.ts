const express = require('express');
const router = express.Router();
const modalidadesController = require('../controllers/modalidadesController')

router.get('/', async (req, res) => {
    const modalidades = await modalidadesController.getModalidades();
    return res.json(modalidades)
});


router.get('/:id', async (req, res) => {
    const modalidade = await modalidadesController.getModalidadeById(req.params.id);
    if (!modalidade) return res.status(404).json({ message: 'modalidade não encontrada' });
    res.json(modalidade);
  });
  
  router.post('/', async (req, res) => {
    const modalidade = await modalidadesController.createModalidade(req.body);
    res.json(modalidade); 
  });
  
  router.put('/:id', async (req, res) => { 
    const modalidade = await modalidadesController.updateModalidade(req.params.id, req.body);
    
    if (!modalidade) return res.status(404).json({ message: 'modalidade não encontrada' });
    res.json(modalidade);
  });
  
  router.delete('/:id', async (req, res) => {
    const result = await modalidadesController.deleteModalidade(req.params.id);
    
    if (!result) return res.status(404).json({ message: 'modalidade não encontrada' });
    res.sendStatus(204);

});
  
module.exports = router;