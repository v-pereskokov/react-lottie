import React from 'react';

const Hello: React.FC = () => {
    return (
        <div>
            Hello
        </div>
    );
};

export default React.memo(Hello);
