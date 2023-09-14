import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-20">
      <img className="w-full mb-8 rounded-lg" src={cover} alt="" />
      <div className="flex justify-between mt-5 mb-8">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} mnt read</span>

          <button
            onClick={() => handleAddBookmark(blog)}
            className=" ml-3 text-2xl"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h3 className="text-2xl">Blog Title:{title} </h3>
      <p className="mb-6 mt-6">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-violet-600 font-bold underline"
      >
        Mark as read
      </button>
    </div>
  );
};
export default Blog;
