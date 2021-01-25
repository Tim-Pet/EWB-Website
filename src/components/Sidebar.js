import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
    return (
        <div>
            <SidebarContainer>
                <SidebarWrapper>
                    <Line />
                    <Text>Eine neue Bibel</Text>
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
    border: 1px solid black;
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