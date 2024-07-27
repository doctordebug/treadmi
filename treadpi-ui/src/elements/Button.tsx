import * as React from 'react';

type IButtonProperties = {
    onClick: () => void;
    children: string;
    type? : 'primary'
}

const Button = (prop: IButtonProperties) => {
    return (
        <div onClick={prop.onClick} className={'btn btn-'+ (prop.type ?? 'default')}>{prop.children}</div>
    )
}

export default Button;