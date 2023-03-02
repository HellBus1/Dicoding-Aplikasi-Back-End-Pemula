import Hapi from '@hapi/hapi';
import routes from './routes';

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  });

  server.route(routes);

  await server.start();
};


init();