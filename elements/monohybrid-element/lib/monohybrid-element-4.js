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
class MonohybridElement4 extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "monohybrid-element-4";
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
      var tltopl = new TimelineMax();
      var tltopr = new TimelineMax();
      var tlright = new TimelineMax();
      var svg = this.shadowRoot.querySelector("#squares");

      // SVG
      var pinkcatlittleb = svg.getElementById("pinkcatlittleb");
      var pinkcatbigb = svg.getElementById("pinkcatbigb");
      var bluecatlittleb = svg.getElementById("bluecatlittleb");
      var bluecatbigb = svg.getElementById("bluecatbigb");

      var littlebfourone = svg.getElementById("littlebfourone");
      var littlebfourtwo = svg.getElementById("littlebfourtwo");
      var bigbfour = svg.getElementById("bigbfour");

      var littlebthree = svg.getElementById("littlebthree");
      var bigbthree = svg.getElementById("bigbthree");
      var littlebtwo = svg.getElementById("littlebtwo");
      var bigbtwo = svg.getElementById("bigbtwo");
      var littlebone = svg.getElementById("littlebone");
      var bigbone = svg.getElementById("bigbone");

      var leftstackfourbottom = svg.getElementById("leftstackfourbottom");
      var leftstackthreebottom = svg.getElementById("leftstackthreebottom");
      var leftstacktwobottom = svg.getElementById("leftstacktwobottom");
      var leftstackonebottom = svg.getElementById("leftstackonebottom");
      var rightstackfourbottom = svg.getElementById("rightstackfourbottom");
      var rightstackthreebottom = svg.getElementById("rightstackthreebottom");
      var rightstacktwobottom = svg.getElementById("rightstacktwobottom");
      var rightstackonebottom = svg.getElementById("rightstackonebottom");

      var leftstackfourtop = svg.getElementById("leftstackfourtop");
      var leftstackthreetop = svg.getElementById("leftstackthreetop");
      var leftstacktwotop = svg.getElementById("leftstacktwotop");
      var leftstackonetop = svg.getElementById("leftstackonetop");
      var rightstackfourtop = svg.getElementById("rightstackfourtop");
      var rightstackthreetop = svg.getElementById("rightstackthreetop");
      var rightstacktwotop = svg.getElementById("rightstacktwotop");
      var rightstackonetop = svg.getElementById("rightstackonetop");

      // Set Animate
      tl.set([pinkcatlittleb], {
        x: "+=50"
      })
        .set([pinkcatbigb], {
          x: "-=50"
        })
        .set([bluecatlittleb], {
          y: "+=50"
        })
        .set([bluecatbigb], {
          y: "-=50",
          x: "+=10"
        })
        .set([leftstackfourbottom, leftstackthreebottom], {
          scaleY: 0,
          y: "+=243"
        })
        .set([leftstackfourtop], {
          display: "none",
          y: "+=44"
        })
        .set([leftstackthreetop], {
          display: "none",
          y: "+=73"
        })
        .set([leftstacktwotop], {
          display: "none",
          y: "+=85"
        })
        .set([leftstackonetop], {
          display: "none",
          y: "+=100"
        })
        .set([leftstackonebottom, leftstacktwobottom], {
          scaleY: 0,
          y: "+=200"
        })
        .set([rightstackfourbottom, rightstackthreebottom], {
          scaleY: 0,
          y: "+=243"
        })
        .set([rightstackonebottom, rightstacktwobottom], {
          scaleY: 0,
          y: "+=200"
        })
        .set([rightstackfourtop], {
          display: "none",
          y: "+=44"
        })
        .set([rightstackthreetop], {
          display: "none",
          y: "+=73"
        })
        .set([rightstacktwotop], {
          display: "none",
          y: "+=85"
        })
        .set([rightstackonetop], {
          display: "none",
          y: "+=100"
        });

      // Start Animate
      tl.to([leftstackfourbottom], 1, {
        scaleY: 1,
        transformOrigin: "0% 100%"
      })
        .to([leftstackthreebottom], 1, {
          scaleY: 1,
          transformOrigin: "0% 100%"
        })
        .to([leftstacktwobottom], 1, {
          scaleY: 1,
          transformOrigin: "0% 100%"
        })
        .to([leftstackonebottom], 1, {
          scaleY: 1,
          transformOrigin: "0% 100%"
        });

      // Start top left
      tltopl
        .to([leftstackfourtop], 1, {
          display: "block",
          y: "-=45"
        })
        .to([leftstackthreetop], 1, {
          display: "block",
          y: "-=75"
        })
        .to([leftstacktwotop], 1, {
          display: "block",
          y: "-=90"
        })
        .to([leftstackonetop], 1, {
          display: "block",
          y: "-=100"
        });

      // Start Right
      tlright
        .to([rightstackfourbottom], 1, {
          scaleY: 1,
          transformOrigin: "0% 100%"
        })
        .to([rightstackthreebottom], 1, {
          scaleY: 1,
          transformOrigin: "0% 100%"
        })
        .to([rightstacktwobottom], 1, {
          scaleY: 1,
          transformOrigin: "0% 100%"
        })
        .to([rightstackonebottom], 1, {
          scaleY: 1,
          transformOrigin: "0% 100%"
        });

      // Start top right
      tltopr
        .to([rightstackfourtop], 1, {
          display: "block",
          y: "-=40"
        })
        .to([rightstackthreetop], 1, {
          display: "block",
          y: "-=75"
        })
        .to([rightstacktwotop], 1, {
          display: "block",
          y: "-=90"
        })
        .to([rightstackonetop], 1, {
          display: "block",
          y: "-=105"
        });

      tl.pause();
      tltopl.pause();
      tltopr.pause();
      tlright.pause();
      this.__tl = tl;
      this.__tltopl = tltopl;
      this.__tltopr = tltopr;
      this.__tlright = tlright;
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

            <g id="littlebfourtwo">
                <text transform="translate(202.06 207.51)" font-size="23.02" fill="#2e76bc" font-family="OpenSans, Open Sans">b</text>
            </g>
            <g id="littlebfourone">
                <text transform="translate(188.73 207.51)" font-size="23.02" fill="#b50bb5" font-family="OpenSans, Open Sans">b</text>
            </g>
            <g id="littlebthree">
                <text transform="translate(106.06 207.51)" font-size="23.02" fill="#2e76bc" font-family="OpenSans, Open Sans">b</text>
            </g>
            <g id="bigbfour">
                <text transform="translate(92.39 207.27)" font-size="23.02" fill="#b50bb5" font-family="OpenSans, Open Sans">B</text>
            </g>
            <g id="littlebtwo">
                <text transform="translate(202.06 111.51)" font-size="23.02" fill="#b50bb5" font-family="OpenSans, Open Sans">b</text>
            </g>
            <g id="bigbthree">
                <text transform="translate(187.73 111.27)" font-size="23.02" fill="#2e76bc" font-family="OpenSans, Open Sans">B</text>
            </g>
            <g id="bigbtwo">
                <text transform="translate(93.23 111.27)" font-size="23.02" fill="#2e76bc" font-family="OpenSans, Open Sans">B</text>
            </g>
            <g id="bigbone">
                <text transform="translate(106.73 111.27)" font-size="23.02" fill="#b50bb5" font-family="OpenSans, Open Sans">B</text>
            </g>

            <g id="frequencytext">
                <text transform="translate(350.27 25.18)" font-size="14" font-family="OpenSans, Open Sans">Genotypic
                    <tspan x="-1.13" y="16.8">Frequency</tspan>
                    <tspan x="17.21" y="33.6">1:2:1</tspan>
                </text>
                <text transform="translate(514.53 25.18)" font-size="14" font-family="OpenSans, Open Sans">Phenotypic
                    <tspan x="2.29" y="16.8">Frequency</tspan>
                    <tspan x="26.49" y="33.6">3:1</tspan>
                </text>
            </g>
            <g id="flatstackleft">
                <text transform="translate(348.06 201.23)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(359.73 197.57)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(398.06 197.57)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(345.89 229.07)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(357.95 232.4)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
                <text transform="translate(400.95 232.4)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
                <text transform="translate(411.62 229.9)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
                <text transform="translate(408.45 202.23)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
                <line x1="385.38" y1="173.8" x2="385.38" y2="243.44" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="452.26" y1="208.61" x2="317.95" y2="208.61" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.25"
                />
                <ellipse cx="385.15" cy="208.62" rx="67.16" ry="34.82" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M452.23,208.62c0,19.23-30.07,34.82-67.16,34.82s-67.16-15.59-67.16-34.82S348,173.8,385.08,173.8h.3" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M451.72,204.28l-36.1,35.33c1.78-.47,3.54-1,5.23-1.53l31.36-30.69A18.69,18.69,0,0,0,451.72,204.28Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M448.28,196.88l-46.42,45.43c1.47-.2,2.92-.42,4.35-.67l43.46-42.53A25.3,25.3,0,0,0,448.28,196.88Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M446.71,194.83l-49,48q2.11-.21,4.17-.49l46.42-45.43C447.8,196.18,447.27,195.5,446.71,194.83Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M441.14,189.51,386,243.43q1.89,0,3.76-.09l53.32-52.18C442.49,190.6,441.83,190,441.14,189.51Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M439.06,188l-56.65,55.44c.9,0,1.79,0,2.7,0H386l55.1-53.92C440.48,189,439.78,188.47,439.06,188Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M436.87,186.51l-58,56.77q1.76.08,3.54.12L439.06,188C438.35,187.47,437.62,187,436.87,186.51Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M432.23,183.87l-60.17,58.89c1.11.11,2.23.22,3.36.3l59.17-57.92Q433.44,184.5,432.23,183.87Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M429.79,182.68l-61,59.7c1.08.14,2.17.27,3.28.38l60.17-58.89Q431,183.26,429.79,182.68Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M427.26,181.56l-61.67,60.36c1.06.17,2.12.32,3.19.46l61-59.7C429,182.3,428.12,181.93,427.26,181.56Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M422,179.56l-62.54,61.21c1,.22,2,.42,3,.61l62.18-60.86C423.78,180.19,422.88,179.87,422,179.56Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M416.37,177.87l-62.8,61.46c1,.26,1.91.52,2.89.76l62.74-61.4C418.28,178.39,417.33,178.13,416.37,177.87Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M404.33,175.29l-61.59,60.28c.85.36,1.71.71,2.6,1l62.12-60.79C406.43,175.64,405.38,175.46,404.33,175.29Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M368,174.94l-46.24,45.26c.48.7,1,1.39,1.55,2.07l48.86-47.82Q370.09,174.66,368,174.94Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M391,174l-57.89,56.66c.74.46,1.49.92,2.27,1.36l59.06-57.81Q392.78,174,391,174Z" fill="none" stroke="#000" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M376.21,174.11l-51.15,50.06c.58.6,1.2,1.19,1.85,1.77l53.17-52Q378.13,174,376.21,174.11Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M380.09,173.9l-53.17,52q.94.84,2,1.66l55-53.79Q382,173.83,380.09,173.9Z" fill="none" stroke="#000" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M387.5,173.83,331,229.15c.7.49,1.43,1,2.18,1.46L391,174Q389.28,173.86,387.5,173.83Z" fill="none" stroke="#000" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M394.48,174.17,335.42,232q1.15.65,2.36,1.28l60.06-58.79Q396.18,174.3,394.48,174.17Z" fill="none" stroke="#000" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M385.11,173.8l-1.26,0-55,53.79c.67.53,1.36,1,2.08,1.55l56.53-55.32C386.7,173.81,385.91,173.8,385.11,173.8Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372.2,174.45l-48.86,47.82c.53.65,1.12,1.28,1.72,1.9l51.15-50.06Q374.19,174.25,372.2,174.45Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M348.91,179.29,318,209.55a18.5,18.5,0,0,0,.43,3.16l35.77-35Q351.48,178.44,348.91,179.29Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M354.2,177.71l-35.77,35a19.73,19.73,0,0,0,.84,2.77l39.82-39C357.43,176.87,355.8,177.28,354.2,177.71Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M363.67,175.62l-43.25,42.33a24.81,24.81,0,0,0,1.37,2.25L368,174.94C366.56,175.14,365.1,175.37,363.67,175.62Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M319.72,200.68l16-15.65C328,189.37,322.4,194.74,319.72,200.68Z" fill="none" stroke="#000" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M335.72,185l-16,15.65a19.85,19.85,0,0,0-1.53,5.09L343,181.5A69.6,69.6,0,0,0,335.72,185Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M343,181.5l-24.79,24.27a18.43,18.43,0,0,0-.24,2.85c0,.31,0,.62,0,.93l30.92-30.26Q345.83,180.32,343,181.5Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M359.09,176.51l-39.82,39a22,22,0,0,0,1.15,2.46l43.25-42.33C362.12,175.89,360.59,176.18,359.09,176.51Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M401.12,174.85l-60.9,59.6c.82.38,1.66.76,2.52,1.12l61.59-60.28C403.28,175.13,402.2,175,401.12,174.85Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M397.84,174.47l-60.06,58.79c.8.41,1.61.81,2.44,1.2l60.9-59.6Q399.5,174.64,397.84,174.47Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M407.46,175.83l-62.12,60.79c.88.33,1.76.66,2.67,1l62.49-61.16Q409,176.11,407.46,175.83Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M410.5,176.44,348,237.59c.9.31,1.81.61,2.75.9l62.71-61.38C412.49,176.88,411.5,176.65,410.5,176.44Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M413.47,177.12,350.76,238.5c.93.29,1.86.57,2.82.83l62.8-61.46C415.42,177.6,414.45,177.36,413.47,177.12Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M419.21,178.68l-62.74,61.4c1,.24,2,.47,3,.69L422,179.56C421.07,179.25,420.14,179,419.21,178.68Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M424.66,180.52l-62.18,60.86c1,.19,2.06.37,3.12.54l61.67-60.36C426.41,181.21,425.54,180.86,424.66,180.52Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M434.59,185.15l-59.17,57.92c1.14.09,2.29.16,3.45.21l58-56.77C436.13,186,435.37,185.6,434.59,185.15Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M443.12,191.16l-53.32,52.18c1.3-.05,2.6-.12,3.88-.21L445,192.93C444.4,192.33,443.77,191.74,443.12,191.16Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M445,192.93l-51.3,50.21c1.35-.09,2.69-.2,4-.33l49-48C446.17,194.18,445.59,193.55,445,192.93Z" fill="none" stroke="#000"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M449.67,199.11l-43.46,42.53c1.54-.27,3.07-.56,4.56-.88l40.06-39.21A22.33,22.33,0,0,0,449.67,199.11Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M450.83,201.56l-40.06,39.21c1.64-.36,3.27-.73,4.84-1.15l36.1-35.33A20.07,20.07,0,0,0,450.83,201.56Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M452.2,207.39l-31.36,30.69c2-.66,4-1.37,5.85-2.14l25.37-24.83a18.08,18.08,0,0,0,.19-2.49C452.26,208.21,452.23,207.8,452.2,207.39Z"
                    fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M433.79,232.59,450.73,216a19.76,19.76,0,0,0,1.34-4.9L426.7,235.94A71.24,71.24,0,0,0,433.79,232.59Z" fill="none"
                    stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M450.73,216l-16.94,16.58C442.11,228.05,448.09,222.35,450.73,216Z" fill="none" stroke="#000" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <ellipse cx="385.15" cy="208.62" rx="67.16" ry="34.82" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M452.3,208.62c0,19.19-29.94,34.76-66.92,34.82h-.23c-37.09,0-67.16-15.59-67.16-34.82s30.07-34.82,67.16-34.82h.23C422.36,173.86,452.3,189.43,452.3,208.62Z"
                    fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.25" />
            </g>
            <g id="flatstackright">
                <text transform="translate(508.39 201.23)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(520.06 197.57)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(558.39 197.57)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(506.23 229.07)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(518.28 232.4)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
                <text transform="translate(561.28 232.4)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
                <text transform="translate(571.95 229.9)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
                <text transform="translate(568.78 202.23)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
                <line x1="545.21" y1="173.8" x2="545.21" y2="243.44" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="612.46" y1="208.61" x2="477.79" y2="208.61" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.25"
                />
                <ellipse cx="545.41" cy="208.62" rx="67.16" ry="34.82" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="0.25"
                />
            </g>
            <g id="leftstacktwobottom">
                <rect x="385.15" y="125.17" width="66.96" height="87.34" fill="#00c5a5" />
            </g>
            <g id="leftstacktwotop">
                <path d="M385.19,125.16V90.27s30.36-.12,50.11,12c0,0,16.63,8.5,16.85,22.89Z" fill="#00debe" />
                <path d="M409.68,92.79l1.49.31Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M418.47,95l1.36.41Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M415.62,94.19l1.41.38Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M412.68,93.45l1.46.34Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M421.23,95.87l1.32.44Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M429,98.87l1.2.54Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M431.33,100l1.15.57Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M426.48,97.81l1.24.51Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M433.61,101.18l1.09.59Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M406.62,92.21l1.51.27Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M390.26,90.46l1.67.07Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M386.83,90.37l1.7,0Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M400.25,91.26l1.58.19Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M403.47,91.7l1.54.23Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M393.64,90.65l1.64.11Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M397,90.91l1.62.15Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M443.26,107.9c.25.23.52.45.76.69C443.78,108.35,443.51,108.13,443.26,107.9Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M451.94,122.82c0,.19.06.37.08.55C452,123.19,452,123,451.94,122.82Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M450.42,117.42c.11.25.23.49.33.74C450.65,117.91,450.53,117.67,450.42,117.42Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M451.08,119.13c.08.25.18.49.25.74C451.26,119.62,451.17,119.38,451.08,119.13Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M451.6,120.93c.05.23.12.45.17.68C451.72,121.38,451.65,121.16,451.6,120.93Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M435.78,102.42l1,.62Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M449.59,115.72c.14.25.29.5.41.75C449.87,116.22,449.72,116,449.59,115.72Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M439.76,105.05c.3.22.61.44.91.66C440.37,105.49,440.06,105.27,439.76,105.05Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M437.83,103.71c.32.21.65.42,1,.64C438.48,104.14,438.15,103.93,437.83,103.71Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M441.57,106.45c.28.23.57.45.84.68C442.14,106.9,441.85,106.67,441.57,106.45Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M444.8,109.37c.23.24.48.47.7.71C445.28,109.85,445,109.61,444.8,109.37Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M447.45,112.43c.2.26.4.52.59.78C447.86,112.95,447.65,112.69,447.45,112.43Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M448.6,114.06c.17.25.34.51.5.76C448.94,114.57,448.76,114.31,448.6,114.06Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M446.19,110.88c.22.25.44.49.65.75C446.64,111.38,446.41,111.13,446.19,110.88Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M423.9,96.81l1.29.48Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M446.84,111.63c.22.26.41.54.61.8C447.25,112.16,447.06,111.89,446.84,111.63Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M438.79,104.35c.33.23.64.47,1,.7C439.44,104.82,439.13,104.58,438.79,104.35Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M434.7,101.77c.37.21.72.43,1.08.64C435.42,102.2,435.07,102,434.7,101.77Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M430.15,99.41l1.18.58Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M405,91.93l1.61.28Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M440.66,105.72c.31.24.6.49.9.73C441.27,106.2,441,106,440.66,105.72Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M445.5,110.09c.24.26.46.53.69.79C446,110.62,445.74,110.35,445.5,110.09Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M444,108.58c.27.26.52.53.78.79C444.54,109.11,444.29,108.84,444,108.58Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M442.41,107.13c.3.25.57.51.85.77C443,107.64,442.7,107.38,442.41,107.13Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M436.8,103c.35.22.68.45,1,.68C437.49,103.49,437.16,103.26,436.8,103Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M427.72,98.32l1.23.55Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M411.17,93.1l1.51.35Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M414.14,93.8l1.48.39Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M408.12,92.47l1.56.32Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M417,94.57l1.44.43Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M425.19,97.28l1.29.53Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M422.56,96.31l1.34.49Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M419.84,95.41l1.4.46Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M432.48,100.57l1.13.61Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.19,90.35l1.64,0-1.64,0" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M448,113.21c.2.28.37.57.56.85C448.41,113.77,448.24,113.49,448,113.21Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M451.34,119.87c.1.35.18.71.26,1.06C451.52,120.58,451.44,120.22,451.34,119.87Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M450.75,118.16c.13.32.23.65.34,1C451,118.81,450.88,118.48,450.75,118.16Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M449.1,114.82c.18.3.33.6.49.9C449.43,115.42,449.27,115.12,449.1,114.82Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M450,116.47c.15.31.28.63.42.94C450.28,117.1,450.15,116.79,450,116.47Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M452.11,125.17q0-.9-.09-1.79.09.89.09,1.79" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M451.76,121.61c.08.4.13.81.18,1.21C451.89,122.42,451.84,122,451.76,121.61Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M401.83,91.45l1.65.24Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M395.28,90.76l1.68.16Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M388.52,90.4l1.73.07Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M391.93,90.53l1.72.11Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M398.58,91.06l1.66.2Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.19,90.35l2.12,0q1.78,0,3.54.12t3.45.22q1.69.13,3.36.3t3.28.38c1.08.14,2.16.28,3.21.44s2.09.34,3.12.53,2,.39,3,.61,2,.44,3,.68,2,.48,2.9.75,1.91.53,2.84.81,1.87.57,2.77.88,1.8.63,2.68,1,1.76.68,2.6,1,1.7.73,2.53,1.12,1.65.79,2.45,1.19,1.59.84,2.36,1.28,1.54.9,2.28,1.36,1.48,1,2.19,1.45,1.42,1,2.09,1.54,1.35,1.09,2,1.65,1.27,1.17,1.86,1.77,1.19,1.26,1.73,1.9,1.09,1.36,1.57,2.05a25.3,25.3,0,0,1,1.39,2.23,22.33,22.33,0,0,1,1.17,2.45,20.07,20.07,0,0,1,.88,2.73,18.69,18.69,0,0,1,.49,3.11c0,.41.06.81.06,1.22"
                    fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M452.11,125.17q0-.9-.09-1.79c0-.19-.06-.37-.08-.55-.05-.41-.1-.81-.18-1.21,0-.23-.11-.45-.17-.68s-.16-.71-.26-1.06-.17-.49-.25-.74-.21-.65-.34-1-.22-.49-.33-.74-.27-.63-.42-.94-.28-.5-.41-.75-.31-.6-.49-.9-.33-.51-.5-.76-.36-.57-.56-.85-.39-.52-.59-.78-.39-.54-.61-.8-.43-.5-.65-.75-.45-.53-.69-.79-.47-.47-.7-.71-.51-.53-.78-.79-.51-.46-.76-.69-.56-.52-.85-.77-.56-.45-.84-.68-.59-.49-.9-.73-.6-.44-.91-.66-.63-.47-1-.7-.64-.43-1-.64-.67-.46-1-.68l-1-.62c-.36-.22-.71-.43-1.08-.64l-1.09-.59-1.13-.61-1.15-.57-1.18-.58-1.2-.54-1.23-.55-1.24-.51-1.29-.53-1.29-.48-1.34-.49-1.32-.44-1.4-.46L418.47,95,417,94.57l-1.41-.38-1.48-.39-1.46-.34-1.51-.35-1.49-.31-1.56-.32-1.51-.27L405,91.93l-1.54-.23-1.65-.24-1.58-.19-1.66-.2L397,90.91l-1.68-.16-1.64-.11-1.72-.11-1.67-.07-1.73-.07-1.7,0-1.64,0"
                    fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M452,123.94a18.69,18.69,0,0,0-.49-3.11" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M449.47,115.66a25.3,25.3,0,0,0-1.39-2.23" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M448.08,113.43c-.48-.69-1-1.38-1.57-2.05" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M442.93,107.71c-.63-.56-1.29-1.11-2-1.65" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M441,106.06c-.67-.53-1.37-1-2.09-1.54" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M438.86,104.51c-.7-.49-1.44-1-2.19-1.45" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M434.4,101.7q-1.15-.65-2.36-1.28" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M432,100.42q-1.19-.61-2.45-1.19" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M429.59,99.23c-.82-.38-1.67-.75-2.53-1.12" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M424.46,97.07c-.88-.33-1.77-.65-2.68-1" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M419,95.23c-.93-.29-1.88-.55-2.84-.81" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M407.26,92.38c-1-.19-2.07-.37-3.12-.53" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M394.29,90.72q-1.71-.13-3.45-.22" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M390.85,90.5q-1.76-.09-3.54-.12" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M397.65,91q-1.67-.17-3.36-.3" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M416.18,94.41c-1-.26-1.93-.51-2.9-.75" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M387.3,90.38l-2.12,0v34.4" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M404.14,91.84c-1.06-.17-2.14-.3-3.21-.44" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M400.93,91.4q-1.62-.21-3.28-.38" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M410.3,93q-1.5-.32-3-.61" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M413.28,93.67c-1-.24-2-.46-3-.68" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M421.78,96.11c-.9-.31-1.84-.59-2.77-.88" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M427.07,98.11c-.85-.36-1.72-.7-2.6-1" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M436.68,103.06c-.74-.46-1.5-.92-2.28-1.36" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M444.79,109.48c-.59-.6-1.21-1.19-1.86-1.77" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M446.51,111.38c-.54-.64-1.12-1.28-1.73-1.9" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M450.64,118.1a22.33,22.33,0,0,0-1.17-2.45" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M451.52,120.83a20.07,20.07,0,0,0-.88-2.73" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M416.18,94.41l-31,30.33v.41h67.05" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M427.07,98.11l-27.63,27" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M395.77,125.16l28.7-28.09" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M424.46,97.07l-28.7,28.09" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M399.43,125.16l27.63-27" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M448.08,113.43l-12,11.73" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M439.77,125.16l9.71-9.5" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M446.51,111.38l-14.08,13.78" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M436.1,125.16l12-11.73" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M441,106.06l-19.52,19.1" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M425.1,125.16l17.83-17.45" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M438.86,104.51l-21.1,20.65" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M421.43,125.16,441,106.06" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M436.68,103.06l-22.58,22.1" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M417.77,125.16l21.1-20.65" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M432,100.42l-25.27,24.74" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M410.43,125.16l24-23.46" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M429.59,99.23,403.1,125.16" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M406.77,125.16,432,100.42" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M403.1,125.16l26.49-25.93" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M434.4,101.7l-24,23.46" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M414.1,125.16l22.58-22.1" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M442.93,107.71,425.1,125.16" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M428.77,125.16l16-15.68" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M444.79,109.48l-16,15.68" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M432.43,125.16l14.08-13.78" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M449.47,115.66l-9.71,9.5" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M443.43,125.16l7.21-7.06" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M450.64,118.1l-7.21,7.06" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="451.52" y1="120.7" x2="446.97" y2="125.15" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="452.01" y1="123.75" x2="450.54" y2="125.18" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M385.19,92.45l2.12-2.07" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M421.78,96.11,392.1,125.16" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M416.18,94.41l-31,30.33" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M388.43,125.16,419,95.23" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M404.14,91.84l-19,18.55" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.19,114l22.08-21.61" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.19,99.63l9.11-8.91" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.19,96l5.66-5.54" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M394.29,90.72l-9.11,8.91" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.19,103.22,397.65,91" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M413.28,93.67l-28.09,27.49" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M400.93,91.4l-15.74,15.41" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.19,110.39l19-18.55" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M397.65,91l-12.46,12.2" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.19,106.81,400.93,91.4" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M407.26,92.38,385.19,114" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.19,117.57,410.3,93" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M410.3,93l-25.12,24.58" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.19,121.16l28.09-27.49" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M419,95.23l-30.58,29.93" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M392.1,125.16l29.68-29.05" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <text transform="translate(396.61 110.87)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(407 115.54)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
            </g>
            <g id="leftstackfourbottom">
                <path d="M385,245.4c37.09,0,67.16-15.59,67.16-34.82v-45.5c0,19.23-30.07,34.82-67.16,34.82Z" fill="#4abb63" stroke="#33a44c"
                    stroke-miterlimit="10" stroke-width="0.25" />
            </g>
            <g id="leftstackfourtop">
                <path d="M384.94,166.83v33.1s29.5.28,47.5-10.47c0,0,18.45-8,19.47-24.36H385Z" fill="#63d27b" />
                <path d="M451.86,165.09h0" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="450.56" y1="165.09" x2="446.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="446.89" y1="165.09" x2="450.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="435.89" y1="165.09" x2="439.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="439.56" y1="165.09" x2="435.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="432.22" y1="165.09" x2="435.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="435.89" y1="165.09" x2="432.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="421.22" y1="165.09" x2="424.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="424.89" y1="165.09" x2="421.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M385,197v2.94" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="421.22" y1="165.09" x2="417.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="417.56" y1="165.09" x2="421.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M385,199.91V197" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="413.89" y1="165.09" x2="417.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="193.39" x2="384.98" y2="196.97" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="417.56" y1="165.09" x2="413.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="196.97" x2="384.98" y2="193.39" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="406.56" y1="165.09" x2="410.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="186.21" x2="384.98" y2="189.8" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="410.22" y1="165.09" x2="406.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="189.8" x2="384.98" y2="186.21" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="182.62" x2="384.98" y2="186.21" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="406.56" y1="165.09" x2="402.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="402.89" y1="165.09" x2="406.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="186.21" x2="384.98" y2="182.62" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="182.62" x2="384.98" y2="179.03" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="179.03" x2="384.98" y2="182.62" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="402.89" y1="165.09" x2="399.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="399.22" y1="165.09" x2="402.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="175.44" x2="384.98" y2="171.85" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="171.85" x2="384.98" y2="175.44" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="395.56" y1="165.09" x2="391.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="391.89" y1="165.09" x2="395.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="168.26" x2="384.98" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="165.09" x2="388.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <polyline points="388.22 165.09 384.98 165.09 384.98 168.26" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="171.85" x2="384.98" y2="168.26" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="168.26" x2="384.98" y2="171.85" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="391.89" y1="165.09" x2="388.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="388.22" y1="165.09" x2="391.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="395.56" y1="165.09" x2="399.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="175.44" x2="384.98" y2="179.03" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="399.22" y1="165.09" x2="395.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="179.03" x2="384.98" y2="175.44" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="193.39" x2="384.98" y2="189.8" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="410.22" y1="165.09" x2="413.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.98" y1="189.8" x2="384.98" y2="193.39" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="413.89" y1="165.09" x2="410.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="428.56" y1="165.09" x2="424.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="424.89" y1="165.09" x2="428.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="432.22" y1="165.09" x2="428.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="428.56" y1="165.09" x2="432.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="443.22" y1="165.09" x2="439.56" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="439.56" y1="165.09" x2="443.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="446.89" y1="165.09" x2="443.22" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="443.22" y1="165.09" x2="446.89" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M450.55,165.1h1.7" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M419.63,194.86l-1.36.41Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M413.93,196.47l-1.43.34Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M416.82,195.7l-1.39.37Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M443.81,181.68c-.24.23-.51.46-.76.69C443.31,182.14,443.57,181.91,443.81,181.68Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M447.84,177.06c-.18.26-.39.51-.58.76C447.45,177.57,447.65,177.31,447.84,177.06Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M446.63,178.64c-.2.25-.43.49-.64.73C446.21,179.13,446.43,178.88,446.63,178.64Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M411,197.16l-1.49.31Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M404.8,198.34l-1.54.23Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M388.2,199.87l-1.07,0Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M445.29,180.18c-.22.24-.47.47-.7.71C444.82,180.65,445.07,180.42,445.29,180.18Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M407.91,197.79l-1.51.27Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M434.49,188.49l-1.09.59Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M432.27,189.7l-1.13.56Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M429.94,190.85l-1.16.52Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M427.51,191.95l-1.2.49Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M436.6,187.23l-1,.61Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M425,193l-1.24.46Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M398.38,199.2l-1.6.15Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M438.59,185.91l-.95.63C438,186.33,438.28,186.12,438.59,185.91Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M422.35,194l-1.3.43Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M442.2,183.14c-.26.23-.55.45-.82.67C441.65,183.58,441.93,183.36,442.2,183.14Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M440.45,184.55c-.29.22-.59.43-.89.65C439.86,185,440.17,184.77,440.45,184.55Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M401.62,198.81,400,199Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M391.72,199.73l-1.67.07Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M395.07,199.51l-1.62.11Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M451.81,166.89c0,.19-.06.37-.08.55C451.76,167.25,451.8,167.07,451.81,166.89Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M449.79,173.79c-.12.25-.27.49-.4.74C449.52,174.28,449.67,174,449.79,173.79Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M450.54,172.11c-.1.24-.22.48-.32.73C450.32,172.59,450.44,172.35,450.54,172.11Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M451.13,170.39c-.07.24-.17.48-.25.72C451,170.87,451.06,170.64,451.13,170.39Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M451.56,168.65c0,.22-.11.44-.16.67C451.44,169.1,451.51,168.88,451.56,168.65Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M448.89,175.44c-.15.26-.33.51-.5.76C448.56,175.95,448.73,175.7,448.89,175.44Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M387.14,199.89h-.52l1.7,0h-.11Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M451.39,169.32c-.08.36-.16.72-.26,1.07C451.23,170,451.31,169.68,451.39,169.32Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M449.39,174.53c-.16.3-.32.61-.5.91C449.07,175.14,449.22,174.83,449.39,174.53Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M450.22,172.83c-.14.32-.27.64-.43,1C449.95,173.47,450.08,173.15,450.22,172.83Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M450.88,171.12c-.11.33-.21.66-.34,1C450.67,171.78,450.77,171.45,450.88,171.12Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M448.39,176.2c-.18.28-.36.57-.56.85C448,176.78,448.21,176.49,448.39,176.2Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M447.26,177.82c-.21.27-.4.55-.62.82C446.85,178.37,447,178.09,447.26,177.82Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M446,179.37c-.23.27-.46.54-.7.81C445.54,179.91,445.76,179.64,446,179.37Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M451.73,167.44c-.05.41-.1.81-.18,1.21C451.63,168.25,451.68,167.85,451.73,167.44Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M451.9,165.1q0,.9-.09,1.79.09-.89.09-1.79" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M385,199.92l1.64,0H385" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M426.31,192.44,425,193Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M428.78,191.37l-1.27.57Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M423.73,193.44l-1.38.51Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M421,194.39l-1.42.47Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M431.14,190.26l-1.2.59Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M418.27,195.27l-1.44.43Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M433.4,189.08l-1.13.61Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M441.37,183.8c-.31.25-.6.5-.92.74C440.77,184.3,441.07,184.05,441.37,183.8Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M444.59,180.89c-.26.26-.51.53-.78.79C444.08,181.42,444.33,181.15,444.59,180.89Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M439.56,185.2c-.33.24-.64.48-1,.71C438.92,185.68,439.24,185.44,439.56,185.2Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M435.58,187.83c-.36.22-.72.44-1.09.66C434.86,188.28,435.22,188.05,435.58,187.83Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M437.64,186.54c-.35.23-.69.46-1,.69C437,187,437.29,186.77,437.64,186.54Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M415.43,196.07l-1.5.4Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M393.45,199.62l-1.74.11Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M396.77,199.35l-1.7.16Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M443.05,182.36c-.28.26-.56.52-.85.77C442.49,182.88,442.77,182.62,443.05,182.36Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M390,199.8l-1.73.07Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M406.41,198.06l-1.61.28Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M412.49,196.8l-1.53.36Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M400,199l-1.66.2Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M409.47,197.47l-1.56.32Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M403.26,198.57l-1.65.24Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.65,199.91h0Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.23,199.91h0Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M451.49,168.61v0Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M434.53,188.42l-.39.22Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M442.14,183.13l0,0Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M432.51,189.53l-.54.28Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M430,190.81l-.82.38Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M438.61,185.85l-.24.17Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M415.22,196.09c-1.58.42-3.2.8-4.84,1.15-1.49.32-3,.61-4.56.88s-2.88.47-4.35.67-2.77.35-4.17.49-2.66.24-4,.33-2.57.15-3.88.21-2.39.07-3.6.08l1.33,0,1.07,0a112.2,112.2,0,0,0,35.09-6.29q-1.4.51-2.85,1C418.75,195.11,417,195.61,415.22,196.09Z"
                    fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M427.89,191.75l-1.18.5Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.81,199.9h1.33Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M451.86,165.09a18.08,18.08,0,0,1-.19,2.49c0,.34-.11.68-.18,1v.06a19.71,19.71,0,0,1-1.15,3.81,29,29,0,0,1-8.19,10.64l0,0q-1.62,1.38-3.48,2.68l-.24.17q-1.81,1.25-3.83,2.41l-.39.22-.76.43-.88.46-.54.28c-.66.34-1.33.67-2,1l-.82.38-1.24.56-1.18.5-.41.17-.34.13q-1.16.47-2.36.91l-.3.11a112.2,112.2,0,0,1-35.09,6.29h.11l1.73-.07,1.67-.07,1.74-.11,1.62-.11,1.7-.16,1.6-.15L400,199l1.58-.19,1.65-.24,1.54-.23,1.61-.28,1.51-.27,1.56-.32,1.49-.31,1.53-.36,1.43-.34,1.5-.4,1.39-.37,1.44-.43,1.36-.41,1.42-.47,1.3-.43,1.38-.51L425,193l1.33-.54,1.2-.49,1.27-.57,1.16-.52,1.2-.59,1.13-.56,1.13-.61,1.09-.59c.37-.21.73-.44,1.09-.66l1-.61c.36-.23.7-.46,1-.69l.95-.63c.34-.23.65-.48,1-.71s.6-.43.89-.65.61-.5.92-.74.56-.44.82-.67.57-.51.85-.77.52-.45.76-.69.52-.53.78-.79.48-.47.7-.71.47-.54.7-.81.44-.49.64-.73.41-.54.62-.82.4-.51.58-.76.37-.57.56-.85.34-.51.5-.76.33-.61.5-.91.28-.49.4-.74.29-.64.43-1,.23-.48.32-.73.23-.66.34-1,.18-.48.25-.72.18-.72.26-1.07.12-.44.16-.67c.08-.4.13-.81.18-1.21,0-.19.06-.37.08-.55q.09-.89.09-1.79"
                    fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,199.91h0" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M426,192.55q-1.16.47-2.36.91Q424.79,193,426,192.55Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M415.22,196.09c1.78-.47,3.54-1,5.23-1.53" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M401.46,198.79c1.47-.2,2.92-.42,4.35-.67" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M397.29,199.28q2.11-.21,4.17-.49" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.65,199.91h0Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.65,199.91h.16c1.21,0,2.41,0,3.6-.08" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M385,199.91h0" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,199.91h.67" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M389.4,199.82c1.3-.05,2.6-.12,3.88-.21" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M393.28,199.61c1.35-.09,2.69-.2,4-.33" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M405.81,198.12c1.54-.27,3.07-.56,4.56-.88" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M410.37,197.24c1.64-.36,3.27-.73,4.84-1.15" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M426,192.55l.34-.13h0Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M423.59,193.47l-.3.11Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M451.64,167.62a18.4,18.4,0,0,0,.19-2.52" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M420.44,194.56q1.45-.48,2.85-1l.3-.11q1.2-.44,2.36-.91l.35-.14" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M451.83,165.1a18.4,18.4,0,0,1-.19,2.52l0,0a18.08,18.08,0,0,0,.19-2.49Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M450.28,172.53a19.92,19.92,0,0,0,1.2-3.86v-.06c.06-.33.1-.66.15-1" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M426.31,192.41l.4-.16,1.18-.5,1.24-.56.82-.38q1-.49,2-1l.54-.28.92-.5" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M451.49,168.61c.07-.34.13-.68.18-1l0,0C451.59,167.95,451.56,168.28,451.49,168.61Z" fill="none" stroke="#33a44c"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M432,189.81q-1,.51-2,1C430.64,190.49,431.31,190.15,432,189.81Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M432.51,189.53l.88-.46,0,0Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M426.3,192.42l.41-.17-.4.16Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M450.33,172.48a19.71,19.71,0,0,0,1.15-3.81,19.92,19.92,0,0,1-1.2,3.86Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M429.13,191.19l-1.24.56Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M438.37,186q-1.81,1.25-3.83,2.41Q436.55,187.26,438.37,186Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M433.39,189.07l.76-.43-.72.39Z" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M442.09,183.17c-1.08.92-2.25,1.81-3.48,2.68Q440.46,184.55,442.09,183.17Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M442.14,183.13a29,29,0,0,0,8.19-10.64l-.05.05A29,29,0,0,1,442.14,183.13Z" fill="none" stroke="#33a44c" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M433.42,189l.72-.39.39-.22q2-1.16,3.83-2.41l.24-.17c1.24-.86,2.4-1.76,3.48-2.68l0,0a29,29,0,0,0,8.14-10.59" fill="none"
                    stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M420.43,194.56l30.12-29.47" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M446.88,165.09l-31.67,31" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M405.8,198.12l33.75-33" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M435.88,165.09l-34.43,33.7" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M401.45,198.79l34.43-33.7" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M432.21,165.09l-34.94,34.19" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M389.39,199.82l35.49-34.73" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M421.21,165.09l-35.57,34.82" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="417.54" y1="165.09" x2="384.96" y2="196.97" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M385.64,199.91l35.57-34.82" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="413.88" y1="165.09" x2="384.96" y2="193.39" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.96" y1="196.97" x2="417.54" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="406.54" y1="165.09" x2="384.96" y2="186.21" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.96" y1="189.8" x2="410.21" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.96" y1="186.21" x2="406.54" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="410.21" y1="165.09" x2="384.96" y2="189.8" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.96" y1="193.39" x2="413.88" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M393.27,199.61l35.28-34.53" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M424.88,165.09l-35.49,34.73" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M397.28,199.28l34.94-34.19" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M428.54,165.09l-35.28,34.53" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M410.36,197.24l32.85-32.15" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M439.54,165.09l-33.75,33" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M415.2,196.09l31.67-31" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M443.21,165.09l-32.85,32.15" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M426.3,192.41l25.33-24.79" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M450.5,165.14l-30.07,29.42" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M451.63,167.62,426.3,192.41" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M433.41,189l16.86-16.5" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M450.27,172.53,433.41,189" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="402.88" y1="165.09" x2="384.96" y2="182.62" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.96" y1="182.62" x2="402.88" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <text transform="translate(399.5 187.67)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
                <text transform="translate(410.17 185.17)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
                <line x1="399.21" y1="165.09" x2="384.96" y2="179.03" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="391.88" y1="165.09" x2="384.96" y2="171.85" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.96" y1="175.44" x2="395.54" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.96" y1="168.26" x2="388.21" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="388.21" y1="165.09" x2="384.96" y2="168.26" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.96" y1="171.85" x2="391.88" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="395.54" y1="165.09" x2="384.96" y2="175.44" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.96" y1="179.03" x2="399.21" y2="165.09" fill="none" stroke="#33a44c" stroke-miterlimit="10" stroke-width="0.25"
                />
            </g>
            <g id="leftstackonebottom">
                <rect x="317.68" y="110" width="67.71" height="95.04" fill="#72a7a7" />
            </g>
            <g id="leftstackonetop">
                <path d="M385.15,75.68v34.8H317.77s-2-18.76,32.24-29.89C350,80.6,363.89,75.64,385.15,75.68Z" fill="#e1eaea" />
                <line x1="385.14" y1="110" x2="384.72" y2="110.42" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="384.72" y1="110.42" x2="385.14" y2="110" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="95.65" x2="370.05" y2="110.42" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="373.72" y1="110.42" x2="385.14" y2="99.24" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="81.29" x2="355.39" y2="110.42" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="359.05" y1="110.42" x2="385.14" y2="84.88" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="355.39" y1="110.42" x2="385.14" y2="81.29" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="77.71" x2="351.72" y2="110.42" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="362.72" y1="110.42" x2="385.14" y2="88.47" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="351.72" y1="110.42" x2="385.14" y2="77.71" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="92.06" x2="366.39" y2="110.42" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="370.05" y1="110.42" x2="385.14" y2="95.65" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="88.47" x2="362.72" y2="110.42" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="366.39" y1="110.42" x2="385.14" y2="92.06" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="99.24" x2="373.72" y2="110.42" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="377.39" y1="110.42" x2="385.14" y2="102.83" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="102.83" x2="377.39" y2="110.42" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="381.05" y1="110.42" x2="385.14" y2="106.42" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="106.42" x2="381.05" y2="110.42" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M319.55,102.42l15.87-15.54" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M335.43,86.88l-15.87,15.54" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M318,107.53l24.72-24.19" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M342.72,83.34,318,107.53" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M348.65,81.12l-29.93,29.3" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M318.72,110.42l29.93-29.3" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M322.39,110.42l31.56-30.89" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M326.05,110.42l32.79-32.09" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M358.84,78.32l-32.79,32.09" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M363.42,77.43l-33.7,33" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M329.72,110.42l33.7-33" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M367.79,76.75l-34.4,33.67" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M333.39,110.42l34.4-33.67" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M337.05,110.42,372,76.25" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372,76.25l-34.9,34.16" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376,75.92l-35.25,34.5" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M340.72,110.42,376,75.92" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M344.39,110.42l35.46-34.71" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M379.85,75.71l-35.46,34.71" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M348.05,110.42l35.55-34.8" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="385.14" y1="110" x2="385.14" y2="110.42" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="110.42" x2="385.14" y2="110" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="99.24" x2="385.14" y2="95.65" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="84.88" x2="385.14" y2="81.29" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="77.71" x2="385.14" y2="81.29" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="84.88" x2="385.14" y2="88.47" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="92.06" x2="385.14" y2="95.65" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="92.06" x2="385.14" y2="88.47" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="102.83" x2="385.14" y2="99.24" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="106.42" x2="385.14" y2="102.83" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="110" x2="385.14" y2="106.42" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M317.71,110.42a18.43,18.43,0,0,1,.24-2.84,19.85,19.85,0,0,1,1.53-5.09c2.67-5.95,8.28-11.31,16-15.65a69.6,69.6,0,0,1,7.27-3.53l1.31-.52,1-.39,1.56-.57,1.39-.49.68-.24.84-.26,1.09-.34,1.6-.48,1.2-.34.57-.16,1.45-.38.49-.13c1-.24,1.95-.48,2.94-.7l.81-.16q1.66-.35,3.36-.65l.4-.08.39-.06q1.64-.28,3.32-.52l.66-.1.21,0q1.88-.25,3.8-.45l.16,0,.46,0q1.68-.16,3.38-.28h.41q1.73-.12,3.49-.19H380q1.76-.07,3.55-.09h.08c-36.52.34-65.92,15.79-65.92,34.81"
                    fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372,76.25l-.16,0H372Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M368,76.71l-.21,0h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M379.85,75.71h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376.21,75.9H376Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M380,75.7h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M383.61,75.62h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M383.61,75.62h0l1.23,0h0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372.42,76.21l-.46,0h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376,75.91h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M349.51,80.83l-.84.26,0,0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M354,79.51l-.57.16.56-.15Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M350.6,80.49l1.6-.48Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M355.42,79.13l-1.45.38h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M358.85,78.31c-1,.22-2,.45-2.94.7q1.45-.36,2.93-.69Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M363.82,77.36l-.39.06h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M367.79,76.74l-.66.1.65-.1Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M319.48,102.49l.07-.07c2.68-5.9,8.23-11.22,15.87-15.54l.05,0" fill="none" stroke="#72a8a7" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M342.72,83.34l0,0a69.6,69.6,0,0,0-7.27,3.53l-.05,0A69.43,69.43,0,0,1,342.72,83.34Z" fill="none" stroke="#72a8a7"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M319.55,102.42l-.07.07a19.85,19.85,0,0,0-1.53,5.09l0,0A19.89,19.89,0,0,1,319.55,102.42Z" fill="none" stroke="#72a8a7"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M344.06,82.79l-1.31.52,0,0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M317.75,110.42a18.42,18.42,0,0,1,.25-2.89l0,0a18.43,18.43,0,0,0-.24,2.84" fill="none" stroke="#72a8a7" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M345,82.4l1.56-.57Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M348.67,81.1l-.68.24.66-.22Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M363.43,77.42l-.4.08.39-.07Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M359.67,78.15l-.81.16h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.14,75.6h0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.14,75.6h0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.14,75.6h0v2.1" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <circle cx="384.91" cy="75.6" r="0.01" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M363.82,77.36q1.64-.28,3.32-.52Q365.46,77.08,363.82,77.36Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M368,76.71q1.88-.25,3.8-.45Q369.88,76.47,368,76.71Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M344.06,82.79l1-.39Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M352.19,80l1.2-.34Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M346.6,81.83l1.39-.49Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M359.67,78.15c1.11-.23,2.23-.45,3.36-.65Q361.33,77.8,359.67,78.15Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M355.42,79.13l.49-.13Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372.42,76.21q1.68-.16,3.38-.28Q374.09,76,372.42,76.21Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M383.52,75.62q-1.79,0-3.55.09" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376.21,75.9q1.73-.12,3.49-.19Q377.94,75.78,376.21,75.9Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M349.51,80.83l1.09-.34Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M368,76.71l-.22,0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372,76.25h-.16" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376.21,75.9l-.24,0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M379.85,75.71h-.14" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M380,75.7h-.13" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M383.61,75.62h-.08" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M384.9,75.6h0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372.42,76.21l-.46,0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376,75.92h-.17" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M350.6,80.49l-1.09.34-.86.28" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M353.95,79.52l-.56.15-1.2.34" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M355.42,79.13l-1.47.39" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M363.82,77.36l-.4.07" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M367.79,76.75l-.65.1" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M319.55,102.42a19.89,19.89,0,0,0-1.55,5.11" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M317.75,110.42h67.39" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M345,82.4l-1,.39-1.34.55" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M348.65,81.12l-.66.22" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M359.67,78.15l-.82.17" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M363.42,77.43l-.39.07" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="385.14" y1="110" x2="385.14" y2="110.42" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="110.42" x2="385.14" y2="110" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="99.24" x2="385.14" y2="95.65" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="84.88" x2="385.14" y2="81.29" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="77.71" x2="385.14" y2="81.29" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="84.88" x2="385.14" y2="88.47" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="92.06" x2="385.14" y2="95.65" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="92.06" x2="385.14" y2="88.47" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="102.83" x2="385.14" y2="99.24" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="106.42" x2="385.14" y2="102.83" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="385.14" y1="110" x2="385.14" y2="106.42" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M317.71,110.42a18.43,18.43,0,0,1,.24-2.84,19.85,19.85,0,0,1,1.53-5.09c2.67-5.95,8.28-11.31,16-15.65a69.6,69.6,0,0,1,7.27-3.53l1.31-.52,1-.39,1.56-.57,1.39-.49.68-.24.84-.26,1.09-.34,1.6-.48,1.2-.34.57-.16,1.45-.38.49-.13c1-.24,1.95-.48,2.94-.7l.81-.16q1.66-.35,3.36-.65l.4-.08.39-.06q1.64-.28,3.32-.52l.66-.1.21,0q1.88-.25,3.8-.45l.16,0,.46,0q1.68-.16,3.38-.28h.41q1.73-.12,3.49-.19H380q1.76-.07,3.55-.09h.08c-36.52.34-65.92,15.79-65.92,34.81"
                    fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372,76.25l-.16,0H372Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M368,76.71l-.21,0h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M379.85,75.71h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376.21,75.9H376Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M380,75.7h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M383.61,75.62h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M383.61,75.62h0l1.23,0h0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372.42,76.21l-.46,0h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376,75.91h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M349.51,80.83l-.84.26,0,0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M354,79.51l-.57.16.56-.15Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M350.6,80.49l1.6-.48Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M355.42,79.13l-1.45.38h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M358.85,78.31c-1,.22-2,.45-2.94.7q1.45-.36,2.93-.69Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M363.82,77.36l-.39.06h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M367.79,76.74l-.66.1.65-.1Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M319.48,102.49l.07-.07c2.68-5.9,8.23-11.22,15.87-15.54l.05,0" fill="none" stroke="#72a8a7" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M342.72,83.34l0,0a69.6,69.6,0,0,0-7.27,3.53l-.05,0A69.43,69.43,0,0,1,342.72,83.34Z" fill="none" stroke="#72a8a7"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M319.55,102.42l-.07.07a19.85,19.85,0,0,0-1.53,5.09l0,0A19.89,19.89,0,0,1,319.55,102.42Z" fill="none" stroke="#72a8a7"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M344.06,82.79l-1.31.52,0,0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M317.75,110.42a18.42,18.42,0,0,1,.25-2.89l0,0a18.43,18.43,0,0,0-.24,2.84" fill="none" stroke="#72a8a7" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M345,82.4l1.56-.57Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M348.67,81.1l-.68.24.66-.22Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M363.43,77.42l-.4.08.39-.07Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M359.67,78.15l-.81.16h0Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.14,75.6h0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.14,75.6h0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385.14,75.6h0v2.1" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <circle cx="384.91" cy="75.6" r="0.01" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M363.82,77.36q1.64-.28,3.32-.52Q365.46,77.08,363.82,77.36Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M368,76.71q1.88-.25,3.8-.45Q369.88,76.47,368,76.71Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M344.06,82.79l1-.39Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M352.19,80l1.2-.34Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M346.6,81.83l1.39-.49Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M359.67,78.15c1.11-.23,2.23-.45,3.36-.65Q361.33,77.8,359.67,78.15Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M355.42,79.13l.49-.13Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372.42,76.21q1.68-.16,3.38-.28Q374.09,76,372.42,76.21Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M383.52,75.62q-1.79,0-3.55.09" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376.21,75.9q1.73-.12,3.49-.19Q377.94,75.78,376.21,75.9Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M349.51,80.83l1.09-.34Z" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M368,76.71l-.22,0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372,76.25h-.16" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376.21,75.9l-.24,0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M379.85,75.71h-.14" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M380,75.7h-.13" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M383.61,75.62h-.08" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M384.9,75.6h0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M372.42,76.21l-.46,0" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M376,75.92h-.17" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M350.6,80.49l-1.09.34-.86.28" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M353.95,79.52l-.56.15-1.2.34" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M355.42,79.13l-1.47.39" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M363.82,77.36l-.4.07" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M367.79,76.75l-.65.1" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M319.55,102.42a19.89,19.89,0,0,0-1.55,5.11" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M317.75,110.42h67.39" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M345,82.4l-1,.39-1.34.55" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M348.65,81.12l-.66.22" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M359.67,78.15l-.82.17" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M363.42,77.43l-.39.07" fill="none" stroke="#72a8a7" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M318.73,110.49l29.93-29.3" fill="none" stroke="#83a8a8" stroke-miterlimit="10" stroke-width="0.25" />
                <text transform="translate(346.64 100.54)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(358.31 96.87)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
            </g>
            <g id="leftstackthreebottom">
                <path d="M318,210.54c0,19.2,30.1,34.76,67.27,34.82v-75c-37.17-.06-67.27-15.62-67.27-34.82Z" fill="#00c5a5" />
            </g>
            <g id="leftstackthreetop">
                <path d="M384.92,135.65l.19,35.35s-30.54.32-50.15-12c0,0-16.62-8.83-16.84-23.42Z" fill="#00debe" />
                <path d="M318.2,136.52l.92-.92" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M322.75,135.6l-4.23,3.93" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M319.4,142.37l7-6.76" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M326.39,135.6l-7,6.87" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M330,135.6,320.5,145" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M320.5,145,330,135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M333.67,135.6l-11.74,11.73" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M321.94,147.33l11.74-11.73" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M323.47,149.44l13.84-13.84" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M337.31,135.6l-13.84,13.84" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M341,135.6l-15.78,15.77" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M325.18,151.37,341,135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M335.61,159.41l23.54-23.81" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M355.51,135.6,333.36,158" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M327.07,153.25l17.52-17.64" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M344.59,135.6l-17.52,17.64" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M329.11,155l19.12-19.35" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M351.87,135.6l-20.74,21" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M333.34,158.08l22.17-22.47" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M338,160.78l24.76-25.18" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M359.15,135.6l-23.54,23.81" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M348.23,135.6,329,155.06" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M331.13,156.56l20.74-21" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M362.79,135.6,338,160.78" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,167.92l-2.95,2.95" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M382.1,170.87l3-3.07" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,164.29l-6.46,6.46" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M375.16,170.53l9.89-9.88" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,157l-13.22,13.21" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M371.82,170.22,385,157" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,153.37l-16.27,16.49" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M368.78,169.87,385,153.37" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,149.74l-19.44,19.67" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M362.59,168.89,385,146.1" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M365.61,169.41,385,149.74" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,146.1l-22.46,22.79" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M378.58,170.75l6.55-6.59" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,160.65l-9.89,9.88" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,142.46l-25.39,25.82" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M356.63,167.64,385,138.82" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M384.63,135.6l-31.15,31.13" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M350.68,165.89,381,135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M353.48,166.73l31.15-31.13" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M381,135.6l-30.31,30.29" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M359.65,168.28,385,142.46" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,138.82l-28.41,28.81" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M345.3,164l28.41-28.39" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M370.07,135.6l-27,27.53" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M343.09,163.14l27-27.53" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M366.43,135.6,340.53,162" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M340.53,162l25.9-26.39" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M348,165l29.39-29.38" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M373.71,135.6,345.3,164" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M377.35,135.6,348,165" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M318.09,135.61c0,19.49,29.84,35.29,66.66,35.29h0c-.9,0-1.79,0-2.68,0h0c-25.58-.54-47.43-8.72-57.69-20.34-.32-.36-.64-.72-.94-1.09l-.06-.08-.05-.07c-.36-.45-.69-.9-1-1.36l-.24-.34-.18-.26c-.27-.41-.53-.81-.77-1.23l0,0c-.2-.34-.39-.67-.57-1s-.2-.4-.3-.6l0-.06c-.3-.61-.58-1.22-.82-1.84a20.31,20.31,0,0,1-.83-2.81,19.12,19.12,0,0,1-.43-3.21c0-.32,0-.63,0-.95h0"
                    fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M382.1,170.87c.89,0,1.78,0,2.68,0h0c-.9,0-1.79,0-2.68,0Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M323.35,149.3c-.36-.45-.69-.9-1-1.36C322.66,148.4,323,148.85,323.35,149.3Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M323.41,149.37l.06.08h0Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M321.93,147.34l.18.26-.17-.27Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M323.47,149.44c.3.37.61.73.94,1.09-.32-.36-.64-.72-.93-1.09Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M318.62,139.73l0,0a20.31,20.31,0,0,0,.83,2.81l0,0A20.41,20.41,0,0,1,318.62,139.73Z" fill="none" stroke="#00c1a1"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M321.16,146.12c.24.41.5.82.77,1.23h0C321.67,146.93,321.4,146.53,321.16,146.12Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M320.57,145.06c.18.34.37.68.57,1-.2-.34-.37-.68-.55-1Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M318.12,135.6h0" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M318.15,135.61h0c0,.32,0,.63,0,.95l0,0C318.18,136.22,318.15,135.92,318.15,135.61Z" fill="none" stroke="#00c1a1"
                    stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M320.27,144.47c.1.2.19.4.3.6l0,0C320.48,144.85,320.37,144.66,320.27,144.47Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M319.43,142.57c.24.62.52,1.23.82,1.84-.3-.61-.56-1.24-.79-1.86Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <path d="M385,170.9h0" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M384.78,170.91h0Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M385,170.9h0" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M375.16,170.53c-1.12-.09-2.23-.19-3.33-.3s-2.18-.25-3.25-.39-2.12-.3-3.17-.47-2.07-.35-3.09-.55-2-.4-3-.62-2-.45-2.94-.7-1.93-.5-2.87-.77-1.88-.55-2.8-.84-1.83-.6-2.73-.91-1.78-.65-2.65-1-1.73-.7-2.58-1.06-1.68-.75-2.5-1.14-1.63-.8-2.42-1.22-1.58-.85-2.34-1.3-1.52-.91-2.26-1.38-1.46-1-2.16-1.48-1.4-1-2.06-1.57-1.33-1.11-2-1.68-1.26-1.19-1.84-1.8l-.77-.84c10.26,11.62,32.11,19.79,57.69,20.34q-1.77,0-3.51-.12C377.43,170.69,376.29,170.62,375.16,170.53Z"
                    fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M320.27,144.47l0-.06Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M321.16,146.12l0,0Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M322.34,147.94l-.24-.34Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M323.41,149.37l-.05-.07Z" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M382.1,170.87c.89,0,1.78,0,2.68,0H385" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M378.58,170.75q1.74.09,3.51.12h0" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M371.82,170.22c1.1.12,2.21.22,3.33.3" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M368.57,169.84c1.07.14,2.16.27,3.25.39" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M365.4,169.37c1,.17,2.1.33,3.17.47" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M359.29,168.2c1,.22,2,.43,3,.62" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M353.48,166.73c.95.27,1.9.53,2.87.77" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="385.04" y1="135.6" x2="384.63" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M384.63,135.6H385l.11,35.32-.36,0,.44,0" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="370.07" y1="135.6" x2="373.71" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="373.71" y1="135.6" x2="370.07" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M342.72,162.93c.84.36,1.7.72,2.58,1.06" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="337.31" y1="135.6" x2="333.67" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M321.94,147.33l.17.27.24.34c.32.46.66.91,1,1.36l.05.07.06.07" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <line x1="333.67" y1="135.6" x2="337.31" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="355.51" y1="135.6" x2="359.15" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="359.15" y1="135.6" x2="355.51" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M333.2,157.9c.73.47,1.48.93,2.26,1.38" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="340.95" y1="135.6" x2="344.59" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="344.59" y1="135.6" x2="340.95" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M325.18,151.37c.58.61,1.2,1.21,1.84,1.8" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="348.23" y1="135.6" x2="344.59" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M327,153.17q.94.86,2,1.68" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="344.59" y1="135.6" x2="348.23" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="351.87" y1="135.6" x2="355.51" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M331,156.43c.7.5,1.42,1,2.16,1.48" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="355.51" y1="135.6" x2="351.87" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="359.15" y1="135.6" x2="362.79" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="362.79" y1="135.6" x2="359.15" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M335.46,159.28q1.14.66,2.34,1.3" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M329,154.85c.66.53,1.35,1.06,2.06,1.57" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="351.87" y1="135.6" x2="348.23" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="348.23" y1="135.6" x2="351.87" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="340.95" y1="135.6" x2="337.31" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M323.47,149.44c.3.37.61.73.93,1.09l.77.84" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="337.31" y1="135.6" x2="340.95" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="319.12" y1="135.6" x2="322.75" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="322.75" y1="135.6" x2="319.12" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="326.39" y1="135.6" x2="322.75" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M318.62,139.73a20.41,20.41,0,0,0,.83,2.81" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="322.75" y1="135.6" x2="326.39" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="333.67" y1="135.6" x2="330.03" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M320.58,145c.18.34.35.69.55,1l0,0c.24.41.51.81.78,1.22" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="330.03" y1="135.6" x2="333.67" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M318.15,135.6h1" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M319.12,135.6h-1c0,.3,0,.61,0,.91" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="330.03" y1="135.6" x2="326.39" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M319.45,142.55c.24.63.5,1.25.79,1.86l0,.06c.1.2.21.39.31.58" fill="none" stroke="#00c1a1" stroke-miterlimit="10"
                    stroke-width="0.25" />
                <line x1="326.39" y1="135.6" x2="330.03" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="366.43" y1="135.6" x2="370.07" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="370.07" y1="135.6" x2="366.43" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M340.22,161.8c.82.39,1.65.77,2.5,1.14" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="366.43" y1="135.6" x2="362.79" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M337.8,160.58c.79.41,1.6.82,2.42,1.22" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="362.79" y1="135.6" x2="366.43" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="373.71" y1="135.6" x2="377.35" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="377.35" y1="135.6" x2="373.71" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M345.3,164c.87.34,1.75.67,2.65,1" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="377.35" y1="135.6" x2="380.99" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <line x1="380.99" y1="135.6" x2="377.35" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M348,165c.9.31,1.8.62,2.73.91" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="384.63" y1="135.6" x2="380.99" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M350.68,165.89c.92.29,1.85.57,2.8.84" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <line x1="380.99" y1="135.6" x2="384.63" y2="135.6" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <path d="M356.35,167.5c1,.24,1.95.48,2.94.7" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M362.31,168.82c1,.19,2,.38,3.09.55" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25" />
                <path d="M375.16,170.53c1.13.09,2.27.16,3.42.22" fill="none" stroke="#00c1a1" stroke-miterlimit="10" stroke-width="0.25"
                />
                <text transform="translate(344.7 154.21)" font-size="18.11" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(356.75 157.54)" font-size="18.11" font-family="OpenSans, Open Sans">b</text>
            </g>
            <g id="rightstackonebottom">
                <rect x="477.84" y="109.9" width="66.79" height="100.12" fill="#ffb966" stroke="#ff9f4c" stroke-miterlimit="10" />
            </g>
            <g id="rightstackonetop">
                <path d="M477.84,110.06c0-19.19,30-34.76,67-34.81v34.81Z" fill="#ffd27f" stroke="#ff9f4c" stroke-miterlimit="10" />
                <text transform="translate(507.87 101.44)" font-size="18.11" fill="#ff9f4c" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(519.54 97.78)" font-size="18.11" fill="#ff9f4c" font-family="OpenSans, Open Sans">B</text>
            </g>
            <g id="rightstacktwobottom">
                <rect x="545.27" y="109.96" width="66.79" height="100.12" fill="#ffb966" stroke="#ff9f4c" stroke-miterlimit="10" />
            </g>
            <g id="rightstacktwotop">
                <path d="M545,75.25c37.09,0,67.16,15.59,67.16,34.82H545Z" fill="#ffd27f" stroke="#ff9f4c" stroke-miterlimit="10" />
                <text transform="translate(557.87 97.78)" font-size="18.11" fill="#ff9f4c" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(568.26 102.44)" font-size="18.11" fill="#ff9f4c" font-family="OpenSans, Open Sans">b</text>
            </g>
            <g id="rightstackthreebottom">
                <path d="M477.83,209.57c0,19.2,30,34.76,67,34.82v-99.5c-37-.06-67-15.62-67-34.82Z" fill="#ffb966" stroke="#ff9f4c" stroke-miterlimit="10"
                />
            </g>
            <g id="rightstackthreetop">
                <path d="M545,145.07c-37.09,0-67.16-15.59-67.16-34.82H545Z" fill="#ffd27f" stroke="#ff9f4c" stroke-miterlimit="10" />
                <text transform="translate(505.71 129.28)" font-size="18.11" fill="#ff9f4c" font-family="OpenSans, Open Sans">B</text>
                <text transform="translate(517.76 132.61)" font-size="18.11" fill="#ff9f4c" font-family="OpenSans, Open Sans">b</text>
            </g>
            <g id="rightstackfourbottom">
                <path d="M545,244.39c37.09,0,67.16-15.59,67.16-34.82v-45.5c0,19.23-30.07,34.82-67.16,34.82Z" fill="#ff8466" stroke="#ff6a4c"
                    stroke-miterlimit="10" />
            </g>
            <g id="rightstackfourtop">
                <path d="M544.79,163.56h67.36c0,19.23-30.07,34.82-67.16,34.82h-.2V163.56Z" fill="#ff9d7f" stroke="#ff6a4c" stroke-miterlimit="10"
                />
                <text transform="translate(560.76 187.61)" font-size="18.11" fill="#ff6a4c" font-family="OpenSans, Open Sans">b</text>
                <text transform="translate(571.43 185.11)" font-size="18.11" fill="#ff6a4c" font-family="OpenSans, Open Sans">b</text>
            </g>

        </svg>
    `;
  }

  render() {
    return html`
      <p>
        To use the punnet square simply add the appropriate alleles (B or b) to
        the squares. Each combination of alleles within a square represents a
        possible genotype of an individual offspring. Click on the play button
        to fill in the punnet square.
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
    this.__tltopl.play();
    this.__tltopr.play();
    this.__tlright.play();
  }

  reset() {
    this.__tl.progress(0);
    this.__tltopl.progress(0);
    this.__tltopr.progress(0);
    this.__tlright.progress(0);
    this.__tl.pause();
    this.__tltopl.pause();
    this.__tltopr.pause();
    this.__tlright.pause();
  }
}
customElements.define("monohybrid-element-4", MonohybridElement4);
export { MonohybridElement4 };
