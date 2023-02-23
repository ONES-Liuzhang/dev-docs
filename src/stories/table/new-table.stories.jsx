import React from "react";
import { Button } from "../Button";
import Demo from "@ones-design/table";

export default {
  title: "Table/VirtualTable",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};
