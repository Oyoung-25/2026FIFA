export default async function handler(req, res) {
  // 使用你提供的 Token
  const API_KEY = "99b24a3729164af6ab58bb604cf2b13f"; 
  // WC = World Cup, 2026 年賽事代碼
  const url = 'https://api.football.data.org/v4/competitions/WC/matches'; 
  
  try {
    const response = await fetch(url, {
      headers: { 'X-Auth-Token': API_KEY }
    });
    const data = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "數據擷取失敗" });
  }
}
