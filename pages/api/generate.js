import { generateKey } from '../../utils/keyManager';

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const key = generateKey(ip);
  const encodedKey = Buffer.from(key).toString('base64');

  // Linkvertise com redirect de volta
  const redirectURL = `https://v0-work-ink-verification-system.vercel.app/direct-access?k=${encodedKey}`;
  const linkvertiseURL = `https://linkvertise.com/12345/example?r=${encodeURIComponent(redirectURL)}`;

  res.redirect(linkvertiseURL);
}
