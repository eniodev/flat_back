const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getDivisoes() {
  return await prisma.divisao_Despesas.findMany();
}

async function getDivisaoById(id) {
  return await prisma.divisao_Despesas.findUnique({
    where: { id: Number(id) },
  });
}

async function createDivisao(divisao) {
  return await prisma.divisao_Despesas.create({
    data: { ...divisao },
  });
}

async function updateDivisao(id, divisao) {
  return await prisma.divisao_Despesas.update({
    where: { id: Number(id) },
    data: { ...divisao },
  });
}

async function deleteDivisao(id) {
  return await prisma.divisao_Despesas.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  getDivisoes,
  getDivisaoById,
  createDivisao,
  updateDivisao,
  deleteDivisao
}
