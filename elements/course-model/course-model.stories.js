import { html } from "lit-element/lit-element.js";
import {
  withKnobs,
  withWebComponentsKnobs,
  text,
  boolean
} from "@open-wc/demoing-storybook";
import { StorybookUtilities } from "@lrnwebcomponents/storybook-utilities/storybook-utilities.js";
import { CourseModel } from "./course-model.js";
// need to account for polymer goofiness when webpack rolls this up

export default {
  title: "Model|CourseModel",
  component: "course-model",
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: {
    options: { selectedPanel: "storybookjs/knobs/panel" }
  }
};
const utils = new StorybookUtilities();
export const CourseModelStory = () => {
  return utils.makeElementFromClass(CourseModel);
};
