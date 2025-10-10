import { useEffect, useState } from "react";
import Shimmer from "../../../components/ui/Shimmer";

const CustomerSection = () => {
  const [customersList, setCustomersList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://randomuser.me/api/?results=8");
    const json = await data.json();
    setCustomersList(json.results);
  };

  return (
    <div className="customer-section">
      <h2 className="customer-section-heading">
        Loved by Foodies Everywhere 🍔
      </h2>

      {customersList.length === 0 && <Shimmer />}

      <div className="customer-containers">
        {customersList.map((customer) => {
          return (
            <div key={customer.login.uuid} className="customer-card">
              <img src={customer.picture.medium} alt={customer.name.first} />
              <h4>
                {customer.name.first} {customer.name.last}
              </h4>
              <p>{customer.location.city}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerSection;
