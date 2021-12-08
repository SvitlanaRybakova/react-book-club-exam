import axios from "axios";

axios.defaults.baseURL = "https://www.googleapis.com/books/v1/";
//www.googleapis.com/books/v1/volumes?q=Harry&subject:comedy+romance+fiction&printType=books&maxResults=40
 export const getBooks = async (query) => {
  try {
    const result = await axios.get(
      `volumes?q=${query}&orderBy=newest&maxResults=40&langRestrict=en`
    );
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