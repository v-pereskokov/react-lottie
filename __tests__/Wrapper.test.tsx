import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import enzyme, {shallow} from 'enzyme';
import * as React from 'react';
import renderer from 'react-test-renderer';

import Lottie, {LottieProps} from '../src';
import stockData from './stock.json';

enzyme.configure({adapter: new Adapter()});

describe('Container tests', () => {
    it('"As" props should set correct correct element', () => {
        const props: LottieProps = {
            config: {
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: stockData,
            },
        };

        const component = renderer.create(
            <Lottie {...props} as="section"/>,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Container props should change styles', () => {
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

    it('Container props should change handler', () => {
        const mockCallBack = jest.fn();
        const props: LottieProps = {
            config: {
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: stockData,
            },
            containerProps: {
                onClick: mockCallBack,
            },
        };

        const component = shallow(
            <Lottie {...props} as="section"/>,
        );
        component.find('section').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});
