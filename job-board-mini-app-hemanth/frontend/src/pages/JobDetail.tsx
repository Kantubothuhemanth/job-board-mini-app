import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/jobs/${id}`)
      .then(res => setJob(res.data));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company} - {job.location}</p>
      <p>Type: {job.type}</p>
      <p>{job.description}</p>
      <Link to={`/apply/${job._id}`}>Apply Now</Link>
    </div>
  );
}
