/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html } from "@polymer/polymer/polymer-element.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import { HAXCMSTheme } from "@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSThemeWiring.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import { dom } from "@polymer/polymer/lib/legacy/polymer.dom.js";
import { wipeSlot } from "@lrnwebcomponents/hax-body/lib/haxutils.js";
import "@polymer/iron-pages/iron-pages.js";
import "./lib/haxtheme-home.js";
import "./lib/haxtheme-about.js";
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
class OdlHaxtheme extends HAXCMSTheme(SimpleColors) {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */
  constructor() {
    super();
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js");
    import("@polymer/paper-card/paper-card.js");
    import("@polymer/paper-button/paper-button.js");
    import("@polymer/iron-icons/iron-icons.js");
    import("@lrnwebcomponents/promo-tile/promo-tile.js");
    import("@lrnwebcomponents/scroll-button/scroll-button.js");
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
    autorun(reaction => {
      this._locationChanged(store.location);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItemContent = toJS(store.activeItemContent);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
  /**
   * Notice content has changed, ensure it shows up in the right place
   * in the theme
   */
  _activeItemContentChanged(newValue) {
    if (newValue) {
      var target;
      // pass in the current location from store
      const location = store.location;
      switch (location.route.name) {
        case "home":
        case "news":
        case "team":
        case "courses":
        case "about":
          target = location.route.name;
          break;
        default:
          if (location.route.path.startsWith("blog-posts/")) {
            target = "blog";
          } else if (location.route.path.startsWith("team-directory/")) {
            target = "profile";
          } else if (location.route.path.startsWith("courses/")) {
            target = "course";
          } else if (location.route.path.startsWith("syllabi/")) {
            target = "syllabus";
          } else if (location.route.path.startsWith("about/")) {
            target = "about";
          }
          break;
      }
      if (target) {
        wipeSlot(this.shadowRoot.querySelector("#" + target), "*");
        let frag = document.createRange().createContextualFragment(newValue);
        dom(this.shadowRoot.querySelector("#" + target)).appendChild(frag);
      }
    }
  }
  /**
   * Notice active item changed state
   */
  _locationChanged(location) {
    if (typeof location !== typeof undefined) {
      var target;
      switch (location.route.name) {
        case "home":
          this.selectedPage = 0;
          target = location.route.name;
          break;
        case "news":
          this.selectedPage = 1;
          target = location.route.name;
          break;
        case "team":
          this.selectedPage = 2;
          target = location.route.name;
          break;
        case "courses":
          this.selectedPage = 3;
          target = location.route.name;
          break;
        case "about":
          this.selectedPage = 4;
          target = location.route.name;
          break;
        default:
          if (location.route.path.startsWith("blog-posts/")) {
            this.selectedPage = 5;
            target = "blog";
          } else if (location.route.path.startsWith("team-directory/")) {
            this.selectedPage = 6;
            target = "profile";
          } else if (location.route.path.startsWith("courses/")) {
            this.selectedPage = 7;
            target = "course";
          } else if (location.route.path.startsWith("syllabi/")) {
            this.selectedPage = 8;
            target = "syllabus";
          } else if (location.route.path.startsWith("about/")) {
            this.selectedPage = 9;
            target = "about";
          }
          break;
      }
      if (target) {
        this.contentContainer = this.shadowRoot
          .querySelector("#" + target)
          .shadowRoot.querySelector("#contentcontainer");
      }

      window.scrollTo(0, 0);
      // this.set('activeItem', e.detail);
    } else {
      this.selectedPage = 0;
    }
  }
}
window.customElements.define(OdlHaxtheme.tag, OdlHaxtheme);
export { OdlHaxtheme };
