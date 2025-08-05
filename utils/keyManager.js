const keys = {};

export function generateKey(ip) {
  const key = `${Math.random().toString(36).substring(2, 10)}-${Date.now()}`;
  keys[ip] = { key, time: Date.now() };
  return key;
}

export function isValidKey(k, ip) {
  const data = keys[ip];
  if (!data) return false;
  if (data.key !== k) return false;
  if (Date.now() - data.time > 86400000) return false; // 24h
  return true;
}
