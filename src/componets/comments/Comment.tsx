import useSWR from 'swr'
import { getItemInfo } from '../../services/hacker-news'

import ListOfComments from './ListOfComments'

const Comment = ({ id }: { id: number }) => {
  const { data, isLoading } = useSWR(
    `/story/${id} `,
    (): Promise<CommentItem> => getItemInfo(id)
  )

  if (isLoading) {
    return <span>Loading..</span>
  }

  return (
    <details open>
      <summary>
        <small>
          <span>{data?.by}</span>
          <span> - </span>
          <span>4 hours ago</span>
        </small>
      </summary>
      <p dangerouslySetInnerHTML={{ __html: data?.text ?? '' }}></p>
      {data && data?.kids?.length > 0 && (
        <ListOfComments commentsIds={data?.kids.slice(0, 10)} />
      )}
    </details>
  )
}

export default Comment
