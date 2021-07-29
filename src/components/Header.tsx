import React from 'react'
import styled from 'styled-components'
import { Images } from './Images'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.firstGray};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
`

const Content = styled.div`
  width: calc(100% - 90%);
  margin: auto 0;
`

const Header = () => {
    return(
        <Container className="header-container">
          <Content className="header-content">
            <Images name="marvel"/>
          </Content>
        </Container>
    )
}

export default Header