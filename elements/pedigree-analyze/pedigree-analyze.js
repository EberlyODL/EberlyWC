/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, svg } from "lit-element/lit-element.js";
import "@eberlywc/eberlywc-animationctl-button/eberlywc-animationctl-button.js";
import "@lrnwebcomponents/a11y-carousel/a11y-carousel.js";
import "./lib/pedigree-analyze-1.js";
import "./lib/pedigree-analyze-2.js";
import "./lib/pedigree-analyze-3.js";
import "./lib/pedigree-analyze-4.js";
import "./lib/pedigree-analyze-5.js";
import "./lib/pedigree-analyze-6.js";
import "./lib/pedigree-analyze-7.js";

/**
 * `pedigree-analyze`
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
class PedigreeAnalyze extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "pedigree-analyze";
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
          <pedigree-analyze-1></pedigree-analyze-1>
        </figure>
        <figure id="figure-2">
          <pedigree-analyze-2></pedigree-analyze-2>
        </figure>
        <figure id="figure-3">
          <pedigree-analyze-3></pedigree-analyze-3>
        </figure>
        <figure id="figure-4">
          <pedigree-analyze-4></pedigree-analyze-4>
        </figure>
        <figure id="figure-5">
          <pedigree-analyze-5></pedigree-analyze-5>
        </figure>
        <figure id="figure-6">
          <pedigree-analyze-6></pedigree-analyze-6>
        </figure>
        <figure id="figure-7">
          <pedigree-analyze-7></pedigree-analyze-7>
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
customElements.define("pedigree-analyze", PedigreeAnalyze);
export { PedigreeAnalyze };
