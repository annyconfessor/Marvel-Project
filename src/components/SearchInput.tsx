import React, { useState } from 'react'
import styled from 'styled-components'
import { Icons } from './Icons';

const Container = styled.div`
display: flex;
justify-content: center;
width: calc(100% - 40%);
height: 48px;
border-radius: 20px;
background-color: #FDFCFC;
margin: 10px 0;

input {
        width: calc(100% - 10%);
        border-radius: 15px;
        border: none;
        background-color: transparent;
        color: #54565A;
        font-size: 16px;

        :focus {
            outline: none;
        }
    }
`

const Content = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: calc(100% - 5%);

    button {
        background-color: transparent;
        border: none;
    }
`

interface IProps {
  onPress: any
}

const SearchInput: React.FC<IProps> = ({ onPress }) => {
  const [value, setValue] = useState("")

  const handleValue = (event: any) => {
      setValue(event.target.value)
  }

  return(
      <Container className="searchInput-container">
          <Content>
            <input placeholder="Search" value={value} onChange={handleValue}></input>
            <button onClick={() => onPress(value)}> 
                <Icons name="lupaa"></Icons>
            </button>
          </Content>
      </Container>
  )
}

export default SearchInput