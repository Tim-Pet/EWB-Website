import {Link} from 'gatsby'
import styled from 'styled-components'
import * as variables from "./styles/variables"

export const Button = styled(Link)`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid #111111;
    border-radius: 5px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #111111;
    text-decoration: none;
    font-weight: ${variables.fw_light};
    font-size: 20px;
    cursor: pointer;

    &:before {
    content: '';
    position: absolute;
    top: 25%;
    left: -3px;
    right: -3px;
    height: 50%;
    background: #fff;
    transition: 0.5s ease-in-out;
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
    background: #fff;
    transition: 0.5s ease-in-out;
    transform: scaleX(1);
    }

    &:hover::after {
    transform: scaleX(0)
    }

`