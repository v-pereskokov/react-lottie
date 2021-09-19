import {ComponentStory, ComponentMeta} from '@storybook/react';
import * as React from 'react';

import Lottie, {LottieProps} from '../..';
import stockData from './stock.json';

const props: LottieProps = {
    config: {
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: stockData,
    },
    containerProps: {
        style: {
            width: 400,
            height: 400,
            margin: '0 auto',
        },
    },
};

export default {
    title: 'Simple',
    component: Lottie,
    args: props,
} as ComponentMeta<typeof Lottie>;

const Template: ComponentStory<typeof Lottie> = (args: LottieProps) => {
    return <Lottie {...args}/>;
};

export const Story = Template.bind({});
