export default async function handler(req, res) {
  const { endpoint } = req.query; // 接收前端想查的類型，例如 'fixtures' 或 'players'
  const API_KEY = "你的RapidAPI_Key"; // 藏在後端，絕對安全！

  const url = `https://v3.football.api-sports.io/${endpoint}`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'x-rapidapi-key': API_KEY, 'x-rapidapi-host': 'v3.football.api-sports.io' }
  });
  
  const data = await response.json();
  res.status(200).json(data);
}
