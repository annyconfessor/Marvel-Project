import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getThumbnail } from '../services/marvelApi'

const Card = styled.div`
  display: flex;
  /* margin: 1rem; */
  /* background-color: ${(props) => props.theme.colors.dark}; */
  /* height: 100vh; */
`

const Wrapper = styled.div`
  margin: auto;
  border: 2px solid rgba(7, 7, 7, 0.12);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.24);

    &:hover {
      opacity: 1;
    }
  `

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.5;

  &:hover {
      border: 1px solid #202020;
      border-radius: 10px;
      box-shadow: 0px 0px 999px 999px rgba(41, 41, 41, 0.95);
      z-index: 500;
      opacity: 1;
    }
`

const Figure = styled.figure`
  width: 10rem;
  display: flex;
  justify-content: center;
  /* padding: 0 0.2rem; */
  
  img {
      /* margin: 0.5rem;  */
      width: 100%;
      object-fit: contain;
      border-radius: 0.5rem;
    }
`

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  
  h1 {
    font-family: 'helvetica';
    font-weight: 300;
    font-size: 1.0rem;
    color: ${(props) => props.theme.colors.white};
  }
`

const CharacterCard = ({ data }: { data: any }) => {
  const image = `${data.thumbnail.path}.${data.thumbnail.extension}`

    console.log('data', data)

    return(
      <Card className="card">
        <Wrapper className="wrapper">
          <Content className="content">
            <Figure className="figure">
              <img src={image} alt={data.name} />
            </Figure>
          </Content>
        </Wrapper>
      </Card>
    )
}

export default CharacterCard