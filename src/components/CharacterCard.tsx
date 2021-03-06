import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  border: 2px solid rgba(7, 7, 7, 0.12);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  background-color: ${(props) => props.theme.colors.dark};
  box-shadow: 2px 10px 10px rgba(0, 0, 0, 0.24);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  justify-content: center;
  opacity: 0.8;

  &:hover {
      border: 1px;
      border-radius: 10px;
      z-index: 500;
      opacity: 1;
    }
`

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  
  img {
      width: 100%;
      object-fit: contain;
      border-radius: 0.5rem;
    }
`

const Texts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-family: 'helvetica';
  font-weight: 400;
  line-height: 1.6;
  font-size: 1.0rem;
  color: ${(props) => props.theme.colors.white};
`

const CharacterCard = ({ data }: { data: any }) => {
  const history = useHistory()
  const image = `${data.thumbnail.path}.${data.thumbnail.extension}`

  const onPress = () => {
    history.push(`/details/${data.id}`, { data })
  }

  return (
    <Wrapper className="wrapper">
      <Content className="content" onClick={onPress}>
        <Figure className="figure">
          <img src={image} alt={data.name} />
        </Figure>
        <Texts className="texts">{data.name}</Texts>
      </Content>
    </Wrapper>
  )
}

export default CharacterCard