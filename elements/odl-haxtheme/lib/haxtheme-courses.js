import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import { autorun, toJS } from "mobx";
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
        width: 80%;
        margin: 15px auto 15px auto;
      }

      #course {
        display: flex;
        flex-wrap: wrap;
      }

      course-card {
        display: flex;
        justify-content: center;
        margin: 10px;
        width: 250px;
      }

      course-card:hover {
        box-shadow: 1px 1px 5px #dcdcdc;
      }

  
    </style>
    <page-banner
      image="files/theme-images/page-banners/course_banner.jpg"
      text="Courses"
      alt="Gateway to the Sciences"
    ></page-banner>
    <div id="course_wrap">
      <div id="course_list">
        <div id="course">
        <site-query
            result="{{__items}}"
            conditions='{"metadata.type": "course"}'
            sort
          ></site-query>
          <dom-repeat items="[[__items]]" mutable-data>
            <template>
              <course-card
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
