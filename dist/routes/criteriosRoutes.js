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
const criterioController = require('../controllers/criteriosController');
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const criterios = yield criterioController.getCriterios();
    return res.json(criterios);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const criterio = yield criterioController.getCriterioById(req.params.id);
    if (!criterio)
        return res.status(404).json({ message: 'critério não encontrado' });
    res.json(criterio);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const criterio = yield criterioController.createCriterio(req.body);
    res.json(criterio);
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const criterio = yield criterioController.updateCriterio(req.params.id, req.body);
    if (!criterio)
        return res.status(404).json({ message: 'critério não encontrado' });
    res.json(criterio);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield criterioController.deleteCriterio(req.params.id);
    if (!result)
        return res.status(404).json({ message: 'critério não encontrado' });
    res.sendStatus(204);
}));
module.exports = router;
//# sourceMappingURL=criteriosRoutes.js.map