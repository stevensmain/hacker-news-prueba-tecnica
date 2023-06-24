import Comment from './Comment'

const ListOfComments = ({ commentsIds }: { commentsIds: number[] }) => {
  return (
    <ul>
      {commentsIds?.map((id) => (
        <Comment key={id} id={id} />
      ))}
    </ul>
  )
}

export default ListOfComments
