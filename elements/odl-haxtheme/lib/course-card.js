import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-4: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid #dcdcdc;
        min-height: 250px;
      }

      a {
        text-decoration: none;
        color: var(--theme-color-1);
      }

      #card_wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #course_number {
        font-size: 32px;
        text-transform: uppercase;
      }

      #course_name {
        font-size: 18px;
        text-align: center;
        width: 90%;
      }

      iron-icon {
        width: 120px;
        height: 120px;
      }
    </style>
    <a href$="[[url]]">
      <div id="card_wrap">
        <div id="course_number">[[number]]</div>
        <div id="course_icon">
          <iron-icon icon="[[icon]]"></iron-icon>
        </div>
        <div id="course_name">[[name]]</div>
      </div>
    </a>
  `,

  is: "course-card",

  properties: {
    /**
     * Course Number
     */
    number: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Course Icon
     */
    icon: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Course Name
     */
    name: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * Course URL
     */
    url: {
      type: String,
      value: "",
      reflectToAttribute: true
    }
  }
});
