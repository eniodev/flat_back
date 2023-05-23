const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obter todos os critérios de divisão de despesas
const getCriterios = async (req, res) => {
  try {
    const criterios = await prisma.criterios_divisao_despesas.findMany();
    res.json(criterios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter critérios de divisão de despesas' });
  }
};

// Obter um critério de divisão de despesas pelo ID
const getCriterioById = async (req, res) => {
  const { id } = req.params;
  try {
    const criterio = await prisma.criterios_divisao_despesas.findUnique({ where: { id: parseInt(id) } });
    if (!criterio) {
      return res.status(404).json({ error: 'Critério não encontrado' });
    }
    res.json(criterio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter critério de divisão de despesas' });
  }
};

// Criar um critério de divisão de despesas
const createCriterio = async (req, res) => {
  const { descricao } = req.body;
  try {
    const criterio = await prisma.criterios_divisao_despesas.create({ data: { descricao } });
    res.status(201).json(criterio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar critério de divisão de despesas' });
  }
};

// Atualizar um critério de divisão de despesas
const updateCriterio = async (req, res) => {
  const { id } = req.params;
  const { descricao } = req.body;
  try {
    const criterio = await prisma.criterios_divisao_despesas.update({
      where: { id: parseInt(id) },
      data: { descricao },
    });
    res.json(criterio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar critério de divisão de despesas' });
  }
};

// Excluir um critério de divisão de despesas
const deleteCriterio = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.criterios_divisao_despesas.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Critério excluído com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir critério de divisão de despesas' });
  }
};

module.exports = {
  getCriterios,
  getCriterioById,
  createCriterio,
  updateCriterio,
  deleteCriterio,
};
