/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { HAXCMSTheme } from "@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSThemeWiring.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun } from "mobx/lib/mobx.module.js";
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
import "./lib/haxtheme-course.js";
import "./lib/haxtheme-blog.js";
import "./lib/haxtheme-profile.js";
import "./lib/haxtheme-syllabus.js";
import "./lib/link-preview.js";
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
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

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

      if (location.pathname.startsWith("/team-directory/")) {
        this.HAXCMSThemeWiring.connect(this, this.$.profile.$.contentcontainer);
        this.selectedPage = 5;
      }

      if (location.pathname.startsWith("/courses/")) {
        this.HAXCMSThemeWiring.connect(this, this.$.course.$.contentcontainer);
        this.selectedPage = 6;
      }

      if (location.pathname.startsWith("/syllabi/")) {
        this.HAXCMSThemeWiring.connect(
          this,
          this.$.syllabus.$.contentcontainer
        );
        this.selectedPage = 7;
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
