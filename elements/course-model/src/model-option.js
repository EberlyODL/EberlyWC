import { LitElement, html, css } from "lit-element/lit-element.js";

class ModelOption extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      url: { type: String },
      id: { type: String},
      src: { type: String },
    };
  }
  constructor() {
    super();
    this.title = "";
    this.url = "";
    this.id = "";
    this.src = "";
  }
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        a {
          text-decoration: none;
          color: #fff;
        }

        h2 {
          margin-bottom: 10px;
        }

        @media screen and (min-width: 320px) {
          h2 {
            font-size: 24px;
        }
  
        @media screen and (min-width: 920px) {
          h2 {
            font-size: 36px;
          }
        }

        #option-wrap {
          padding: 15px 25px 15px;
        }

        #accent-color {
          background-color: #e2801e;
          width: 80px;
          height: 5px;
        }

        .button {
          width: 100%;
        }
      `,
    ];
  }

  render() {
    return html`
    <a>
      <div id="${this.id}" class="button" @click="${this._handleClick}">
        <div id="option-wrap">
          <div id="accent-color"></div>
          <div id="title">
            <h2>${this.title}</h2>
          </div>
          <slot></slot>
        </div>
      </div>
    </a>
     
    `;
  }
  

  _handleClick(e) {
   console.log("click");
  }

  static get tag() {
    return "model-option";
  }
}


customElements.define("model-option", ModelOption);

export { ModelOption };
