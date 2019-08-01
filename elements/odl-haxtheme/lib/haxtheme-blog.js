import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/iron-image/iron-image.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        background-color: #f5f5f5;
        --haxcms-base-styles-a-color: #2196f3;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-4: #fff;
        --site-print-button-button: {
          color: #a9a9a9;
        }
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

      site-breadcrumb {
        margin-top: 10px;
      }

      #contentcontainer {
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.6;
      }

      .blog_container {
        display: flex;
        width: 75%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (max-width: 768px) {
        #blog_wrap {
          padding: 15px;
        }
      }

      #blog_inner_wrap {
        width: 90%;
        margin-right: 20px;
      }


      @media screen and (max-width: 768px) {
        .blog_container {
          flex-direction: column;
          width: 98%;
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

      #share_actions {
        display: flex;
        justify-content: flex-end;
        margin-top: -20px;
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

      #news_archive {
        margin-bottom: 25px;
        width: 121%;
      }

      @media screen and (max-width: 768px) {
        #news_archive {
          width: 100%;
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

      #author a {
        text-decoration: none;
        color: var(--theme-color-1);
      }

      #author a:hover {
        color: var( --theme-color-2);
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

      #article-interactions {
        display: flex;
        justify-content: flex-end;
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

      @media screen and (max-width: 768px) {
        #taxonomy a {
          font-size: 16px;
        }
      }

      #taxonomy a:hover {
        font-weight: bold;
      }

      .tag_wrap {
        margin-right: 10px;
      }

      #prev_next_btns {
        display: flex;
        justify-content: space-between;
      }

      @media screen and (max-width: 768px) {
        site-breadcrumb {
          margin: 0 0 30px;
        }
      }

      site-recent-content-block {
        --site-recent-content-block-header-color: #e2801e;
        --site-recent-content-block-active-color: var(--theme-color-2);
      }
    </style>
    
    <page-banner image="[[activeItem.metadata.fields.image]]" text="[[activeItem.metadata.tagLine]]" alt="Gateway to the Sciences"></page-banner>
    <div id="blog_wrap">
      <div class="blog_container">
        <div id="blog_inner_wrap">
            <site-breadcrumb></site-breadcrumb>
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
                style="width:60px; height:60px;"
                sizing="cover"
                src="[[activeItem.metadata.authorImage]]">
              </iron-image>
              <div id="author">By:
                <a href="/team-directory/[[activeItem.metadata.fields.authorId]]">[[activeItem.metadata.author]]</a> 
              </div>
            </div>
          </div>
          <div id="share_actions">
            <site-print-button></site-print-button>
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
            <a href="#">[[tag]]</a> 
            </template>
           </div>
           <div id="prev_next_btns">
            <site-menu-button type="prev" position="top" label="Previous">
              <div slot="suffix">Prev</div>
            </site-menu-button>
            <site-menu-button type="next" position="top" label="Next">
              <div slot="prefix">Next</div>
            </site-menu-button>
           </div>
        </div>
        <div class="sidebar_wrap">
          <div id="news_archive">
            <site-recent-content-block
              title="Recent News"
              conditions='{"metadata.type": "news"}'
              result="{{__items}}" 
              limit="5"
              sort
              >
            </site-recent-content-block>
          </div>
        </div>
        </div>
      </div>
    </div>`,

  is: "haxtheme-blog",

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

  __authorConditions: function(activeItem) {
    const condition = {
      "metadata.type": "news",
      "metadata.fields.authorId": activeItem.id
    };
    return condition;
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
