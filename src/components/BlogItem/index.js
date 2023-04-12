import './index.css'

const BlogItem = props => {
  const {blogObject} = props
  const {title, description, publishedDate} = blogObject

  return (
    <li className="blog-item">
      <div className="title-date-card">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
