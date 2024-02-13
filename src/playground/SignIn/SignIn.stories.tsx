import type { Meta, StoryObj } from "@storybook/react";

import { SignIn } from "./SignIn";

const meta: Meta<typeof SignIn> = {
  title: "Playground/SignIn",
  component: SignIn,
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SignIn>;

export const Default: Story = {
  args: {},
};
