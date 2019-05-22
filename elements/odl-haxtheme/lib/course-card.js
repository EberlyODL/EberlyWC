import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --image-background: "";
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-4: #fff;
        border: 2px solid #dcdcdc;
      }

      a {
        text-decoration: none;
        color: var(--theme-color-1);
        display: block;
        width: 100%;
      }

      #card_wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      #course_number {
        font-size: 28px;
        text-transform: uppercase;
      }

      #course_name {
        font-size: 18px;
        text-align: center;
        width: 90%;
        margin-bottom: 15px;
      }

      #course_icon {
        border-radius: 50%;
        background-color: #fff;
        border-radius: 50%;
        position: relative;
        bottom: 50px;
        border: solid;
        border-color: var(--theme-color-1);
        border-width: 5px;
        margin-bottom: -40px;
      }

      iron-icon {
        width: 80px;
        height: 80px;
        fill: #363533;
      }

      #course_image {
        background-image: var(--image-background);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right center;
        width: 100%;
        height: 150px;
      }
    </style>
    <a href$="[[url]]">
      <div id="card_wrap">
        <div id="course_image"></div>

        <div id="course_icon">
          <iron-icon icon="[[icon]]"></iron-icon>
        </div>

        <div id="course_number">[[number]]</div>

        <div id="course_name">[[name]]</div>
      </div>
    </a>
  `,

  is: "course-card",

  properties: {
    /**
     * Course Image
     */
    image: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
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
  },

  observers: ["__updateImage(image)"],

  __updateImage: function(image) {
    this.updateStyles({ "--image-background": `url(${image})` });
  }
});
