
const PostIdInfo = ({ postId }) => {
  return (
    <section>
      <h2>{postId?.title}</h2>
      <img src={postId?.image[0]} alt="" />
      <p>{postId?.content}</p>
    </section>
  )
}

export default PostIdInfo