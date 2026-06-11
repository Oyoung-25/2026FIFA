export default async function handler(req, res) {
  const API_KEY = "99b24a3729164af6ab58bb604cf2b13f";
  const url = 'https://api.football-data.org/v4/competitions/WC/matches';
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'X-Auth-Token': API_KEY }
    });
    
    // 將 API 回傳的錯誤內容直接讀取出來
    const data = await response.json();
    
    if (!response.ok) {
        return res.status(response.status).json({ error: "API 拒絕連線", details: data });
    }
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "伺服器無法連線", message: error.message });
  }
}
