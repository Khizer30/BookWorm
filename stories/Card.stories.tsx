import { type Meta, type StoryObj } from "@storybook/react";
//
import Card from "@components/Card";
import img from "@images/demo/1.webp";

// Meta
const meta: Meta<typeof Card> =
{
  title: "Card",
  component: Card
};

export default meta;

// Stories
type Story = StoryObj<typeof Card>;

export const Primary: Story =
{
  args:
  {
    title: "Khizer",
    price: 999,
    description: "I am SMK",
    image: img
  },
  decorators:
    [
      (Story) =>
      (
        <Story />
      )
    ]
};