// api/football.js
export default async function handler(req, res) {
  const { endpoint } = req.query; // 接收類似 'fixtures?league=1' 或 'players/squads?team=33'
  const API_KEY = "你的RapidAPI_Key"; 

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
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate'); // 自動快取一小時，防止頻繁呼叫導致超額
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "運動數據連線異常" });
  }
}
