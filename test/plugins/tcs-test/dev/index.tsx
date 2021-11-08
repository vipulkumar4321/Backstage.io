import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { tcsTestPlugin, TcsTestPage } from '../src/plugin';

createDevApp()
  .registerPlugin(tcsTestPlugin)
  .addPage({
    element: <TcsTestPage />,
    title: 'Root Page',
    path: '/tcs-test'
  })
  .render();
