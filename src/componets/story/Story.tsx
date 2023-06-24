import useSWR from 'swr'
import { getItemInfo } from '../../services/hacker-news'
import { Link } from 'wouter'
import {
  story,
  storyFooter,
  storyHeader,
  storyLink,
  storyTitle
} from './Stories.css'
import StoryLoader from './StoryLoader'
import { getRelativeTime } from '../../utils/getRelativeTime'

const Story = (props: { id: number; index: number }) => {
  const { id, index } = props
  const { data, isLoading } = useSWR(
    `/story/${id} `,
    (): Promise<StoryItem> => getItemInfo(id)
  )

  if (isLoading) {
    return <StoryLoader />
  }
  const { by, kids, score, time, title, url } = data as StoryItem
  const relativeTime = getRelativeTime(time)

  let domain = ''
  try {
    if (data) {
      domain = new URL(data.url).hostname.replace('www.', '')
    }
  } catch (error) {}

  return (
    <article className={story}>
      <header className={storyHeader}>
        <small>{`${index + 1} .`}</small>
        <a
          className={storyTitle}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <a
          className={storyLink}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {domain}
        </a>
      </header>
      <footer className={storyFooter}>
        <span>{score} points</span>
        <Link className={storyLink} href={`/article/${id}`}>
          by {by}
        </Link>
        <Link className={storyLink} href={`/article/${id}`}>
          <time dateTime={new Date(time * 1000).toISOString()}>
            {relativeTime}
          </time>
        </Link>
        <Link className={storyLink} href={`/article/${id}`}>
          {kids?.length ?? 0} comments
        </Link>
      </footer>
    </article>
  )
}

export default Story
