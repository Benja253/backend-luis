import { useParams } from "react-router-dom"
import usePostCrud from "../../hooks/usePostCrud"
import { useEffect } from "react"
/* TODO: Borrar esta linea cuando se tenga la Api */
import postId from '../../devData/postId.json'
import UserInfo from "../../components/postId/UserInfo"
import PostIdInfo from "../../components/postId/PostIdInfo"
/* ----------- */

const PostId = () => {

  // TODO: Descomentar linea de abajo cuando haya API
  //const { postId, getPostById } = usePostCrud()
  
  const { id } = useParams()
  
  // TODO: Descomentar linea de abajo cuando haya API
  // useEffect(() => {
  //   getPostById(id)
  // }, [])
  


  return (
    <div>
      <h1>Post ID - {id}</h1>
      <UserInfo postId={postId} />
      <PostIdInfo postId={postId} />
    </div>
  )
}

export default PostId