import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "@polymer/iron-image/iron-image.js";
import "./page-banner.js";

Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
        --theme-color-4: #fff;
        --site-print-button-button: {
          color: #a9a9a9;
        }
      }

      h1 {
      }

      h2 {
        margin: 0;
        font-weight: 100;
        font-size: 26px;
      }

      h3 {
        margin: 0;
        font-weight: 100;
        font-size: 22px;
      }

      .policy h2 {
        margin: 0;
        font-weight: 400;
        font-size: 24px;
        margin: 5px 0 5px;
        color: var(--theme-color-1);
      }

      site-breadcrumb {
        margin-top: 10px;
      }

      page-banner {
        --page-banner-text-transform: uppercase;
      }

      #share_actions {
        display: flex;
        justify-content: flex-end;
        margin-top: -20px;
      }

      .policy {
        font-size: 18px;
        font-weight: 300;
        margin: 20px 0 20px;
      }

      #syllabus_wrap {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (max-width: 768px) {
        #syllabus_wrap {
          width: 90%;
        }
      }

      #syllabus_header {
        border-left: solid;
        border-left-width: 4px;
        border-left-color: var(--theme-color-2);
        padding-left: 15px;
      }

      #syllabus_title h1 {
        text-transform: uppercase;
        margin: 25px 0 0;
        font-weight: 400;
      }
    </style>

    <page-banner
      image="[[activeItem.metadata.fields.image]]"
      text="[[activeItem.title]]"
      alt="[[activeItem.metadata.fields.imageAlt]]"
    ></page-banner>
    <div id="syllabus_wrap">
      <site-breadcrumb></site-breadcrumb>
      <div id="syllabus_header">
        <div id="syllabus_title">
          <h1>[[activeItem.title]]</h1>
        </div>
        <div id="syllabus_subtitle">
          <h2>[[activeItem.name]]</h2>
        </div>
        <div id="syllabus_sample">
          <h3>Sample Syllabus</h3>
        </div>
      </div>
      <div id="share_actions">
        <site-print-button></site-print-button>
      </div>
      <div id="syllabus">
        <div id="contentcontainer">
          <div id="slot">
            <slot></slot>
          </div>
        </div>
      </div>
      <div id="syllabus_policy">
        <div class="policy">
          <h2>Accommodating Disabilities</h2>
          <div>
            Penn State welcomes students with disabilities into the University's
            educational programs. If you have a disability-related need for
            reasonable academic adjustments in this course, contact the Office
            for Disability Services (ODS) at 814-863-1807 (V/TTY). For further
            information regarding ODS, please visit the Office for Disability
            Services Web site. In order to receive consideration for course
            accommodations, you must contact ODS and provide documentation (see
            the documentation guidelines). If the documentation supports the
            need for academic adjustments, ODS will provide a letter identifying
            appropriate academic adjustments. Please share this letter and
            discuss the adjustments with your instructor as early in the course
            as possible. You must contact ODS and request academic adjustment
            letters at the beginning of each semester.
          </div>

          <div class="policy">
            <h2>Additional Policies</h2>
            <div>
              For information about additional policies regarding items such as
              Penn State Access Accounts; credit by examination; course tuition,
              fees, and refund schedules; and drops and withdrawals please see
              the World Campus Student Policies Web site.
            </div>
          </div>

          <div class="policy">
            <h2>Academic Integrity</h2>
            <div>
              Academic integrity—scholarship free of fraud and deception—is an
              important educational objective of Penn State. Academic dishonesty
              can lead to a failing grade or referral to the Office of Student
              Conduct.
            </div>
            <br />
            Academic dishonesty includes, but is not limited to:
            <ul>
              <li>
                Cheating
              </li>
              <li>
                Plagiarism
              </li>
              <li>
                Fabrication of information or citations
              </li>
              <li>
                Facilitating acts of academic dishonesty by others
              </li>
              <li>
                Unauthorized prior possession of examinations
              </li>
              <li>
                Submitting the work of another person or work previously used
                without informing the instructor and securing written approval
              </li>
              <li>
                Tampering with the academic work of other students
              </li>
            </ul>
          </div>

          <div class="policy">
            <h2>How Academic Integrity Violations are Handled</h2>
            <div>
              In cases where academic integrity is questioned, procedure
              requires an instructor to notify a student of suspected dishonesty
              before filing a charge and recommended sanction with the college.
              Procedures allow a student to accept or contest a charge. If a
              student chooses to contest a charge, the case will then be managed
              by the respective college or campus Academic Integrity Committee.
              If a disciplinary sanction also is recommended, the case will be
              referred to the contact us.
            </div>
            <br />
            <div>
              Additionally, World Campus students are expected to act with
              civility and personal integrity; respect other students' dignity,
              rights, and property; and help create and maintain an environment
              in which all can succeed through the fruits of their own efforts.
              An environment of academic integrity is requisite to respect for
              oneself and others, and a civil community.
            </div>
          </div>

          <div class="policy">
            <h2>For More Information about Academic Integrity at Penn State</h2>
            <div>
              Please see the Academic Integrity Chart for specific college
              contact information or visit one of the following URLs:
            </div>
            <ul>
              <li>
                Penn State Senate Policy on Academic Integrity
              </li>
              <li>
                Turnitin a web-based plagiarism detection and prevention system
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,

  is: "haxtheme-syllabus",

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
