import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
import "./team-card.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
      
      a {
        text-decoration: var(--haxtheme-team-a-text-decoration);
        @apply --haxtheme-team-a;
      }

      #team_card {
        display: var(--haxtheme-team-team-card-display, grid);
        grid-template-columns: var(--haxtheme-team-team-card-grid-template-columns, repeat(2, auto [col-start]));
        justify-content: var(--haxtheme-team-team-card-justify-content, center);
        margin: var(--haxtheme-team-team-card-margin, 25px 0 0 0);
        padding: var(--haxtheme-team-team-card-padding, 0 0 25px 0);
        @apply --haxtheme-team-card;
      }

      @media screen and (max-width: 768px) {
        #team_card {
          grid-template-columns: var(--haxtheme-team-team-card-grid-template-columns-mobile, repeat(1, auto [col-start]));
          @apply --haxtheme-team-card-mobile;
        }
      }
    </style>
    <site-query
      result="{{__items}}"
      conditions='{"metadata.type": "team"}'
      sort>
    </site-query>
    <page-banner
      image="files/theme-images/page-banners/team_banner.jpg"
      text="Team"
      alt="Office of Digital Learning Team">
    </page-banner>
    <div id="team_card">
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
