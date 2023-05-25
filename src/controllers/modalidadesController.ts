const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getModalidades() {
  return await prisma.modalidades_Pagamento.findMany();
}

async function getModalidadeById(id) {
  return await prisma.modalidades_Pagamento.findUnique({
    where: { id: Number(id) },
  });
}

async function createModalidade(modalidade) {
  return await prisma.modalidades_Pagamento.create({
    data: { ...modalidade },
  });
}

async function updateModalidade(id, modalidade) {
  return await prisma.modalidades_Pagamento.update({
    where: { id: Number(id) },
    data: { ...modalidade },
  });
}

async function deleteModalidade(id) {
  return await prisma.modalidades_Pagamento.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  getModalidades,
  getModalidadeById,
  createModalidade,
  updateModalidade,
  deleteModalidade
}