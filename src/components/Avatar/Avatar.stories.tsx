import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "All Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: [],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: "md",
  },
};
