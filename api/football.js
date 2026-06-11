export default async function handler(req, res) {
  // 設定 CORS 權限，允許來自任何網頁的請求
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { endpoint } = req.query;
  const API_KEY = "dbccece6f85b1c532efe9e833f309eac";

  const url = `https://v3.football.api-sports.io/${endpoint}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 
        'x-rapidapi-key': API_KEY, 
        'x-rapidapi-host': 'v3.football.api-sports.io' 
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
