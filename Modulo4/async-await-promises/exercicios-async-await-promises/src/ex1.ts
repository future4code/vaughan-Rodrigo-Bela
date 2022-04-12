console.log("Ola")
/*
*a.* Qual endpoint você deve utilizar para isso?

b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?

c. Implemente uma função nomeada que faça o que foi pedido.
*/

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  };