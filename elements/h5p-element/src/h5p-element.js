import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { FlattenedNodesObserver } from "@polymer/polymer/lib/utils/flattened-nodes-observer.js";
import { css, html, LitElement } from "lit-element/lit-element.js";
import { autorun } from "mobx/lib/mobx.module.js";
import "@eberlywc/iframe-loader/iframe-loader.js";

class H5pElement extends LitElement {
  static get properties() {
    return {
      __editLink: { type: String, attribute: false },
      __editMode: { type: Boolean, attribute: false }
    };
  }
  static get styles() {
    return css`
      :host {
        display: block;
      }
      [part="container"] {
        display: block;
        position: relative;
      }
      .editing[part="container"] {
        min-height: 100px;
      }
      [part="edit-screen"] {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      }
      [part="source-link"] a {
        background: black;
        color: white;
        padding: 1em;
      }
      [part="anchor"] {
        display: block;
      }
    `;
  }
  constructor() {
    super();
    this.src = "";
    this.editMode = store.editMode;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.__clickHandler.bind(this));
    this.__disposer = autorun(() => {
      this.__editMode = store.editMode;
    });
    this.HAXWiring = new s();
    this.HAXWiring.setup(c.haxProperties, c.tag, this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.__disposer();
  }
  firstUpdated() {
    this._observer = new FlattenedNodesObserver(this, info => {
      info.addedNodes.forEach(item => {
        const iframe =
          item.nodeName === "IFRAME" ? item : this.querySelector("iframe");
        if (iframe) {
          if (typeof iframe.src !== "undefined") {
            const editUrl = "https://media.ed.science.psu.edu/node/$1/edit";
            this.__editLink = iframe.src.replace(/.*\/node\/([0-9]*)/, editUrl);
          }
        }
      });
    });
  }
  updated(changedProps) {
    changedProps.forEach((old, prop) => {
      if (prop === "src") {
        if (this.src) {
        }
      }
    });
  }
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "H5P Element",
        description: "Add an H5P iframe embed.",
        icon: "icons:file-download",
        color: "blue",
        meta: {
          author: "LRNWebComponents"
        }
      },
      settings: {
        configure: [
          {
            slot: "",
            title: "iframe",
            description: "The html code of the iframe",
            inputMethod: "code-editor",
            icon: "editor:iframe"
          }
        ],
        advanced: []
      }
    };
  }
  render() {
    return html`
      <div part="container" class="${this.__editMode ? "editing" : "editing"}">
        ${this.__editMode
          ? html`
              <slot></slot>
              <div part="edit-screen">
                <div part="source-link">
                  <a part="anchor" href="${this.__editLink}" target="_blank"
                    >Edit H5P Source</a
                  >
                </div>
              </div>
            `
          : html`
              <iframe-loader><slot></slot></iframe-loader>
            `}
      </div>
    `;
  }

  __clickHandler() {}
}
customElements.define("h5p-element", H5pElement);
