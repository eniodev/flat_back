const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Obter todas as modalidades de pagamento
const getModalidadesPagamento = async (req, res) => {
  try {
    const modalidadesPagamento = await prisma.modalidades_pagamento.findMany();
    res.json(modalidadesPagamento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter modalidades de pagamento' });
  }
};

// Obter uma modalidade de pagamento pelo ID
const getModalidadePagamentoById = async (req, res) => {
  const { id } = req.params;
  try {
    const modalidadePagamento = await prisma.modalidades_pagamento.findUnique({ where: { id: parseInt(id) } });
    if (!modalidadePagamento) {
      return res.status(404).json({ error: 'Modalidade de pagamento não encontrada' });
    }
    res.json(modalidadePagamento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter modalidade de pagamento' });
  }
};

// Criar uma modalidade de pagamento
const createModalidadePagamento = async (req, res) => {
  const { descricao } = req.body;
  try {
    const modalidadePagamento = await prisma.modalidades_pagamento.create({ data: { descricao } });
    res.status(201).json(modalidadePagamento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar modalidade de pagamento' });
  }
};

// Atualizar uma modalidade de pagamento
const updateModalidadePagamento = async (req, res) => {
  const { id } = req.params;
  const { descricao } = req.body;
  try {
    const modalidadePagamento = await prisma.modalidades_pagamento.update({
      where: { id: parseInt(id) },
      data: { descricao },
    });
    res.json(modalidadePagamento);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar modalidade de pagamento' });
  }
};

// Excluir uma modalidade de pagamento
const deleteModalidadePagamento = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.modalidades_pagamento.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Modalidade de pagamento excluída com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir modalidade de pagamento' });
  }
};

module.exports = {
  getModalidadesPagamento,
  getModalidadePagamentoById,
  createModalidadePagamento,
  updateModalidadePagamento,
  deleteModalidadePagamento,
};
