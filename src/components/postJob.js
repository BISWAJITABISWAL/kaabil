import { useState } from "react";
import { toast } from "react-toastify";
import { addJob } from "../services/jobService";

function PostJob() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [schedule_type, setScheduleType] = useState("");
  const [active, setActive] = useState(true);
  const [shift_type, setShiftType] = useState("");
  const [allow_wfh, setWfh] = useState(false);
  const [min_salary, setMinSalary] = useState(0);
  const [max_salary, setMaxSalary] = useState(0);
  const [experience_type, setExperienceType] = useState("experienced");
  const [open_count, setOpenCount] = useState(0);
  const [work_days, setWorkDays] = useState(0);
  const [work_start_time, setWorkStartTime] = useState("");
  const [work_end_time, setWorkEndTime] = useState("");

  const postJob = () => {
    setLoading(true);
    let data = {
      title,
      schedule_type,
      active,
      shift_type,
      allow_wfh,
      min_salary: parseInt(min_salary),
      max_salary: parseInt(max_salary),
      experience_type,
      open_count: parseInt(open_count),
      work_days,
      work_start_time,
      work_end_time,
    };
    addJob(data)
      .then((resp) => {
        if (resp.status == "SUCCESS") {
          toast("Job posted successfully", { type: "success" });
        } else {
          toast("Error while posting job", {
            type: "error",
          });
        }

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        toast(error.message, {
          type: "error",
        });
      });
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 px-8 lg:grid-cols-2">
        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">Job Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Job Title"
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">
            Schedule Type
          </label>
          <select
            name="schedule_type"
            value={schedule_type}
            onChange={(e) => setScheduleType(e.target.value)}
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">Shift Type</label>
          <select
            name="shift_type"
            value={shift_type}
            onChange={(e) => setShiftType(e.target.value)}
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          >
            <option value="day">Day</option>
            <option value="night">Night</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">Allow WFH</label>
          <select
            name="wfh"
            value={allow_wfh}
            onChange={(e) => setWfh(e.target.value)}
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">Min Salary</label>
          <input
            type="number"
            placeholder="0"
            value={min_salary}
            onChange={(e) => setMinSalary(e.target.value)}
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">Max Salary</label>
          <input
            type="number"
            placeholder="0"
            value={max_salary}
            onChange={(e) => setMaxSalary(e.target.value)}
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">
            Experience Type
          </label>
          <select
            name="experience_type"
            value={experience_type}
            onChange={(e) => setExperienceType(e.target.value)}
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          >
            <option value="fresher">Fresher</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">Open Count</label>
          <input
            type="number"
            placeholder="0"
            value={open_count}
            onChange={(e) => setOpenCount(e.target.value)}
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">Work Days</label>
          <input
            type="number"
            placeholder="0"
            value={work_days}
            onChange={(e) => setWorkDays(e.target.value)}
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">Start Time</label>
          <input
            type="time"
            value={work_start_time}
            onChange={(e) => setWorkStartTime(e.target.value)}
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="px-1 mb-2 text-sm text-gray-400">End Time</label>
          <input
            type="time"
            value={work_end_time}
            onChange={(e) => setWorkEndTime(e.target.value)}
            className="w-full p-4 border-2 border-gray-100 rounded-md outline-none focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="flex items-center justify-end w-full px-8 my-2">
        <button
          disabled={loading}
          onClick={postJob}
          className="inline-flex items-center w-full px-4 py-4 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 rounded-md shadow lg:w-1/5 disabled:cursor-not-allowed hover:bg-indigo-400 disabled:bg-gray-500"
        >
          {loading ? (
            <svg
              className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth={4}
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            ""
          )}
          Post Job
        </button>
      </div>
    </>
  );
}

export default PostJob;
