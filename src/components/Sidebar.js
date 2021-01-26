import React from 'react'
import styled from 'styled-components'

const Sidebar = (props) => {
    return (
        <div>
            <SidebarContainer bgColor={props.bgColor} textColor={props.textColor}>
                <SidebarWrapper>
                    <Line bgColor={props.bgColor} textColor={props.textColor}/>
                    <Text >Eine neue Bibel</Text>
                    <Line bgColor={props.bgColor} textColor={props.textColor}/>
                    <Dot />
                </SidebarWrapper>
                <SidebarWrapper>
                    <Line bgColor={props.bgColor} textColor={props.textColor}/>
                    <Text>Was soll's werden?</Text>
                    <Line bgColor={props.bgColor} textColor={props.textColor}/>
                    <Dot />
                </SidebarWrapper>
                <SidebarWrapper>
                    <Line bgColor={props.bgColor} textColor={props.textColor}/>
                    <Text>Machst du mit?</Text>
                    <Line bgColor={props.bgColor} textColor={props.textColor}/>
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    color: ${props => props.textColor};
    width: 10vh;
    height: 100vh;
    position: fixed;
    grid-template-rows: repeat(1fr);
    background-color: transparent;
    z-index: 1000;
`
const SidebarWrapper = styled.div`
    display: flex;
    height: 34%;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
`

const Line = styled.div`
    width: 1px;
    border: 1px solid ${props => props.textColor};
    transition: border 2s;
    margin: 5px 0;
    flex: 1 1 auto;
`

const Text = styled.div`
    transition: color 2s;
    white-space: nowrap;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    height: auto;
    text-transform: uppercase;
    mix-blend-mode: difference;
    /* transform: rotate(270deg);
    transform-origin: left; */
`

const Dot = styled.div`
    height: 5px;
    width: 5px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`
