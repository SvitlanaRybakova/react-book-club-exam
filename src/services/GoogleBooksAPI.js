import axios from "axios";

axios.defaults.baseURL = "https://www.googleapis.com/books/v1/";

export const getBooks = async(query) => {
  const result = await axios.get(`volumes?q=${query}`)
  console.log('result', result);
  return result
}