import { Meta, StoryObj } from "@storybook/react";
import { Home } from "@/stories/yoo-blog/pages/Home";

const meta = {
    title: 'yoo-blog/pages',
    component: Home,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Home>
export default meta;

export const HomePC: StoryObj<typeof Home> = {
    render: () => <Home />
}