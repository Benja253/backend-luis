
const UserInfo = ({ postId }) => {
  return (
    <article>
      <header>
        <img src={postId?.user.profileImgUrl} alt="" />
      </header>
      <section>
        <h3>
          {postId?.user.name} 
          <span>{postId?.user?.isFollow ? 'Follow' : 'Unfollow'}</span>
        </h3>
        {/* TODO: Covertir el nombre en link */}
        <p>{postId?.user.description}</p>
      </section>
    </article>
  )
}

export default UserInfo