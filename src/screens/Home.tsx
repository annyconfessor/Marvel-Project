import { useEffect, useState } from 'react'
import { getCharacters } from '../services/marvelApi'

interface ICharacter {
  id: number,
  name: string
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
      console.log(response.data.results[0].thumbnail.path)
    })()
  }, [])

  if (loading) return <div>Carregando....</div>

  if (!characters.length) return <div>Sem personagens para exibir</div>

  return (
    <div className="Home">
      <ul>
        {characters.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default Home;
