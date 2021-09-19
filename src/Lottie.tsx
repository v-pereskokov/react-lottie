import cns from 'classnames';
import isEqual from 'lodash.isequal';
import lottie from 'lottie-web';
import {AnimationItem} from 'lottie-web';
import React, {ElementType, memo, useEffect, useCallback, useState, useRef} from 'react';

import {CONTAINER_ID} from './consts';
import {Props, OwnProps} from './types';
import {usePrevious} from './utils/hooks';

const Lottie: Props = ({
    config,
    setRefPlayer,
    containerId = CONTAINER_ID,
    className,
    as: Component = 'div',
    containerProps = {},
}) => {
    const localRef = useRef<ElementType>(null);
    const [refPlayer, setLocalRefPlayer] = useState<AnimationItem | null>(null);
    const previousRef = usePrevious(localRef);

    const handleUpdateRefPlayer = useCallback((refPlayer: AnimationItem) => {
        setRefPlayer?.(refPlayer);
        setLocalRefPlayer(refPlayer);
    }, [setLocalRefPlayer, setRefPlayer]);

    useEffect(() => {
        if (isEqual(localRef, previousRef)) {
            return;
        }

        if (refPlayer) {
            refPlayer.destroy();
        }

        const newRefPlayer = lottie.loadAnimation({
            ...config,
            container: (config?.container ?? localRef?.current) as Element,
        });
        handleUpdateRefPlayer(newRefPlayer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, localRef, previousRef]);

    return (
        <Component
            {...containerProps}
            ref={localRef}
            className={cns(containerId, className)}
        />
    );
};

export {OwnProps as LottieProps};
export default memo(Lottie);
