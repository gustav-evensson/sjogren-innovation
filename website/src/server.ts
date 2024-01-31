import next from 'next';
import express from 'express';
import { getPayloadClient } from './get-payload';
import { nextApp, nextHandler } from './next-utils';
import nextBuild from 'next/dist/build';
import path from 'path';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const start = async () => {

  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info('Payload CMS is ready at: ' + cms.getAdminURL());
      }
    }
  });

  if(process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info('Next.js is built for production at: ' + process.env.NEXT_PUBLIC_SERVER_URL);

      // @ts-ignore
      await nextBuild(path.join(__dirname, '../'))

      process.exit();
    });

    return;
  }

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