export default async function handler(req, res) {
  const { country = 'us', category = 'general', page = 1, pageSize = 9 } = req.query;

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ status: 'error', message: 'API key not configured' });
  }

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ status: 'error', message: err.message });
  }
}
