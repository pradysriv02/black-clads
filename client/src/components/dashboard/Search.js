import React, { Fragment, useState } from "react";
import ListBlog from "../blog/components/ListBlog";

const Search = (props) => {
  const [search, setSearch] = useState({
    city: "",
  });

  const { city } = search;
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    props.extractEntities(search);
    setIsSubmit(true);
  };

  const onChange = (e) => setSearch({ ...search, [e.target.name]: e.target.value });

  const RegisterForm = {
    maxWidth: "500px",
    padding: "15px",
    margin: "auto",
    marginTop: "50px",
  };

  return (
    <div className="jumbotron" style={{ background: "#e8f0fa", padding: "50px", marginTop: "10px" }}>
      <h3>Unlocking the world of travel, one named entity at a time.</h3>
      <p className="lead">
        A one stop platform for tourists and local businesses. Tourists with wanderlust can plan their way ahead without numbing their minds with countless blogs, meanwhile, a local business can get
        the best of his business by listing themselves on Travelo!
      </p>
      <hr className="my-4" />
      <div style={RegisterForm}>
        <form onSubmit={onSubmit} className="form">
          <div class="form-group">
            <div className="form-group">
              <label htmlFor="name">City</label>
              <input id="city" class="form-control" type="text" name="city" value={city} onChange={onChange} placeholder="City you are travelling to..." required />
            </div>
          </div>

          <button type="submit" class="btn btn-outline-primary" style={{ marginTop: "10px" }}>
            Search
          </button>
        </form>
      </div>
      <div style={{ width: "100%" }}>{!props.displayBlog && isSubmit && <ListBlog />}</div>
    </div>
  );
};

export default Search;
