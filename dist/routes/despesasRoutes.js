var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const despesasController = require('../controllers/despesasController.js');
const router = express.Router();
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const despesas = yield despesasController.getAllDespesas();
    res.json(despesas);
}));
router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const user = yield despesasController.getUserById(req.params.id);
    if (!user)
        return res.status(404).json({ message: 'User não encontrado' });
    res.json(user);
}));
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const user = yield despesasController.createUser(req.body);
    res.json(user);
}));
router.put('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const user = yield despesasController.updateUser(req.params.id, req.body);
    if (!user)
        return res.status(404).json({ message: 'User não encontrado' });
    res.json(user);
}));
router.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const result = yield despesasController.deleteUser(req.params.id);
    if (!result)
        return res.status(404).json({ message: 'User não encontrado' });
    res.sendStatus(204);
}));
module.exports = router;
//# sourceMappingURL=despesasRoutes.js.map