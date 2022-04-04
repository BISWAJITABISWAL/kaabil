import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import JobList from "../components/jobsList";
import { getJobs } from "../services/jobService";
import "../index.css";
import PostJob from "../components/postJob";
function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isAllJobToggle, setIsAllJobToggle] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") !== null ||
      localStorage.getItem("token") !== undefined
    ) {
      getJobs()
        .then((resp) => {
          if (resp.status === "SUCCESS") {
            setJobs(resp.data);
          }
        })
        .catch((err) => {
          toast(err.message, {
            type: "error",
          });
        });
    }
  }, [jobs]);

  const toggleAllJobs = () => {
    setIsAllJobToggle(!isAllJobToggle);
    console.log(isAllJobToggle);
  };

  return (
    <>
      <div className="flex flex-col w-full h-full gap-4 lg:flex-row md:flex-row">
        <div className="flex-col hidden w-1/3 h-full gap-4 p-4 bg-transparent bg-cover md:block bg-gray-50 lg:flex">
          <JobList jobs={[1, 2, 3, 4, 5, 6, 7, 8]} />
        </div>

        <div className={"w-full p-4 rounded lg:hidden md:hidden bg-gray-50"}>
          <li
            className="w-full p-4 font-bold list-none cursor-pointer"
            onClick={toggleAllJobs}
          >
            All Jobs
          </li>
          {isAllJobToggle ? (
            <ul className="p-4 pb-16 overflow-y-scroll list-none h-1/2">
              <JobList
                onClick={toggleAllJobs}
                jobs={[1, 2, 3, 4, 5, 6, 7, 8]}
              />
            </ul>
          ) : (
            ""
          )}
        </div>
        <div className="flex-col items-center justify-center block w-full h-full gap-4 p-4 pb-32 overflow-y-auto rounded-md shadow lg:flex bg-gray-50 ">
          <div className="w-full">
            <h4 className="hidden px-8 mb-8 text-2xl font-bold lg:block">
              Post Job
            </h4>
            <PostJob />
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
