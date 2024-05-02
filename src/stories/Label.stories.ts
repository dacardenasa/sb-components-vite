import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../components";

const meta = {
  title: "Example/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    allCaps: { control: "boolean" },
    size: { control: "inline-radio" },
    color: { control: "inline-radio" },
    backgroundColor: { control: "color" },
  },
  parameters: {
    layout: "centered"
  }
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label"
  }
};

export const AllCaps: Story = {
  args: {
    label: "AllCaps Label",
    allCaps: true
  }
};

export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    color: "text-secondary"
  }
};

export const CustomColor: Story = {
  args: {
    label: "CustomColor Label",
    backgroundColor: "#FFF000"
  }
};
