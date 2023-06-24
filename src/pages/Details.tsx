import useSWR from 'swr'
import { getItemInfo } from '../services/hacker-news'

import ListOfComments from '../componets/comments/ListOfComments'

export default function Details({ params }: { params: { id: number } }) {
  const { id } = params
  const { data } = useSWR(
    `/story/${id} `,
    (): Promise<StoryItem> => getItemInfo(id)
  )

  const commentsIds = data?.kids.slice(0, 10) ?? []

  return <div>{data && <ListOfComments commentsIds={commentsIds} />}</div>
}
