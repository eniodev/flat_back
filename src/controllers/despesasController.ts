const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obter todas as despesas
const getDespesas = async (req, res) => {
  try {
    const despesas = await prisma.despesas.findMany();
    res.json(despesas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter despesas' });
  }
};

// Obter uma despesa pelo ID
const getDespesaById = async (req, res) => {
  const { id } = req.params;
  try {
    const despesa = await prisma.despesas.findUnique({ where: { id: parseInt(id) } });
    if (!despesa) {
      return res.status(404).json({ error: 'Despesa não encontrada' });
    }
    res.json(despesa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter despesa' });
  }
};

// Criar uma despesa
const createDespesa = async (req, res) => {
  const { descricao, valor, data, criterio_divisao, recorrente } = req.body;
  try {
    const despesa = await prisma.despesas.create({
      data: {
        descricao,
        valor,
        data,
        criterio_divisao: parseInt(criterio_divisao),
        recorrente,
      },
    });
    res.status(201).json(despesa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar despesa' });
  }
};

// Atualizar uma despesa
const updateDespesa = async (req, res) => {
  const { id } = req.params;
  const { descricao, valor, data, criterio_divisao, recorrente } = req.body;
  try {
    const despesa = await prisma.despesas.update({
      where: { id: parseInt(id) },
      data: {
        descricao,
        valor,
        data,
        criterio_divisao: parseInt(criterio_divisao),
        recorrente,
      },
    });
    res.json(despesa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar despesa' });
  }
};

// Excluir uma despesa
const deleteDespesa = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.despesas.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Despesa excluída com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir despesa' });
  }
};

module.exports = {
  getDespesas,
  getDespesaById,
  createDespesa,
  updateDespesa,
  deleteDespesa,
};
