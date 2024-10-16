const SingleMovieSkelet = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mt-11 max-w-6xl mx-auto">
      <div className="col-span-4">
        <div className="skeleton w-full h-550"></div>
      </div>
      <div className="col-span-8">
        <div className="flex flex-col gap-5">
          <div className="skeleton w-[250px] h-[40px]"></div>
          <div className="flex items-center gap-5">
            <div className="skeleton w-[100px] h-[45px]"></div>
            <div className="skeleton w-[250px] h-[45px]"></div>
          </div>
          <div className="flex items-center gap-5">
            <div className="skeleton w-[100px] h-[30px]"></div>
            <div className="skeleton w-[100px] h-[30px]"></div>
            <div className="skeleton w-[100px] h-[30px]"></div>
            <div className="skeleton w-[100px] h-[30px]"></div>
            <div className="skeleton w-[100px] h-[30px]"></div>
          </div>
          <div className="flex items-center gap-5">
            <div className="skeleton w-[100px] h-[30px]"></div>\
            <div className="skeleton w-[150px] h-[30px]"></div>
          </div>
          <div className="flex items-center gap-5">
            <div className="skeleton w-[100px] h-[35px]"></div>
            <div className="skeleton w-[100px] h-[35px]"></div>
            <div className="skeleton w-[100px] h-[35px]"></div>
            <div className="skeleton w-[100px] h-[35px]"></div>
          </div>
          <div className="skeleton w-full h-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieSkelet;
