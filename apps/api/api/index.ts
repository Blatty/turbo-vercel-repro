import type { VercelRequest, VercelResponse } from '@vercel/node';
import init from '../src/app';

module.exports = async function serve(req: VercelRequest, res: VercelResponse): Promise<void> {
  const app = init();
  await app.ready();
  app.server.emit('request', req, res);
};
