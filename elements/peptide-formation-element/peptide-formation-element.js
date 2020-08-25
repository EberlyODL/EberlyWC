/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, svg } from "lit-element/lit-element.js";
import "@eberlywc/eberlywc-animationctl-button/eberlywc-animationctl-button.js";

/**
 * `peptide-formation-element`
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
class PeptideFormationElement extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "peptide-formation-element";
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
      var svg = this.shadowRoot.querySelector('#elements');
      var fadein = svg.getElementById('fadein');
      var cysteine = svg.getElementById('cysteine');
      var phenylanlanine = svg.getElementById('phenylanlanine');
      var alanine = svg.getElementById('alanine');
      var asparticacid = svg.getElementById('asparticacid');
      var blockone = svg.getElementById('blockone');
      var blocktwo = svg.getElementById('blocktwo');
      var blockthree = svg.getElementById('blockthree');
      var blockfour = svg.getElementById('blockfour');
      var ohone = svg.getElementById('ohone');
      var ohtwo = svg.getElementById('ohtwo');
      var ohthree = svg.getElementById('ohthree');
      var ohfour= svg.getElementById('ohfour');
      var hone= svg.getElementById('hone');
      var htwo = svg.getElementById('htwo');
      var hthree = svg.getElementById('hthree');
      var hfour = svg.getElementById('hfour');

      // Set Animate
      tl.set([fadein], {
        alpha: 0
      });

      // Animate
      tl.to([blockone, ohone, asparticacid], 1, {
        x: "+=41",
        y: "+=1.5",
        ease: Power2.easeOut
      })
      tl.to([blockfour, hfour, cysteine], 1, {
        x: "-=41",
        ease: Power2.easeOut
      })
      tl.to([blockone, blocktwo, ohone, ohtwo, htwo, asparticacid, alanine], 1, {
        x: "+=21",
        ease: Power2.easeOut
      })
      tl.to([blockthree, blockfour, ohthree, ohfour, hthree, hfour, cysteine, phenylanlanine], 1, {
        x: "-=24",
        ease: Power2.easeOut
      })
      tl.to([ohone, ohtwo, ohthree, ohfour, hone, htwo, hthree, hfour], 1, {
        y: "+=100",
        ease: Power2.easeOut,
      })
      tl.to([cysteine, phenylanlanine, alanine, asparticacid], 1, {
        alpha: 0
      })
      tl.to([ohone, ohtwo, ohthree, ohfour, hone, htwo, hthree, hfour], 1, {
        alpha: 0,
        ease: Power2.easeOut,
      })
      tl.set([fadein], {
        alpha: 1
      });

      tl.pause();
      this.__tl = tl;
    });
  }

  renderSVG() {
    return svg`
    <svg id="elements" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 727 350">
    <defs>
        <clipPath id="clip-path">
            <rect x="234.7" y="247.35" width="54.6" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-2">
            <rect x="40" y="247.35" width="87.1" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-3">
            <rect x="564.6" y="180.5" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-4">
            <rect x="510.2" y="180.45" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-5">
            <rect x="498.2" y="180.45" width="15.05" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-6">
            <rect x="384.3" y="180.25" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-7">
            <rect x="325.35" y="180.35" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-8">
            <rect x="313.35" y="180.35" width="15.05" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-9">
            <rect x="198.65" y="180.7" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-10">
            <rect x="143.2" y="179.2" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-11">
            <rect x="131.2" y="179.2" width="15.05" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-12">
            <rect x="691.15" y="181.85" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-13">
            <rect x="679.15" y="181.85" width="15.05" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-14">
            <rect x="623.15" y="128.43" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-15">
            <rect x="634.15" y="128.43" width="14.3" height="20.5" fill="none" />
        </clipPath>
        <clipPath id="clip-path-16">
            <rect x="650.3" y="210.1" width="15.05" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-17">
            <rect x="651.15" y="181.85" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-18">
            <rect x="592.15" y="181.85" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-19">
            <rect x="622.15" y="181.85" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-20">
            <rect x="622.2" y="210.1" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-21">
            <rect x="592.15" y="152.85" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-22">
            <rect x="623.15" y="100.15" width="13.5" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-23">
            <rect x="634.15" y="100.15" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-24">
            <rect x="443.6" y="128.7" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-25">
            <rect x="454.6" y="128.7" width="14.3" height="20.5" fill="none" />
        </clipPath>
        <clipPath id="clip-path-26">
            <rect x="470.75" y="210.1" width="15.05" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-27">
            <rect x="471.6" y="180.7" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-28">
            <rect x="412.6" y="180.7" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-29">
            <rect x="442.6" y="180.7" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-30">
            <rect x="442.55" y="210.1" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-31">
            <rect x="412.6" y="152.55" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-32">
            <rect x="257.45" y="128.2" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-33">
            <rect x="268.45" y="128.2" width="14.3" height="20.5" fill="none" />
        </clipPath>
        <clipPath id="clip-path-34">
            <rect x="284.6" y="210.05" width="15.05" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-35">
            <rect x="285.45" y="180.2" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-36">
            <rect x="226.45" y="180.2" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-37">
            <rect x="256.45" y="180.2" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-38">
            <rect x="256.45" y="210.05" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-39">
            <rect x="226.45" y="152.05" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-40">
            <rect x="92.9" y="74.65" width="15.05" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-41">
            <rect x="103.75" y="74.65" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-42">
            <rect x="104.15" y="208.2" width="15.05" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-43">
            <rect x="62.2" y="74.8" width="15.05" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-44">
            <rect x="105.05" y="178.6" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-45">
            <rect x="79.05" y="98.55" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-46">
            <rect x="78.05" y="178.6" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-47">
            <rect x="51.05" y="178.6" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-48">
            <rect x="50.9" y="151.4" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-49">
            <rect x="24.05" y="178.55" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-50">
            <rect x="78.1" y="208.2" width="14.3" height="19.6" fill="none" />
        </clipPath>
        <clipPath id="clip-path-51">
            <rect x="78.05" y="128.4" width="14.3" height="19.6" fill="none" />
        </clipPath>
    </defs>
    <title>peptide_formation</title>
    <g id="fadein">
        <text transform="translate(59 43)" font-size="16" font-family="OpenSans, Open Sans">“R” Groups</text>
        <text transform="translate(66 294)" font-size="16" font-family="OpenSans, Open Sans">Peptide Bond</text>
        <ellipse cx="283.7" cy="288.76" rx="36.18" ry="19.24" fill="#036" />
        <text transform="translate(264.02 295.41)" font-size="22.88" fill="#fff" font-family="OpenSans-Semibold, Open Sans"
            font-weight="700">H
            <tspan x="17.18" y="4.62" font-size="16.17">2</tspan>
            <tspan x="26.41" y="0">0</tspan>
        </text>
        <ellipse cx="375" cy="288.76" rx="36.18" ry="19.24" fill="#036" />
        <text transform="translate(355.32 295.41)" font-size="22.88" fill="#fff" font-family="OpenSans-Semibold, Open Sans"
            font-weight="700">H
            <tspan x="17.18" y="4.62" font-size="16.17">2</tspan>
            <tspan x="26.41" y="0">0</tspan>
        </text>
        <ellipse cx="461" cy="288.76" rx="36.18" ry="19.24" fill="#036" />
        <text transform="translate(441.32 295.41)" font-size="22.88" fill="#fff" font-family="OpenSans-Semibold, Open Sans"
            font-weight="700">H
            <tspan x="17.18" y="4.62" font-size="16.17">2</tspan>
            <tspan x="26.41" y="0">0</tspan>
        </text>
        <rect x="165" y="74" width="406.35" height="76.56" fill="#b4d9fc" />
        <polygon points="275.35 192.38 270.42 200.91 280.27 200.91 275.35 192.38" />
        <path d="M275.35,200.91s10.9,63.84-91.6,87.85" fill="none" stroke="#000" stroke-miterlimit="10" />
        <line x1="159" y1="50" x2="202" y2="98" fill="none" stroke="#000" stroke-miterlimit="10" />
    </g>
    <g id="cysteine">
        <g style="isolation:isolate">
            <text transform="translate(598.95 262)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">Cysteine</text>
        </g>
    </g>
    <g id="phenylanlanine">
        <g style="isolation:isolate">
            <text transform="translate(397.75 262)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">Phenylanlanine</text>
        </g>
    </g>
    <g id="alanine">
        <g clip-path="url(#clip-path)">
            <g style="isolation:isolate">
                <text transform="translate(236.7 262)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">Alanine</text>
            </g>
        </g>
    </g>
    <g id="asparticacid">
        <g clip-path="url(#clip-path-2)">
            <g style="isolation:isolate">
                <text transform="translate(42 262)" font-size="14" font-family="OpenSans, Open Sans" letter-spacing="-0.04em"
                    style="isolation:isolate">Aspartic Acid</text>
            </g>
        </g>
    </g>
    <g id="hfour">
        <g clip-path="url(#clip-path-3)">
            <g style="isolation:isolate">
                <text transform="translate(566.6 195.15)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
    </g>
    <g id="ohthree">
        <g clip-path="url(#clip-path-4)">
            <g style="isolation:isolate">
                <text transform="translate(512.2 195.1)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-5)">
            <g style="isolation:isolate">
                <text transform="translate(500.2 195.1)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
            </g>
        </g>
    </g>
    <g id="hthree">
        <g clip-path="url(#clip-path-6)">
            <g style="isolation:isolate">
                <text transform="translate(386.3 194.9)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
    </g>
    <g id="ohtwo">
        <g clip-path="url(#clip-path-7)">
            <g style="isolation:isolate">
                <text transform="translate(327.35 195)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-8)">
            <g style="isolation:isolate">
                <text transform="translate(315.35 195)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
            </g>
        </g>
    </g>
    <g id="htwo">
        <g clip-path="url(#clip-path-9)">
            <g style="isolation:isolate">
                <text transform="translate(200.65 195.35)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
    </g>
    <g id="ohone">
        <g clip-path="url(#clip-path-10)">
            <g style="isolation:isolate">
                <text transform="translate(145.2 193.85)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-11)">
            <g style="isolation:isolate">
                <text transform="translate(133.2 193.85)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
            </g>
        </g>
    </g>
    <g id="blockfour">
        <path id="Symbol_17_0_Layer0_0_1_STROKES" data-name="Symbol 17 0 Layer0 0 1 STROKES" d="M629.15,118.3v12m8,60.7h12m-20,7.85v12m-30-40.7v12m8,8.85h12m47,.35h12M659.9,198.9v12m-4.7-12v12m-26.05-65v35"
            fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
        <g clip-path="url(#clip-path-12)">
            <g style="isolation:isolate">
                <text transform="translate(693.15 196.5)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-13)">
            <g style="isolation:isolate">
                <text transform="translate(681.15 196.5)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-14)">
            <g style="isolation:isolate">
                <text transform="translate(625.15 143.08)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-15)">
            <g style="isolation:isolate">
                <text transform="translate(636.15 143.08)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-16)">
            <g style="isolation:isolate">
                <text transform="translate(652.3 224.75)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-17)">
            <g style="isolation:isolate">
                <text transform="translate(653.15 196.5)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-18)">
            <g style="isolation:isolate">
                <text transform="translate(594.15 196.5)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">N</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-19)">
            <g style="isolation:isolate">
                <text transform="translate(624.15 196.5)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-20)">
            <g style="isolation:isolate">
                <text transform="translate(624.2 224.75)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-21)">
            <g style="isolation:isolate">
                <text transform="translate(594.15 167.5)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-22)">
            <g style="isolation:isolate">
                <text transform="translate(625.15 114.8)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">S</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-23)">
            <g style="isolation:isolate">
                <text transform="translate(636.15 114.8)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <path id="Symbol_22_0_Layer0_0_1_STROKES" data-name="Symbol 22 0 Layer0 0 1 STROKES" d="M578.65,190.65h12" fill="none"
            stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
        <text transform="translate(648.45 146.5)" font-size="9.1" font-family="OpenSans, Open Sans">2</text>
    </g>
    <g id="blockthree">
        <path id="Symbol_15_0_Layer0_0_1_STROKES" data-name="Symbol 15 0 Layer0 0 1 STROKES" d="M460.6,94v12m-3,83.85h12m17,0h12m-18.85,7.85v12m-3-12v12M438.6,96.15l12-7m-1,28.85v12m-11-25,12,7m-31,57.85v12m8,8h12m10,7.85v12m0-62.7v35"
            fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
        <path id="Symbol_15_0_Layer0_0_2_STROKES" data-name="Symbol 15 0 Layer0 0 2 STROKES" d="M464.6,93l-15-8-14,8v16l14,8,15-8Z"
            fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        <g clip-path="url(#clip-path-24)">
            <g style="isolation:isolate">
                <text transform="translate(445.6 143.35)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-25)">
            <g style="isolation:isolate">
                <text transform="translate(456.6 143.35)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-26)">
            <g style="isolation:isolate">
                <text transform="translate(472.75 224.75)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-27)">
            <g style="isolation:isolate">
                <text transform="translate(473.6 195.35)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-28)">
            <g style="isolation:isolate">
                <text transform="translate(414.6 195.35)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">N</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-29)">
            <g style="isolation:isolate">
                <text transform="translate(444.6 195.35)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-30)">
            <g style="isolation:isolate">
                <text transform="translate(444.55 224.75)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-31)">
            <g style="isolation:isolate">
                <text transform="translate(414.6 167.2)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <path id="Symbol_21_0_Layer0_0_1_STROKES" data-name="Symbol 21 0 Layer0 0 1 STROKES" d="M399,190.15h12" fill="none"
            stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
        <text transform="translate(468.1 146.17)" font-size="9.1" font-family="OpenSans, Open Sans">2</text>
    </g>
    <g id="blocktwo">
        <path id="Symbol_13_0_Layer0_0_1_STROKES" data-name="Symbol 13 0 Layer0 0 1 STROKES" d="M293.6,198.35v12m-3-12v12m-18.15-21h12m16,0h12m-49,9v12m-22-21h12m-21.15-20v12m31.15-34.85v35"
            fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
        <g clip-path="url(#clip-path-32)">
            <g style="isolation:isolate">
                <text transform="translate(259.45 142.85)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-33)">
            <g style="isolation:isolate">
                <text transform="translate(270.45 142.85)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-34)">
            <g style="isolation:isolate">
                <text transform="translate(286.6 224.7)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-35)">
            <g style="isolation:isolate">
                <text transform="translate(287.45 194.85)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-36)">
            <g style="isolation:isolate">
                <text transform="translate(228.45 194.85)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">N</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-37)">
            <g style="isolation:isolate">
                <text transform="translate(258.45 194.85)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-38)">
            <g style="isolation:isolate">
                <text transform="translate(258.45 224.7)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-39)">
            <g style="isolation:isolate">
                <text transform="translate(228.45 166.7)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <path id="Symbol_20_0_Layer0_0_1_STROKES" data-name="Symbol 20 0 Layer0 0 1 STROKES" d="M212.9,189.5h12" fill="none"
            stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
        <text transform="translate(282.08 146.17)" font-size="9.1" font-family="OpenSans, Open Sans">3</text>
    </g>
    <g id="blockone">
        <path id="Symbol_7_0_Layer0_0_1_STROKES" data-name="Symbol 7 0 Layer0 0 1 STROKES" d="M91.1,101.35l6-10m-12,37.8v-12m47,70.6H120m-6,8.95v12m-4.15-12v12M104,187.75H92m-7,21v-12m0-15.9V146M50,187.75H38m39,0H65m-7-7.05v-12M82.8,100.8l-6-10m2.55,12.8-6-10"
            fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
        <g clip-path="url(#clip-path-40)">
            <g style="isolation:isolate">
                <text transform="translate(94.9 89.3)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-41)">
            <g style="isolation:isolate">
                <text transform="translate(105.75 89.3)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-42)">
            <g style="isolation:isolate">
                <text transform="translate(106.15 222.85)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-43)">
            <g style="isolation:isolate">
                <text transform="translate(64.2 89.45)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-44)">
            <g style="isolation:isolate">
                <text transform="translate(107.05 193.25)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-45)">
            <g style="isolation:isolate">
                <text transform="translate(81.05 113.2)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-46)">
            <g style="isolation:isolate">
                <text transform="translate(80.05 193.25)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-47)">
            <g style="isolation:isolate">
                <text transform="translate(53.05 193.25)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">N</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-48)">
            <g style="isolation:isolate">
                <text transform="translate(52.9 166.05)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-49)">
            <g style="isolation:isolate">
                <text transform="translate(26.05 193.2)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-50)">
            <g style="isolation:isolate">
                <text transform="translate(80.1 222.85)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
            </g>
        </g>
        <g clip-path="url(#clip-path-51)">
            <g style="isolation:isolate">
                <text transform="translate(80.05 143.05)" font-size="14" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
            </g>
        </g>
        <text transform="translate(90.3 143.25)" font-size="14" font-family="OpenSans, Open Sans">H</text>
        <text transform="translate(102.48 146.03)" font-size="9.1" font-family="OpenSans, Open Sans">2</text>
    </g>
</svg>
    `;
  }

  render() {
    return html`
      <style>
        /* Whatever is in the 'set' needs to be in here as well for some reason */
        #htext3,
        #short-polymer-text,
        #monomer {
          opacity: 0;
        }
      </style>
      <h1>Peptide Formation Element</h1>
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
customElements.define("peptide-formation-element", PeptideFormationElement);

export { PeptideFormationElement };
