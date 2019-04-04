/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { HAXCMSTheme } from "@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSThemeWiring.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun } from "mobx";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js";
import "@polymer/paper-card/paper-card.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/iron-pages/iron-pages.js";
import "@lrnwebcomponents/simple-colors/simple-colors.js";
import "@lrnwebcomponents/promo-tile/promo-tile.js";
import "@lrnwebcomponents/scroll-button/scroll-button.js";
import "./lib/haxtheme-home.js";
import "./lib/haxtheme-news.js";
import "./lib/haxtheme-team.js";
import "./lib/haxtheme-courses.js";
import "./lib/haxtheme-blog.js";
import "./lib/page-topbar.js";
import "./lib/page-footer.js";

/**
 * `odl-haxtheme`
 * `ODL custom site theme`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class OdlHaxtheme extends HAXCMSTheme(PolymerElement) {
  // render function
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          font-family: "Roboto", sans-serif;
          --theme-color-1: #363533;
          --theme-color-2: #e2801e;
          --theme-color-4: #fff;
        }

        :root {
          --site-rss-bg-color: var(--theme-color-2);
          --haxcms-base-styles-a-weight: bold;
          --haxcms-base-styles-a-font-size: 20px;
          --site-breadcrumb-color: #a9a9a9;
          --site-menu-button-button: {
            background-color: var(--theme-color-2);
            margin: 5px 0 15px;
            border-radius: none;
            color: var(--theme-color-4);
          }
          --site-rss-border-radius: 0;
          --site-rss-bg-active: var(--theme-color-2);
          --site-recent-content-block-item-link: {
            color: var(--theme-color-1);
          }
        }

        :host([hidden]) {
          display: none;
        }

        :host([edit-mode]) #slot {
          display: none;
        }

        scroll-button {
          position: fixed;
          right: 0;
          bottom: 50px;
          margin-right: 25px;
          border: 1px solid #f5f5f5;
          --scroll-button-button: {
            background-color: var(--theme-color-2);
          }
          --scroll-button-button-active: {
            background-color: var(--theme-color-2);
          }
        }

        site-top-menu {
          width: 100%;
          --site-top-menu-button: {
            padding: 15px 10px;
            margin: 0;
            width: 100%;
            border-radius: 0;
          }
          --site-top-menu-button-hover: {
            background-color: var(--theme-color-1);
            color: white;
          }
          --site-top-menu-link-active: {
            background-color: var(--theme-color-1);
            color: white;
          }
          --site-top-menu-spacing: {
            flex: 1 1 auto;
          }
          --site-top-menu-indicator: {
            border-bottom: 4px solid white;
          }
          --site-top-meu-wrapper: {
            background-color: var(--theme-color-2);
            display: flex;
            justify-content: stretch;
          }
          --site-top-menu-link: {
            width: 100%;
            background-color: var(--theme-color-2);
            color: var(--theme-color-4);
            text-decoration: none;
            display: flex;
            justify-content: center;
            text-transform: uppercase;
          }
        }
      </style>
      <style include="simple-colors"></style>

      <page-topbar></page-topbar>
      <site-top-menu></site-top-menu>
      <iron-pages selected="[[selectedPage]]">
        <haxtheme-home id="homeelement"> </haxtheme-home>
        <haxtheme-news></haxtheme-news>
        <haxtheme-team></haxtheme-team>
        <haxtheme-courses></haxtheme-courses>
        <haxtheme-blog id="blog">
          <div id="contentcontainer">
            <div id="slot">
              <slot></slot>
            </div>
          </div>
        </haxtheme-blog>
      </iron-pages>
      <scroll-button></scroll-button>
      <page-footer></page-footer>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * editting state for the page
       */
      editMode: {
        type: Boolean,
        reflectToAttribute: true,
        observer: "_editModeChanged"
      },
      /**
       * Active item which is in JSON Outline Schema
       */
      activeItem: {
        type: Object
      },
      /**
       * a manifest json file decoded, in JSON Outline Schema format
       */
      manifest: {
        type: Object
      },
      /**
       * DOM node that wraps the slot
       */
      contentContainer: {
        type: Object,
        value: null,
        observer: "_contentContainerChanged"
      },
      /**
       * active manifest index, key to location in the manifest itemsarray
       */
      activeManifestIndex: {
        type: Number,
        value: -1
      },
      /**
       * The "page" to show (overview or blog post itself).
       */
      selectedPage: {
        type: Number,
        reflectToAttribute: true,
        value: 0
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "odl-haxtheme";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    autorun(() => {
      this._locationChanged(store.location);
    });
  }
  /**
   * Notice active item changed state
   */
  _locationChanged(location) {
    if (typeof location !== typeof undefined) {
      switch (location.pathname) {
        case "/home":
          this.selectedPage = 0;
          break;
        case "/news":
          this.selectedPage = 1;
          break;
        case "/team":
          this.selectedPage = 2;
          break;
        case "/courses":
          this.selectedPage = 3;
          break;
      }

      if (location.pathname.startsWith("/blog-posts/")) {
        this.HAXCMSThemeWiring.connect(this, this.$.blog.$.contentcontainer);
        this.selectedPage = 4;
      }

      window.scrollTo(0, 0);
      // this.set('activeItem', e.detail);
    } else {
      this.selectedPage = 0;
    }
  }
  /**
   * life cycle, element is removed from the DOM
   */
  //disconnectedCallback() {}
}
window.customElements.define(OdlHaxtheme.tag, OdlHaxtheme);
export { OdlHaxtheme };
