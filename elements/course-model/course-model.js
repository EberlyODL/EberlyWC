/**
 * Copyright 2021
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { ModelViewerElement } from "@google/model-viewer";
import "./src/model-option.js";
import "./src/model-info.js";

/**
 * `course-model`
 * `3D Model Viewer`
 * @demo demo/index.html
 * @element course-model
 */
class CourseModel extends LitElement {
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
      eimage: { type: String },
    };
  }

  constructor() {
    super();
    this.visible = "model";
    this.title = "";
    this.src = "";
    this.eimage = "";
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
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
          background: rgba(0, 0, 0, 0.8);
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
            min-height: 750px;
            max-height: 750px;
          }
        }

        .slotted-text {
          padding: 25px;
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
        background-color: dimgray;
        height: inherit;
        display: flex;
        align-items: center;
        padding: 0 0 0 15px;
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

  render() {
    return html`
      <div id="model-wrap">
        <div id="toolbar-wrap">
          <div id="nav">
            <button
              title="Explore Models"
              id="explore"
              class="tool-button"
              @click="${this.openInfo}"
            >
              <svg fill="#fff" viewBox="0 0 24 24">
                <path
                  d="M13.818 16.646c-1.273.797-2.726 1.256-4.202 1.354l-.537-1.983c2.083-.019 4.132-.951 5.49-2.724 2.135-2.79 1.824-6.69-.575-9.138l-1.772 2.314-1.77-6.469h6.645l-1.877 2.553c3.075 2.941 3.681 7.659 1.423 11.262l7.357 7.357-2.828 2.828-7.354-7.354zm-11.024-1.124c-1.831-1.745-2.788-4.126-2.794-6.522-.005-1.908.592-3.822 1.84-5.452 1.637-2.138 4.051-3.366 6.549-3.529l.544 1.981c-2.087.015-4.142.989-5.502 2.766-2.139 2.795-1.822 6.705.589 9.154l1.774-2.317 1.778 6.397h-6.639l1.861-2.478z"
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
              title="Play Animation"
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
          <div class="slotted-text">
            <slot name="detail"></slot>
          </div>
          <div class="slotted-animation"><slot name="animation"></slot></div>
        </div>
        <div id="model-wrap" class="model">
          <model-viewer
            title="${this.title}"
            src="${this.src}"
            alt="${this.alt}"
            camera-controls
            environment-image="${this.eimage}"
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