/**
 * Copyright 2021
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip.js";

// Defines the type options available in the HAX wiring, "Learning Objectives" is the default.

const typeOptions = {
  objectives: "Learning Objectives",
  connection: "Chem Connection",
  knowledge: "Did You Know?",
  strategy: "Learning Strategies"
};

/**
 * `instruction-card`
 * `An element for displaying learning materials.`
 * @demo demo/index.html
 * @element instruction-card
 */
class InstructionCard extends LitElement {
  //styles function
  static get styles() {
    return [css``];
  }

  // Template return function
  render() {
    return html``;
  }

  // haxProperty definition
  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Instruction card",
        description: "An element for displaying learning materials.",
        icon: "icons:android",
        color: "green",
        groups: ["Card"],
        handles: [
          {
            type: "todo:read-the-docs-for-usage"
          }
        ],
        meta: {
          author: "cgldevel",
          owner: ""
        }
      },
      settings: {
        configure: [
          {
            property: "type",
            description: "",
            inputMethod: "textfield",
            required: false,
            icon: "icons:android"
          }
        ],
        advanced: []
      }
    };
  }
  // properties available to the custom element for data binding
  static get properties() {
    return;
  }

  /**
   * Convention we use
   */
  static get tag() {
    return "instruction-card";
  }

  /**
   * Properties
   */

  static get properties() {
    return {
      type: { type: String, reflect: true },
      subtitle: { type: String },
      url: { type: String }
    };
  }

  constructor() {
    super();
    this.type = "";
    this.subtitle = "";
    this.url = "";
  }

  /**
   * CSS
   */

  static get styles() {
    return [
      css`
        :host {
          display: block;
          font-family: "Open Sans", sans-serif;
          border: 1px solid var(--card-border-color, #d9d9d9);
          margin: 15px 0 15px;
        }

        :host([type="knowledge"]) .header {
          background-color: var(--header-knowledge-bg-color, #1d6ba0);
        }

        :host([type="connection"]) .header {
          background-color: var(--header-connection-bg-color, #268842);
        }

        :host([type="strategy"]) .header {
          background-color: var(--header-strategy-bg-color, #008080);
        }

        :host([type="knowledge"]) svg#url {
          fill: var(--svg-url-knowledge-fill-color, #1d6ba0);
        }

        :host([type="connection"]) svg#url {
          fill: var(--svg-url-connection-fill-color, #268842);
        }

        :host([type="strategy"]) svg#url {
          fill: var(--svg-url-strategy-fill-color, #008080);
        }

        .header {
          display: flex;
          align-items: center;
          background-color: var(--header-objectives-bg-color, #dc7927);
          padding: 10px;
          color: var(--header-font-color, #fff);
        }

        h1 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }

        @media screen and (min-width: 320px) {
          h1 {
            font-size: 18px;
          }
        }

        @media screen and (min-width: 920px) {
          h1 {
            font-size: 28px;
          }
        }

        .sub-title {
          font-weight: 300;
          text-transform: uppercase;
        }

        @media screen and (min-width: 320px) {
          .sub-title {
            font-size: 14px;
            margin: 0 0 -10px;
          }
        }

        @media screen and (min-width: 920px) {
          .sub-title {
            font-size: 24px;
            margin: 0 0 -14px;
          }
        }

        @media screen and (min-width: 320px) {
          svg#header {
            width: 35px;
            height: 35px;
            border: 2px solid var(--header-svg-border-color, #fff);
          }
        }

        @media screen and (min-width: 920px) {
          svg#header {
            width: 50px;
            height: 50px;
          }
        }

        .icon {
          display: flex;
        }

        svg#header {
          fill: var(--header-svg-fill-color, #fff);
          border-radius: 50%;
          margin: 0 15px 0 10px;
          padding: 5px;
        }

        @media screen and (min-width: 320px) {
          .content {
            padding: 25px 30px;
          }
        }

        @media screen and (min-width: 920px) {
          .content {
            padding: 25px 90px;
          }
        }

        #url-button {
          margin: 25px 0 0 0;
        }

        #url-button a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #000;
        }

        @media screen and (min-width: 320px) {
          #url-button {
            display: flex;
            justify-content: center;
          }
        }

        @media screen and (min-width: 920px) {
          #url-button {
            display: flex;
            justify-content: end;
          }
        }
      `
    ];
  }

  /**
   * HTML
   */
  render() {
    return html`
      <div id="card-wrap">
        ${this.renderSource(this.type)}
      </div>
    `;
  }

  // Defines the types available to the HTML block.

  renderSource(type) {
    switch (type) {
      case "connection":
        return this.renderConnection();
        break;
      case "knowledge":
        return this.renderKnowledge();
        break;
      case "strategy":
        return this.renderStrategy();
        break;
    }
    return this.renderObjectives();
  }

  // Card 1: Learning Objectives

  renderObjectives() {
    return html`
      <div class="header">
        <div class="icon">
          <svg id="header" viewBox="0 -4 23 32">
            <path
              d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-1.989c-.003-1.858.87-3.389 1.721-4.867.761-1.325 1.482-2.577 1.482-3.932 0-2.592-2.075-3.772-4.003-3.772-1.925 0-3.997 1.18-3.997 3.772 0 1.355.721 2.607 1.482 3.932.851 1.478 1.725 3.009 1.72 4.867h-1.988c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z"
            />
          </svg>
        </div>
        <div class="title-wrap">
          <div class="sub-title">${this.subtitle}</div>
          <div class="title"></div>
          <h1>Learning Objectives</h1>
        </div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    `;
  }

  // Card 2: Chem Connection

  renderConnection() {
    return html`
      <div class="header">
        <div class="icon">
          <svg id="header" viewBox="0 -4 23 32">
            <path
              d="M16 1c0 .552-.447 1-1 1h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1zm4.759 19.498l-3.743-7.856c-1.041-2.186-2.016-4.581-2.016-7.007v-1.635h-2v2c.09 2.711 1.164 5.305 2.21 7.502l3.743 7.854c.143.302-.068.644-.377.644h-13.153c-.3 0-.522-.339-.376-.642l3.742-7.857c1.047-2.196 2.115-4.791 2.205-7.501l.006-2h-2v1.635c0 2.426-.975 4.82-2.016 7.006l-3.743 7.856c-.165.348-.241.708-.241 1.058 0 1.283 1.023 2.445 2.423 2.445h13.153c1.4 0 2.424-1.162 2.424-2.446 0-.35-.076-.709-.241-1.056zm-9.759-.998c0-.829-.672-1.5-1.5-1.5s-1.5.671-1.5 1.5.672 1.5 1.5 1.5 1.5-.671 1.5-1.5zm2-3.5c0-.553-.448-1-1-1-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1-.447 1-1zm3 3c0-.552-.448-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.552 0 1-.448 1-1z"
            />
          </svg>
        </div>
        <div class="title-wrap">
          <div class="sub-title">${this.subtitle}</div>
          <div class="title"></div>
          <h1>Chem Connection</h1>
        </div>
      </div>
      <div class="content">
        <slot></slot>
        ${this.url
          ? html`
              <div
                id="url-button"
                tabindex="-1"
                role="button"
                aria-label="Read More"
              >
                <a href="${this.url}" id="link" target="_blank">
                  <svg id="url" width="35" height="35" viewBox="0 0 24 24">
                    <path
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
                    />
                  </svg>
                </a>
                <simple-tooltip for="url" animation-delay="0"
                  >Read More</simple-tooltip
                >
              </div>
            `
          : ``}
      </div>
    `;
  }

  // Card 3: Did You Know?

  renderKnowledge() {
    return html`
      <div class="header">
        <div class="icon">
          <svg id="header" viewBox="0 -4 23 32">
            <path
              d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.383-.397-4.394-.644-1 .613-1.595 1.037-4.272 1.82.535-1.373.723-2.748.602-4.265-.838-1-2.025-2.4-2.025-4.872-.001-4.415 4.485-8.007 9.999-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.738 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.418.345 2.775.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006zm1.024 13.975c0 .566-.458 1.025-1.024 1.025-.565 0-1.024-.459-1.024-1.025 0-.565.459-1.024 1.024-1.024.566 0 1.024.459 1.024 1.024zm1.141-8.192c-.498-.505-1.241-.783-2.09-.783-1.786 0-2.941 1.271-2.941 3.237h1.647c0-1.217.68-1.649 1.261-1.649.519 0 1.07.345 1.117 1.004.052.694-.319 1.046-.788 1.493-1.157 1.1-1.179 1.633-1.173 2.842h1.643c-.01-.544.025-.986.766-1.785.555-.598 1.245-1.342 1.259-2.477.008-.758-.233-1.409-.701-1.882z"
            />
          </svg>
        </div>
        <div class="title-wrap">
          <div class="sub-title">${this.subtitle}</div>
          <div class="title"></div>
          <h1>Did You Know ?</h1>
        </div>
      </div>
      <div class="content">
        <slot></slot>
        ${this.url
          ? html`
              <div
                id="url-button"
                tabindex="-1"
                role="button"
                aria-label="Read More"
              >
                <a href="${this.url}" id="link" target="_blank">
                  <svg id="url" width="35" height="35" viewBox="0 0 24 24">
                    <path
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
                    />
                  </svg>
                </a>
                <simple-tooltip for="url" animation-delay="0"
                  >Read More</simple-tooltip
                >
              </div>
            `
          : ``}
      </div>
    `;
  }

  // Card 4: Learning Strategies

  renderStrategy() {
    return html`
      <div class="header">
        <div class="icon">
          <svg
            id="header"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 -4 23 32"
          >
            <path
              d="M4.991 19.053c-.365-4.385 4.436-7.43 4.468-8.513.003-.084-.058-.09-.114-.088-.527.02-2.061 1.722-3.939 1.108-1.194-.389-1.89-1.705-1.96-2.805-.065-1.021.378-1.859 1.186-2.242.984-.466 1.279-1.209 1.592-1.997.182-.456.72-2.238 2.696-2.238.305 0 .578.044.821.086.119-.565-.254-1.828-.883-2.364 8.276.037 11.226 5.967 11.226 9.652 0 5.012-2.729 7.166-1.37 9.357 1.585.138 2.286 1.511 2.286 2.491 0 1.198-.953 2.5-2.5 2.5h-13c-1.196 0-2.5-.946-2.5-2.5 0-1.197.847-2.211 1.991-2.447zm14.009 2.447c0-.276-.223-.5-.5-.5h-13c-.276 0-.5.224-.5.5 0 .277.224.5.5.5h13c.277 0 .5-.223.5-.5zm-1.149-13.5c-.602-2.197-2.408-4.682-5.981-5.655.332 1.324-.543 2.323-2.416 2-.955-.169-.998-.027-1.371.911-.359.9-.9 2.262-2.594 3.065-.181.194.102 1.196.536 1.337.852.278 1.93-1.201 3.339-1.201 1.207 0 2.076 1.099 2.094 2.041.027 1.135-.914 2.111-2.003 3.239-1.392 1.444-2.678 3.247-2.467 5.263h9.503c-.256-.91-.156-2.205.423-4h-1.195c-.239 0-.5-.189-.5-.5 0-.31.26-.5.5-.5h1.541c.11-.319.222-.651.323-1h-1.251c-.31 0-.5-.259-.5-.5 0-.239.19-.5.5-.5h1.506c.068-.318.124-.65.166-1h-1.285c-.239 0-.5-.189-.5-.5 0-.31.26-.5.5-.5h1.36c.01-.382.008-.643-.034-1h-1.491c-.239 0-.5-.189-.5-.5 0-.31.26-.5.5-.5h1.297zm-7.911-2.684c.519 0 .94.378.94.842 0 .465-.421.842-.94.842-.518 0-.94-.377-.94-.842 0-.464.422-.842.94-.842z"
            />
          </svg>
        </div>
        <div class="title-wrap">
          <div class="sub-title">${this.subtitle}</div>
          <div class="title"></div>
          <h1>Learning Strategies</h1>
        </div>
      </div>
      <div class="content">
        <slot></slot>
        ${this.url
          ? html`
              <div
                id="url-button"
                tabindex="-1"
                role="button"
                aria-label="Read More"
              >
                <a href="${this.url}" id="link" target="_blank">
                  <svg id="url" width="35" height="35" viewBox="0 0 24 24">
                    <path
                      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
                    />
                  </svg>
                </a>
                <simple-tooltip for="url" animation-delay="0"
                  >Read More</simple-tooltip
                >
              </div>
            `
          : ``}
      </div>
    `;
  }

  // Implement HAX Wiring

  static get haxProperties() {
    return {
      type: "grid",
      canScale: true,
      canPosition: true,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: "Instruction Card",
        description:
          "A pedagogy card for instructors to insert into their course content.",
        icon: "icons:bookmark",
        color: "orange",
        groups: ["Education", "Content"],
        handles: [
          {
            type: "text",
            title: "label"
          }
        ],
        meta: {
          author: "@cgldevel"
        }
      },
      settings: {
        configure: [
          {
            property: "type",
            title: "Type",
            description: "The type of instruction-card to be used.",
            inputMethod: "select",
            options: typeOptions,
            required: true
          },
          {
            property: "subtitle",
            title: "Sub-Title",
            description: "The sub-title of the card.",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "url",
            title: "Link",
            description:
              "An optional link  for the card (Link not available for Learning Objectives).",
            inputMethod: "textfield",
            icon: "editor:insert-link"
          }
        ],
        advanced: []
      },
      demoSchema: [
        {
          tag: "instruction-card",
          properties: {
            type: "objectives",
            subtitle: "Unit 1"
          },
          content: "<p>By the end of this lesson, you should be able to...</p>"
        }
      ]
    };
  }
}
customElements.define(InstructionCard.tag, InstructionCard);
export { InstructionCard };

window.addEventListener("hax-store-ready", function(e) {
  setTimeout(function() {
    window.HaxStore.requestAvailability().setHaxProperties(
      window.customElements.get("instruction-card").haxProperties,
      "instruction-card"
    );
  }, 1000);
});
