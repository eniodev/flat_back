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
const quartosController = require('../controllers/quartosController');
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quartos = yield quartosController.getQuartos();
    return res.json(quartos);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quarto = yield quartosController.getQuartoById(req.params.id);
    if (!quarto)
        return res.status(404).json({ message: 'quarto não encontrado' });
    res.json(quarto);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quarto = yield quartosController.createQuarto(req.body);
    res.json(quarto);
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quarto = yield quartosController.updateQuarto(req.params.id, req.body);
    if (!quarto)
        return res.status(404).json({ message: 'quarto não encontrado' });
    res.json(quarto);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield quartosController.deleteQuarto(req.params.id);
    if (!result)
        return res.status(404).json({ message: 'quarto não encontrado' });
    res.sendStatus(204);
}));
module.exports = router;
//# sourceMappingURL=quartosRoutes.js.map