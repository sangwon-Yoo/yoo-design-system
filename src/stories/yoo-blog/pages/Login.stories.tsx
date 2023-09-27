import { Meta, StoryObj } from "@storybook/react";
import { Login } from "@/stories/yoo-blog/pages/Login";

const meta = {
    title: 'yoo-blog/pages',
    component: Login,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Login>
export default meta;

export const PageLogin: StoryObj<typeof Login> = {
    render: () => <Login />
};