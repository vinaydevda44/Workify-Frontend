import { useEffect, useState } from "react";
import API from "../api/api";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await API.get("/service/getAllServices");
      setServices(res.data.services);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Available Services</h2>

      <div className="row">
        {services.length === 0 ? (
          <p className="text-center">No services found</p>
        ) : (
          services.map((s) => (
            <div className="col-md-4 mb-3" key={s._id}>
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex flex-column">
                  
                  <h5 className="card-title text-primary">
                    {s.name}
                  </h5>

                  <p className="card-text text-muted">
                    {s.description}
                  </p>

                  <h6 className="mt-auto">💰 ₹{s.price}</h6>

                  <button className="btn btn-primary mt-3 w-100">
                    Book Service
                  </button>

                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Services;