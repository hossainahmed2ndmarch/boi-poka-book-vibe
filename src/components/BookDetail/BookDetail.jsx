import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const bookDetail = data.find((bookDetail) => bookDetail.bookId === id);
  const {
    bookName,
    author,
    image,
    category,
    review,
    tags,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
  } = bookDetail;
  return (
    <div className="hero bg-white min-h-screen my-12">
      <div className="hero-content space-x-8 flex-col lg:flex-row">
        <div className="p-16 bg-[#1313130D] rounded-2xl">
          <img src={image} className="max-w-sm h-[568px] rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-[40px] font-bold">{bookName}</h1>
          <p className="py-6 text-[#131313CC] font-medium">By: {author}</p>
          <div className="divider"></div>
          <p className="text-[#131313CC] font-medium">{category}</p>
          <div className="divider"></div>
          <p className="text-[#131313B3]">
            <span className="font-bold text-black">Review:</span> {review}
          </p>
          <div className="my-7 flex items-center space-x-3">
            <p className="font-bold">Tag</p>
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className="btn btn-sm rounded-[30px] bg-[#23BE0A0D] text-[#23BE0A] font-medium"
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <div className="overflow-x-auto mb-8">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="text-[#131313B3]">Number of Pages:</td>
                  <td className="font-semibold">{totalPages}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="text-[#131313B3]">Publisher:</td>
                  <td className="font-semibold">{publisher}</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="text-[#131313B3]">Year of Publishing:</td>
                  <td className="font-semibold">{yearOfPublishing}</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td className="text-[#131313B3]">Rating:</td>
                  <td className="font-semibold">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn btn-outline border border-[#1313134D] mr-4 hover:bg-[#50B1C9] hover:outline-none hover:border-none">
            Read
          </button>
          <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
