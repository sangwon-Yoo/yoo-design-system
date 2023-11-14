import { Meta, StoryObj } from "@storybook/react";
import { ContentsEditor } from "@/stories/yoo-blog/pages/ContentsEditor";

const meta = {
    title: 'yoo-blog/pages',
    component: ContentsEditor,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ContentsEditor>
export default meta;

export const PageContentsEditor: StoryObj<typeof ContentsEditor> = {
    render: () => <ContentsEditor />
};