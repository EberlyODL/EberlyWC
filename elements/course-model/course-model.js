/**
 * Copyright 2021
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";

/**
 * `course-model`
 * `3D Model Viewer`
 * @demo demo/index.html
 * @element course-model
 */
class CourseModel extends LitElement {
  
  //styles function
  static get styles() {
    return  [
      
      css`
:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
      `
    ];
  }

// Template return function
  render() {
    return html`

<slot></slot>
<div>${this.title}</div>`;
  }

  // haxProperty definition
  static get haxProperties() {
    return {
  "canScale": true,
  "canPosition": true,
  "canEditSource": false,
  "gizmo": {
    "title": "Course model",
    "description": "3D Model Viewer",
    "icon": "icons:android",
    "color": "green",
    "groups": ["Model"],
    "handles": [
      {
        "type": "todo:read-the-docs-for-usage"
      }
    ],
    "meta": {
      "author": "cgldevel",
      "owner": ""
    }
  },
  "settings": {
    "configure": [
      {
        "property": "title",
        "description": "",
        "inputMethod": "textfield",
        "required": false,
        "icon": "icons:android"
      }
    ],
    "advanced": []
  }
}
;
  }
  // properties available to the custom element for data binding
  static get properties() {
    return {
  
  ...super.properties,
  
  "title": {
    "name": "title",
    "type": String,
    "value": "",
    "reflectToAttribute": true,
    "observer": false
  }
}
;
  }

  /**
   * Convention we use
   */
  static get tag() {
    return "course-model";
  }

  /**
   * HTMLElement
   */
  constructor() {
    super();
  }
  /**
   * LitElement ready
   */
  firstUpdated(changedProperties) {}
  /**
   * LitElement life cycle - property changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      /* notify example
      // notify
      if (propName == 'format') {
        this.dispatchEvent(
          new CustomEvent(`${propName}-changed`, {
            detail: {
              value: this[propName],
            }
          })
        );
      }
      */
      /* observer example
      if (propName == 'activeNode') {
        this._activeNodeChanged(this[propName], oldValue);
      }
      */
      /* computed example
      if (['id', 'selected'].includes(propName)) {
        this.__selectedChanged(this.selected, this.id);
      }
      */
    });
  }
}
customElements.define(CourseModel.tag, CourseModel);
export { CourseModel };
