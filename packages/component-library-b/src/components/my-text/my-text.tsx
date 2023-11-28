import { h, Component } from '@stencil/core';

@Component({
  tag: 'my-text',
  styles: 'my-text.css',
  shadow: true
})

export class Text {
  render() {
    return (
      <p>Hello World!</p>
    )
  }
}