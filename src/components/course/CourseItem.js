import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterAuthor } from "../../features/filter/FilterSlice";

const CourseItem = ({ video }) => {
  const { id, title, author, avatar, duration, views, thumbnail } = video;
  const dispatch = useDispatch();

  const filterByAuthor = (author) => {
    dispatch(filterAuthor(author));
  };
  return (
    <>
      <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03] border-[#f9f8f8] bg-[#f9f8f8] pb-8">
        <div className="w-full flex flex-col">
          <div className="relative">
            <Link to={`/course-details/${id}`}>
              <img src={thumbnail} className="w-full h-auto" alt={title} />
            </Link>

            <p className="absolute text-md font-semibold btn-position py-2 px-3 btn-orange ">
              $22.00
            </p>
          </div>

          <div className="flex flex-row mt-2 gap-2">
            <div clas="flex flex-col">
              <Link to={`/course-details/${id}`}>
                <p className="text-[#171F32] font-sans text-[18px] font-bold pb-4 pt-8 text-center">
                  Testy & Delicious Food Recipes for Lunch Tellus Eleifend
                </p>
              </Link>
              <div className="flex justify-evenly">
                <div>
                  <h3 className="font-semibold">
                    {" "}
                    <span className="text-[#ff5421] pr-1">
                      <i class="fa-solid fa-user"></i>
                    </span>{" "}
                    26 Students
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold">
                    <span className="text-[#ff5421] pr-3">
                      <i class="fa-solid fa-file"></i>
                    </span>{" "}
                    6 Lessons
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
