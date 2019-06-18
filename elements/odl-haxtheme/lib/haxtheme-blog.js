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
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-4: #fff;
      }

      h1 {
        margin: var(--haxtheme-blog-h1-margin, 25px 0 0);
        font-weight: var(--haxtheme-blog-h1-font-weight);
        font-size: var(--haxtheme-blog-h1-font-size);
        @apply --haxtheme-blog-h1;
      }

      h2 {
        margin: var(--haxtheme-blog-h2-margin, 0);
        font-weight: var(--haxtheme-blog-h2-font-weight);
        font-size: var(--haxtheme-blog-h2-font-size);
        @apply --haxtheme-blog-h2;
      }

      #contentcontainer {
        font-size: var(--haxtheme-blog-contentcontainer-font-size);
        font-weight: var(--haxtheme-blog-contentcontainer-font-weight);
        line-height: var(--haxtheme-blog-contentcontainer-line-height);
        @apply --haxtheme-blog-contentcontainer;
      }

      .blog_container {
        display: var(--haxtheme-blog-blog-container-display, flex);
        width: var(--haxtheme-blog-blog-container-width, 75%);
        margin: var(--haxtheme-blog-blog-container-margin, 0 auto 0 auto);
        @apply --haxtheme-blog-blog-container;
      }

      @media screen and (max-width: 768px) {
        .blog_container {
          flex-direction: var(--haxtheme-blog-blog-container-flex-direction, column);
          width: var(--haxtheme-blog-blog-container-mobile-width, 98%);
          @apply --haxtheme-blog-blog-container-mobile;
        }
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





      #share_actions {
        display: var(--haxtheme-blog-share-actions-display, flex);
        justify-content: var(--haxtheme-blog-share-actions-justify--site-recent-content-block-active-color, flex-end);
        margin-top: var(--haxtheme-blog-margin-top, -20px);
        @apply --haxtheme-blog-share-actions;
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

      #taxonomy {
        display: flex;
        align-items: center;
        margin: 15px 0 15px;
      }

      #taxonomy a {
        text-decoration: none;
        font-size: var(--haxtheme-blog-taxonomy-a-font-size, 24px);
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

      site-breadcrumb {
        margin-top: 10px;
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
