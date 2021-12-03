import axios from "axios";

axios.defaults.baseURL = "https://www.googleapis.com/books/v1/";

export const getBooks = async (query) => {
  try {
    const result = await axios.get(`volumes?q=${query}`);
    return result.data;
  } catch (err) {
    console.log("The new error has been occured", err);
  }
};

export const getBook = async(id) => {
  try{
    const result = await axios.get(`volumes/${id}`)
    console.log(result);
    return result
  }catch(err){
    console.log("The new error has been occured", err);
  }
}