/*

*/
const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseUrl}/subscribers`);
    return response.data;
  };