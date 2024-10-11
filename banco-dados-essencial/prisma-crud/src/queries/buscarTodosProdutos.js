export async function buscarTodosProdutos(prisma) {
  const resposta = await prisma.produto.findMany();
  return resposta;
}
