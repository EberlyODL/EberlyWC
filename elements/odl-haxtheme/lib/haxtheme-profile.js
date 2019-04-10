import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@polymer/iron-image/iron-image.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js";
import { autorun, toJS } from "mobx";

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      h1 {
        margin: 15px 0 0;
        font-weight: 400;
      }

      site-breadcrumb {
        margin-top: 10px;
      }

      #contentcontainer {
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.6;
      }

      .news_container {
        display: flex;
        width: 75%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (max-width: 768px) {
        #news_wrap {
          padding: 15px;
        }
      }

      #news_inner_wrap {
        width: 90%;
        margin-right: 20px;
      }


      @media screen and (max-width: 768px) {
        .news_container {
          flex-direction: column;
          width: 98%;
        }
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

      #news_archive {
        margin-bottom: 25px;
        width: 121%;
      }

      @media screen and (max-width: 768px) {
        #news_archive {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
      }

      #profile_image iron-image {
        height: 300px;
        width: 300px;
        border-radius: 50%;
        border: solid 8px #e2801e;
      }

      #profile_head {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0 20px;
      }

      #social_media {
        margin: 20px 0 10px;
      }

      #contact_info {
        
      }


      #prev_next_btns {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
      }

      @media screen and (max-width: 768px) {
        site-breadcrumb {
          margin: 0 0 30px;
        }
      }

      site-recent-content-block {
        --site-recent-content-block-header-color: #e2801e;
        --site-recent-content-block-active-color: var(--theme-color-2);
      }
    </style>
    
    <div id="news_wrap">
      <div class="news_container">
        <div id="news_inner_wrap">
          <site-breadcrumb></site-breadcrumb>
          <div id="profile_head">
            <div id="profile_image">
            <iron-image sizing="cover" src="[[activeItem.metadata.fields.image]]"></iron-image>
            </div>
            <div id="profile_name">
              <h1>[[activeItem.metadata.fields.name]]</h1>
            </div>
            <div id="profile_position">[[activeItem.metadata.fields.jobTitle]]</div>
            <div id="social_media">
              Social media links here.
            </div>
          </div>
          


          <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
 
           <div id="prev_next_btns">
            <site-menu-button type="prev" position="top" label="Previous">
              <div slot="suffix">Prev</div>
            </site-menu-button>
            <site-menu-button type="next" position="top" label="Next">
              <div slot="prefix">Next</div>
            </site-menu-button>
           </div>
        </div>
        <div class="sidebar_wrap">
          <div id="contact_info">
            Contact info here.
          </div>
          <div id="news_archive">
            <site-recent-content-block
              title="My Posts"
              conditions='{"metadata.type": "news"}'
              result="{{__items}}" 
              limit="5"
              sort
              >
            </site-recent-content-block>
          </div>
        </div>
        </div>
      </div>
    </div>`,

  is: "haxtheme-profile",

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
  }
});
