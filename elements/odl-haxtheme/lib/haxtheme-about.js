import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      #content-wrap {
        width: 80%;
        margin: 0 auto 0 auto;
      }

      #contentcontainer {
        font-size: 18px;
        font-weight: 300;
        line-height: 1.4;
      }
    </style>
    <page-banner
      image="files/theme-images/page-banners/news_banner.png"
      text="About"
      alt="Gateway to the Sciences"
    ></page-banner>
    <div id="content-wrap">
      <div id="about_header">
        <div id="title">
          <h1>What We Do</h1>
        </div>
      </div>
      <div id="contentcontainer">
        <div id="slot">
          <slot></slot>
        </div>
      </div>
    </div>
  `,

  is: "haxtheme-about",

  properties: {
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
    }
  }
});
