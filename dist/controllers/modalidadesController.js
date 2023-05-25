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
function getModalidades() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.modalidades_Pagamento.findMany();
    });
}
function getModalidadeById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.modalidades_Pagamento.findUnique({
            where: { id: Number(id) },
        });
    });
}
function createModalidade(modalidade) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.modalidades_Pagamento.create({
            data: Object.assign({}, modalidade),
        });
    });
}
function updateModalidade(id, modalidade) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.modalidades_Pagamento.update({
            where: { id: Number(id) },
            data: Object.assign({}, modalidade),
        });
    });
}
function deleteModalidade(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.modalidades_Pagamento.delete({
            where: { id: Number(id) },
        });
    });
}
module.exports = {
    getModalidades,
    getModalidadeById,
    createModalidade,
    updateModalidade,
    deleteModalidade
};
//# sourceMappingURL=modalidadesController.js.map