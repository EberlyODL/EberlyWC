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
class ModeSelection1 extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "mode-selection-1";
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
      var svg = this.shadowRoot.querySelector('#modes');

      // SVG
      var stabilizingtextarrow = svg.getElementById('stabilizingtextarrow');
      var stabilizingone = svg.getElementById('stabilizingone');
      var stabilizingarrows = svg.getElementById('stabilizingarrows');

      // Set Animate
      tl.set([stabilizingtextarrow], {
          alpha: 0
      });

      // Start Animate
      tl.to([stabilizingone, stabilizingarrows], 2, {
              scaleX: .5,
              transformOrigin: "50% 30%",
              ease: Cubic.easeOut
          })
          .to([stabilizingtextarrow], .5, {
              alpha: 1
          });


      tl.pause();
      this.__tl = tl;
    })
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
            <g id="stabilizingtextarrow">
                <path d="M413.76,219.63a1.5,1.5,0,0,0-1.61,1.39c-1.62,22-6.43,40.6-14.3,55.15-10.7,19.79-26.86,31.41-48,34.56L349,304.4,335.8,314.54l15.37,6.35-1-7.19c22.19-3.28,39.11-15.43,50.29-36.1,8.07-14.92,13-33.88,14.65-56.36A1.5,1.5,0,0,0,413.76,219.63Z"
                    fill="#fff" />
                <text transform="translate(355.31 161.93)" font-size="18" fill="#fff" font-family="OpenSans, Open Sans">Less genetic
                    <tspan x="3.92" y="21.6">variation in </tspan>
                    <tspan x="5.25" y="43.2">population</tspan>
                </text>
            </g>
            <g id="stabilizingone">
                <g id="Layer0_0_FILL-2" data-name="Layer0 0 FILL">
                    <path d="M319.38,219.44q-6.45-22.45-11.7-35.65-6.55-16.3-13.3-24.35-7.65-9-16.5-8.9t-16.35,8.6q-6.65,7.55-12.85,22.9-5,12.35-11.15,33.65l-11.4,40.95q-7.3,26.3-13.35,44.45a466.69,466.69,0,0,1-17.2,44.5c-15.07,33-32.93,58.33-53.6,75.59H412.23c-19.53-14-36.47-37.11-50.8-69a452,452,0,0,1-16.8-44.35q-5.25-16-11.7-39.15Z"
                        fill="url(#linear-gradient)" />
                </g>
            </g>
            <g id="stabilizingarrows">
                <polygon points="220.63 265.58 208.77 256.12 208.77 263.5 140.83 263.5 140.83 267.83 208.77 267.83 208.77 275.05 220.63 265.58"
                    fill="#fff" />
                <polygon points="413.63 263.33 345.7 263.33 345.7 256.12 333.83 265.58 345.7 275.05 345.7 267.66 413.63 267.66 413.63 263.33"
                    fill="#fff" />
            </g>
            <g id="stabilizingtitle">
                <text transform="translate(133.64 69.33)" font-size="24" font-family="OpenSans, Open Sans">Stabilizing Selection Favors
                    <tspan x="-2.87" y="28.8">an Intermediate Phenotype</tspan>
                </text>
            </g>
        </svg>
    `;
  }

  render() {
    return html`
      <h1>Mode Selection 1</h1>
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
customElements.define("mode-selection-1", ModeSelection1);
export { ModeSelection1 };
