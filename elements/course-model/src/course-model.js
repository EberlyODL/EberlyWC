/**
 * Copyright 2021
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { ModelViewerElement } from "@google/model-viewer";
import './src/model-option.js';


/**
 * `course-model`
 * `3D Model Viewer`
 * @demo demo/index.html
 * @element course-model
 */
class CourseModel extends LitElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Convention we use
   */
  static get tag() {
    return "course-model";
  }

  static get properties() {
    return {
      visible: {
        type: String,
        reflect: true,
      },
      title: { type: String },
      src: { type: String },
      alt: { type: String },
    };
  }

  constructor() {
    super();
    this.visible = "model";
    this.title = "";
    this.src = "";
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          font-family: "Roboto", sans-serif;
        }

        :host([visible="model"]) .overlay {
          display: none;
        }

        :host([visible="model-info"]) .slotted-text, .slotted-animation {
          display: none;
        }

        :host([visible="model-text"]) .slotted-info, .slotted-animation {
          display: none;
        }

        :host([visible="model-text"]) .slotted-text {
          display: block;
        }

        :host([visible="model-animation"]) .slotted-info, .slotted-text {
          display: none;
        }

        :host([visible="model-animation"]) .slotted-animation {
          display: block;
        }

        h1 {
          color: #fff;
          margin: 0;
        }

        @media screen and (min-width: 320px) {
          h1 {
            font-size: 16px;
          }
        }

        @media screen and (min-width: 920px) {
          h1 {
            font-size: 24px;
          }
        }

        #model-wrap {
          position: relative;
        }

        #info-wrap {
          background: rgba(0, 0, 0, 0.4);
          color: rgb(255, 255, 255);
          position: absolute;
          z-index: 1;
          overflow-y: scroll;
          overflow-x: hidden;
          max-height: 750px;
          width: 100%;
        }

        @media screen and (min-width: 320px) {
          #info-wrap {
            min-height: 301px;
            max-height: 301px;
          }
        }

        @media screen and (min-width: 920px) {
          #info-wrap {
            min-height: 701px;
            max-height: 701px;
          }
        }

        model-viewer {
          --progress-bar-height: 0px;
          width: 100%;
          background-color: #eee;
        }

        @media screen and (min-width: 320px) {
          model-viewer {
            height: 350px;
          }
        }

        @media screen and (min-width: 920px) {
          model-viewer {
            height: 750px;
          }
        }

        #toolbar-wrap {
          display: inline-flex;
          align-items: center;
          background-color: #363533;
          width: 100%;
        }

        @media screen and (min-width: 320px) {
          #toolbar-wrap {
            height: 50px;
          }
        }

        @media screen and (min-width: 920px) {
          #toolbar-wrap {
            height: 75px;
          }
        }

        .tool-button {
          background-color: transparent;
          margin-right: -10px;
          border: none;
        }

        @media screen and (min-width: 320px) {
          .tool-button {
            height: 50px;
            width: 45px;
          }
        }

      @media screen and (min-width: 920px) {
        .tool-button {
          height: 75px;
          width: 75px;
        }
      }

      .tool-button:hover {
        background-color: #e2801e;
      }

      .tool-button:focus {
        background-color: #e2801e;
      }

      .tool-button:active {
        background-color: #e2801e;
      }

      @media screen and (min-width: 320px) {
        svg {
          height: 24px;
          width: 24px;
      }

      @media screen and (min-width: 920px) {
        svg {
          height: 36px;
          width: 36px;
        }
      }

      #title {
        flex-grow: 1;
      }

      @media screen and (min-width: 320px) {
        #title {
          margin-left: 5px;
        }
      }

      @media screen and (min-width: 920px) {
        #title {
          margin-left: 25px;
        }
      }
    
      @media screen and (min-width: 320px) {
        #logo {
          margin-right: 10px;
        }
      }

      @media screen and (min-width: 920px) {
        #logo {
          margin-right: 25px;
        }
      }

      @media screen and (min-width: 320px) {
        img#brand {
          width: 45px;
        }
      }

      @media screen and (min-width: 920px) {
        img#brand {
          width: 70px;
        }
      }
      `,
    ];
  }
  /**
   * HTMLElement
   */

  render() {
    return html`
      <div id="model-wrap">
        <div id="toolbar-wrap">
          <div id="nav">
            <button
              title="Explore Model"
              id="explore"
              class="tool-button"
              @click="${this.openInfo}"
            >
              <svg fill="#fff" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"
                />
              </svg>
            </button>
            <button
              title="More Information"
              id="moreinfo"
              class="tool-button"
              @click="${this.openText}"
            >
              <svg fill="#fff" viewBox="0 0 24 24">
                <path
                  d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-10v-1h10v1zm0-4h-10v1h10v-1zm0-3h-10v1h10v-1z"
                />
              </svg>
            </button>
            <button
              title="Animation"
              id="animation"
              class="tool-button"
              @click="${this.openAnimation}"
            >
              <svg fill="#fff" viewBox="0 0 24 24">
                <path
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"
                />
              </svg>
            </button>
          </div>
          <div id="title"><h1>${this.title}</h1></div>
          <div id="logo">
            <img
              id="brand"
              src="../src/img/ecosodl.png"
              alt="The Office of Digital Learning"
            />
          </div>
        </div>

        <div id="info-wrap" class="overlay">
          <div class="slotted-info"><slot></slot></div>
          <div class="slotted-text"><slot name="detail"></slot></div>
          <div class="slotted-animation"><slot name="animation"></slot></div>
        </div>
        <div id="model-wrap" class="model">
          <model-viewer
            title="${this.title}"
            src="${this.src}"
            alt="${this.alt}"
            camera-controls
          ></model-viewer>
        </div>
      </div>
    `;
  }

  /**
   * Open Explore Slot
   */

  openInfo(e) {
    if (this.visible == "model-info") {
      this.visible = "model";
    } else if (this.visible != "model-info") {
      this.visible = "model-info";
    }
  }
  /**
   * Open Info Slot
   */
  openText(e) {
    if (this.visible == "model-text") {
      this.visible = "model";
    } else if (this.visible != "model-text") {
      this.visible = "model-text";
    }
  }
  /**
   * Open Animation Slot
   */
  openAnimation(e) {
    if (this.visible == "model-animation") {
      this.visible = "model";
    } else if (this.visible != "model-animation") {
      this.visible = "model-animation";
    }
  }
  /**
   * LitElement ready
   */
  firstUpdated(changedProperties) {}
  /**
   * LitElement life cycle - property changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      /* notify example
      // notify
      if (propName == 'format') {
        this.dispatchEvent(
          new CustomEvent(`${propName}-changed`, {
            detail: {
              value: this[propName],
            }
          })
        );
      }
      */
      /* observer example
      if (propName == 'activeNode') {
        this._activeNodeChanged(this[propName], oldValue);
      }
      */
      /* computed example
      if (['id', 'selected'].includes(propName)) {
        this.__selectedChanged(this.selected, this.id);
      }
      */
    });
  }
}

customElements.define(CourseModel.tag, CourseModel);
export { CourseModel };
