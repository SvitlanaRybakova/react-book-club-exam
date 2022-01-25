import axios from "axios";

axios.defaults.baseURL = "https://www.googleapis.com/books/v1/";
//www.googleapis.com/books/v1/volumes?q=Harry&subject:comedy+romance+fiction&printType=books&maxResults=40
export const getBooks = async (query) => {
  const searchText = query().searchText;
  const genre = query().genre;
  const lang = query().lang;

  try {
    // genre + free text
    if (genre.length && searchText) {
      const result = await axios.get(
        `volumes?q=${searchText}+subject:${genre}&orderBy=newest&maxResults=40&langRestrict=${lang}`
      );
      return result.data;
    }

    // only free text
    if (!genre.length && searchText) {
      const result = await axios.get(
        `volumes?q=intitle:${searchText}&inauthor:${searchText}&orderBy=newest&maxResults=40&langRestrict=${lang}`
      );
      return result.data;
    }
    // only genre
    if (genre && searchText.length <= 0) {
      const result = await axios.get(
        `volumes?q=subject:${genre}&orderBy=newest&maxResults=40&langRestrict=${lang}`
      );
      return result.data;
    }
  } catch (err) {
    console.warn("The new error has been occured", err);
  }
};

export const getBook = async (id) => {
  try {
    const result = await axios.get(`volumes/${id}`);
    return result;
  } catch (err) {
    console.warn("The new error has been occured", err);
  }
};
