import { html, css } from "lit-element/lit-element.js";
import { CleanOne } from "@lrnwebcomponents/clean-one/clean-one.js";

class HaxcmsBlankTheme extends CleanOne {
  static get properties() {
    return {
      ...super.properties
    };
  }
  constructor() {
    super();
  }
  //styles function
  static get styles() {
    return [css``];
  }
  static get tag() {
    return "haxcms-blank-theme";
  }
  // render function
  render() {
    return html`
      <div id="contentcontainer">
        <div id="slot">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define(HaxcmsBlankTheme.tag, HaxcmsBlankTheme);

export { HaxcmsBlankTheme };
