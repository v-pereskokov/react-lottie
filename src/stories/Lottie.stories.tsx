import {ComponentStory, ComponentMeta} from '@storybook/react';
import * as React from 'react';

import Hello from '..';

export default {
    title: 'Example/Hello',
    component: Hello,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = args => <Hello {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};
