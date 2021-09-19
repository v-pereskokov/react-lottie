import * as React from 'react';
import renderer from 'react-test-renderer';

import Lottie, {LottieProps} from '../src';
import stockData from './stock.json';

test('Simple render', () => {
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

    const component = renderer.create(
        <Lottie {...props}/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
