/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, svg } from "lit-element/lit-element.js";
import "@eberlywc/eberlywc-animationctl-button/eberlywc-animationctl-button.js";

/**
 * `sucrose-element`
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
class SucroseElement extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "sucrose-element";
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
      var playButton = this.shadowRoot.querySelector("#play-button");
      var replayButton = this.shadowRoot.querySelector("#replay-button");
      var tl = new TimelineMax();
      var svg = this.shadowRoot.querySelector('#hexagons');
      var h20 = svg.getElementById('h20');
      var sucrosecenter = svg.getElementById('sucrosecenter');
      var ohleft = svg.getElementById('ohleft');
      var hright = svg.getElementById('hright');
      var glucoseleft = svg.getElementById('glucoseleft');
      var fructoseright = svg.getElementById('fructoseright');
      var fructosehexright = svg.getElementById('fructosehexright');
      var glucosehexleft = svg.getElementById('glucosehexleft');
      var oright = svg.getElementById('oright');

      // Set Animate
      tl.set([h20, sucrosecenter], {
        alpha: 0
      });

      // Animate
      tl.to([ohleft], 1, {
        y: "+=50",
        x: "+=25",
        ease: Power2.easeOut
      })
      tl.to([hright], 1, {
        y: "+=50",
        x: "-=20",
        ease: Power2.easeOut
      })
      tl.to([ohleft,hright], 1, {
        x: "+=200",
        y: "-=60",
        ease: Power2.easeOut,
        alpha: 0
      })
      tl.to([h20], .1, {
        x: "-=10",
      })
      .to([h20, sucrosecenter], .5, {
        alpha: 1
      })
      tl.to([glucoseleft,fructoseright], .3, {
        alpha: 0
      }, 3)
      tl.to([glucosehexleft], .5, {
        x: "-=30",
        ease: Power2.easeOut,
      }, 3)
      tl.to([fructosehexright], .5, {
        x: "-=90",
        ease: Power2.easeOut,
      }, 3)
      tl.to([oright], .5, {
        x: "-=95",
        y: "+=10",
        ease: Power2.easeOut
      }, 3);

      tl.pause();
      this.__tl = tl;

      // listen for button clicks and play and pause the animation
      // this.shadowRoot
      //   .querySelector("lrndesign-animationctrl")
      //   .addEventListener("click", function(e) {
      //     tl.play();
      //     var name = e.detail.button;
      //     if (name === "play") {
      //     }
      //     if (name === "replay") {
      //       tl.progress(0);
      //       tl.pause();
      //     }
      //   });
    });
  }

  renderSVG() {
    return svg`
    <lrndesign-animationctrl>
      <lrndesign-animationctrl-button id="play" name="play" icon="play"></lrndesign-animationctrl-button>
      <lrndesign-animationctrl-button id="replay" name="replay" icon="replay"></lrndesign-animationctrl-button>
    </lrndesign-animationctrl>
    <svg id="hexagons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 469.53 169.5">
    <title>Maltose-Sucrose-2-fixed</title>
    <g id="fructosehexright">
        <polygon points="345.36 44.63 297.81 68.37 315.97 98.85 374.75 98.85 397.65 67.75 345.36 44.63" fill="#f46736" stroke="#231f20"
            stroke-miterlimit="10" stroke-width="2" />
        <polygon points="296.52 68 315.97 98.85 374.75 98.85 398.77 68 376.34 101 314.65 101 296.52 68" fill="#231f20" />
        <line x1="398.89" y1="50.96" x2="398.89" y2="82.83" fill="none" stroke="#231f20" stroke-miterlimit="10" />
        <polyline points="296.52 51.04 296.52 68.31 283.71 83.75" fill="none" stroke="#231f20" stroke-miterlimit="10" />
        <text transform="translate(311.69 124.15)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">OH</text>
        <text transform="translate(366.51 124.15)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">H </text>
        <text transform="translate(315.28 83.9)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
        <text transform="translate(363.28 83.9)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">OH</text>
        <text transform="translate(395.47 49.23)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
        <text transform="translate(293.9 48.19)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">CH
            <tspan x="13.15" y="3" font-size="7">2</tspan>
            <tspan x="17.15" y="0">OH</tspan>
        </text>
        <text transform="translate(394.26 93.52)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">CH
            <tspan x="13.15" y="3" font-size="7">2</tspan>
            <tspan x="17.15" y="0">OH</tspan>
        </text>
        <text transform="translate(341.61 47.98)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">O</text>
        <line x1="318.61" y1="86.54" x2="318.61" y2="115.33" fill="none" stroke="#231f20" stroke-miterlimit="10"
        />
        <line x1="370.11" y1="86.54" x2="370.11" y2="115.33" fill="none" stroke="#231f20" stroke-miterlimit="10" />
    </g>
    <g id="glucosehexleft">
        <polygon points="165.76 46.3 159.65 46.3 115.07 46.3 89.73 72.57 115.07 98.85 165.76 98.85 191.11 72.57 169.19 49.84 165.76 46.3"
            fill="#f46736" stroke="#231f20" stroke-miterlimit="10" stroke-width="2" />
        <polygon points="89.19 72.42 114.67 98.85 165.63 98.85 191.11 72.42 166.53 101 114.15 101 89.19 72.42" fill="#231f20"
        />
        <line x1="115.28" y1="32.88" x2="115.28" y2="58.38" fill="none" stroke="#231f20" stroke-miterlimit="10" />
        <line x1="88.94" y1="57.46" x2="88.94" y2="89.33" fill="none" stroke="#231f20" stroke-miterlimit="10" />
        <line x1="114.61" y1="86.54" x2="114.61" y2="115.33" fill="none" stroke="#231f20" stroke-miterlimit="10" />
        <line x1="166.11" y1="86.54" x2="166.11" y2="115.33" fill="none" stroke="#231f20" stroke-miterlimit="10" />
        <polyline points="192.19 57.38 192.19 72.58 203.86 83.75" fill="none" stroke="#231f20" stroke-miterlimit="10" />
        <text transform="translate(85.61 55.73)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
        <text transform="translate(188.36 55.73)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
        <text transform="translate(111.44 67.73)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
        <text transform="translate(110.94 124.15)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
        <text transform="translate(158.51 124.15)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">OH </text>
        <text transform="translate(80.69 98.15)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">OH</text>
        <text transform="translate(107.03 83.9)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">OH</text>
        <text transform="translate(112.15 30.52)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">CH
            <tspan x="13.15" y="3" font-size="7">2</tspan>
            <tspan x="17.15" y="0">OH</tspan>
        </text>
        <text transform="translate(162.53 83.9)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
        <text transform="translate(162.28 49.98)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">O</text>
    </g>
    <g id="oright">
        <text transform="translate(275.53 90.73)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">O</text>
    </g>
    <g id="hright">
        <text transform="translate(268.11 90.73)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
    </g>
    <g id="ohleft">
        <text transform="translate(204.36 90.73)" font-size="9.61" fill="#231f20" font-family="OpenSans, Open Sans">OH</text>
    </g>
    <g id="glucoseleft">
        <text transform="translate(115.28 145.99)" font-size="11.51" font-family="OpenSans, Open Sans">Glucose</text>
    </g>
    <g id="fructoseright">
        <text transform="translate(321.86 145.99)" font-size="11.51" font-family="OpenSans, Open Sans">Fructose</text>
    </g>
    <g id="sucrosecenter">
        <text transform="translate(219.61 145.99)" font-size="11.51" font-family="OpenSans, Open Sans">Sucrose</text>
    </g>
    <g id="h20">
        <text transform="translate(350.03 76.91)" font-size="14.57" font-family="OpenSans, Open Sans">+</text>
        <ellipse cx="403.6" cy="71.5" rx="27.74" ry="13" fill="#006" />
        <text transform="translate(389.53 76.92)" font-size="17.21" fill="#fff" font-family="OpenSans, Open Sans">H
            <tspan x="12.7" y="3.14" font-size="11">2</tspan>
            <tspan x="18.99" y="0">0</tspan>
        </text>
    </g>
  </svg>`;
  }

  render() {
    return html`
      <h1>Sucrose</h1>
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
customElements.define("sucrose-element", SucroseElement);

export { SucroseElement };
