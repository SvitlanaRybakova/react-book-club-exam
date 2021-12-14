import axios from "axios";

axios.defaults.baseURL = "https://www.googleapis.com/books/v1/";
//www.googleapis.com/books/v1/volumes?q=Harry&subject:comedy+romance+fiction&printType=books&maxResults=40
export const getBooks = async (query) => {
  try {
    if (query.genre && query.searchText) {
      const result = await axios.get(
        `volumes?q=${query.searchText}+subject:${query.genre}&orderBy=newest&maxResults=40&langRestrict=${query.lang}`
      );
      return result.data;
    }

    if (query.searchText && !query.genre) {
      const result = await axios.get(
        `volumes?q=intitle:${query.searchText}&inauthor:${query.searchText}&orderBy=newest&maxResults=40&langRestrict=${query.lang}`
      );
      return result.data;
    }

    if(query.genre && !query.searchText){
       const result = await axios.get(
         `volumes?q=subject:${query.genre}&orderBy=newest&maxResults=40&langRestrict=${query.lang}`
       );
       return result.data;
    }
  } catch (err) {
    console.log("The new error has been occured", err);
  }
};

export const getBook = async (id) => {
  try {
    const result = await axios.get(`volumes/${id}`);
    return result;
  } catch (err) {
    console.log("The new error has been occured", err);
  }
};
