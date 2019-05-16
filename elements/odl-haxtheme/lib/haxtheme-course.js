import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js";
import { autorun, toJS } from "mobx";
import "./page-banner.js";
import "./course-icons.js";

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      h1 {
        margin: 25px 0 0;
        font-weight: 400;
      }

      h2 {
        margin: 0;
        font-weight: 100;
        font-size: 26px;
      }

      site-breadcrumb {
        margin-top: 10px;
      }

      .course_container {
        display: flex;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (max-width: 768px) {
        .course_container {
          flex-direction: column;
          width: 98%;
        }
      }

      .course_inner_wrap {
        width: 75%;
        margin-top: 20px;
      }

      @media screen and (max-width: 768px) {
        .course_inner_wrap {
          width: 100%;
          margin-top: 10px;
        }
      }

      #course_header {
        border-left: solid;
        border-left-width: 4px;
        border-left-color: var(--theme-color-2);
        padding-left: 15px;
      }

      #description {
        margin-top: 15px;
        font-size: 18px;
        font-weight: 300;
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
    </style>

    <page-banner
      video
      vidsource="https://www.youtube.com/embed/I-hGBG7zJX4"
    ></page-banner>
    <div id="course_wrap">
      <div class="course_container">
        <div class="course_inner_wrap">
          <site-breadcrumb></site-breadcrumb>

          <div id="course_header">
            <div id="title">
              <h1>[[activeItem.title]]</h1>
            </div>
            <div id="name">
              <h2>[[activeItem.name]]</h2>
            </div>
          </div>

          <div id="description">[[activeItem.description]]</div>
        </div>
        <div class="sidebar_wrap">
          <div id="course_archive">
            <site-recent-content-block
              title="Related Courses"
              conditions="[[__subjectSiteQueryCondition(activeItem)]]"
              result="{{__items}}"
              limit="5"
              sort
            >
            </site-recent-content-block>
          </div>
        </div>
      </div>
    </div>
  `,

  is: "haxtheme-course",

  properties: {},

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
  },

  __subjectSiteQueryCondition: function(activeItem) {
    return { "metadata.subject": activeItem.metadata.subject };
  }
});
