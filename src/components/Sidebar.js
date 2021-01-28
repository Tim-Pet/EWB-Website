import React from 'react'
import styled from 'styled-components'
import * as variables from "./styles/variables"

const Sidebar = () => {
    return (
        <div>
            <SidebarContainer >
                <SidebarWrapper>
                    <Line />
                    <Text >Eine neue Bibel</Text>
                    <Line />
                    <Dot />
                </SidebarWrapper>
                <SidebarWrapper>
                    <Line />
                    <Text>Was soll's werden?</Text>
                    <Line />
                    <Dot />
                </SidebarWrapper>
                <SidebarWrapper>
                    <Line />
                    <Text>Machst du mit?</Text>
                    <Line />
                </SidebarWrapper>
            </SidebarContainer>
        </div>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
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
    border-width: 1px;
    border-style: solid;
    margin: 5px 0;
    flex: 1 1 auto;
`

const Text = styled.div`
    white-space: nowrap;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    height: auto;
    text-transform: uppercase;
    mix-blend-mode: difference;
`

const Dot = styled.div`
    height: 5px;
    width: 5px;
    background-color: ${variables.clr_secondary};
    border-radius: 50%;
    display: inline-block;
`
