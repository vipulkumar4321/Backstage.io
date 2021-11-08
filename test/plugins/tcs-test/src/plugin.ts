import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const tcsTestPlugin = createPlugin({
  id: 'tcs-test',
  routes: {
    root: rootRouteRef,
  },
});

export const TcsTestPage = tcsTestPlugin.provide(
  createRoutableExtension({
    name: 'TcsTestPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
