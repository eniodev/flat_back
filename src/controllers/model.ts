const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getMoradores() {
  return await prisma.moradores.findMany();
}

async function getUserById(id) {
  return await prisma.user.findUnique({
    where: { id: Number(id) },
  });
}

async function createUser(user) {
  return await prisma.user.create({
    data: { ...user },
  });
}

async function updateUser(id, user) {
  return await prisma.user.update({
    where: { id: Number(id) },
    data: { ...user },
  });
}

async function deleteUser(id) {
  return await prisma.user.delete({
    where: { id: Number(id) },
  });
}

module.exports = {
  getMoradores,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
