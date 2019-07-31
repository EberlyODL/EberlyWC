import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js";
import "@polymer/iron-icon/iron-icon.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      #search_wrap {
        margin-right: 15px;
      }
    </style>
    <div id="search_wrap">
      <site-modal
        disabled$="[[editMode]]"
        icon="icons:search"
        title="Search site"
        button-label="Search"
      >
        <site-search></site-search>
      </site-modal>
    </div>
  `,

  is: "page-search"
});
