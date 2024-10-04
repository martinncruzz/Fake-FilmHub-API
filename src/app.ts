import { envs } from './config';
import { AppRoutes, Server } from './presentation';

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  server.start();
}
