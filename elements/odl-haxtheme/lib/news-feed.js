import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import "@polymer/iron-image/iron-image.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-4: #fff;
      }

    

      h2 {
        margin: 0;
      }

      .feed_header {
        display: flex;
        justify-content: center;
        margin-top: -50px;
      }

      @media screen and (max-width: 768px) {
        .feed_header {
          margin-top: 0;
        }
      }

      .feed_header h2 {
        margin: 0 0 20px 0;
        font-weight: 400;
        font-size: 34px;
        background-color: var(--theme-color-2);
        color: #fff;
        padding: 15px;
      }

      @media screen and (max-width: 768px) {
        .feed_header h2 {
          display: flex;
          justify-content: center;
          width: 100%;
          font-size: 28px;
          margin: 0 0 15px 0;
        }
      }

      #news_feed {
        display: flex;
        flex-wrap: wrap;
      }

      #news_feed > *:not(site-query) {
        width: 100%;
      }

      @media screen and (min-width: 768px) {
        #news_feed {
          flex-wrap: nowrap;
        }
      }
      
      #news_feed_wrap {
        margin: 20px;
      }

      #card_wrap {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-right: solid 2px #dcdcdc;
        padding: 0 40px;
      }

      #card_wrap:last-of-type {
        border-right: none;
      }

      @media screen and (max-width: 768px) {
        #card_wrap {
          padding: 0 0 15px 0;
          border-right: none;
          border-bottom: solid 2px #dcdcdc;
          margin-bottom: 25px;
        }
      }

      #card_image iron-image {
        height: 200px;
        width: 100%;
      }

      #card_heading_wrap {
        border-left: solid;
        border-left-width: 4px;
        border-left-color: var( --theme-color-2);
        padding-left: 15px;
        margin-top: 15px;
      }

      #card_heading h2 {
        color: var(--theme-color-1);
        font-weight: 400;
        font-size: 22px;
      }
      #card_heading h2:hover {
        color: var(--theme-color-2);
      }

      #card_heading a {
        text-decoration: none;
      }

      #card_footer {
        display: flex;
        align-items: center;
        margin-top: -5px;
      }

      #author_name {
        margin-top: 15px;
      }

      #card_description {
        padding-top: 15px;
      }

      iron-image#author_image {
        border-radius: 50%;
        margin: 15px 10px 0 0;
      }

      #action_button {
        display: flex;
        justify-content: center;
        margin-top: 5px;
      }

      #action_button a {
        text-decoration: none;
      }

      paper-button#news {
        color: var(--theme-color-2);
      }

      paper-button#news:hover,
      paper-button#news:focus {
        color: var(--theme-color-1);
      }
    </style>
    <div id="news_feed_wrap">
      <div class="feed_header">
        <h2>Recent News</h2>
      </div>
    <div id="news_feed">
      <site-query
        result="{{__items}}"
        conditions='{
          "metadata.type": "news"
        }'
        limit="3"
        start-index="1"
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
            <div id="card_heading_wrap">
              <div id="card_heading">
                <a href\$="[[item.location]]">
                  <h2>[[item.title]]</h2>
                </a>
              </div>
              <div id="card_footer">
                <iron-image
                  id="author_image"
                  style="width:50px; height:50px;"
                  sizing="cover"
                  src="[[item.metadata.authorImage]]"
                ></iron-image>
                <div id="author_name">[[item.metadata.author]]</div>
              </div>
            </div>
            <div id="card_description">[[_trimDescription(item.description)]]</div>
            <div id="action_button">
              <a href\$="[[item.location]]">
                <paper-button noink id="news">
                  <div class="title">Read More</div>
                  <iron-icon icon="chevron-right"></iron-icon>
                </paper-button>
              </a>
            </div>



          </div>
        </template>
    </div>
  </div>
  `,

  is: "news-feed",

  properties: {},

  _trimDescription: function(description) {
    const trim = description.substring(0, 175) + "...";
    return trim;
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
