const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getQuartos() {
  return await prisma.quartos.findMany();
}

async function getQuartoById(id) {
  return await prisma.quartos.findUnique({
    where: { id: Number(id) },
  });
}

async function createQuarto(quarto) {
  return await prisma.quartos.create({
    data: { ...quarto },
  });
}

async function updateQuarto(id, quarto) {
  return await prisma.quartos.update({
    where: { id: Number(id) },
    data: { ...quarto },
  });
}

async function deleteQuarto(id) {
  return await prisma.quartos.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  getQuartos,
  getQuartoById,
  createQuarto,
  updateQuarto,
  deleteQuarto
}

      