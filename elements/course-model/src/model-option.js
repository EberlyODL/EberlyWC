import { LitElement, html, css } from "lit-element/lit-element.js";

class ModelOption extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      url: { type: String },
    };
  }
  constructor() {
    super();
    this.title = "";
    this.url = "";
  }
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          font-family: "Roboto", sans-serif;
        }

        a {
          text-decoration: none;
          color: #fff;
        }

        h2 {
          font-size: 36px;
          margin-bottom: 10px;
        }

        #option-wrap {
          padding: 15px 25px 15px;
        }

        #option-wrap:hover {
          background: rgba(0, 0, 0, 0.6);
        }

        #accent-color {
          background-color: #e2801e;
          width: 80px;
          height: 5px;
        }
      `,
    ];
  }

  render() {
    return html`
      <a href="${this.url}" target="_blank">
        <div id="option-wrap">
          <div id="accent-color"></div>
          <div id="title">
            <h2>${this.title}</h2>
          </div>
          <slot></slot>
        </div>
      </a>
    `;
  }

  static get tag() {
    return "model-option";
  }
}

customElements.define("model-option", ModelOption);

export { ModelOption };
