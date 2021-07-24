import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getThumbnail } from '../services/marvelApi'

const Card = styled.div`
  display: flex;
  margin: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border-radius: 1rem;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.darkRed};
`

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  width: 20rem;
`

const Figure = styled.figure`
  width: 10rem;
  
  img {
      margin: 1rem; 
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
    font-family: 'Playfair Display';
    font-weight: 400;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
  }
`

interface ICharacter {
  id: number,
  item: any,
  name: string,
  thumbnail: any,
  path: string,
  extension: string
}

const CharacterCard = () => {
    const [thumbnail, setThumbnail] = useState<ICharacter[]>([])

    useEffect(() => {
      (async () => {
        const response: any = await getThumbnail()
        const thumbnailData = response.data.results
        setThumbnail(thumbnailData)
      })()
    }, [])

    return(
      <Card className="card">
        <Wrapper className="wrapper">
          <Content className="content">
            <Figure className="figure">
              {/* <img src={"http://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0035adc7d3a.jpg"} alt="marvel-character-thumbnail" /> */}
              {thumbnail.map(item => <img src={item.thumbnail.path + '.' + item.thumbnail.extension} alt={item.name}/>)}
            </Figure>
            <Texts>
              <h1>Character</h1>
              {/* <p>{thumbnail.map(item => item.name)}</p> */}
            </Texts>
          </Content>
        </Wrapper>
      </Card>
    )
}

export default CharacterCard