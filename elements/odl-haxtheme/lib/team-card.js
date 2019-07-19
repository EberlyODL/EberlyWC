import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/iron-image/iron-image.js";
import "./haxtheme-icons.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      #card_wrap {
        margin: var(--haxtheme-team-card-card-wrap-margin, 10px);
        @apply --haxtheme-team-card-card-wrap;
      }

      .image {
        background-position: var(
          --haxtheme-team-card-image-background-position,
          top center
        );
        background-repeat: var(
          --haxtheme-team-card-image-background-repeat,
          no-repeat
        );
        background-size: var(--haxtheme-team-card-image-background-size, cover);
        width: var(--haxtheme-team-card-image-width, 100%);
        height: var(--haxtheme-team-card-image-height, 100%);
        border: var(--haxtheme-team-card-image-border, solid);
        border-width: var(--haxtheme-team-card-image-border-width, 8px);
        border-color: var(--haxtheme-team-card-image-border-color);
        @apply --haxtheme-team-card-image;
      }

      #card_image {
        width: var(--haxtheme-team-card-card-image-width, 280px);
        height: var(--haxtheme-team-card-card-image-height, 280px);
        border-radius: var(--haxtheme-team-card-image-border-radius, 50%);
        @apply --haxtheme-team-card-card-image;
      }

      #info_container {
        display: var(--haxtheme-team-card-info-container-display, flex);
        align-items: var(
          --haxtheme-team-card-info-container-align-items,
          center
        );
        justify-content: var(
          --haxtheme-team-card-info-container-justify-content,
          center
        );
        width: var(--haxtheme-team-card-info-container-width, 280px);
        height: var(--haxtheme-team-card-info-container-height, 280px);
        background: var(
          --haxtheme-team-card-info-container-background,
          rgba(0, 0, 0, 0.8)
        );
        border-radius: var(
          --haxtheme-team-card-info-container-border-radius,
          50%
        );
        color: var(--haxtheme-team-card-info-container-color);
        opacity: var(--haxtheme-team-card-info-container-opacity, 0);
        @apply --haxtheme-team-card-info-container;
      }

      #info_container:hover {
        opacity: var(--haxtheme-team-card-info-container-hover-opacity, 0.9);
        transition: var(
          --haxtheme-team-card-info-container-hover-transition,
          all 0.3s ease-in-out
        );
        @apply --haxtheme-team-card-info-container-hover;
      }

      .info {
        display: var(--haxtheme-team-card-info-display, flex);
        flex-direction: var(--haxtheme-team-card-info-flex-direction, column);
        align-items: var(--haxtheme-team-card-info-align-items, center);
        @apply --haxtheme-team-card-info;
      }

      #name {
        font-size: var(--haxtheme-team-card-name-font-size, 20px);
        text-transform: var(
          --haxtheme-team-card-name-text-transform,
          uppercase
        );
        margin: var(--haxtheme-team-card-name-margin, 0 0 7px 0);
        border-bottom: var(--haxtheme-team-card-name-border-bottom, solid);
        border-bottom-width: var(
          --haxtheme-team-card-name-border-bottom-width,
          1px
        );
        border-bottom-color: var(--haxtheme-team-card-name-border-bottom-color);
        @apply --haxtheme-team-card-name;
      }
    </style>
    <div id="card_wrap">
      <div
        id="card_image"
        class="image"
        style$="background-image:url([[image]])"
      >
        <div id="info_container">
          <div class="info">
            <div id="name">[[name]]</div>
            <div id="position">[[position]]</div>
          </div>
        </div>
      </div>
    </div>
  `,

  is: "team-card",

  properties: {
    /**
     * image
     */
    image: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * name
     */
    name: {
      type: String,
      value: "",
      reflectToAttribute: true
    },
    /**
     * position
     */
    position: {
      type: String,
      value: "",
      reflectToAttribute: true
    }
  }
});
