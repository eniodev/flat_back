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
const despesasController = require('../controllers/despesasController');
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const despesas = yield despesasController.getDespesas();
    return res.json(despesas);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const despesa = yield despesasController.getDespesaById(req.params.id);
    if (!despesa)
        return res.status(404).json({ message: 'despesa não encontrada' });
    res.json(despesa);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const despesa = yield despesasController.createDespesa(req.body);
    res.json(despesa);
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const despesa = yield despesasController.updateDespesa(req.params.id, req.body);
    if (!despesa)
        return res.status(404).json({ message: 'despesa não encontrada' });
    res.json(despesa);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield despesasController.deleteDespesa(req.params.id);
    if (!result)
        return res.status(404).json({ message: 'despesa não encontrada' });
    res.sendStatus(204);
}));
module.exports = router;
//# sourceMappingURL=despesasRoutes.js.map