/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, svg } from "lit-element/lit-element.js";
import "@eberlywc/eberlywc-animationctl-button/eberlywc-animationctl-button.js";

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
class MonohybridElement2 extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "monohybrid-element-2";
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
      var tlblue = new TimelineMax();
      var tlpink = new TimelineMax();
      var svg = this.shadowRoot.querySelector("#squares");

      // SVG
      var pinkcatlittleb = svg.getElementById("pinkcatlittleb");
      var pinkcatbigb = svg.getElementById("pinkcatbigb");
      var bluecatlittleb = svg.getElementById("bluecatlittleb");
      var bluecatbigb = svg.getElementById("bluecatbigb");

      // Set Animate
      tlblue.set([svg], {
        x: "+=90"
      });

      // Start Animate Pink Big
      tlpink
        .to([pinkcatlittleb], 1, {
          x: "+=50"
        })
        .to([pinkcatbigb], 1, {
          x: "-=50"
        });

      // Start Animate Blue
      tlblue
        .to([bluecatlittleb], 1, {
          y: "+=50"
        })
        .to([bluecatbigb], 1, {
          y: "-=50",
          x: "+=10"
        });

      tlblue.pause();
      tlpink.pause();
      this.__tlpink = tlpink;
      this.__tlblue = tlblue;
    });
  }

  renderSVG() {
    return svg`
        <svg id="squares" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630.06 261.03">
            <title>monohybrid-1</title>
            <g id="yellowsquarefour">
                <rect x="154.18" y="151.74" width="95.9" height="95.9" fill="#e0e1e2" />
            </g>
            <g id="yellowsquarethree">
                <rect x="57.68" y="151.74" width="95.9" height="95.9" fill="#e0e1e2" />
            </g>
            <g id="yellowsquaretwo">
                <rect x="154.18" y="55.74" width="95.9" height="95.9" fill="#e0e1e2" />
            </g>
            <g id="yellowsquareone">
                <rect x="57.68" y="55.74" width="95.9" height="95.9" fill="#e0e1e2" />
            </g>
            <g id="Layer_37" data-name="Layer 37">
                <rect x="57.68" y="55.74" width="192.39" height="191.89" fill="none" stroke="#7c7c7c" stroke-miterlimit="10" />
                <line x1="153.58" y1="55.74" x2="153.58" y2="248.19" fill="none" stroke="#7c7c7c" stroke-miterlimit="10" />
                <line x1="249.8" y1="151.96" x2="57.36" y2="151.96" fill="none" stroke="#7c7c7c" stroke-miterlimit="10" />
            </g>

            <g id="bluecat">
                <path d="M10.48,132.34a1.6,1.6,0,0,1,2.1,0c1.35.86,1.14,2.16,1.38,3.9s.12,8.57,4.86,10.19c0,0,9.35-.06,13.49.42s5.52.36,7.25-1.08,1.86-1.56,1.86-2.4,1-2.46,1.62-2.46.42-.9,1.32-.42a1.72,1.72,0,0,1,.42,1.2c.06.9.54,1.08,1.2,1.14s.72-.3,1.8.66,2.7,1.26,2.88,2.28.18,2.46-2.4,3.42a2.14,2.14,0,0,1-.75.09,2.87,2.87,0,0,0-1.29.57,15,15,0,0,0-2.73,3.6,3.59,3.59,0,0,0-.33,1,10.42,10.42,0,0,1-1.35,2.64c-.66,1.08-2.28,1.86-1.08,6.12s2.22,4.44,3,4.56,1.35,0,1.35.6-.24,1-1.56,1.08a3.2,3.2,0,0,1-3.09-1.59s-4.68-8.27-6.41-7.58c0,0-1.23.36-1.5,2.55a9.08,9.08,0,0,1-.39,2.49c-.33.66.09,1.23.75,2.16s.9,1.77.06,2a2.4,2.4,0,0,1-2.7-1,4.1,4.1,0,0,1-.81-2.79c0-.72.39-2.67-.12-4.32s-1.53-1.8-3.57-1.77-5,0-4.68,2.13,1.08,1.89,1.59,1.89.9-.33,1,.09a.73.73,0,0,1-.51,1,2.44,2.44,0,0,1-2.76-.54c-1-1.08-2-1.77-2.34-1.59s.36,1.26.36,1.26.54.78.18,1.2a1.23,1.23,0,0,1-2-.09,9.5,9.5,0,0,1-1.2-4c-.24-1.62-.75-2.61-.15-3.12a1.83,1.83,0,0,0,.33-2.07,13.84,13.84,0,0,1-.45-1.95A13.14,13.14,0,0,1,15,150.2c.15-2-.12-2.61-1.41-5.43s-1.86-4.44-1.92-6.71.27-3-.54-3.69S10.09,132.88,10.48,132.34Z"
                    fill="#7ac8ff" />
                <path d="M10.48,132.34a1.6,1.6,0,0,1,2.1,0c1.35.86,1.14,2.16,1.38,3.9s.12,8.57,4.86,10.19c0,0,9.35-.06,13.49.42s5.52.36,7.25-1.08,1.86-1.56,1.86-2.4,1-2.46,1.62-2.46.42-.9,1.32-.42a1.72,1.72,0,0,1,.42,1.2c.06.9.54,1.08,1.2,1.14s.72-.3,1.8.66,2.7,1.26,2.88,2.28.18,2.46-2.4,3.42a2.14,2.14,0,0,1-.75.09,2.87,2.87,0,0,0-1.29.57,15,15,0,0,0-2.73,3.6,3.59,3.59,0,0,0-.33,1,10.42,10.42,0,0,1-1.35,2.64c-.66,1.08-2.28,1.86-1.08,6.12s2.22,4.44,3,4.56,1.35,0,1.35.6-.24,1-1.56,1.08a3.2,3.2,0,0,1-3.09-1.59s-4.68-8.27-6.41-7.58c0,0-1.23.36-1.5,2.55a9.08,9.08,0,0,1-.39,2.49c-.33.66.09,1.23.75,2.16s.9,1.77.06,2a2.4,2.4,0,0,1-2.7-1,4.1,4.1,0,0,1-.81-2.79c0-.72.39-2.67-.12-4.32s-1.53-1.8-3.57-1.77-5,0-4.68,2.13,1.08,1.89,1.59,1.89.9-.33,1,.09a.73.73,0,0,1-.51,1,2.44,2.44,0,0,1-2.76-.54c-1-1.08-2-1.77-2.34-1.59s.36,1.26.36,1.26.54.78.18,1.2a1.23,1.23,0,0,1-2-.09,9.5,9.5,0,0,1-1.2-4c-.24-1.62-.75-2.61-.15-3.12a1.83,1.83,0,0,0,.33-2.07,13.84,13.84,0,0,1-.45-1.95A13.14,13.14,0,0,1,15,150.2c.15-2-.12-2.61-1.41-5.43s-1.86-4.44-1.92-6.71.27-3-.54-3.69S10.09,132.88,10.48,132.34Z"
                    fill="#7ac8ff" />
            </g>
            <g id="pinkcat">
                <path d="M132.56,11.89a1.6,1.6,0,0,1,2.1,0c1.35.86,1.14,2.16,1.38,3.9s.12,8.57,4.86,10.19c0,0,9.35-.06,13.49.42s5.52.36,7.25-1.08,1.86-1.56,1.86-2.4,1-2.46,1.62-2.46.42-.9,1.32-.42a1.72,1.72,0,0,1,.42,1.2c.06.9.54,1.08,1.2,1.14s.72-.3,1.8.66,2.7,1.26,2.88,2.28.18,2.46-2.4,3.42a2.14,2.14,0,0,1-.75.09,2.87,2.87,0,0,0-1.29.57,15,15,0,0,0-2.73,3.6,3.59,3.59,0,0,0-.33,1,10.42,10.42,0,0,1-1.35,2.64c-.66,1.08-2.28,1.86-1.08,6.12s2.22,4.44,3,4.56,1.35,0,1.35.6-.24,1-1.56,1.08a3.2,3.2,0,0,1-3.09-1.59s-4.68-8.27-6.41-7.58c0,0-1.23.36-1.5,2.55a9.08,9.08,0,0,1-.39,2.49c-.33.66.09,1.23.75,2.16s.9,1.77.06,2a2.4,2.4,0,0,1-2.7-1,4.1,4.1,0,0,1-.81-2.79c0-.72.39-2.67-.12-4.32s-1.53-1.8-3.57-1.77-5,0-4.68,2.13,1.08,1.89,1.59,1.89.9-.33,1,.09a.73.73,0,0,1-.51,1,2.44,2.44,0,0,1-2.76-.54c-1-1.08-2-1.77-2.34-1.59s.36,1.26.36,1.26.54.78.18,1.2a1.23,1.23,0,0,1-2-.09,9.5,9.5,0,0,1-1.2-4c-.24-1.62-.75-2.61-.15-3.12a1.83,1.83,0,0,0,.33-2.07,13.84,13.84,0,0,1-.45-1.95,13.14,13.14,0,0,1-.18-3.57c.15-2-.12-2.61-1.41-5.43s-1.86-4.44-1.92-6.71.27-3-.54-3.69S132.17,12.43,132.56,11.89Z"
                    fill="#fcf" />
            </g>

            <g id="pinkcatlittleb">
                <text transform="translate(151.06 41.51)" font-size="23.02" fill="#b50bb5" font-family="OpenSans, Open Sans">b</text>
            </g>
            <g id="pinkcatbigb">
                <text transform="translate(137.06 41.61)" font-size="23.02" fill="#b50bb5" font-family="OpenSans, Open Sans">B</text>
            </g>
            <g id="bluecatlittleb">
                <text transform="translate(27.91 160.35)" font-size="23.02" fill="#2e76bc" font-family="OpenSans, Open Sans">b</text>
            </g>
            <g id="bluecatbigb">
                <text transform="translate(14.66 160.83)" font-size="23.02" fill="#2e76bc" font-family="OpenSans, Open Sans">B</text>
            </g>
        </svg>
    `;
  }

  render() {
    return html`
      <p>
        These gametes (B and b) are distributed along both axes of the punnet
        square. This represents the two possible genetic contributions of each
        parent to resulting offspring. Click on the play button to line up the
        gametes.
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
    this.__tlblue.play();
    this.__tlpink.play();
  }

  reset() {
    this.__tlpink.progress(0);
    this.__tlblue.pause();
    this.__tlpink.progress(0);
    this.__tlblue.pause();
  }
}
customElements.define("monohybrid-element-2", MonohybridElement2);
export { MonohybridElement2 };
