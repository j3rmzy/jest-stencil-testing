import { h, Component } from "@stencil/core";

@Component({
  tag: "my-button",
  styles: "my-button.css",
  shadow: true
})

export class Button {
  render() {
    return (
      <button>Click me</button>
    )
  }
}
