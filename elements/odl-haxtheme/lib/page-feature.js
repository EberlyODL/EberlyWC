import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/iron-image/iron-image.js";
import "@polymer/iron-icons/iron-icons.js";
import "@polymer/paper-button/paper-button.js";
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
        margin: 0;
        font-weight: 400;
        font-size: 40px;
      }

      h2 {
        margin: 0;
        font-weight: 100;
        font-size: 32px;
      }

      #feature_wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--theme-color-1);
        padding: 50px 0 50px 12px;
      }

      @media screen and (max-width: 1012px) {
        #feature_wrap {
          flex-direction: column;
          height: auto;
          padding: 0;
        }
      }

      #feature_image iron-image {
        height: 350px;
        width: 600px;
        border-left: solid 6px var(--theme-color-2);
      }

      @media screen and (max-width: 1012px) {
        #feature_image iron-image {
          height: 350px;
          width: 1012px;
        }
      }

      @media screen and (max-width: 1124px) {
        #feature_image iron-image {
          border: none;
        }
      }

      #feature_description_wrap {
        background-color: var(--theme-color-4);
        height: auto;
        width: 720px;
        z-index: 1;
        margin: 0 25px 0 -30px;
        box-shadow: 1px 2px 7px var(--theme-color-1);
      }

      @media screen and (max-width: 1124px) {
        #feature_description_wrap {
          width: 100%;
          z-index: 0;
          box-shadow: none;
          margin: 0;
        }
      }

      #title_wrap {
        display: flex;
        flex-direction: column;
        border-left: solid;
        border-left-width: 4px;
        border-left-color: var(--theme-color-2);
        padding-left: 15px;
        margin: 20px 0 0 20px;
      }

      #description {
        padding: 25px 25px 15px;
      }

      #sub_info {
        font-size: 18px;
        font-weight: 200;
      }

      #action_button {
        display: flex;
        justify-content: flex-end;
        margin: 0 25px 25px 0;
      }

      paper-button#feature {
        color: var(--theme-color-2);
      }

      paper-button#feature:hover,
      paper-button#feature:focus {
        color: var(--theme-color-1);
      }
    </style>
    <div id="feature_wrap">
      <div id="feature_image">
        <iron-image sizing="cover" src="[[image]]" alt="[[alt]]"></iron-image>
      </div>
      <div id="feature_description_wrap">
        <div id="title_wrap">
          <div id="title">
            <h1>[[title]]</h1>
          </div>
          <div id="sub_title">
            <h2>[[subtitle]]</h2>
          </div>
          <div id="sub_info">[[info]]</div>
        </div>
        <div id="description">
          <slot></slot>
        </div>
        <div id="action_button">
          <a href\$="#">
            <paper-button noink id="feature">
              <div class="title">Read More</div>
              <iron-icon icon="chevron-right"></iron-icon>
            </paper-button>
          </a>
        </div>
      </div>
    </div>
  `,

  is: "page-feature",

  properties: {
    /**
     * Image source
     */
    image: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Alt text for image
     */
    alt: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Title for feature
     */
    title: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Subtitle for feature
     */
    subtitle: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Sub info for feature
     */
    info: {
      type: String,
      value: "",
      reflectToAttribute: true
    }
  }
});
