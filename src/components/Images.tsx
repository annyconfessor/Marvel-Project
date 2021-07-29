import React from 'react'
import styled from 'styled-components'
import images from './../images'

interface IconsProps {
    name: keyof typeof images
}

const Figure = styled.figure`
    width: 6rem;
    display: flex;
    margin: 0 auto;

    img {
        width: 100%;
        object-fit: contain;
    }
`

export const Images: React.FC<IconsProps> = ({ name }: IconsProps) => {
    return(
        <Figure>
            <img src={images[name]} alt="card-character" />
        </Figure>
    )
}