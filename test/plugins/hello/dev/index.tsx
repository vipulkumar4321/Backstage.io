import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { helloPlugin, HelloPage } from '../src/plugin';

createDevApp()
  .registerPlugin(helloPlugin)
  .addPage({
    element: <HelloPage />,
    title: 'Root Page',
    path: '/hello'
  })
  .render();
