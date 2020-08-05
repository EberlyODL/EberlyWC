/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";

/**
 * `eberlywc-animationctl-button`
 * `Buttons that will be controls in javascript animations.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class EberlywcAnimationctlButton extends LitElement {
  //styles function
  static get styles() {
    return [
      css`
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none;
        }
      `
    ];
  }

  // render function
  render() {
    return html`
      <button><slot></slot></button>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return { ...super.properties };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "eberlywc-animationctrl-button";
  }

  // life cycle
  constructor() {
    super();
  }

  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {}

  // static get observedAttributes() {
  //   return [];
  // }
  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}
}

customElements.define(
  "eberlywc-animationctrl-button",
  EberlywcAnimationctlButton
);

export { EberlywcAnimationctlButton };
