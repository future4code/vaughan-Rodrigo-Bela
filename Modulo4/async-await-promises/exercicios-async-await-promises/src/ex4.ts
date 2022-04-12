/*

*/

async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }