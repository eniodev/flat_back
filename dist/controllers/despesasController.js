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
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// Obter todas as despesas
const getDespesas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const despesas = yield prisma.despesas.findMany();
        res.json(despesas);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter despesas' });
    }
});
// Obter uma despesa pelo ID
const getDespesaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const despesa = yield prisma.despesas.findUnique({ where: { id: parseInt(id) } });
        if (!despesa) {
            return res.status(404).json({ error: 'Despesa não encontrada' });
        }
        res.json(despesa);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter despesa' });
    }
});
// Criar uma despesa
const createDespesa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descricao, valor, data, criterio_divisao, recorrente } = req.body;
    try {
        const despesa = yield prisma.despesas.create({
            data: {
                descricao,
                valor,
                data,
                criterio_divisao: parseInt(criterio_divisao),
                recorrente,
            },
        });
        res.status(201).json(despesa);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar despesa' });
    }
});
// Atualizar uma despesa
const updateDespesa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descricao, valor, data, criterio_divisao, recorrente } = req.body;
    try {
        const despesa = yield prisma.despesas.update({
            where: { id: parseInt(id) },
            data: {
                descricao,
                valor,
                data,
                criterio_divisao: parseInt(criterio_divisao),
                recorrente,
            },
        });
        res.json(despesa);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar despesa' });
    }
});
// Excluir uma despesa
const deleteDespesa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.despesas.delete({ where: { id: parseInt(id) } });
        res.json({ message: 'Despesa excluída com sucesso' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir despesa' });
    }
});
module.exports = {
    getDespesas,
    getDespesaById,
    createDespesa,
    updateDespesa,
    deleteDespesa,
};
//# sourceMappingURL=despesasController.js.map