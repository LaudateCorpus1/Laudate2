import * as React from 'react' ;
import Toggleable from './ui/toggleable';
import { MenuItem } from './ui/menu/MenuItem';
type ToggleableMenuProps = { title : string };

export const ToggleableMenuWithTitle : React.SFC<ToggleableMenuProps> = ({ title, children }) => (
    <Toggleable<ToggleableMenuProps> component={MenuItem} props={{ title }} >
    {children}
    </Toggleable>
);
