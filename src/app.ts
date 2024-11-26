import { envs } from './infrastructure';
import { AppRoutes, Server } from './presentation';

(() => {
  main();
})();

function main() {
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start();
}
