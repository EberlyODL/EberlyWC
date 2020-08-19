/**
 * Copyright 2020 PSU
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, svg } from "lit-element/lit-element.js";
import "@eberlywc/eberlywc-animationctl-button/eberlywc-animationctl-button.js";

/**
 * `fat-synthesis-element`
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
class FatSynthesisElement extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "fat-synthesis-element";
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
      var svg = this.shadowRoot.querySelector("#elements");
      var watertop = svg.getElementById("watertop");
      var watermiddle = svg.getElementById("watermiddle");
      var waterbottom = svg.getElementById("waterbottom");
      var triacylglyceride = svg.getElementById("triacylglyceride");
      var blocktop = svg.getElementById("blocktop");
      var blockmiddle = svg.getElementById("blockmiddle");
      var blockbottom = svg.getElementById("blockbottom");
      var olinestop = svg.getElementById("olinestop");
      var olinesmiddle = svg.getElementById("olinesmiddle");
      var olinesbottom = svg.getElementById("olinesbottom");
      var topoh = svg.getElementById("topoh");
      var middleoh = svg.getElementById("middleoh");
      var bottomoh = svg.getElementById("bottomoh");
      var esterlinkage = svg.getElementById("esterlinkage");
      var toph = svg.getElementById("toph");
      var middleh = svg.getElementById("middleh");
      var bottomh = svg.getElementById("bottomh");
      var glycerol = svg.getElementById("glycerol");
      var fattyacid = svg.getElementById("fattyacid");
      var otop = svg.getElementById("otop");
      var omiddle = svg.getElementById("omiddle");
      var obottom = svg.getElementById("obottom");

      // Set Animate
      tl.set(
        [watertop, watermiddle, waterbottom, triacylglyceride, esterlinkage],
        {
          alpha: 0
        }
      );

      //Animate
      tl.to(
        [
          topoh,
          middleoh,
          bottomoh,
          blocktop,
          blockmiddle,
          blockbottom,
          olinestop,
          olinesmiddle,
          olinesbottom
        ],
        1,
        {
          x: "-=75",
          ease: Power2.easeOut
        }
      );
      tl.to([toph, middleh, bottomh], 1, {
        y: "+=21"
      });
      tl.to([topoh, middleoh, bottomoh, toph, middleh, bottomh], 1, {
        y: "+=70",
        x: "+=80",
        alpha: 0
      });
      tl.set([watertop, watermiddle, waterbottom], {
        alpha: 1
      });
      tl.to([olinestop, olinesmiddle, olinesbottom], 1, {
        rotation: "+=48",
        y: "-=12",
        x: "+=10"
      });
      tl.to(
        [topoh, middleoh, bottomoh, blocktop, blockmiddle, blockbottom],
        1,
        {
          x: "-=15",
          ease: Power2.easeOut
        }
      );
      tl.set([glycerol, fattyacid], {
        alpha: 0
      });
      tl.set([triacylglyceride], {
        alpha: 1
      });
      tl.to([esterlinkage], 1, {
        x: "-=72",
        alpha: 1
      });

      tl.pause();
      this.__tl = tl;
    });
  }

  renderSVG() {
    return svg`
        <svg id="elements" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 630.51 577.96">
            <defs>
                <clipPath id="clip-path">
                    <rect x="206.06" y="444.07" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-2">
                    <rect x="587.56" y="443.22" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-3">
                    <rect x="253.01" y="445.67" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-4">
                    <rect x="253.01" y="478.07" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-5">
                    <rect x="253.01" y="413.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-6">
                    <rect x="276.51" y="461.07" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-7">
                    <rect x="276.51" y="493.47" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-8">
                    <rect x="276.51" y="428.67" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-9">
                    <rect x="300.81" y="444.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-10">
                    <rect x="300.81" y="477.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-11">
                    <rect x="300.81" y="412.47" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-12">
                    <rect x="324.31" y="460.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-13">
                    <rect x="324.31" y="492.67" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-14">
                    <rect x="324.31" y="427.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-15">
                    <rect x="352.66" y="444.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-16">
                    <rect x="352.66" y="477.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-17">
                    <rect x="352.66" y="412.47" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-18">
                    <rect x="376.16" y="460.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-19">
                    <rect x="376.16" y="492.67" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-20">
                    <rect x="376.16" y="427.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-21">
                    <rect x="399.66" y="444.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-22">
                    <rect x="399.66" y="477.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-23">
                    <rect x="399.66" y="412.47" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-24">
                    <rect x="423.11" y="460.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-25">
                    <rect x="423.11" y="492.67" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-26">
                    <rect x="423.11" y="427.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-27">
                    <rect x="447.41" y="444.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-28">
                    <rect x="447.41" y="477.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-29">
                    <rect x="447.41" y="412.47" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-30">
                    <rect x="470.91" y="460.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-31">
                    <rect x="470.91" y="492.67" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-32">
                    <rect x="470.91" y="427.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-33">
                    <rect x="496.01" y="444.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-34">
                    <rect x="496.01" y="477.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-35">
                    <rect x="496.01" y="412.47" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-36">
                    <rect x="519.51" y="460.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-37">
                    <rect x="519.51" y="492.67" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-38">
                    <rect x="519.51" y="427.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-39">
                    <rect x="543.01" y="444.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-40">
                    <rect x="543.01" y="477.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-41">
                    <rect x="543.01" y="412.47" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-42">
                    <rect x="566.51" y="460.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-43">
                    <rect x="566.51" y="492.67" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-44">
                    <rect x="566.51" y="427.87" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-45">
                    <rect x="228.71" y="460.27" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-46">
                    <rect x="228.71" y="492.67" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-47">
                    <rect x="228.71" y="426.22" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-48">
                    <rect x="206.06" y="263.76" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-49">
                    <rect x="587.56" y="262.91" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-50">
                    <rect x="253.01" y="265.36" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-51">
                    <rect x="253.01" y="297.76" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-52">
                    <rect x="253.01" y="232.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-53">
                    <rect x="276.51" y="280.76" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-54">
                    <rect x="276.51" y="313.16" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-55">
                    <rect x="276.51" y="248.36" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-56">
                    <rect x="300.81" y="264.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-57">
                    <rect x="300.81" y="296.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-58">
                    <rect x="300.81" y="232.16" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-59">
                    <rect x="324.31" y="279.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-60">
                    <rect x="324.31" y="312.36" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-61">
                    <rect x="324.31" y="247.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-62">
                    <rect x="352.66" y="264.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-63">
                    <rect x="352.66" y="296.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-64">
                    <rect x="352.66" y="232.16" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-65">
                    <rect x="376.16" y="279.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-66">
                    <rect x="376.16" y="312.36" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-67">
                    <rect x="376.16" y="247.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-68">
                    <rect x="399.66" y="264.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-69">
                    <rect x="399.66" y="296.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-70">
                    <rect x="399.66" y="232.16" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-71">
                    <rect x="423.11" y="279.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-72">
                    <rect x="423.11" y="312.36" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-73">
                    <rect x="423.11" y="247.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-74">
                    <rect x="447.41" y="264.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-75">
                    <rect x="447.41" y="296.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-76">
                    <rect x="447.41" y="232.16" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-77">
                    <rect x="470.91" y="279.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-78">
                    <rect x="470.91" y="312.36" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-79">
                    <rect x="470.91" y="247.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-80">
                    <rect x="496.01" y="264.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-81">
                    <rect x="496.01" y="296.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-82">
                    <rect x="496.01" y="232.16" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-83">
                    <rect x="519.51" y="279.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-84">
                    <rect x="519.51" y="312.36" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-85">
                    <rect x="519.51" y="247.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-86">
                    <rect x="543.01" y="264.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-87">
                    <rect x="543.01" y="296.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-88">
                    <rect x="543.01" y="232.16" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-89">
                    <rect x="566.51" y="279.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-90">
                    <rect x="566.51" y="312.36" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-91">
                    <rect x="566.51" y="247.56" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-92">
                    <rect x="228.71" y="279.96" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-93">
                    <rect x="228.71" y="312.36" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-94">
                    <rect x="228.71" y="245.91" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-95">
                    <rect x="206.06" y="84.13" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-96">
                    <rect x="587.56" y="83.28" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-97">
                    <rect x="253.01" y="85.73" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-98">
                    <rect x="253.01" y="118.13" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-99">
                    <rect x="253.01" y="53.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-100">
                    <rect x="276.51" y="101.13" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-101">
                    <rect x="276.51" y="133.53" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-102">
                    <rect x="276.51" y="68.73" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-103">
                    <rect x="300.81" y="84.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-104">
                    <rect x="300.81" y="117.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-105">
                    <rect x="300.81" y="52.53" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-106">
                    <rect x="324.31" y="100.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-107">
                    <rect x="324.31" y="132.73" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-108">
                    <rect x="324.31" y="67.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-109">
                    <rect x="352.66" y="84.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-110">
                    <rect x="352.66" y="117.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-111">
                    <rect x="352.66" y="52.53" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-112">
                    <rect x="376.16" y="100.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-113">
                    <rect x="376.16" y="132.73" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-114">
                    <rect x="376.16" y="67.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-115">
                    <rect x="399.66" y="84.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-116">
                    <rect x="399.66" y="117.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-117">
                    <rect x="399.66" y="52.53" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-118">
                    <rect x="423.11" y="100.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-119">
                    <rect x="423.11" y="132.73" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-120">
                    <rect x="423.11" y="67.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-121">
                    <rect x="447.41" y="84.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-122">
                    <rect x="447.41" y="117.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-123">
                    <rect x="447.41" y="52.53" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-124">
                    <rect x="470.91" y="100.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-125">
                    <rect x="470.91" y="132.73" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-126">
                    <rect x="470.91" y="67.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-127">
                    <rect x="496.01" y="84.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-128">
                    <rect x="496.01" y="117.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-129">
                    <rect x="496.01" y="52.53" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-130">
                    <rect x="519.51" y="100.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-131">
                    <rect x="519.51" y="132.73" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-132">
                    <rect x="519.51" y="67.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-133">
                    <rect x="543.01" y="84.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-134">
                    <rect x="543.01" y="117.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-135">
                    <rect x="543.01" y="52.53" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-136">
                    <rect x="566.51" y="100.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-137">
                    <rect x="566.51" y="132.73" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-138">
                    <rect x="566.51" y="67.93" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-139">
                    <rect x="228.71" y="100.33" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-140">
                    <rect x="228.71" y="132.73" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-141">
                    <rect x="228.71" y="66.28" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-142">
                    <rect x="175.03" y="466.09" width="21.24" height="16.64" fill="none" />
                </clipPath>
                <clipPath id="clip-path-143">
                    <rect x="175.03" y="285.78" width="21.24" height="16.64" fill="none" />
                </clipPath>
                <clipPath id="clip-path-144">
                    <rect x="175.03" y="106.15" width="21.24" height="16.64" fill="none" />
                </clipPath>
                <clipPath id="clip-path-145">
                    <rect x="52.96" y="444.83" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-146">
                    <rect x="52.51" y="471.38" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-147">
                    <rect x="28.31" y="444.58" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-148">
                    <rect x="53.01" y="264.07" width="12.15" height="16.9" fill="none" />
                </clipPath>
                <clipPath id="clip-path-149">
                    <rect x="28.26" y="264.07" width="12.15" height="16.9" fill="none" />
                </clipPath>
                <clipPath id="clip-path-150">
                    <rect x="52.46" y="84.58" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-151">
                    <rect x="52.91" y="59.43" width="12.15" height="16.85" fill="none" />
                </clipPath>
                <clipPath id="clip-path-152">
                    <rect x="27.36" y="84.58" width="12.15" height="16.85" fill="none" />
                </clipPath>
            </defs>
            <title>fat_synthesis-1</title>
            <g id="blockbottom">
                <path id="Symbol_12_0_Layer0_0_1_STROKES" data-name="Symbol 12 0 Layer0 0 1 STROKES" d="M406.13,445.69V427m47.8,18.65V427m48.6,18.65V427m47,18.65V427M573,494.29V475.64m-47,18.65V475.64m-48.6,18.65V475.64m-47.75,18.65V475.64m-7.3-10.55-9.7-8.9m-6.5,22.7V460.24m159.55,4.85-9.7-8.9m17,5.7V443.24m15.4,12.95-8.9,9.75m-94.8-.85,9.75-8.9m-17.05,5.7V443.24m-47.75,18.65V443.24m40.5,21.85-9.75-8.9m-24.3,8.9,9.75-8.9m8.1,22.7V460.24M526,461.89V443.24m5.7,21.85,9.7-8.9m-22.65,8.9-9.75-8.9m40.5,22.7V460.24m-47,18.65V460.24m-267.3-.8V440.79m24.3,5.7V427.84m47.8,17.85V427m23.45,34v-18.6m28.35,3.25V427m23.5,34v-18.6m0,51.85V475.64m-51.85,18.65V475.64M283,495.09V476.44m-47.8,17.85V475.64m54.25-10.55,9.75-8.9m42.1,8.9,9.7-8.9m-27.5,8.9-9.75-8.9m45.35,22.7V460.24m-51.8,18.65V460.24m81,4.85,9.7-8.9m-22.7,8.9-9.7-8.9m-147.4,0,8.9,9.75m55.9-4V443.24m-7.3,22.7L266,457m-24.3,8.95,9.75-8.95m8.1,22.7V461"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                <g clip-path="url(#clip-path)">
                    <g style="isolation:isolate">
                        <text transform="translate(207.68 456.71)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-2)">
                    <g style="isolation:isolate">
                        <text transform="translate(589.18 455.86)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-3)">
                    <g style="isolation:isolate">
                        <text transform="translate(254.63 458.31)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-4)">
                    <g style="isolation:isolate">
                        <text transform="translate(254.63 490.71)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-5)">
                    <g style="isolation:isolate">
                        <text transform="translate(254.63 425.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-6)">
                    <g style="isolation:isolate">
                        <text transform="translate(278.13 473.71)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-7)">
                    <g style="isolation:isolate">
                        <text transform="translate(278.13 506.11)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-8)">
                    <g style="isolation:isolate">
                        <text transform="translate(278.13 441.31)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-9)">
                    <g style="isolation:isolate">
                        <text transform="translate(302.43 457.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-10)">
                    <g style="isolation:isolate">
                        <text transform="translate(302.43 489.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-11)">
                    <g style="isolation:isolate">
                        <text transform="translate(302.43 425.11)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-12)">
                    <g style="isolation:isolate">
                        <text transform="translate(325.93 472.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-13)">
                    <g style="isolation:isolate">
                        <text transform="translate(325.93 505.31)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-14)">
                    <g style="isolation:isolate">
                        <text transform="translate(325.93 440.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-15)">
                    <g style="isolation:isolate">
                        <text transform="translate(354.28 457.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-16)">
                    <g style="isolation:isolate">
                        <text transform="translate(354.28 489.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-17)">
                    <g style="isolation:isolate">
                        <text transform="translate(354.28 425.11)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-18)">
                    <g style="isolation:isolate">
                        <text transform="translate(377.78 472.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-19)">
                    <g style="isolation:isolate">
                        <text transform="translate(377.78 505.31)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-20)">
                    <g style="isolation:isolate">
                        <text transform="translate(377.78 440.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-21)">
                    <g style="isolation:isolate">
                        <text transform="translate(401.28 457.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-22)">
                    <g style="isolation:isolate">
                        <text transform="translate(401.28 489.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-23)">
                    <g style="isolation:isolate">
                        <text transform="translate(401.28 425.11)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-24)">
                    <g style="isolation:isolate">
                        <text transform="translate(424.73 472.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-25)">
                    <g style="isolation:isolate">
                        <text transform="translate(424.73 505.31)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-26)">
                    <g style="isolation:isolate">
                        <text transform="translate(424.73 440.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-27)">
                    <g style="isolation:isolate">
                        <text transform="translate(449.03 457.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-28)">
                    <g style="isolation:isolate">
                        <text transform="translate(449.03 489.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-29)">
                    <g style="isolation:isolate">
                        <text transform="translate(449.03 425.11)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-30)">
                    <g style="isolation:isolate">
                        <text transform="translate(472.53 472.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-31)">
                    <g style="isolation:isolate">
                        <text transform="translate(472.53 505.31)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-32)">
                    <g style="isolation:isolate">
                        <text transform="translate(472.53 440.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-33)">
                    <g style="isolation:isolate">
                        <text transform="translate(497.63 457.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-34)">
                    <g style="isolation:isolate">
                        <text transform="translate(497.63 489.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-35)">
                    <g style="isolation:isolate">
                        <text transform="translate(497.63 425.11)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-36)">
                    <g style="isolation:isolate">
                        <text transform="translate(521.13 472.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-37)">
                    <g style="isolation:isolate">
                        <text transform="translate(521.13 505.31)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-38)">
                    <g style="isolation:isolate">
                        <text transform="translate(521.13 440.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-39)">
                    <g style="isolation:isolate">
                        <text transform="translate(544.63 457.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-40)">
                    <g style="isolation:isolate">
                        <text transform="translate(544.63 489.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-41)">
                    <g style="isolation:isolate">
                        <text transform="translate(544.63 425.11)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-42)">
                    <g style="isolation:isolate">
                        <text transform="translate(568.13 472.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-43)">
                    <g style="isolation:isolate">
                        <text transform="translate(568.13 505.31)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-44)">
                    <g style="isolation:isolate">
                        <text transform="translate(568.13 440.51)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-45)">
                    <g style="isolation:isolate">
                        <text transform="translate(230.33 472.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-46)">
                    <g style="isolation:isolate">
                        <text transform="translate(230.33 505.31)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-47)">
                    <g style="isolation:isolate">
                        <text transform="translate(230.33 438.86)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
            </g>
            <g id="blockmiddle">
                <path id="Symbol_12_0_Layer0_0_1_STROKES-2" data-name="Symbol 12 0 Layer0 0 1 STROKES" d="M406.13,265.38V246.73m47.8,18.65V246.73m48.6,18.65V246.73m47,18.65V246.73M573,314V295.33M526,314V295.33M477.38,314V295.33M429.63,314V295.33m-7.3-10.55-9.7-8.9m-6.5,22.7V279.93m159.55,4.85-9.7-8.9m17,5.7V262.93m15.4,12.95-8.9,9.75m-94.8-.85,9.75-8.9m-17.05,5.7V262.93m-47.75,18.65V262.93m40.5,21.85-9.75-8.9m-24.3,8.9,9.75-8.9m8.1,22.7V279.93M526,281.58V262.93m5.7,21.85,9.7-8.9m-22.65,8.9-9.75-8.9m40.5,22.7V279.93m-47,18.65V279.93m-267.3-.8V260.48m24.3,5.7V247.53m47.8,17.85V246.73m23.45,34v-18.6m28.35,3.25V246.73m23.5,34v-18.6m0,51.85V295.33M330.78,314V295.33M283,314.78V296.13M235.23,314V295.33m54.25-10.55,9.75-8.9m42.1,8.9,9.7-8.9m-27.5,8.9-9.75-8.9m45.35,22.7V279.93m-51.8,18.65V279.93m81,4.85,9.7-8.9m-22.7,8.9-9.7-8.9m-147.4,0,8.9,9.75m55.9-4V262.93m-7.3,22.7L266,276.68m-24.3,8.95,9.75-8.95m8.1,22.7V280.73"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                <g clip-path="url(#clip-path-48)">
                    <g style="isolation:isolate">
                        <text transform="translate(207.68 276.39)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-49)">
                    <g style="isolation:isolate">
                        <text transform="translate(589.18 275.54)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-50)">
                    <g style="isolation:isolate">
                        <text transform="translate(254.63 277.99)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-51)">
                    <g style="isolation:isolate">
                        <text transform="translate(254.63 310.39)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-52)">
                    <g style="isolation:isolate">
                        <text transform="translate(254.63 245.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-53)">
                    <g style="isolation:isolate">
                        <text transform="translate(278.13 293.39)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-54)">
                    <g style="isolation:isolate">
                        <text transform="translate(278.13 325.79)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-55)">
                    <g style="isolation:isolate">
                        <text transform="translate(278.13 260.99)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-56)">
                    <g style="isolation:isolate">
                        <text transform="translate(302.43 277.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-57)">
                    <g style="isolation:isolate">
                        <text transform="translate(302.43 309.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-58)">
                    <g style="isolation:isolate">
                        <text transform="translate(302.43 244.79)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-59)">
                    <g style="isolation:isolate">
                        <text transform="translate(325.93 292.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-60)">
                    <g style="isolation:isolate">
                        <text transform="translate(325.93 324.99)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-61)">
                    <g style="isolation:isolate">
                        <text transform="translate(325.93 260.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-62)">
                    <g style="isolation:isolate">
                        <text transform="translate(354.28 277.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-63)">
                    <g style="isolation:isolate">
                        <text transform="translate(354.28 309.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-64)">
                    <g style="isolation:isolate">
                        <text transform="translate(354.28 244.79)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-65)">
                    <g style="isolation:isolate">
                        <text transform="translate(377.78 292.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-66)">
                    <g style="isolation:isolate">
                        <text transform="translate(377.78 324.99)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-67)">
                    <g style="isolation:isolate">
                        <text transform="translate(377.78 260.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-68)">
                    <g style="isolation:isolate">
                        <text transform="translate(401.28 277.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-69)">
                    <g style="isolation:isolate">
                        <text transform="translate(401.28 309.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-70)">
                    <g style="isolation:isolate">
                        <text transform="translate(401.28 244.79)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-71)">
                    <g style="isolation:isolate">
                        <text transform="translate(424.73 292.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-72)">
                    <g style="isolation:isolate">
                        <text transform="translate(424.73 324.99)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-73)">
                    <g style="isolation:isolate">
                        <text transform="translate(424.73 260.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-74)">
                    <g style="isolation:isolate">
                        <text transform="translate(449.03 277.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-75)">
                    <g style="isolation:isolate">
                        <text transform="translate(449.03 309.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-76)">
                    <g style="isolation:isolate">
                        <text transform="translate(449.03 244.79)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-77)">
                    <g style="isolation:isolate">
                        <text transform="translate(472.53 292.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-78)">
                    <g style="isolation:isolate">
                        <text transform="translate(472.53 324.99)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-79)">
                    <g style="isolation:isolate">
                        <text transform="translate(472.53 260.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-80)">
                    <g style="isolation:isolate">
                        <text transform="translate(497.63 277.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-81)">
                    <g style="isolation:isolate">
                        <text transform="translate(497.63 309.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-82)">
                    <g style="isolation:isolate">
                        <text transform="translate(497.63 244.79)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-83)">
                    <g style="isolation:isolate">
                        <text transform="translate(521.13 292.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-84)">
                    <g style="isolation:isolate">
                        <text transform="translate(521.13 324.99)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-85)">
                    <g style="isolation:isolate">
                        <text transform="translate(521.13 260.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-86)">
                    <g style="isolation:isolate">
                        <text transform="translate(544.63 277.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-87)">
                    <g style="isolation:isolate">
                        <text transform="translate(544.63 309.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-88)">
                    <g style="isolation:isolate">
                        <text transform="translate(544.63 244.79)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-89)">
                    <g style="isolation:isolate">
                        <text transform="translate(568.13 292.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-90)">
                    <g style="isolation:isolate">
                        <text transform="translate(568.13 324.99)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-91)">
                    <g style="isolation:isolate">
                        <text transform="translate(568.13 260.19)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-92)">
                    <g style="isolation:isolate">
                        <text transform="translate(230.33 292.59)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-93)">
                    <g style="isolation:isolate">
                        <text transform="translate(230.33 324.99)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-94)">
                    <g style="isolation:isolate">
                        <text transform="translate(230.33 258.54)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
            </g>
            <g id="blocktop">
                <path id="Symbol_12_0_Layer0_0_1_STROKES-3" data-name="Symbol 12 0 Layer0 0 1 STROKES" d="M406.13,85.75V67.1m47.8,18.65V67.1m48.6,18.65V67.1m47,18.65V67.1M573,134.35V115.7m-47,18.65V115.7m-48.6,18.65V115.7m-47.75,18.65V115.7m-7.3-10.55-9.7-8.9m-6.5,22.7V100.3m159.55,4.85-9.7-8.9m17,5.7V83.3m15.4,12.95-8.9,9.75m-94.8-.85,9.75-8.9m-17.05,5.7V83.3m-47.75,18.65V83.3m40.5,21.85-9.75-8.9m-24.3,8.9,9.75-8.9m8.1,22.7V100.3M526,101.95V83.3m5.7,21.85,9.7-8.9m-22.65,8.9L509,96.25m40.5,22.7V100.3m-47,18.65V100.3m-267.3-.8V80.85m24.3,5.7V67.9m47.8,17.85V67.1m23.45,34V82.5m28.35,3.25V67.1m23.5,34V82.5m0,51.85V115.7m-51.85,18.65V115.7M283,135.15V116.5m-47.8,17.85V115.7m54.25-10.55,9.75-8.9m42.1,8.9,9.7-8.9m-27.5,8.9-9.75-8.9m45.35,22.7V100.3m-51.8,18.65V100.3m81,4.85,9.7-8.9m-22.7,8.9-9.7-8.9m-147.4,0,8.9,9.75m55.9-4V83.3m-7.3,22.7L266,97M241.68,106,251.43,97m8.1,22.7V101.1"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                <g clip-path="url(#clip-path-95)">
                    <g style="isolation:isolate">
                        <text transform="translate(207.68 96.76)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-96)">
                    <g style="isolation:isolate">
                        <text transform="translate(589.18 95.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-97)">
                    <g style="isolation:isolate">
                        <text transform="translate(254.63 98.36)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-98)">
                    <g style="isolation:isolate">
                        <text transform="translate(254.63 130.76)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-99)">
                    <g style="isolation:isolate">
                        <text transform="translate(254.63 65.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-100)">
                    <g style="isolation:isolate">
                        <text transform="translate(278.13 113.76)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-101)">
                    <g style="isolation:isolate">
                        <text transform="translate(278.13 146.16)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-102)">
                    <g style="isolation:isolate">
                        <text transform="translate(278.13 81.36)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-103)">
                    <g style="isolation:isolate">
                        <text transform="translate(302.43 97.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-104)">
                    <g style="isolation:isolate">
                        <text transform="translate(302.43 129.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-105)">
                    <g style="isolation:isolate">
                        <text transform="translate(302.43 65.16)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-106)">
                    <g style="isolation:isolate">
                        <text transform="translate(325.93 112.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-107)">
                    <g style="isolation:isolate">
                        <text transform="translate(325.93 145.36)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-108)">
                    <g style="isolation:isolate">
                        <text transform="translate(325.93 80.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-109)">
                    <g style="isolation:isolate">
                        <text transform="translate(354.28 97.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-110)">
                    <g style="isolation:isolate">
                        <text transform="translate(354.28 129.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-111)">
                    <g style="isolation:isolate">
                        <text transform="translate(354.28 65.16)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-112)">
                    <g style="isolation:isolate">
                        <text transform="translate(377.78 112.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-113)">
                    <g style="isolation:isolate">
                        <text transform="translate(377.78 145.36)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-114)">
                    <g style="isolation:isolate">
                        <text transform="translate(377.78 80.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-115)">
                    <g style="isolation:isolate">
                        <text transform="translate(401.28 97.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-116)">
                    <g style="isolation:isolate">
                        <text transform="translate(401.28 129.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-117)">
                    <g style="isolation:isolate">
                        <text transform="translate(401.28 65.16)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-118)">
                    <g style="isolation:isolate">
                        <text transform="translate(424.73 112.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-119)">
                    <g style="isolation:isolate">
                        <text transform="translate(424.73 145.36)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-120)">
                    <g style="isolation:isolate">
                        <text transform="translate(424.73 80.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-121)">
                    <g style="isolation:isolate">
                        <text transform="translate(449.03 97.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-122)">
                    <g style="isolation:isolate">
                        <text transform="translate(449.03 129.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-123)">
                    <g style="isolation:isolate">
                        <text transform="translate(449.03 65.16)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-124)">
                    <g style="isolation:isolate">
                        <text transform="translate(472.53 112.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-125)">
                    <g style="isolation:isolate">
                        <text transform="translate(472.53 145.36)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-126)">
                    <g style="isolation:isolate">
                        <text transform="translate(472.53 80.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-127)">
                    <g style="isolation:isolate">
                        <text transform="translate(497.63 97.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-128)">
                    <g style="isolation:isolate">
                        <text transform="translate(497.63 129.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-129)">
                    <g style="isolation:isolate">
                        <text transform="translate(497.63 65.16)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-130)">
                    <g style="isolation:isolate">
                        <text transform="translate(521.13 112.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-131)">
                    <g style="isolation:isolate">
                        <text transform="translate(521.13 145.36)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-132)">
                    <g style="isolation:isolate">
                        <text transform="translate(521.13 80.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-133)">
                    <g style="isolation:isolate">
                        <text transform="translate(544.63 97.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-134)">
                    <g style="isolation:isolate">
                        <text transform="translate(544.63 129.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-135)">
                    <g style="isolation:isolate">
                        <text transform="translate(544.63 65.16)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-136)">
                    <g style="isolation:isolate">
                        <text transform="translate(568.13 112.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-137)">
                    <g style="isolation:isolate">
                        <text transform="translate(568.13 145.36)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-138)">
                    <g style="isolation:isolate">
                        <text transform="translate(568.13 80.56)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-139)">
                    <g style="isolation:isolate">
                        <text transform="translate(230.33 112.96)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-140)">
                    <g style="isolation:isolate">
                        <text transform="translate(230.33 145.36)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-141)">
                    <g style="isolation:isolate">
                        <text transform="translate(230.33 78.91)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
            </g>
            <g id="glycerol">
                <text transform="translate(33.44 538.53)" font-size="14" font-family="OpenSans, Open Sans">Glycerol</text>
            </g>
            <g id="fattyacid">
                <text transform="translate(376.16 538.53)" font-size="14" font-family="OpenSans, Open Sans">Fatty Acid</text>
            </g>
            <g id="waterbottom">
                <ellipse cx="206.85" cy="528.77" rx="31.34" ry="16.67" fill="#036" />
                <text transform="translate(189.81 534.53)" font-size="19.81" fill="#fff" font-family="OpenSans-Semibold, Open Sans" font-weight="700">H
                    <tspan x="14.88" y="4" font-size="14">2</tspan>
                    <tspan x="22.87" y="0">0</tspan>
                </text>
            </g>
            <g id="watermiddle">
                <ellipse cx="206.85" cy="355.95" rx="31.34" ry="16.67" fill="#036" />
                <text transform="translate(189.81 361.72)" font-size="19.81" fill="#fff" font-family="OpenSans-Semibold, Open Sans" font-weight="700">H
                    <tspan x="14.88" y="4" font-size="14">2</tspan>
                    <tspan x="22.87" y="0">0</tspan>
                </text>
            </g>
            <g id="watertop">
                <ellipse cx="206.85" cy="184.18" rx="31.34" ry="16.67" fill="#036" />
                <text transform="translate(189.81 189.94)" font-size="19.81" fill="#fff" font-family="OpenSans-Semibold, Open Sans" font-weight="700">H
                    <tspan x="14.88" y="4" font-size="14">2</tspan>
                    <tspan x="22.87" y="0">0</tspan>
                </text>
            </g>
            <g id="triacylglyceride">
                <text transform="translate(324.52 538.53)" font-size="14" font-family="OpenSans, Open Sans">A Triacylglyceride</text>
            </g>
            <g id="olinesbottom">
                <g id="obottom" style="isolation:isolate">
                    <text transform="translate(184.88 436.3)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
                </g>
                <path id="Symbol_16_0_Layer0_0_2_STROKES" data-name="Symbol 16 0 Layer0 0 2 STROKES" d="M205.33,448.34l-11.65-10.5m14.75,7.2-11.65-10.5"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Symbol_19_0_Layer0_0_1_STROKES" data-name="Symbol 19 0 Layer0 0 1 STROKES" d="M206.53,458.64l-8.9,9.7" fill="none"
                    stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <g id="olinesmiddle">
                <g id="omiddle" style="isolation:isolate">
                    <text transform="translate(184.88 255.98)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
                </g>
                <path id="Symbol_16_0_Layer0_0_2_STROKES-2" data-name="Symbol 16 0 Layer0 0 2 STROKES" d="M205.33,268l-11.65-10.5m14.75,7.2-11.65-10.5"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Symbol_19_0_Layer0_0_1_STROKES-2" data-name="Symbol 19 0 Layer0 0 1 STROKES" d="M206.53,278.33l-8.9,9.7" fill="none"
                    stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <g id="olinestop">
                <g id="otop" style="isolation:isolate">
                    <text transform="translate(184.88 76.35)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
                </g>
                <path id="Symbol_16_0_Layer0_0_2_STROKES-3" data-name="Symbol 16 0 Layer0 0 2 STROKES" d="M205.33,88.4,193.68,77.9m14.75,7.2L196.78,74.6"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Symbol_19_0_Layer0_0_1_STROKES-3" data-name="Symbol 19 0 Layer0 0 1 STROKES" d="M206.53,98.7l-8.9,9.7" fill="none"
                    stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <g id="bottomoh">
                <g clip-path="url(#clip-path-142)">
                    <g style="isolation:isolate">
                        <text transform="translate(176.63 478.57)" font-size="12" font-family="OpenSans, Open Sans" letter-spacing="0em" style="isolation:isolate">OH</text>
                    </g>
                </g>
            </g>
            <g id="middleoh">
                <g clip-path="url(#clip-path-143)">
                    <g style="isolation:isolate">
                        <text transform="translate(176.63 298.26)" font-size="12" font-family="OpenSans, Open Sans" letter-spacing="0em" style="isolation:isolate">OH</text>
                    </g>
                </g>
            </g>
            <g id="topoh">
                <g clip-path="url(#clip-path-144)">
                    <g style="isolation:isolate">
                        <text transform="translate(176.63 118.63)" font-size="12" font-family="OpenSans, Open Sans" letter-spacing="0em" style="isolation:isolate">OH</text>
                    </g>
                </g>
            </g>
            <g id="bottomh" data-name="bottomh">
                <g style="isolation:isolate">
                    <text transform="translate(90.43 457.4)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                </g>
            </g>
            <g id="middleh">
                <g style="isolation:isolate">
                    <text transform="translate(90.43 276.73)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                </g>
            </g>
            <g id="toph">
                <g style="isolation:isolate">
                    <text transform="translate(90.43 97.76)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                </g>
            </g>
            <g id="lettersleft">
                <g style="isolation:isolate">
                    <text transform="translate(80.75 97.76)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
                </g>
                <g style="isolation:isolate">
                    <text transform="translate(80.75 276.73)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
                </g>
                <path id="Symbol_20_0_Layer1_0_2_STROKES" data-name="Symbol 20 0 Layer1 0 2 STROKES" d="M58.38,102.2l0,161.55m0,19,0,161.55"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                <path id="Symbol_20_0_Layer0_0_1_STROKES" data-name="Symbol 20 0 Layer0 0 1 STROKES" d="M40,452.7H52.18m13,0H77.28M58.68,461V473.2"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                <g clip-path="url(#clip-path-145)">
                    <g style="isolation:isolate">
                        <text transform="translate(54.58 457.46)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-146)">
                    <g style="isolation:isolate">
                        <text transform="translate(54.13 484.01)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-147)">
                    <g style="isolation:isolate">
                        <text transform="translate(29.93 457.21)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <path id="Symbol_21_0_Layer0_0_1_STROKES" data-name="Symbol 21 0 Layer0 0 1 STROKES" d="M65.18,272.3H77.33m-37.25,0H52.23"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                <g clip-path="url(#clip-path-148)">
                    <g style="isolation:isolate">
                        <text transform="translate(54.63 276.74)" font-size="12.19" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-149)">
                    <g style="isolation:isolate">
                        <text transform="translate(29.88 276.74)" font-size="12.19" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <path id="Symbol_22_0_Layer0_0_1_STROKES" data-name="Symbol 22 0 Layer0 0 1 STROKES" d="M64.63,92.65H76.78M58.63,74v11.3m-19.1,7.3H51.68"
                    fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
                <g clip-path="url(#clip-path-150)">
                    <g style="isolation:isolate">
                        <text transform="translate(54.08 97.21)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">C</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-151)">
                    <g style="isolation:isolate">
                        <text transform="translate(54.53 72.06)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g clip-path="url(#clip-path-152)">
                    <g style="isolation:isolate">
                        <text transform="translate(28.98 97.21)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">H</text>
                    </g>
                </g>
                <g style="isolation:isolate">
                    <text transform="translate(80.75 457.4)" font-size="12.15" font-family="OpenSans, Open Sans" style="isolation:isolate">O</text>
                </g>
            </g>
            <g id="esterlinkage">
                <text transform="translate(132.43 38.43)" font-size="15.55" font-family="OpenSans, Open Sans">Ester Linkage</text>
                <polyline points="201.59 101.08 201.59 104.08 198.59 104.08" fill="none" stroke="#000" stroke-miterlimit="10" />
                <line x1="192.08" y1="104.08" x2="156.29" y2="104.08" fill="none" stroke="#000" stroke-miterlimit="10" stroke-dasharray="6.51 6.51"
                />
                <polyline points="153.03 104.08 150.03 104.08 150.03 101.08" fill="none" stroke="#000" stroke-miterlimit="10" />
                <line x1="150.03" y1="94.69" x2="150.03" y2="59.52" fill="none" stroke="#000" stroke-miterlimit="10" stroke-dasharray="6.39 6.39"
                />
                <polyline points="150.03 56.33 150.03 53.33 153.03 53.33" fill="none" stroke="#000" stroke-miterlimit="10" />
                <line x1="159.54" y1="53.33" x2="195.33" y2="53.33" fill="none" stroke="#000" stroke-miterlimit="10" stroke-dasharray="6.51 6.51"
                />
                <polyline points="198.59 53.33 201.59 53.33 201.59 56.33" fill="none" stroke="#000" stroke-miterlimit="10" />
                <line x1="201.59" y1="62.72" x2="201.59" y2="97.89" fill="none" stroke="#000" stroke-miterlimit="10" stroke-dasharray="6.39 6.39"
                />
                <line x1="175.81" y1="46.9" x2="175.81" y2="53.33" fill="none" stroke="#000" stroke-miterlimit="10" />
            </g>
        </svg>
    `;
  }

  render() {
    return html`
      <h1>Fat Synthesis</h1>
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
customElements.define("fat-synthesis-element", FatSynthesisElement);
export { FatSynthesisElement };
