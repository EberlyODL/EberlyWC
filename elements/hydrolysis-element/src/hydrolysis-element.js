/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, svg } from "lit-element/lit-element.js";

/**
 * `hydrolysis-element`
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
class HydrolysisElement extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "hydrolysis-element";
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
      var svg = this.shadowRoot.querySelector("#circles");
      var shortPolymertext = svg.getElementById("short-polymer-text");
      var longPolymertext = svg.getElementById("long-polymer-text");
      var circle = svg.getElementById("circle");
      var circleLabel = circle.querySelector("text");
      var h2oText = svg.getElementById("h2o-text");
      var hText = svg.getElementById("h-text");
      var plusText = svg.getElementById("plus-text");
      var two = svg.getElementById("two");
      var htext2 = svg.getElementById("htext2");
      var otext2 = svg.getElementById("otext2");
      var htext3 = svg.getElementById("htext3");

      // Set Animate
      tl.set([htext3], {
        alpha: 0
      }).set([shortPolymertext, circleLabel], {
        y: "+=10",
        alpha: 0
      });
      // Animate
      tl.to([circle, hText], 1, {
        x: "108",
        ease: Power2.easeOut
      })
        .to(
          [longPolymertext],
          0.5,
          {
            alpha: 0
          },
          "-=1"
        )
        .to(
          [h2oText],
          1,
          {
            x: "-80",
            y: "60",
            ease: Power2.easeOut
          },
          "-=1"
        )
        .to(
          [plusText],
          0.5,
          {
            alpha: 0
          },
          "-=1"
        )
        .to([two], 0.5, {
          alpha: 0
        })
        .to([htext2], 0.5, {
          x: "-=20"
        })
        .to(
          [otext2],
          0.5,
          {
            x: "+=10"
          },
          "-=.5"
        )
        .to(
          [htext3],
          0.5,
          {
            alpha: 1,
            x: "+=11"
          },
          "-=.5"
        )
        .to([h2oText], 1, {
          y: 0,
          x: "-=73"
        })
        .to([plusText], 0.1, {
          x: "-=97"
        })
        .to([plusText], 0.5, {
          alpha: 1
        })
        .to([circleLabel, shortPolymertext], 0.5, {
          y: "-=10",
          alpha: 1
        });

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
    <svg id="circles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 128">
      <title>Hydrolysis</title>
      <g id="circle">
        <line id="circle-line" x1="231" y1="33.5" x2="305.5" y2="33.5" fill="none" stroke="#8bc53f" stroke-miterlimit="10" />
        <circle id="circle-circle" cx="267.75" cy="32.25" r="22.75" fill="#8bc53f" />
        <text transform="translate(244.83 75.83)" font-size="12" fill="#231f20" font-family="OpenSans, Open Sans">Monomer</text>
      </g>
      <g id="circle-2" data-name="circle">
        <line id="circle-line-2" data-name="circle-line" x1="167" y1="33.5" x2="241.5" y2="33.5" fill="none" stroke="#8bc53f" stroke-miterlimit="10"
        />
        <circle id="circle-circle-2" data-name="circle-circle" cx="203.75" cy="32.25" r="22.75" fill="#8bc53f" />
      </g>
      <g id="circle-3" data-name="circle">
        <line id="circle-line-3" data-name="circle-line" x1="106" y1="33.5" x2="180.5" y2="33.5" fill="none" stroke="#8bc53f" stroke-miterlimit="10"
        />
        <circle id="circle-circle-3" data-name="circle-circle" cx="142.75" cy="32.25" r="22.75" fill="#8bc53f" />
        <text id="long-polymer-text" transform="translate(127.83 75.83)" font-size="12" fill="#231f20" font-family="OpenSans, Open Sans">Longer Polymer</text>
        <text id="short-polymer-text" transform="translate(109.83 75.83)" font-size="12" fill="#231f20" font-family="OpenSans, Open Sans">Short Polymer</text>
      </g>
      <g id="circle-4" data-name="circle">
        <line id="circle-line-4" data-name="circle-line" x1="45.5" y1="33.5" x2="120" y2="33.5" fill="none" stroke="#8bc53f" stroke-miterlimit="10"
        />
        <circle id="circle-circle-4" data-name="circle-circle" cx="82.25" cy="32.25" r="22.75" fill="#8bc53f" />
        <text transform="translate(10.58 40.83)" font-size="21" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
        <text transform="translate(25.83 40.83)" font-size="21" fill="#231f20" font-family="OpenSans, Open Sans">O</text>
      </g>
      <g id="h-text">
        <text transform="translate(315 40.83)" font-size="21" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
      </g>
      <g id="h2o-text">
        <text id="htext2" transform="translate(419.16 40.83)" font-size="21" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
        <text id="otext2" transform="translate(442.99 40.83)" font-size="21" fill="#231f20" font-family="OpenSans, Open Sans">O</text>
        <text id="htext3" transform="translate(459.99 40.83)" font-size="21" fill="#231f20" font-family="OpenSans, Open Sans">H</text>
        <g id="two">
          <text transform="translate(436.16 47)" font-size="14" fill="#231f20" font-family="OpenSans, Open Sans">2</text>
        </g>
      </g>
      <g id="plus-text">
        <g id="plus">
          <text transform="translate(372.16 41)" font-size="21" fill="#231f20" font-family="OpenSans, Open Sans">+</text>
        </g>
      </g>
    </svg> 
    `;
  }

  render() {
    return html`
      <h1>Hydrolysis Reaction</h1>
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
customElements.define("hydrolysis-element", HydrolysisElement);

export { HydrolysisElement };
