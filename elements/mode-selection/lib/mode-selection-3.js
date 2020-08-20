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
class ModeSelection3 extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "mode-selection-3";
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
      var root = this;
      var tl = new TimelineMax();
      var tl2 = new TimelineMax();
      var svg = this.shadowRoot.querySelector("#modes");
      // SVG
      var diversifyingtext = svg.getElementById("diversifyingtext");
      var diversifyingone = svg.getElementById("diversifyingone");
      var diversifyingtwo = svg.getElementById("diversifyingtwo");
      var diversifyingarrows = svg.getElementById("diversifyingarrows");

      // Set Animate
      tl.set([diversifyingtext, diversifyingarrows, diversifyingtwo], {
        alpha: 0
      });

      // Start Animate
      tl.to([diversifyingtext, diversifyingarrows, diversifyingtwo], 2, {
        alpha: 1
      });

      tl2.to([diversifyingone], 1, {
        alpha: 0
      });

      tl.pause();
      tl2.pause();
      this.__tl = tl;
      this.__tl2 = tl2;
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
            <g id="diversifyingtwo">
                <g id="Layer0_0_FILL-3" data-name="Layer0 0 FILL">
                    <path d="M331.37,179q-5.55,17-11.8,44l-10.5,47.65q-6.4,29.05-10.4,43.7-5.7,21.05-11.35,31.95Q281,358.68,274,358.73q-8,.1-15.25-11.85-6.3-10.3-12.8-31-5.15-16.1-11.5-42.65l-11.2-46.8q-8.7-35.1-15.1-52Q193.42,135.63,177,135t-31.25,52q-6.15,21.6-14.45,66-3.55,18.6-5.45,33.2-3.45,25.65-6.2,42.35-3.85,22.6-8.2,38.75c-7.07,26.43-15.42,44.63-27.05,53.9H476q-19.4-13.35-31.9-51.45a353.48,353.48,0,0,1-9.8-37.55q-3.35-15.6-7.75-41.35l-7.3-42.25q-4.4-24.1-8.3-40-10.5-42.55-26-61.35-22.3-27.1-39.45-.6Q338.17,157.83,331.37,179Z"
                        fill="url(#linear-gradient-3)" />
                </g>
            </g>
            <g id="diversifyingone">
                <g id="Layer0_0_FILL-2" data-name="Layer0 0 FILL">
                    <path d="M319.38,219.44q-6.45-22.45-11.7-35.65-6.55-16.3-13.3-24.35-7.65-9-16.5-8.9t-16.35,8.6q-6.65,7.55-12.85,22.9-5,12.35-11.15,33.65l-11.4,40.95q-7.3,26.3-13.35,44.45a466.69,466.69,0,0,1-17.2,44.5c-15.07,33-32.93,58.33-53.6,75.59H412.23c-19.53-14-36.47-37.11-50.8-69a452,452,0,0,1-16.8-44.35q-5.25-16-11.7-39.15Z"
                        fill="url(#linear-gradient)" />
                </g>
            </g>
            <g id="diversifyingarrows">
                <polygon points="309.38 228.92 303.97 224.46 303.97 233.38 309.38 228.92" fill="#fff" />
                <rect x="273.04" y="227.94" width="31.72" height="2.04" fill="#fff" />
                <polygon points="232.91 228.92 238.32 233.38 238.32 224.46 232.91 228.92" fill="#fff" />
                <rect x="237.53" y="227.86" width="31.72" height="2.04" transform="translate(506.78 457.75) rotate(-180)" fill="#fff" />
            </g>
            <g id="diversifyingtext">
                <text transform="translate(231.47 158.89)" font-size="14" fill="#fff" font-family="OpenSans, Open Sans">A population
                    <tspan x="-11.72" y="16.8">with two distinct </tspan>
                    <tspan x="-1.39" y="33.6">morpholoical </tspan>
                    <tspan x="24.98" y="50.4">traits</tspan>
                </text>
            </g>
            <g id="diversifyingtitle">
                <text transform="translate(123.91 69.33)" font-size="24" font-family="OpenSans, Open Sans">Diversifying Selection Favors
                    <tspan x="-10.95" y="28.8">Variants of Extreme Opposites</tspan>
                </text>
            </g>
        </svg>
    `;
  }

  render() {
    return html`
      <h1>Mode Selection 3</h1>
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
    this.__tl2.play();
  }

  reset() {
    this.__tl.progress(0);
    this.__tl.pause();
    this.__tl2.progress(0);
    this.__tl2.pause();
  }
}
customElements.define("mode-selection-3", ModeSelection3);
export { ModeSelection3 };
