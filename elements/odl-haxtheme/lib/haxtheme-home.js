import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import "@polymer/paper-button/paper-button.js";
import "./homepage-banner.js";
import "./info-box.js";
import "./news-feed.js";
import "./videos-feed.js";
import "./testimonials-feed.js";
import "./page-feature.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-3: #f5f5f5;
        --theme-color-4: #fff;
      }

      promo-tile {
        --button-hover-color: none;
      }

      #promo_tile_header {
        display: flex;
        justify-content: center;
      }

      #promo_tile_header h2 {
        margin: 0;
        font-size: 36px;
        font-weight: 400;
      }

      #promo_tile_wrap {
        display: flex;
        flex-wrap: wrap;
      }

      @media screen and (max-width: 1124px) {
        #promo_tile_wrap {
          padding: 0;
        }
      }

      #promo_tile_wrap > * {
        width: 100%;
      }

      @media screen and (min-width: 600px) {
        #promo_tile_wrap > * {
          width: 50%;
        }
      }

      @media screen and (min-width: 1124px) {
        #promo_tile_wrap > * {
          width: 25%;
        }
      }

      @media screen and (max-width: 1124px) {
        page-feature {
          width: 100%;
          border-bottom: solid 2px #dcdcdc;
          margin-left: auto;
          margin-right: auto;
        }
      }

      @media screen and (max-width: 768px) {
        page-feature {
          width: 90%;
        }
      }
    </style>
    <homepage-banner
      image="files/theme-images/page-banners/odl_homepage_banner.png"
      alt="students receiving instruction in classroom"
      text="A creative studio for your classroom"
    ></homepage-banner>
    <info-box>
      <span slot="action_text">
        The Office of Digital Learning (ODL) helps faculty and students make the
        most of digital learning technology. We collaboratively design and build
        tools for any pedagogy. Dream it and we'll build it.
      </span>
    </info-box>
    <div id="promo_tile_header"></div>
    <div id="promo_tile_wrap">
      <div class="promo_tile">
        <promo-tile
          title="ELMS:LN"
          label="Create"
          image="files/theme-images/promo-tiles/elmsln-tile.png"
          alt="ELMS:LN"
          url="https://www.elmsln.org/"
        >
          Create your course using the ELMS:LN platform and gain access to a
          network of innovative technologies instantly.
        </promo-tile>
      </div>
      <div class="promo_tile">
        <promo-tile
          title="Virtual Reality"
          label="Explore"
          image="files/theme-images/promo-tiles/vr-tile.png"
          alt="student using
          VR goggles"
          url="https://www.google.com"
        >
          Enter another dimension and add exciting virtual interactions to your
          online classroom.
        </promo-tile>
      </div>
      <div class="promo_tile">
        <promo-tile
          title="HAX"
          label="Build"
          image="files/theme-images/promo-tiles/hax-tile.png"
          alt="user
          enjoying the HAX authoring experience"
          url="https://haxtheweb.org"
        >
          Quickly create and edit accessible, high quality content using this
          next generation authoring experience.
        </promo-tile>
      </div>
      <div class="promo_tile">
        <promo-tile
          title="One Button Studio"
          label="Film"
          image="files/theme-images/promo-tiles/obs-tile.png"
          alt="camera
          filming video"
          url="https://www.google.com"
        >
          Film engaging video content for your class with ease using our one
          button studio and light board.
        </promo-tile>
      </div>
    </div>
    <div id="page_feature">
      <site-query
        result="{{__newsitems}}"
        conditions='{
          "metadata.type": "news"
        }'
        limit="1"
      ></site-query>
      <dom-repeat items="[[__newsitems]]" mutable-data>
        <template>
          <page-feature
            title="Top News"
            subtitle="[[item.title]]"
            info="[[item.metadata.author]]"
            url="[[item.location]]"
            image="[[item.metadata.fields.image]]"
            subimage="[[item.metadata.authorImage]]"
            alt="Laptop with the word,'inspire' written on screen."
          >
            [[item.description]]</page-feature
          >
        </template>
      </dom-repeat>
    </div>
    <div id="news_feed">
      <news-feed></news-feed>
    </div>
    <div id="page_feature">
      <site-query
        result="{{__spotlightitems}}"
        conditions='{
          "metadata.type": "spotlight"
        }'
        limit="1"
      ></site-query>
      <dom-repeat items="[[__spotlightitems]]" mutable-data>
        <template>
          <page-feature
            title="Faculty Spotlight"
            subtitle="[[item.title]]"
            info="Director of Online Education in Physics"
            url="[[item.location]]"
            image="[[item.metadata.fields.image]]"
            alt="Louis discussing version control at TLT Symposium."
          >
            [[item.description]]</page-feature
          >
        </template>
      </dom-repeat>
    </div>
    <div id="videos_feed">
      <videos-feed></videos-feed>
    </div>
  `,

  is: "haxtheme-home"
});
