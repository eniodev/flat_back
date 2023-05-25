const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getDespesas() {
  return await prisma.despesas.findMany();
}

async function getDespesaById(id) {
  return await prisma.despesas.findUnique({
    where: { id: Number(id) },
  });
}

async function createDespesa(despesa) {
  return await prisma.user.create({
    data: { ...despesa },
  });
}

async function updateDespesa(id, despesa) {
  return await prisma.despesa.update({
    where: { id: Number(id) },
    data: { ...despesa },
  });
}

async function deleteDespesa(id) {
  return await prisma.despesa.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  getDespesas,
  getDespesaById,
  createDespesa,
  updateDespesa,
  deleteDespesa
}
