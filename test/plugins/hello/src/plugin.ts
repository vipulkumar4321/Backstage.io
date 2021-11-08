import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const helloPlugin = createPlugin({
  id: 'hello',
  routes: {
    root: rootRouteRef,
  },
});

export const HelloPage = helloPlugin.provide(
  createRoutableExtension({
    name: 'HelloPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
