import './App.css'
import { Otro } from './components'
import { useCatImage, useCatFact } from './hooks'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // retrieve quote on page load
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='Cat' />}

      <Otro />
    </main>
  )
}
