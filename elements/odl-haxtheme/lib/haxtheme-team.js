import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import { autorun, toJS } from "mobx";
import "./page-banner.js";
import "./team-card.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        background-color: #f5f5f5;
      }
      
      a {
        text-decoration: none;
      }

      #team_card {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 65%;
        margin: 25px auto 0 auto;
        padding-bottom: 25px;
      }
    </style>
    <page-banner
      image="files/theme-images/page-banners/team_banner.jpg"
      text="Team"
      alt="Office of Digital Learning Team">
    </page-banner>
    <div id="team_card">
      <site-query
        result="{{__items}}"
        conditions='{"metadata.type": "team"}'
        sort>
      </site-query>
      <dom-repeat items="[[__items]]" mutable-data>
        <template>
          <a href="[[item.location]]">
            <team-card
              name="[[item.metadata.fields.name]]"
              image="[[item.metadata.fields.image]]"
              item="[[item]]"
              position="[[item.metadata.fields.jobTitle]]">
            </team-card>
          </a>
        </template>
      </div>
 























  `,

  is: "haxtheme-team",

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
