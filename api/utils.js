import crypto from 'crypto';

const SECRET = process.env.JWT_SECRET || 'mohit-portfolio-sec-key-2026-auth-token-salt-secure';

export function signToken(payload, expiresInMs = 7 * 24 * 60 * 60 * 1000) {
  const exp = Date.now() + expiresInMs;
  const data = { ...payload, exp, iat: Date.now() };
  const str = Buffer.from(JSON.stringify(data)).toString('base64url');
  return `${str}.${sig}`;
}

export function verifyToken(token) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [str, sig] = parts;
  const expectedSig = crypto.createHmac('sha256', SECRET).update(str).digest('base64url');
  if (sig !== expectedSig) return null;
  try {
    const payload = JSON.parse(Buffer.from(str, 'base64url').toString('utf-8'));
    if (payload.exp && payload.exp < Date.now()) return null;
    return payload;
  } catch (e) {
    return null;
  }
}
