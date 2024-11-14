import { useState } from "react";
import { v4 as uuid } from "uuid";

function MadlibsForm({ createMadlib }) {
  const initData = {
    noun: "",
    noun2: "",
    adjective: "",
    color: "",
    isSubmitted: false,
  };
  const [formData, setFormData] = useState(initData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    createMadlib({ ...formData, id: uuid() });
    setFormData(initData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="noun">Noun</label>
        <input
          type="text"
          placeholder="Type a noun"
          name="noun"
          value={formData.noun}
          onChange={handleChange}
        />

        <label htmlFor="noun2">Noun2</label>
        <input
          type="text"
          placeholder="Type a noun"
          name="noun2"
          value={formData.noun2}
          onChange={handleChange}
        />

        <label htmlFor="adjective">Adjective</label>
        <input
          type="text"
          placeholder="Type a adjective"
          name="adjective"
          value={formData.adjective}
          onChange={handleChange}
        />

        <label htmlFor="color">color</label>
        <input
          type="text"
          placeholder="Type a color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
        <button>Generate</button>
      </form>
    </div>
  );
}

export default MadlibsForm;
