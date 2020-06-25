/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";

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
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        button {
          background: #0f0f6d;
          color: #ffffff;
          cursor: pointer;
          font-size: 2em;
          padding: 1.5rem;
          border: 0;
          transition: all 0.5s;
          border-radius: 10px;
          width: auto;
          position: relative;
        }

        button:after {
          content: "\f054";
          font-family: "Font Awesome 5 Pro";
          font-weight: 400;
          position: absolute;
          left: 85%;
          top: 31%;
          right: 5%;
          bottom: 0;
          opacity: 0;
        }

        button:hover {
          background: #2b2bff;
          transition: all 0.5s;
          border-radius: 10px;
          box-shadow: 0px 6px 15px #0000ff61;
          padding: 1.5rem 3.5rem 1.5rem 1.5rem;
        }
        button:hover:after {
          opacity: 1;
          transition: all 0.5s;
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
