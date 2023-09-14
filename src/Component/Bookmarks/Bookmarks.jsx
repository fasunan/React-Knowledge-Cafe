import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-10 bg-slate-300 rounded-xl">
      <div>
        <h3 className="text-3xl text-center text-orange-500">
          Reading Time: <span className="text-fuchsia-600">{readingTime}</span>
        </h3>
      </div>
      <h1 className="text-2xl text-center mt-7 text-indigo-700 font-semibold">
        Bookmarks Blog: {bookmarks.length}
      </h1>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
