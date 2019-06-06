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
        margin: 25px auto 15px auto;
      }

      #course {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 2vw;
        grid-row-gap: 2vw;
      }

      course-card {
        width: 100%;
      }

      course-card:hover {
        box-shadow: 1px 1px 5px #dcdcdc;
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
