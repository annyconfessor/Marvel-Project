import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

import { getCharacter, getCharacters } from '../services/marvelApi'

import { CharacterType } from './Home'

const Container = styled.div`
  width: 100%;
  display: flex;
`

const Image = styled.img``

type DetailsType = {
  location: {
    state: { data: CharacterType }
  }
}

const Details = ({ location: { state: { data } }}: DetailsType ) => {
  console.log('daaata', data)

  return(
        <Container>
          <Image src={data.thumbnail.path+'.'+data.thumbnail.extension} />
        </Container>
    )
}

export default Details