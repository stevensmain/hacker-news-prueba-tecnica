//import useSWR from 'swr'
import { useEffect, useRef } from 'react'
import useSWRInfinite from 'swr/infinite'
import { getTopStories } from '../services/hacker-news'

import Story from '../componets/story/Story'

export default function TopStoriesPage() {
  /* const { data, isLoading } = useSWR(
    'stories ',
    (): Promise<number[]> => getTopStories(1, 10)
  ) */
  const loadingEl = useRef<HTMLSpanElement>(null)

  const { data, isLoading, setSize } = useSWRInfinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const [, page] = key.split('/')
      return getTopStories(Number(page), 10)
    }
  )

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        setSize((prevSize) => prevSize + 1)
      }
    })

    if (loadingEl.current === null) {
      return
    }

    observer.observe(loadingEl.current)

    return () => {
      observer?.unobserve
    }
  }, [isLoading, setSize])

  const stories = data?.flat()

  return (
    <>
      <ul>
        {stories?.map((id: number, index: number) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
      <span ref={loadingEl}></span>
    </>
  )
}
