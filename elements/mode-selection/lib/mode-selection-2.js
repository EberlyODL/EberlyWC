/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, svg } from "lit-element/lit-element.js";
import "@eberlywc/eberlywc-animationctl-button/eberlywc-animationctl-button.js";

/**
 * `mode-selection`
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
class ModeSelection2 extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "mode-selection-2";
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

  firstUpdated() {
    import(this.gsapCDN).then(() => {
      var root = this;
      var tl = new TimelineMax();
      var svg = this.shadowRoot.querySelector("#modes");

      // SVG
      var directionaltextarrow = svg.getElementById("directionaltextarrow");
      var directionalone = svg.getElementById("directionalone");
      var directionalarrow = svg.getElementById("directionalarrow");

      // Set Animate
      tl.set([directionaltextarrow], {
        alpha: 0
      });

      // Start Animate
      tl.to([directionalone, directionalarrow], 2, {
        x: "+=50"
      }).to([directionaltextarrow], 0.5, {
        alpha: 1
      });

      tl.pause();
      this.__tl = tl;
    });
  }

  renderSVG() {
    return svg`
        <svg id="modes" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 550 504">
            <defs>
                <linearGradient id="linear-gradient" x1="142.33" y1="158.14" x2="411.63" y2="158.14" gradientTransform="matrix(1, 0, 0, -1, 0, 444)"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" />
                    <stop offset="1" stop-color="#3cf" />
                </linearGradient>
                <linearGradient id="linear-gradient-3" x1="84.42" y1="166.65" x2="475.97" y2="166.65" gradientTransform="matrix(1, 0, 0, -1, 0, 444)"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" />
                    <stop offset="1" stop-color="#0cf" />
                </linearGradient>
                <linearGradient id="linear-gradient-4" x1="138.83" y1="165.52" x2="424.08" y2="165.52" xlink:href="#linear-gradient-3" />
            </defs>
            <title>modes_selection</title>
            <g id="graphbase">
                <rect x="84" y="126.18" width="395.67" height="295" fill="#036" />
                <text transform="translate(170 461.33)" font-size="24" font-family="OpenSans, Open Sans">Range of Phenotype</text>
                <text transform="translate(79.5 456.83)" font-size="18" font-family="OpenSans, Open Sans">0</text>
                <text transform="translate(463.83 456.83)" font-size="18" font-family="OpenSans, Open Sans">100</text>
                <text transform="translate(67.33 366.33) rotate(-90)" font-size="24" font-family="OpenSans, Open Sans">% of individuals</text>
                <rect x="84" y="421.11" width="1" height="16.22" fill="#036" />
                <rect x="478.65" y="421.11" width="1.01" height="16.22" fill="#036" />
            </g>
            <g id="directionalone">
                <g id="Layer0_0_FILL" data-name="Layer0 0 FILL">
                    <path d="M319.38,219.44q-6.45-22.45-11.7-35.65-6.55-16.3-13.3-24.35-7.65-9-16.5-8.9t-16.35,8.6q-6.65,7.55-12.85,22.9-5,12.35-11.15,33.65l-11.4,40.95q-7.3,26.3-13.35,44.45a466.69,466.69,0,0,1-17.2,44.5c-15.07,33-32.93,58.33-53.6,75.59H412.23c-19.53-14-36.47-37.11-50.8-69a452,452,0,0,1-16.8-44.35q-5.25-16-11.7-39.15Z"
                        fill="url(#linear-gradient)" />
                </g>
            </g>
            <g id="directionaltextarrow">
                <path d="M219.65,314.54,206.47,304.4l-.84,6.31c-21.18-3.15-37.34-14.77-48-34.56-7.86-14.55-12.67-33.1-14.3-55.15a1.5,1.5,0,0,0-3,.22c1.65,22.47,6.58,41.43,14.65,56.36,11.18,20.68,28.1,32.82,50.29,36.1l-1,7.19Z"
                    fill="#fff" />
                <text transform="translate(127.71 183.26)" font-size="18" fill="#fff" font-family="OpenSans, Open Sans">More extreme
                    <tspan x="-8.33" y="21.6">variants favored</tspan>
                </text>
            </g>
            <g id="directionalarrow">
                <polygon points="419.63 265.58 407.77 256.12 407.77 263.5 339.83 263.5 339.83 267.83 407.77 267.83 407.77 275.05 419.63 265.58"
                    fill="#fff" />
            </g>
            <g id="directionaltitle">
                <text transform="translate(167.21 69.33)" font-size="24" font-family="OpenSans, Open Sans">Directional Selection
                    <tspan x="13.89" y="28.8">Favors an Extreme</tspan>
                </text>
            </g>
        </svg>
    `;
  }

  render() {
    return html`
      <h1>Mode Selection 2</h1>
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
customElements.define("mode-selection-2", ModeSelection2);
export { ModeSelection2 };
