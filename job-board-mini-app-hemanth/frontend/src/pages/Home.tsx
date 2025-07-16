import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/jobs/list')
      .then(res => setJobs(res.data));
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      {jobs.map((job: any) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.company} - {job.location}</p>
          <Link to={`/jobs/${job._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
