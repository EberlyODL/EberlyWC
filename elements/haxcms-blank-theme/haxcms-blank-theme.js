/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css } from "lit-element/lit-element.js";
import { CleanTwo } from "@lrnwebcomponents/clean-two/clean-two.js";

/**
 * `clean-two`
 * `A 2nd clean theme`
 *
 * @microcopy - language worth noting:
 *  - HAXcms - A headless content management system
 *  - HAXCMSTheme - A super class that provides correct baseline wiring to build a new theme
 *
 * @demo demo/index.html
 * @element clean-two
 */
class OdlCleanTwo extends CleanTwo {
  //styles function
  static get styles() {
    return [
      ...super.styles,
      css`
        site-menu {
          margin: 0;
        }
        .content {
          margin: 16px;
        }
        .right-col {
          display: block;
          overflow: hidden;
        }
      `
    ];
  }
  constructor() {
    super();
  }
  static get tag() {
    return "haxcms-blank-theme";
  }
}
window.customElements.define(OdlCleanTwo.tag, OdlCleanTwo);
export { OdlCleanTwo };
