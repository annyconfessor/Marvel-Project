import { useEffect, useState } from 'react'
import styled from 'styled-components'
import CharacterCard from '../components/CharacterCard'
import { getCharacters } from '../services/marvelApi'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.dark};
  `

const Content = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  column-gap: 4rem;
`

interface ICharacter {
  id: number,
  name: string,
  heroe: string,
  item: any,
  thumbnail: any,
  path: string,
  extension: string,

}

function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect(() => {
    (async () => {
      setLoading(true)
      const response: any = await getCharacters()
      setCharacters(response.data.results)
      setLoading(false)
    })()
  }, [])
  
  if (loading) return <div>Carregando....</div>

  if (!characters.length) return <div>Sem personagens para exibir</div>

  return (
    <Wrapper className="Home">
      <Content>
        {characters.map((item, index) => <CharacterCard key={index} data={item} />)}
      </Content>
    </Wrapper>
  );
}

export default Home;
