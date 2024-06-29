import { Route, Routes } from "react-router-dom"
import Couter from "./features/couter/Couter"
import PostList from "./features/posts/PostList"

const App = () => {
  return (
    <Routes >
      <Route path="/" element={<Couter/>} />
      <Route path="/postpage" element={<PostList/>}/>
    </Routes>
  )
}

export default App