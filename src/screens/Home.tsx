import { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import { getCharacters } from '../services/marvelApi'

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
  
  console.log('cccccccc', characters)
  if (loading) return <div>Carregando....</div>

  if (!characters.length) return <div>Sem personagens para exibir</div>

  return (
    <div className="Home">
      {characters.map((item, index) => <CharacterCard key={index} data={item} />)}
    </div>
  );
}

export default Home;
