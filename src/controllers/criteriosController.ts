const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getCriterios() {
  return await prisma.criterios_Divisao_Despesas.findMany();
  
}

async function getCriterioById(id) {
  return await prisma.criterios_Divisao_Despesas.findUnique({
    where: { id: Number(id) },
  });
}

async function createCriterio(criterio) {
  return await prisma.criterios_Divisao_Despesas.create({
    data: { ...criterio },
  });
}

async function updateCriterio(id, criterio) {
  return await prisma.criterios_Divisao_Despesas.update({
    where: { id: Number(id) },
    data: { ...criterio },
  });
}

async function deleteCriterio(id) {
  return await prisma.criterios_Divisao_Despesas.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  getCriterios,
  getCriterioById,
  createCriterio,
  updateCriterio,
  deleteCriterio
}
