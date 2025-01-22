import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "MyTestComponentLibrary/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const Template = (args: any) => <Button {...args}>{args.children}</Button>;

export const DefaultPreview: any = Template.bind({});

DefaultPreview.args = {
  children: "Poison",
  onclick: () => console.log("RockPoison"),
};
