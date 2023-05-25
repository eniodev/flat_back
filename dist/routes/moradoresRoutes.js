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
const moradoresController = require('../controllers/moradoresController');
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const moradores = yield moradoresController.getMoradores();
    return res.json(moradores);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const morador = yield moradoresController.getMoradoreById(req.params.id);
    if (!morador)
        return res.status(404).json({ message: 'morador não encontrado' });
    res.json(morador);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const morador = yield moradoresController.createMorador(req.body);
    res.json(morador);
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const morador = yield moradoresController.updateMorador(req.params.id, req.body);
    if (!morador)
        return res.status(404).json({ message: 'morador não encontrado' });
    res.json(morador);
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield moradoresController.deleteMorador(req.params.id);
    if (!result)
        return res.status(404).json({ message: 'morador não encontrado' });
    res.sendStatus(204);
}));
module.exports = router;
//# sourceMappingURL=moradoresRoutes.js.map