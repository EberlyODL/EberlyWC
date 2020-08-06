/**
 * Copyright 2019 PSU
 * @license Apache-2.0, see License.md for full text.
 */import{LitElement,html}from"./node_modules/@polymer/lit-element";export{CarlyButton};/**
 * `carly-button`
 * `Cool submit button for testing.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */class CarlyButton extends LitElement{// render function
render(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<slot></slot>`}// properties available to the custom element for data binding
static get properties(){return{}}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */tag(){return"carly-button"}// life cycle
constructor(){super()}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){super.connectedCallback()}// static get observedAttributes() {
//   return [];
// }
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
}customElements.define("carly-button",CarlyButton);