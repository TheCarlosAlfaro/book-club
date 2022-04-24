export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ results: [{ id: 2323, title: 'I love you ♥' }] }));
};
