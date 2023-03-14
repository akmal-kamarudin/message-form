import { useState } from "react";

function Form() {
  const intialValue = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(intialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 4));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="title">Hi, welcome!👋</div>
      <div className="subtext">Please leave a message 📝</div>

      <div className="input-container ic1">
        <input
          id="Name"
          className="input"
          placeholder=" "
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <div className="cut"></div>
        <label htmlFor="Name" className="placeholder">
          Name
        </label>
      </div>

      <div className="input-container ic2">
        <input
          id="Email"
          className="input"
          placeholder=" "
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <div className="cut"></div>
        <label htmlFor="Email" className="placeholder">
          Email
        </label>
      </div>

      <div className="input-container ic2">
        <input
          id="Message"
          className="input"
          placeholder=" "
          type="text"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        <div className="cut"></div>
        <label htmlFor="Message" className="placeholder">
          Message
        </label>
      </div>

      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
