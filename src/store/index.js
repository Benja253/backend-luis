import { configureStore } from "@reduxjs/toolkit";
import posts from './slices/posts.slice'
import myPosts from './slices/myPosts.slice'

export default configureStore({
  reducer: {
    posts,
    myPosts
  }
})