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
class PedigreeAnalyze7 extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "pedigree-analyze-5";
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
  }

  firstUpdated() {}

  renderSVG() {
    return svg`
        <svg id="pedigrees" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 252.03">
            <title>Pedigree</title>
            <g id="Layer_1" data-name="Layer 1">
                <text transform="translate(353.47 109.68)" font-size="36.48" fill="#b3b3b3" font-family="OpenSans, Open Sans">Aa</text>
                <text transform="translate(365.87 50.04)" font-size="36.48" fill="#b3b3b3" font-family="OpenSans, Open Sans">a</text>
                <text transform="translate(209.38 200.03)" font-size="36.48" fill="#b3b3b3" font-family="OpenSans, Open Sans">a</text>
                <text transform="translate(260.17 109.68)" font-size="36.48" fill="#b3b3b3" font-family="OpenSans, Open Sans">
                    <tspan letter-spacing="0.08em">A</tspan>
                    <tspan x="26" y="0">A</tspan>
                </text>
                <text transform="translate(263.71 199.73)" font-size="36.48" fill="#b3b3b3" font-family="OpenSans, Open Sans">Aa</text>
                <text transform="translate(353.76 199.73)" font-size="36.48" fill="#b3b3b3" font-family="OpenSans, Open Sans">aa</text>
                <rect x="239.77" y="53.44" width="178.33" height="178.33" fill="none" stroke="#b3b3b3" stroke-miterlimit="10" />
                <line x1="328.93" y1="54.03" x2="328.93" y2="231.77" fill="none" stroke="#b3b3b3" stroke-miterlimit="10" />
                <line x1="239.18" y1="142.61" x2="418.69" y2="142.61" fill="none" stroke="#b3b3b3" stroke-miterlimit="10" />
                <text transform="translate(270.2 50.66)" font-size="36.48" fill="#b3b3b3" font-family="OpenSans, Open Sans">A</text>
                <text transform="translate(208.79 109.12)" font-size="36.48" fill="#b3b3b3" font-family="OpenSans, Open Sans">A</text>
                <circle cx="218.35" cy="142.41" r="14.16" fill="#24aaa6" />
                <rect x="318.17" y="24.4" width="24.26" height="24.26" fill="#24aaa6" />
            </g>
            <g id="redx2">
                <rect x="345.08" y="187.07" width="56.58" height="2" transform="translate(-24.08 317.73) rotate(-44.8)" fill="#f40f2b" />
            </g>
            <g id="redx1">
                <rect x="372.37" y="159.79" width="2" height="56.58" transform="translate(-24.11 317.64) rotate(-44.79)" fill="#f40f2b" />
            </g>
        </svg>
    `;
  }

  render() {
    return html`
      <p>
        The probability that the first child is heterozygous is 2/3. Again, if
        this does not make sense use a punnett square - you will need to ignore
        the square that indicates homozygous recessive since we know the child
        does not have the disease.
      </p>
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
customElements.define("pedigree-analyze-7", PedigreeAnalyze7);
export { PedigreeAnalyze7 };
