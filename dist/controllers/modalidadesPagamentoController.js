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
// Obter todas as modalidades de pagamento
const getModalidadesPagamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const modalidadesPagamento = yield prisma.modalidades_pagamento.findMany();
        res.json(modalidadesPagamento);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter modalidades de pagamento' });
    }
});
// Obter uma modalidade de pagamento pelo ID
const getModalidadePagamentoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const modalidadePagamento = yield prisma.modalidades_pagamento.findUnique({ where: { id: parseInt(id) } });
        if (!modalidadePagamento) {
            return res.status(404).json({ error: 'Modalidade de pagamento não encontrada' });
        }
        res.json(modalidadePagamento);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao obter modalidade de pagamento' });
    }
});
// Criar uma modalidade de pagamento
const createModalidadePagamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descricao } = req.body;
    try {
        const modalidadePagamento = yield prisma.modalidades_pagamento.create({ data: { descricao } });
        res.status(201).json(modalidadePagamento);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar modalidade de pagamento' });
    }
});
// Atualizar uma modalidade de pagamento
const updateModalidadePagamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descricao } = req.body;
    try {
        const modalidadePagamento = yield prisma.modalidades_pagamento.update({
            where: { id: parseInt(id) },
            data: { descricao },
        });
        res.json(modalidadePagamento);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar modalidade de pagamento' });
    }
});
// Excluir uma modalidade de pagamento
const deleteModalidadePagamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.modalidades_pagamento.delete({ where: { id: parseInt(id) } });
        res.json({ message: 'Modalidade de pagamento excluída com sucesso' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir modalidade de pagamento' });
    }
});
module.exports = {
    getModalidadesPagamento,
    getModalidadePagamentoById,
    createModalidadePagamento,
    updateModalidadePagamento,
    deleteModalidadePagamento,
};
//# sourceMappingURL=modalidadesPagamentoController.js.map