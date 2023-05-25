"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const modalidadesController = require('../controllers/modalidadesController');
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modalidades = yield modalidadesController.getModalidades();
    return res.json(modalidades);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modalidade = yield modalidadesController.getModalidadeById(req.params.id);
    if (!modalidade)
        return res.status(404).json({ message: 'modalidade não encontrada' });
    res.json(modalidade);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modalidade = yield modalidadesController.createModalidade(req.body);
    res.json(modalidade);
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const modalidade = yield modalidadesController.updateModalidade(req.params.id, req.body);
    if (!modalidade)
        return res.status(404).json({ message: 'modalidade não encontrada' });
    res.json(modalidade);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modalidadesController.deleteModalidade(req.params.id);
    if (!result)
        return res.status(404).json({ message: 'modalidade não encontrada' });
    res.sendStatus(204);
}));
module.exports = router;
//# sourceMappingURL=modalidadesRoutes.js.map