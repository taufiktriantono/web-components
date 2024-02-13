import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "All Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    type: "email",
    placeholder: "Your Email",
  },
};
