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
const divisaoController = require('../controllers/divisaoDespesasController');
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const divisoes = yield divisaoController.getDivisoes();
    return res.json(divisoes);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const divisao = yield divisaoController.getDivisaoById(req.params.id);
    if (!divisao)
        return res.status(404).json({ message: 'divisão não encontrada' });
    res.json(divisao);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const divisao = yield divisaoController.createDivisao(req.body);
    res.json(divisao);
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const divisao = yield divisaoController.updateDivisao(req.params.id, req.body);
    if (!divisao)
        return res.status(404).json({ message: 'divisão não encontrada' });
    res.json(divisao);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield divisaoController.deleteDivisao(req.params.id);
    if (!result)
        return res.status(404).json({ message: 'divisão não encontrada' });
    res.sendStatus(204);
}));
module.exports = router;
//# sourceMappingURL=divisaoRoutes.js.map