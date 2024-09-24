import * as React from 'react';

interface RequireType {
    children: React.ReactNode | React.ReactNode[] | string;
    justifyContent?: "center" | "left" | "right"
}

const Row = (props: RequireType) => {

    return (
        <div className={"row" + (props.justifyContent ? " " +props.justifyContent : "")}>
            {props.children}
        </div>
    )
}

export default Row;