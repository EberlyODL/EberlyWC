import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/iron-image/iron-image.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-rss-button.js";
import { autorun, toJS } from "mobx";
import "./page-banner.js";
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

      a {
        text-decoration: none;
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
        margin-top: 20px;
      }

      @media screen and (max-width: 768px) {
        .news_page_feed {
          width: 100%;
          margin-top: 10px;
        }
      }

      #card_wrap {
        display: flex;
        background-color: var(--theme-color-4);
        margin: 15px;
        padding: 15px;
        box-shadow: 0 1px 2px #dcdcdc;
      }

      @media screen and (max-width: 768px) {
        #card_wrap {
          display: flex;
          flex-direction: column;
        }
      }

      @media screen and (max-width: 768px) {
        #card_image iron-image {
          width: 100% !important;
          height: 180px !important;
          border: none !important;
        }
      }

      #card_image {
        padding-right: 5px;
      }

      #card_image iron-image {
        height: 220px;
        width: 175px;
        border-left: solid 6px var(--theme-color-2);
      }

      .card_info {
        padding-left: 15px;
      }

      @media screen and (max-width: 768px) {
        .card_info {
          padding: 0;
        }
      }

      @media screen and (max-width: 768px) {
        .title h2 {
          margin-top: 5px;
          font-size: 24px;
        }
      }

      .title a {
        color: var(--theme-color-1);
      }

      .title a:hover {
        color: var(--theme-color-2);
      }

      @media screen and (max-width: 768px) {
        .date h2 {
          font-size: 18px !important;
        }
      }

      .date h2 {
        font-size: 20px;
        color: var(--theme-color-1);
      }

      #author {
        color: var(--theme-color-1);
      }

      #author_info {
        display: flex;
        align-items: center;
        margin: 5px 0 5px;
      }

      iron-image#author_image {
        border-radius: 50%;
        margin-right: 10px;
      }

      #card_description {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 300;
      }

      .sidebar_wrap {
        width: 25%;
        margin-top: 45px;
        border-left: solid 2px #dcdcdc;
        padding-left: 20px;
        height: 600px;
      }

      @media screen and (max-width: 768px) {
       .sidebar_wrap {
          width: 100%;
          height: auto;
          border: none;
          padding-left: 0;
          margin-top: 10px;
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

      site-recent-content-block {
        --site-recent-content-block-header-color: #e2801e;
      }


      @media screen and (max-width: 768px) {
        .card_header_info {
          border-left: solid 4px var(--theme-color-2);
          padding-left: 10px;
        }
      }

      site-breadcrumb {
        margin-top: 10px;
        margin-left: 15px;
      }

      @media screen and (max-width: 768px) {
        site-breadcrumb {
          margin: 10px 0 0 15px;
        }
      }

      #share_actions {
        background-color: var(--theme-color-4); 
        display: flex;
        justify-content: space-around;
        padding: 10px;
        margin-top: 10px;        
      }

      @media screen and (max-width: 768px) {
        #share_actions {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 15px;
        }
      }
 
    </style>
    <page-banner
      image="files/theme-images/page-banners/news_banner.png"
      text="News"
      alt="Gateway to the Sciences"
    ></page-banner>
    <div id="news_wrap">
      <div class="news_container">
        <div class="news_page_feed">
          <site-query
            result="{{__items}}"
            conditions='{"metadata.type": "news"}'
            limit="5"
            sort
          ></site-query>
          <dom-repeat items="[[__items]]" mutable-data>
            <template>
              <div id="card_wrap">
              <div id="card_image">
                  <iron-image
                    sizing="cover"
                    src="[[item.metadata.fields.image]]"
                  ></iron-image>
                </div>
                <div class="card_info">
                  <div class="card_header_info">
                  <div class="title">
                    <a href\$="[[item.location]]">
                      <h2>[[item.title]]</h2>
                    </a>
                  </div>
                  <div class="date">
                    <h2>[[_formatDate(item.metadata.created)]]</h2>
                  </div>
                  <div id="author_info">
                    <iron-image
                      id="author_image"
                      style="width:45px; height:45px;"
                      sizing="cover"
                      src="[[item.metadata.authorImage]]">
                    </iron-image>
                    <div id="author">By: [[item.metadata.author]]</div>
                  </div>
                </div>
                  <div id="card_description">
                  <span>[[item.description]]</span>
                </div>
                  </div>
            </template>
          </dom-repeat>
        </div>
        <div class="sidebar_wrap">
          <div id="twitter_feed">
            <a
              class="twitter-timeline"
              data-height="600"
              href="https://twitter.com/Eberly_ODL?ref_src=twsrc%5Etfw"
              >Tweets by Eberly_ODL</a
            >
            <script
              async=""
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
          <div id="news_archive">
            <site-recent-content-block
              title="News Archive"
              conditions='{"metadata.type": "news"}'
              result="{{__items}}"
              limit="5"
              start-index="5"
              sort
            >
            </site-recent-content-block>
          </div>
          <div id="share_actions">
            <site-rss-button type="rss"></site-rss-button>
            <site-rss-button type="atom"></site-rss-button>
          </div>
        </div>
      </div>
    </div>
  `,

  is: "haxtheme-news",

  properties: {},

  _formatDate: function(unixTimecode) {
    const date = new Date(unixTimecode * 1000);
    const dateFormatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    return dateFormatted;
  },

  created: function() {
    this.__disposer = autorun(() => {
      this.manifest = toJS(store.routerManifest);
    });
  },
  detached: function() {
    this.__disposer();
  }
});
