import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/iron-image/iron-image.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
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

      h1 {
        margin: 25px 0 0;
        font-weight: 400;
      }

      h2 {
        margin: 0;
        font-weight: 100;
        font-size: 26px;
      }

      #contentcontainer {
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.6;
      }

      .news_container {
        display: flex;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (max-width: 768px) {
        #news_wrap {
          padding: 15px;
        }
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

      .publish_credentials {
        border-left: solid;
        border-left-width: 4px;
        border-left-color: var( --theme-color-2);
        padding-left: 15px;
      }

      #author_info {
        display: flex;
        align-items: center;
        margin: 15px 0 15px;
      }

      iron-image#author_image {
        border-radius: 50%;
        margin-right: 10px;
      }

      #taxonomy {
        display: flex;
        align-items: center;
        margin: 15px 0 15px;
      }

      #taxonomy a {
        text-decoration: none;
        font-size: 24px;
        font-weight: 300;
        color: var(--theme-color-2);
        margin-right: 10px;
      }

      #taxonomy a:hover {
        font-weight: bold;
      }

      .tag_wrap {
        margin-right: 10px;
      }


    </style>
    <page-banner image="[[activeItem.metadata.image]]" text="[[activeItem.metadata.tagLine]]" alt="Gateway to the Sciences"></page-banner>
    <div id="news_wrap">
      <div class="news_container">
        <div id="news_inner_wrap">
          <div class="publish_credentials">
            <div class="title">
              <h1>[[activeItem.title]]</h1>
            </div>
            <div class="date">
              <h2>[[_formatDate(activeItem.metadata.created)]]</h2>
            </div>
            <div id="author_info">
              <iron-image
                id="author_image"
                style="width:70px; height:70px;"
                sizing="cover"
                src="[[activeItem.metadata.authorImage]]">
              </iron-image>
              <div id="author">By: [[activeItem.metadata.author]]</div>
            </div>
          </div>
          <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
           <div id="taxonomy">
            <div class="tag_wrap">
              <h2>Tags:</h2>
            </div>
            <template is="dom-repeat" items="[[activeItem.metadata.tags]]" as="tag">
            <a href="">[[tag]]</a> 
            </template>
           </div>
        </div>
        <div class="sidebar_wrap">
          <div id="news_archive">
            Blog archive here
          </div>
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
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  },
  detached: function() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
  }
});
