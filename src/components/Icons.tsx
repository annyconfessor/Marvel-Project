import React from 'react'
import styled from 'styled-components'
import icons from './../images'

interface IconsProps {
    name: keyof typeof icons
}

const Figure = styled.figure`
    width: 1.5rem;
    height: 1.5rem;

    img {
        width: 100%;
        object-fit: contain;
    }

`

export const Icons: React.FC<IconsProps> = ({ name }: IconsProps) => {
    return(
        <Figure>
            <img src={icons[name]} alt="icon" />
        </Figure>
    )
}