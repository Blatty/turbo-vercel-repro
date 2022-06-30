import fastify from 'fastify';
import { isFoo } from '@acme/utils';

export default function init() {
  const app = fastify({
    trustProxy: true,
  });

  app.get('/foo', async (request, reply) => {
    reply.type('application/json').code(200);
    return { foo: isFoo('foo'), timestamp: Date.now() };
  });

  return app;
}

if (require.main === module) {
  (async () => {
    const app = init();
    await app.ready();
    app.listen({
      port: 4000,
    });
  })();
}
