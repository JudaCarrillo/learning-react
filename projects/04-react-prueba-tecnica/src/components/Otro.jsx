import { useCatImage } from '../hooks'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'love' })

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
