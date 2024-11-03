import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { GoBook } from "react-icons/go";

const ReadBook = ({ book }) => {
  const {
    bookName,
    author,
    image,
    category,
    tags,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
  } = book;
  return (
    <div className="p-6 border border-[#13131326] rounded-2xl flex space-x-6 items-center">
      {/* Image */}
      <div className="py-7 px-14 bg-[#1313130D] rounded-2xl">
        <img className="w-28 h-40 object-cover" src={image} alt="" />
      </div>
      <div>
        <div>
          <h3 className="text-2xl font-bold">{bookName}</h3>
          <p className="text-[#131313CC] font-medium">By: {author}</p>
        </div>
        <div className="my-7 flex items-center space-x-3">
          <p className="font-bold">Tag</p>
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="btn btn-sm rounded-[30px] bg-[#23BE0A0D] text-[#23BE0A] font-medium"
            >
              {tag}
            </button>
          ))}
          <p className="flex items-center text-[#131313CC]">
            <IoLocationOutline />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <p className="flex items-center text-[#131313CC]">
            <GoPeople className="mr-3" />
            Publisher: {publisher}
          </p>
          <p className="flex items-center text-[#131313CC]">
            <GoBook className="mr-3" />
            Page: {totalPages}
          </p>
        </div>
        <div className="divider"></div>
        <div className="my-7 flex items-center space-x-3">
          <button className="btn btn-sm rounded-[30px] bg-[#328EFF26] text-[#328EFF] font-medium">
            Category: {category}
          </button>
          <button className="btn btn-sm rounded-[30px] bg-[#FFAC3326] text-[#FFAC33] font-medium">
            Rating: {rating}
          </button>
          <button className="btn btn-sm rounded-[30px] bg-[#23BE0A] text-white font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

ReadBook.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ReadBook;
