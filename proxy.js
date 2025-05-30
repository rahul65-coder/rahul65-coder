import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch("https://api.bdg88zf.com/api/webapi/GetNoaverageEmerdList", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      });
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('API Error:', error);
      res.status(500).json({ error: 'API error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}