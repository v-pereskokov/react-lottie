import {ComponentStory, ComponentMeta, Meta} from '@storybook/react';
import {AnimationItem} from 'lottie-web';
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
    title: 'PlayerRef',
    component: Lottie,
    args: props,
} as ComponentMeta<typeof Lottie>;

const Template: ComponentStory<typeof Lottie> = (args: LottieProps) => {
    return <Lottie {...args}/>;
};

export const Story = Template.bind({});
Story.decorators = [
    (_, {args}) => {
        const [playerRef, setPlayerRef] = React.useState<AnimationItem | null>(null);

        const handlePlay = React.useCallback(() => {
            if (playerRef) {
                playerRef.play();
            }
        }, [playerRef]);

        const handlePause = React.useCallback(() => {
            if (playerRef) {
                playerRef.pause();
            }
        }, [playerRef]);

        return (
            <>
                <Lottie {...args as LottieProps} setRefPlayer={setPlayerRef}/>

                <div>
                    <button onClick={handlePlay}>
                        play
                    </button>
                    <button onClick={handlePause}>
                        pause
                    </button>
                </div>
            </>
        );
    },
] as Meta['decorators'];
