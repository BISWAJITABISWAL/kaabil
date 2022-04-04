import Job from "./job";

function JobList({ jobs }) {
  return (
    <>
      <ul className="p-4 pb-16 overflow-y-scroll list-none">
        {jobs.map((item, index) => {
          return <Job key={index} jobId={index} />;
        })}
      </ul>
    </>
  );
}

export default JobList;
