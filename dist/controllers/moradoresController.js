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
function getMoradores() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.moradores.findMany();
    });
}
function getMoradoreById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.moradores.findUnique({
            where: { id: Number(id) },
        });
    });
}
function createMorador(morador) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.moradores.create({
            data: Object.assign({}, morador),
        });
    });
}
function updateMorador(id, morador) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.moradores.update({
            where: { id: Number(id) },
            data: Object.assign({}, morador),
        });
    });
}
function deleteMorador(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.moradores.delete({
            where: { id: Number(id) },
        });
    });
}
module.exports = {
    getMoradores,
    getMoradoreById,
    createMorador,
    updateMorador,
    deleteMorador
};
//# sourceMappingURL=moradoresController.js.map