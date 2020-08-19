/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, svg } from "lit-element/lit-element.js";
import "@eberlywc/eberlywc-animationctl-button/eberlywc-animationctl-button.js";
import "@eberlywc/maltose-element/maltose-element.js";
import "@eberlywc/sucrose-element/sucrose-element.js";

/**
 * `disaccharide-formation`
 * ``
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class DisaccharideFormation extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "disaccharide-formation";
  }

  static get properties() {
    return {};
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

  render() {
    return html`
      <maltose-element></maltose-element>
      <sucrose-element></sucrose-element>
    `;
  }
}
customElements.define("disaccharide-formation", DisaccharideFormation);

export { DisaccharideFormation };
