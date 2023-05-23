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
// Obter todos os critérios de divisão de despesas
const getCriterios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const criterios = yield prisma.criterios_divisao_despesas.findMany();
        res.json(criterios);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter critérios de divisão de despesas' });
    }
});
// Obter um critério de divisão de despesas pelo ID
const getCriterioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const criterio = yield prisma.criterios_divisao_despesas.findUnique({ where: { id: parseInt(id) } });
        if (!criterio) {
            return res.status(404).json({ error: 'Critério não encontrado' });
        }
        res.json(criterio);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter critério de divisão de despesas' });
    }
});
// Criar um critério de divisão de despesas
const createCriterio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descricao } = req.body;
    try {
        const criterio = yield prisma.criterios_divisao_despesas.create({ data: { descricao } });
        res.status(201).json(criterio);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar critério de divisão de despesas' });
    }
});
// Atualizar um critério de divisão de despesas
const updateCriterio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descricao } = req.body;
    try {
        const criterio = yield prisma.criterios_divisao_despesas.update({
            where: { id: parseInt(id) },
            data: { descricao },
        });
        res.json(criterio);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar critério de divisão de despesas' });
    }
});
// Excluir um critério de divisão de despesas
const deleteCriterio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.criterios_divisao_despesas.delete({ where: { id: parseInt(id) } });
        res.json({ message: 'Critério excluído com sucesso' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir critério de divisão de despesas' });
    }
});
module.exports = {
    getCriterios,
    getCriterioById,
    createCriterio,
    updateCriterio,
    deleteCriterio,
};
//# sourceMappingURL=criteriosController.js.map