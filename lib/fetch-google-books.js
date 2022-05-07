export const fetchGoogleBooks = async (searchTerm) => {
  let books = await fetch(`/api/v1/search/${searchTerm}`);
  books = await books.json();
};
