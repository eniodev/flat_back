const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obter todas as divisões de despesas
const getDivisoesDespesas = async (req, res) => {
  try {
    const divisoesDespesas = await prisma.divisao_despesas.findMany();
    res.json(divisoesDespesas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter divisões de despesas' });
  }
};

// Obter uma divisão de despesas pelo ID
const getDivisaoDespesasById = async (req, res) => {
  const { id } = req.params;
  try {
    const divisaoDespesas = await prisma.divisao_despesas.findUnique({ where: { id: parseInt(id) } });
    if (!divisaoDespesas) {
      return res.status(404).json({ error: 'Divisão de despesas não encontrada' });
    }
    res.json(divisaoDespesas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter divisão de despesas' });
  }
};

// Criar uma divisão de despesas
const createDivisaoDespesas = async (req, res) => {
  const { morador, despesa, valor_pago, proporcao } = req.body;
  try {
    const divisaoDespesas = await prisma.divisao_despesas.create({
      data: { morador: parseInt(morador), despesa: parseInt(despesa), valor_pago, proporcao },
    });
    res.status(201).json(divisaoDespesas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar divisão de despesas' });
  }
};

// Atualizar uma divisão de despesas
const updateDivisaoDespesas = async (req, res) => {
  const { id } = req.params;
  const { morador, despesa, valor_pago, proporcao } = req.body;
  try {
    const divisaoDespesas = await prisma.divisao_despesas.update({
      where: { id: parseInt(id) },
      data: { morador: parseInt(morador), despesa: parseInt(despesa), valor_pago, proporcao },
    });
    res.json(divisaoDespesas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar divisão de despesas' });
  }
};

// Excluir uma divisão de despesas
const deleteDivisaoDespesas = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.divisao_despesas.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Divisão de despesas excluída com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir divisão de despesas' });
  }
};

module.exports = {
  getDivisoesDespesas,
  getDivisaoDespesasById,
  createDivisaoDespesas,
  updateDivisaoDespesas,
  deleteDivisaoDespesas,
};
