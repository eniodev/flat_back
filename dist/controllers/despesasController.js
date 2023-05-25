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
function getDespesas() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.despesas.findMany();
    });
}
function getDespesaById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.despesas.findUnique({
            where: { id: Number(id) },
        });
    });
}
function createDespesa(despesa) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.despesas.create({
            data: Object.assign({}, despesa),
        });
    });
}
function updateDespesa(id, despesa) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.despesas.update({
            where: { id: Number(id) },
            data: Object.assign({}, despesa),
        });
    });
}
function deleteDespesa(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.despesas.delete({
            where: { id: Number(id) },
        });
    });
}
module.exports = {
    getDespesas,
    getDespesaById,
    createDespesa,
    updateDespesa,
    deleteDespesa
};
//# sourceMappingURL=despesasController.js.map