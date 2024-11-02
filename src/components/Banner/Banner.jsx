import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-12">
          <h1 className="text-6xl text-[#131313] font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-primary text-xl font-bold text-white bg-[#23BE0A] border-0 hover:bg-[#add9a6] hover:border hover:border-[#23BE0A] hover:text-[#131313]">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
