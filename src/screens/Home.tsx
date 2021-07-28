import { useEffect, useState } from 'react'
import styled from 'styled-components'
import CharacterCard from '../components/CharacterCard'
import SearchInput from '../components/SearchInput'
import { getCharacters } from '../services/marvelApi'
import pixel2view from '../utils/pixel2view'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  background-color: ${(props) => props.theme.colors.firstGray};
    `

const Content = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  column-gap: 4rem;

  @media (min-width: 375px) {
    display: grid;
    grid-template-columns: 160px 160px;
    min-height: ${pixel2view(300)};
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    min-height: ${pixel2view(1400, 768)};
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    min-height: ${pixel2view(300)};
  }

  @media (min-width: 1920px) {
    display: grid;
    grid-template-columns: 400px 400px 400px 400px;
    min-height: ${pixel2view(300)};
  }
  
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

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [characters, setCharacters] = useState<ICharacter[]>([])

  const fetchCharacters = async (name?: string) => {
    console.log(name)
    try {
      setLoading(true)
      const response: any = await getCharacters({ name })
      setCharacters(response.data.results)
      setLoading(false)
    } catch(err){
      throw new Error(err);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, [])

  if (loading) return <div>Carregando....</div>

  if (!characters.length) return <div>Sem personagens para exibir</div>

  return (
    <Wrapper className="home-wrapper">
      <SearchInput onPress={fetchCharacters}/>
      <Content className="home-content">
        {characters.map((item, index) => <CharacterCard key={index} data={item} />)}
      </Content>
    </Wrapper>
  );
}

export default Home;
