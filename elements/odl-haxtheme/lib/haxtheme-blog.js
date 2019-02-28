import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/iron-image/iron-image.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/haxcms-site-store.js";
import { autorun, toJS } from "mobx";
import "./page-banner.js";
import "./news-archive.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        background-color: #f5f5f5;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-4: #fff;
      }


      h2 {
        margin: 0;
        font-weight: normal;
        font-size: 26px;
      }

      .news_container {
        display: flex;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (max-width: 768px) {
        .news_container {
          flex-direction: column;
          width: 98%;
        }
      }

      .news_page_feed {
        width: 75%;
      }

      @media screen and (max-width: 768px) {
        .news_page_feed {
          width: 100%;
        }
      }

      #card_wrap {
        background-color: var(--theme-color-4);
        margin: 25px;
        padding: 15px;
        box-shadow: 0 1px 2px #dcdcdc;
      }

      #card_image {
        margin-right: 15px;
        float: left;
      }

      @media screen and (max-width: 768px) {
        #card_image {
          float: none;
        }
      }

      @media screen and (max-width: 768px) {
        #card_image iron-image {
          width: 100% !important;
          height: 200px;
        }
      }

      #card_image iron-image {
        height: 220px;
        width: 175px;
      }

      #card_heading h2 {
        color: var(--theme-color-2);
        margin: 11px 0px 5px;
        font-weight: bold;
      }

      #card_heading a {
        text-decoration: none;
      }

      #post_date {
        margin-bottom: 5px;
      }

      .sidebar_wrap {
        width: 25%;
        margin-top: 25px;
      }

      @media screen and (max-width: 768px) {
       .sidebar_wrap {
          width: 100%;
        }
      }

      @media screen and (max-width: 768px) {
        #twitter_feed {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
        }
      }

      #news_archive {
        margin-bottom: 25px;
      }

      @media screen and (max-width: 768px) {
        #news_archive {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
        }
      }
      
      #card_description {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 300;
      }

      #card_footer iron-image {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-right: 5px;
      }

      #card_footer {
        display: flex;
        align-items: center;
        padding-right: 15px;
      }
    </style>
    <page-banner image="[[activeItem.metadata.image]]" text="[[activeItem.title]]" alt="Gateway to the Sciences"></page-banner>
    <div id="news_wrap">
      <div class="news_container">
        <slot></slot>
        <div class="sidebar_wrap">
          <div id="news_archive"></div>
            Blog archive here
          </div>
        </div>
      </div>
    </div>`,

  is: "haxtheme-blog",

  properties: {
    /**
     * Type of data to select from site.json
     */
    type: {
      type: String,
      value: "news",
      reflectToAttribute: true
    },
    /**
     * Items from sites.json
     */
    _items: {
      type: Array,
      value: []
    }
  },

  _formatDate: function(unixTimecode) {
    const date = new Date(unixTimecode * 1000);
    const dateFormatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    return dateFormatted;
  },
  attached: function() {
    const pages = this.manifest.items;
    const pagesFiltered = pages.filter(item => {
      if (typeof item.metadata !== "undefined") {
        if (typeof item.metadata.type !== "undefined") {
          if (item.metadata.type === "news") {
            return true;
          }
        }
      }
      return false;
    });

    this.set("_items", pagesFiltered);

    const archiveList = pagesFiltered.splice(5);
  },
  created: function() {
    this.__disposer = autorun(() => {
      this.manifest = toJS(store.routerManifest);
      this.activeItem = this.manifest.items.find(
        i => i.id === store.activeItem
      );
      console.log(this.activeItem.title);
    });
  },
  detached: function() {
    this.__disposer();
  }
});
