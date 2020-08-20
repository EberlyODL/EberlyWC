/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, svg } from "lit-element/lit-element.js";
import "@eberlywc/eberlywc-animationctl-button/eberlywc-animationctl-button.js";

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
class PedigreeAnalyze2 extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "pedigree-analyze-2";
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
  }

  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    // Import cdn
  }

  firstUpdated() {
    import(this.gsapCDN).then(() => {
      var tl = new TimelineMax();
      var svg = this.shadowRoot.querySelector("#pedigrees");

      // SVG
      var linetwo = svg.getElementById("linetwo");
      var stepthree = svg.getElementById("stepthree");

      // Set Animate
      tl.set([linetwo, stepthree], {
        alpha: 0
      });

      // Start Animate
      tl.to([linetwo], 1, {
        alpha: 1
      }).to([stepthree], 1, {
        alpha: 1
      });

      tl.pause();
      this.__tl = tl;
    });
  }

  renderSVG() {
    return svg`
        <svg id="pedigrees" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 252.03">
            <title>Pedigree</title>
            <g id="linetwo">
                <polyline points="314.69 73.74 314.69 140.74 222.19 140.74 222.19 168.74" fill="none" stroke="#b3b3b3" stroke-miterlimit="10"
                    stroke-width="4" />
            </g>
            <g id="lineone">
                <line x1="265.02" y1="72.91" x2="362.69" y2="72.91" fill="none" stroke="#b3b3b3" stroke-miterlimit="10" stroke-width="4"
                />
            </g>
            <g id="stepthree">
                <circle cx="222.52" cy="192.68" r="27" fill="#24aaa6" />
                <text transform="translate(216.05 204.78)" font-size="36.1" fill="#fff" font-family="OpenSans, Open Sans">?</text>
            </g>
            <g id="steptwo">
                <circle cx="388.02" cy="73.18" r="27" fill="#24aaa6" />
                <text transform="translate(368.05 81.78)" font-size="36.1" fill="#fff" font-family="OpenSans, Open Sans">Aa</text>
            </g>
            <g id="stepone">
                <rect x="211.2" y="46.18" width="54" height="54" fill="#24aaa6" />
                <text transform="translate(217.05 81.78)" font-size="36.1" fill="#fff" font-family="OpenSans, Open Sans">Aa</text>
            </g>
        </svg>
    `;
  }

  render() {
    return html`
      <p>
        This animation will show you how to use a pedigree to analyze the
        transmission of genetic traits (in this case the recessive genetic
        disease alkaptonuria) between parents and offspring.
      </p>
      <p>
        Squares represent males and circles represent females. Each parent is a
        carrier of the disease - neither has the disease but both carry an
        allele for the disease.
      </p>
      <eberlywc-animationctrl-button @click=${this.play}
        >play</eberlywc-animationctrl-button
      >
      <eberlywc-animationctrl-button @click=${this.reset}
        >reset</eberlywc-animationctrl-button
      >
      ${this.renderSVG()}
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
customElements.define("pedigree-analyze-2", PedigreeAnalyze2);
export { PedigreeAnalyze2 };
