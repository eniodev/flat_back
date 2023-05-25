const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getMoradores() {
  return await prisma.moradores.findMany();
}

async function getMoradoreById(id) {
  return await prisma.moradores.findUnique({
    where: { id: Number(id) },
  });
}

async function createMorador(morador) {
  return await prisma.moradores.create({
    data: { ...morador },
  });
}

async function updateMorador(id, morador) {
  return await prisma.moradores.update({
    where: { id: Number(id) },
    data: { ...morador },
  });
}

async function deleteMorador(id) {
  return await prisma.moradores.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  getMoradores,
  getMoradoreById,
  createMorador,
  updateMorador,
  deleteMorador
}

      