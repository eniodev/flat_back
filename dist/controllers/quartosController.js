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
function getQuartos() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.quartos.findMany();
    });
}
function getQuartoById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.quartos.findUnique({
            where: { id: Number(id) },
        });
    });
}
function createQuarto(quarto) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.quartos.create({
            data: Object.assign({}, quarto),
        });
    });
}
function updateQuarto(id, quarto) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.quartos.update({
            where: { id: Number(id) },
            data: Object.assign({}, quarto),
        });
    });
}
function deleteQuarto(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.quartos.delete({
            where: { id: Number(id) },
        });
    });
}
module.exports = {
    getQuartos,
    getQuartoById,
    createQuarto,
    updateQuarto,
    deleteQuarto
};
//# sourceMappingURL=quartosController.js.map