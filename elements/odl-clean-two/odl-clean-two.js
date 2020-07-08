import { html, css } from "lit-element/lit-element.js";
import { LearnTwoTheme } from "@lrnwebcomponents/learn-two-theme/learn-two-theme.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";

class OdlLearnTwoTheme extends LearnTwoTheme {
  static get properties() {
    return {
      ...super.properties,
      layout: { type: String, reflect: true }
    };
  }
  constructor() {
    super();
    this.layout = "default";
  }
  //styles function
  static get styles() {
    return [super.styles, css``];
  }
  connectedCallback() {
    super.connectedCallback();
    autorun(resolve => {
      this.__updateLayout(store);
    });
  }
  __updateLayout(store) {
    const activeId = toJS(store.activeId);
    const manifest = toJS(store.manifest.items);
    const activeItem = manifest.find(i => i.id === activeId);
    if (typeof activeItem.metadata !== "undefined") {
      if (typeof activeItem.metadata.layout !== "undefined") {
        this.layout = activeItem.metadata.layout;
        return;
      }
    }
    this.layout = "default";
    return;
  }
  // render function
  render() {
    return html`
      <custom-style>
        <style>
          site-active-title {
            --site-active-title-heading: {
              font-family: var(--__learn-two-theme-default-font-family);
              font-size: 52px;
              line-height: 78px;
              margin-bottom: 27.2px;
              margin-top: 13.6px;
              text-align: center;
              text-rendering: optimizelegibility;
              font-weight: 100;
            }
          }
          site-title {
            --site-title-link: {
              display: inline-block;
              color: #fafafa;
              text-decoration: none;
            }
            --site-title-heading: {
              font-family: var(--__learn-two-theme-default-font-family);
              font-size: 28px;
              margin: 0;
              padding: 0;
              text-align: center;
              text-rendering: optimizelegibility;
              font-weight: 100;
            }
          }
          site-menu {
            --site-menu: {
              background-color: #383f45;
            }
            --site-menu-container: {
              padding: 0;
              background-color: #2d3237;
            }
          }
          app-drawer-layout {
            --app-drawer-content-container: {
              overflow: hidden;
              background-color: #383f45;
              position: relative;
            }
          }
          site-print-button {
            --site-print-button-button: {
              color: white;
            }
          }
          site-menu-button {
            --site-menu-button-button: {
              background-color: rgba(0, 0, 0, 0);
              width: 64px;
              height: 100vh;
              border-radius: 0;
              transition: 0.4s all ease-in-out;
              transition-delay: 0.2s;
              margin: 0;
              padding: 0;
              opacity: 0.8;
              -webkit-transition: 0.4s all ease-in-out;
              -moz-transition: 0.4s all ease-in-out;
              -ms-transition: 0.4s all ease-in-out;
              -o-transition: 0.4s all ease-in-out;
            }
          }
          app-drawer-layout[narrow] site-menu-button {
            --site-menu-button-button: {
              background-color: transparent !important;
              width: 64px;
              height: 64px;
            }
          }
          site-menu,
          map-menu,
          map-menu * {
            --map-menu-container: {
              display: flex;
              flex-direction: column;
              flex: 1 1 auto;
            }
            --map-menu-items-list: {
              display: flex;
              flex-direction: column;
              flex: 1 1 auto;
            }
          }
        </style>
      </custom-style>
      <app-drawer-layout responsive-width="900px">
        ${this.layout !== "course-intro"
          ? html`
              <paper-icon-button
                id="menubutton"
                icon="menu"
                @click="${this.toggleDrawer}"
                title="Toggle site menu"
              ></paper-icon-button>
            `
          : html``}
        <app-drawer
          swipe-open
          slot="drawer"
          .opened="${this.opened}"
          @opened="${this.__openedChanged}"
        >
          <paper-icon-button
            id="menubutton2"
            icon="menu"
            @click="${this.toggleDrawer}"
            title="Toggle site menu"
          ></paper-icon-button>
          <div class="header-wrapper">
            <div class="header">
              <site-title ?disabled="${this.editMode}"></site-title>
              <site-modal
                @site-modal-click="${this.siteModalClick}"
                ?disabled="${this.editMode}"
                icon="icons:search"
                title="Search site"
                button-label="Search"
              >
                <site-search></site-search>
              </site-modal>
            </div>
          </div>
          <site-menu></site-menu>
          <div class="rss-buttons">
            <site-rss-button
              ?disabled="${this.editMode}"
              type="atom"
            ></site-rss-button>
            <site-rss-button
              ?disabled="${this.editMode}"
              type="rss"
            ></site-rss-button>
            <site-print-button
              ?disabled="${this.editMode}"
              position="top"
            ></site-print-button>
          </div>
        </app-drawer>
        <div>
          <site-menu-button type="prev"></site-menu-button>
          ${this.layout === "course-intro"
            ? html`
                <course-intro>
                  <div id="contentcontainer">
                    <site-active-title></site-active-title>
                    <div id="slot">
                      <slot></slot>
                    </div>
                  </div>
                </course-intro>
              `
            : html`
                <div id="contentcontainer">
                  <site-active-title></site-active-title>
                  <div id="slot">
                    <slot></slot>
                  </div>
                </div>
              `}
          <site-menu-button type="next"></site-menu-button>
        </div>
      </app-drawer-layout>
    `;
  }
}

customElements.define("odl-clean-two", OdlLearnTwoTheme);

export { OdlLearnTwoTheme };
