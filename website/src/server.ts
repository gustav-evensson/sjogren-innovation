import next from 'next';
import express from 'express';
import { getPayloadClient } from './get-payload';
import { nextApp, nextHandler } from './next-utils';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const start = async () => {
  const payload  = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info('Payload CMS is ready at: ' + cms.getAdminURL());
      }
    }
  });

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Next.js is ready!');

    app.listen(PORT, () => {
      payload.logger.info('Server is ready at: ' + process.env.NEXT_PUBLIC_SERVER_URL);
    });
  });
};

app.get('api/send-email', (req, res) => {
  res.send('Hello World!');
});

start()