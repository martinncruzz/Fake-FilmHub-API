import { AppRoutes, Server } from './presentation';
import { envs } from './config';

(() => {
  main();
})();

function main() {
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start();
}
