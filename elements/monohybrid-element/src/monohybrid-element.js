/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, svg } from "lit-element/lit-element.js";
import "@eberlywc/eberlywc-animationctl-button/eberlywc-animationctl-button.js";
import "@lrnwebcomponents/a11y-carousel/a11y-carousel.js";
import "./lib/monohybrid-element-1.js";
import "./lib/monohybrid-element-2.js";
import "./lib/monohybrid-element-3.js";
import "./lib/monohybrid-element-4.js";

/**
 * `monohybrid-element`
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
class MonohybridElement extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "monohybrid-element";
  }
  static get properties() {
    return {
      gsapCDN: { type: String, attribute: "gsap-cdn" }
    };
  }

  // life cycle
  constructor() {
    super();
    this.gsapCDN =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js";
    this.__tl = null;
    this.__tl2 = null;
  }

  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    // Import cdn
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <a11y-carousel selection="figure-1" no-prev-next>
        <figure id="figure-1">
          <monohybrid-element-1></monohybrid-element-1>
        </figure>
        <figure id="figure-2">
          <monohybrid-element-2></monohybrid-element-2>
        </figure>
        <figure id="figure-3">
          <monohybrid-element-3></monohybrid-element-3>
        </figure>
        <figure id="figure-4">
          <monohybrid-element-4></monohybrid-element-4>
        </figure>
        <div
          slot="below"
          style="display:flex;align-items:stretch;justify-content:center"
        >
          <a11y-carousel-button button-type="prev">prev</a11y-carousel-button>
          <a11y-carousel-button button-type="next">next</a11y-carousel-button>
        </div>
      </a11y-carousel>
    `;
  }

  play() {
    this.__tl.play();
  }

  reset() {
    this.__tl.progress(0);
    this.__tl.pause();
  }
}
customElements.define("monohybrid-element", MonohybridElement);
export { MonohybridElement };
