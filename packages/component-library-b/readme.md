# Jest Stencil Monorepo

This purpose of this repo is to demonstrate the problem with importing a base Stencil built component library into a second Stencil built component library and running unit tests.

To recreate issue, please do the following:

1. Clone repo
2. `npm run bootstrap`
3. `npm run build`
4. `cd packages/component-library-b`
5. `npm run test`

