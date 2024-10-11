export async function buscarTodosProdutos(db) {
  const resposta = await db.select("*").from("produto");
  return resposta;
}
