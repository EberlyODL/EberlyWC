import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
import "./course-card.js";
import "./course-icons.js";

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      #course_wrap {
        width: var(--haxtheme-courses-course-wrap-width, 80%);
        margin: var(--haxtheme-courses-course-wrap-margin, 25px auto 15px auto);
        @apply --haxtheme-courses-course-wrap;
      }

      #course {
        display: var(--haxtheme-courses-course-display, grid);
        grid-template-columns: var(--haxtheme-courses-course-grid-template-columns, repeat(auto-fit, minmax(250px, 1fr)));
        grid-column-gap: var(--haxtheme-courses-course-grid-column-gap, 2vw);
        grid-row-gap: var(--haxtheme-courses-course-grid-row-gap, 2vw);
        @apply --haxtheme-courses-course;
      }

      course-card {
        width: var(--haxtheme-courses-course-card-width, 100%);
        border: var(--haxtheme-courses-course-card-border, solid);
        border-width: var(--haxtheme-courses-course-card-border-width, 2px);
        border-color: var(--haxtheme-courses-course-card-border-color);
        @apply --haxtheme-courses-course-card;
      }

      course-card:hover {
        box-shadow: var(--haxtheme-courses-course-card-hover-box-shadow, 1px 1px 5px #dcdcdc);
        @apply --haxtheme-courses-course-card-hover;
      }
    </style>
    <site-query
      result="{{__items}}"
      conditions='{"metadata.type": "course"}'
      sort
    ></site-query>
    <page-banner
      image="files/theme-images/page-banners/course_banner.jpg"
      text="Courses"
      alt="Gateway to the Sciences"
    ></page-banner>
    <div id="course_wrap">
      <div id="course_list">
        <div id="course">
          <dom-repeat items="[[__items]]" mutable-data>
            <template>
              <course-card
                image="[[item.metadata.fields.image]]"
                number="[[item.title]]"
                icon="[[item.metadata.icon]]"
                name="[[item.name]]"
                url="[[item.location]]">
              </course-card>
            </template>
        </div>
      </div>
    </div>
  `,

  is: "haxtheme-courses",

  properties: {},

  created: function() {
    this.__disposer = autorun(() => {
      this.manifest = toJS(store.routerManifest);
    });
  },
  detached: function() {
    this.__disposer();
  }
});
