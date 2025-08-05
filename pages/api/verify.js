import { isValidKey } from '../../utils/keyManager';

export default function handler(req, res) {
  const { k } = req.query;
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const decoded = Buffer.from(k || '', 'base64').toString('utf-8');

  if (!isValidKey(decoded, ip)) {
    res.redirect('/rickroll.html'); // Rickroll se for bypass
  } else {
    res.status(200).send(`Chave válida: ${decoded}`);
  }
}
