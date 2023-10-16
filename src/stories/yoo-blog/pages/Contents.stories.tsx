import { Meta, StoryObj } from "@storybook/react";
import { Contents } from "@/stories/yoo-blog/pages/Contents";

const meta = {
    title: 'yoo-blog/pages',
    component: Contents,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Contents>
export default meta;

export const PageContents: StoryObj<typeof Contents> = {
    render: () => <Contents />
};