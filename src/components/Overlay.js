import React from 'react'
import styled from 'styled-components'

import { Button } from './Button'
import Sidebar from './Sidebar'

const Overlay = () => {
    return (
        <div>
            <Sidebar />
            <BtnWrapper>
                <Button><span>Mitmachen</span></Button>
            </BtnWrapper>
        </div>
    )
}

export default Overlay

const BtnWrapper = styled.div`
    position: fixed;
    bottom: 5%;
    right: 50%;
    transform: translate(50%, 0);

    span {
        z-index: 3;
        position: relative
    }
`