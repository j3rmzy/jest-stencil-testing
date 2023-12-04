import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'component-library-b',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    transformIgnorePatterns: ["node_modules/?!(component-library-a)"]
  },
};
