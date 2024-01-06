import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const CAT_ENDPOINT_IMAGE_URL = (threeFirstWords) =>
    `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red`
  const [imageUrl, setImageUrl] = useState()

  // we retrieve the image every time we have a new quote
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(CAT_ENDPOINT_IMAGE_URL(threeFirstWords))
      .then(res => {
        const { url } = res
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl }
}
