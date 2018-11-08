import * as React from 'react' ;

import { ToggleableComponentProps } from '../toggleable' ;

type MenuItemProps = { title: string };

export const MenuItem : React.SFC<MenuItemProps & ToggleableComponentProps> = ({ title, show, toggle, children }) => (
    <>
        <div onClick={toggle}>
            <h1>{title}</h1>
        </div>
        {show ? children : null}
    </>
);