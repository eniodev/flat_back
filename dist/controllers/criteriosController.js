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
function getCriterios() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.criterios_Divisao_Despesas.findMany();
    });
}
function getCriterioById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.criterios_Divisao_Despesas.findUnique({
            where: { id: Number(id) },
        });
    });
}
function createCriterio(criterio) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.criterios_Divisao_Despesas.create({
            data: Object.assign({}, criterio),
        });
    });
}
function updateCriterio(id, criterio) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.criterios_Divisao_Despesas.update({
            where: { id: Number(id) },
            data: Object.assign({}, criterio),
        });
    });
}
function deleteCriterio(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.criterios_Divisao_Despesas.delete({
            where: { id: Number(id) },
        });
    });
}
module.exports = {
    getCriterios,
    getCriterioById,
    createCriterio,
    updateCriterio,
    deleteCriterio
};
//# sourceMappingURL=criteriosController.js.map