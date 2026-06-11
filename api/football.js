// api/football.js
export default async function handler(req, res) {
  const { endpoint } = req.query; // 例如: endpoint=fixtures?league=1&season=2026
  const API_KEY = "dbccece6f85b1c532efe9e833f309eac"; // 貼上你的 API Key

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
    res.setHeader('Cache-Control', 's-maxage=3600');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "數據擷取失敗" });
  }
}
