import {
    AnimationItem,
    AnimationConfigWithData,
    AnimationConfigWithPath,
} from 'lottie-web';
import {FC, ElementType, HTMLAttributes} from 'react';

type ConfigType = Omit<
    AnimationConfigWithData & AnimationConfigWithPath,
    'container'
    > & {
        container?: Element;
    };

export type OwnProps = {
    config: ConfigType;
    containerId?: string;
    className?: string;
    as?: ElementType;
    containerProps?: Omit<HTMLAttributes<ElementType>, 'ref' | 'className'>;
    setRefPlayer?(item: AnimationItem): void;
};

export type Props = FC<OwnProps>;
