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
class PedigreeAnalyze3 extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "pedigree-analyze-3";
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
      var linethree = svg.getElementById("linethree");
      var stepfour = svg.getElementById("stepfour");

      // Set Animate
      tl.set([linethree, stepfour], {
        alpha: 0
      });

      // Start Animate
      tl.to([linethree], 1, {
        alpha: 1
      }).to([stepfour], 1, {
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
            <g id="linethree">
                <line x1="314.69" y1="140.24" x2="314.69" y2="166.24" fill="none" stroke="#b3b3b3" stroke-miterlimit="10" stroke-width="4"
                />
            </g>
            <g id="linetwo">
                <polyline points="314.69 73.74 314.69 140.74 222.19 140.74 222.19 168.74" fill="none" stroke="#b3b3b3" stroke-miterlimit="10"
                    stroke-width="4" />
            </g>
            <g id="lineone">
                <line x1="265.02" y1="72.91" x2="362.69" y2="72.91" fill="none" stroke="#b3b3b3" stroke-miterlimit="10" stroke-width="4"
                />
            </g>
            <g id="stepfour">
                <rect x="288.2" y="166.68" width="54" height="54" fill="#231f20" />
                <text transform="translate(295.05 202.28)" font-size="36.1" fill="#fff" font-family="OpenSans, Open Sans">aa</text>
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
        The second child does have the disease - his genotype is aa. In a
        pedigree afflicted individuals are indicated with a dark square or
        circle.
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
customElements.define("pedigree-analyze-3", PedigreeAnalyze3);
export { PedigreeAnalyze3 };
