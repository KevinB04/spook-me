import axios from "axios";
import SightingsForm from "../../Components/SightingsForm/SightingsForm";
import { useHistory } from "react-router-dom";

const AddSighting = () => {
  const history = useHistory();

  const handleFormSubmit = (e, formObject) => {
    e.preventDefault();
    axios
      .post("/api/sightings", formObject)
      .then((response) => {
        console.log(response.data);
        history.push(`/sightings/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
      <SightingsForm handleFormSubmit={handleFormSubmit} buttonText="Submit" />
    </div>
  );
};

export default AddSighting;
