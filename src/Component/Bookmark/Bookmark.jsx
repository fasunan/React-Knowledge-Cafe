const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-orange-100 rounded-lg">
      <h3 className="text-2xl mt-4">{title}</h3>
    </div>
  );
};

export default Bookmark;
