// /api/v1/search/[searchTerm]
const googleBooksApiKey = process.env.GOOGLE_BOOKS_API_KEY;

const search = async (searchTerm) => {
  let books = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${googleBooksApiKey}`
  );
  books = await books.json();
  return books.items;
};

export default async function handleApiRequest(req, res) {
  if (req.method === 'GET') {
    const searchTerm = req.query.searchTerm;
    const results = await search(searchTerm);
    res.status(200).json({ results: results });
  }
}
