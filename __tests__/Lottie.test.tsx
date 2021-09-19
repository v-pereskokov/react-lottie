import * as React from 'react';
import renderer from 'react-test-renderer';

import Lottie from '../src';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Lottie bla={{}}/>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
