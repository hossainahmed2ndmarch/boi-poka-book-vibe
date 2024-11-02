import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6 rounded-2xl">
        <figure className="bg-[#F3F3F3] rounded-2xl py-6">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex items-center space-x-3">
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn btn-sm rounded-[30px] bg-[#23BE0A0D] text-[#23BE0A] font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="font-medium text-[#131313CC]">By: {author}</p>
          <div className="my-5 border-[#13131326] border-t border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge text-[#131313CC] font-medium">{category}</div>
            <div className="badge space-x-4">
              <small className="text-[#131313CC]">{rating}</small>
              <FaRegStar className="text-[#131313CC]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
