import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-card">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} blogObject={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
