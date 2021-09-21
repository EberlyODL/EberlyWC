import { html } from "lit-element/lit-element.js";
import {
  withKnobs,
  withWebComponentsKnobs,
  text,
  boolean
} from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";
import { InstructionCard } from "./instruction-card.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "Card|InstructionCard",
  component: "instruction-card",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" }
  }
};
const utils = new StorybookUtilities();
export const InstructionCardStory = () => {
  return utils.makeElementFromClass(InstructionCard);
};
