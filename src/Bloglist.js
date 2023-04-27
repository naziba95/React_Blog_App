import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglist = ({ blogs, title}) => {

  // const blogs = props.blogs;
   // const title = props.title;
  return ( 

    <div className="blog-list">
      <h2>{ title }</h2>
        {blogs.map((blog) =>  // use map method to output the blog items from an object array to a list
      
      <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
        <h2>{blog.title}</h2>
        <p>Written By: {blog.author}</p>
        </Link>
        
      </div>
      
      )} 

    </div>

  );
}
 
export default Bloglist;