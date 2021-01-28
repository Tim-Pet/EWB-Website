import {Link} from 'gatsby'
import styled from 'styled-components'
import * as variables from "./styles/variables"

export const Button = styled(Link)`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid ;
    border-radius: 5px;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: ${variables.fw_light};
    font-size: 20px;
    cursor: pointer;

    &:visited {
        color: inherit;
    }

    &:before {
    content: '';
    position: absolute;
    top: 25%;
    left: -3px;
    right: -3px;
    height: 50%;
    background: ${props => props.bgColor};
    transition: transform 0.5s ease-in-out, background-color 1s;
    transform: scaleY(1);
    }

    &:hover::before {
    transform: scaleY(0);
    }

    &:after {
    content: '';
    position: absolute;
    left: 15%;
    top: -3px;
    bottom: -3px;
    width: 70%;
    background: ${props => props.bgColor};
    transition: transform 0.5s ease-in-out, background-color 1s;
    transform: scaleX(1);
    }

    &:hover::after {
    transform: scaleX(0)
    }

`