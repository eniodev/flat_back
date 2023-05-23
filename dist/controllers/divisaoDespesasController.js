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
// Obter todas as divisões de despesas
const getDivisoesDespesas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const divisoesDespesas = yield prisma.divisao_despesas.findMany();
        res.json(divisoesDespesas);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter divisões de despesas' });
    }
});
// Obter uma divisão de despesas pelo ID
const getDivisaoDespesasById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const divisaoDespesas = yield prisma.divisao_despesas.findUnique({ where: { id: parseInt(id) } });
        if (!divisaoDespesas) {
            return res.status(404).json({ error: 'Divisão de despesas não encontrada' });
        }
        res.json(divisaoDespesas);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter divisão de despesas' });
    }
});
// Criar uma divisão de despesas
const createDivisaoDespesas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { morador, despesa, valor_pago, proporcao } = req.body;
    try {
        const divisaoDespesas = yield prisma.divisao_despesas.create({
            data: { morador: parseInt(morador), despesa: parseInt(despesa), valor_pago, proporcao },
        });
        res.status(201).json(divisaoDespesas);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar divisão de despesas' });
    }
});
// Atualizar uma divisão de despesas
const updateDivisaoDespesas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { morador, despesa, valor_pago, proporcao } = req.body;
    try {
        const divisaoDespesas = yield prisma.divisao_despesas.update({
            where: { id: parseInt(id) },
            data: { morador: parseInt(morador), despesa: parseInt(despesa), valor_pago, proporcao },
        });
        res.json(divisaoDespesas);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar divisão de despesas' });
    }
});
// Excluir uma divisão de despesas
const deleteDivisaoDespesas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.divisao_despesas.delete({ where: { id: parseInt(id) } });
        res.json({ message: 'Divisão de despesas excluída com sucesso' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir divisão de despesas' });
    }
});
module.exports = {
    getDivisoesDespesas,
    getDivisaoDespesasById,
    createDivisaoDespesas,
    updateDivisaoDespesas,
    deleteDivisaoDespesas,
};
//# sourceMappingURL=divisaoDespesasController.js.map