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
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.user.findUnique({
            where: { id: Number(id) },
        });
    });
}
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.user.create({
            data: Object.assign({}, user),
        });
    });
}
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.user.update({
            where: { id: Number(id) },
            data: Object.assign({}, user),
        });
    });
}
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prisma.user.delete({
            where: { id: Number(id) },
        });
    });
}
module.exports = {
    getMoradores,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
//# sourceMappingURL=model.js.map