import * as React from 'react';
import Toggleable from "../toggleable";
import { MenuItem } from "./MenuItem";

type MenuProps = { title : string } ;
const Menu : React.SFC<MenuProps> = ({
    title,
    children
}) => (
    <Toggleable render={({ show, toggle }) => (
        <MenuItem show={show} toggle={toggle} title={title}>
            {children}
        </MenuItem>
    )}></Toggleable>
)