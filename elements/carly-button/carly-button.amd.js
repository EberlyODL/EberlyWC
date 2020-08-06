define(["exports","./node_modules/@polymer/lit-element"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.CarlyButton=void 0;function _templateObject_41a9fdf0614811e9a89e5f16905b6d5d(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_41a9fdf0614811e9a89e5f16905b6d5d=function _templateObject_41a9fdf0614811e9a89e5f16905b6d5d(){return data};return data}/**
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
 */var CarlyButton=/*#__PURE__*/function(_LitElement){babelHelpers.inherits(CarlyButton,_LitElement);babelHelpers.createClass(CarlyButton,[{key:"render",// render function
value:function render(){return(0,_litElement.html)(_templateObject_41a9fdf0614811e9a89e5f16905b6d5d())}// properties available to the custom element for data binding
},{key:"tag",/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */value:function tag(){return"carly-button"}// life cycle
}],[{key:"properties",get:function get(){return{}}}]);function CarlyButton(){babelHelpers.classCallCheck(this,CarlyButton);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(CarlyButton).call(this))}/**
   * life cycle, element is afixed to the DOM
   */babelHelpers.createClass(CarlyButton,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(CarlyButton.prototype),"connectedCallback",this).call(this)}// static get observedAttributes() {
//   return [];
// }
// disconnectedCallback() {}
// attributeChangedCallback(attr, oldValue, newValue) {}
}]);return CarlyButton}(_litElement.LitElement);_exports.CarlyButton=CarlyButton;customElements.define("carly-button",CarlyButton)});