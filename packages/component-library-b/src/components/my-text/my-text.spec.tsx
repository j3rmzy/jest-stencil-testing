import { newSpecPage } from '@stencil/core/testing';
import { Text } from './my-text';
import { h } from '@stencil/core';
import { MyButton } from 'component-library-a/dist/components/my-button';

it('should render my component', async () => {
  const page = await newSpecPage({
    components: [Text, MyButton],
    template: () => (
      <my-text></my-text>
    )
  });
  expect(page.root).toEqualHtml(`
  <my-text>
    <mock:shadow-root>
      <p>
        Hello World!
      </p>
    </mock:shadow-root>
  </my-text>
  `);
});