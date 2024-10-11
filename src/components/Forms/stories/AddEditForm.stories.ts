import type { Meta, StoryObj } from "@storybook/react";

import { AddEditForm } from "../AddEditForm";

const meta = {
  title: "UI/Forms/AddEditForm",
  component: AddEditForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof AddEditForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddEdit: Story = {};
