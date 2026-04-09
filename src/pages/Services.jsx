import { useEffect, useState } from "react";
import API from "../api/api";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await API.get("/services");
      setServices(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Services</h2>

      <div className="row">
        {services.map((s) => (
          <div className="col-md-4" key={s._id}>
            <div className="card p-3 my-2">
              <h5>{s.title}</h5>
              <p>{s.description}</p>
              <button className="btn btn-primary">Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;