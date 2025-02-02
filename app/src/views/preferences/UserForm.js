import React, { useState, useEffect } from "react";
import { calculateAge } from "../common/helpers/DateUtils";
import DatePicker from "../common/components/DatePicker";
import MultiCheck from "../common/components/MultiCheck";
import NumberRange from "../common/components/NumberRange";

const categories = require("../../resources/categories.json");

const UserForm = ({ onSubmit }) => {
  const [birthdate, setBirthdate] = useState("");
  const [preferredCategories, setPreferredCategories] = useState([]);
  const [rating, setRating] = useState(1);

  useEffect(() => {
    console.log("state", birthdate, preferredCategories, rating);
  }, [birthdate, preferredCategories, rating]);

  return (
    <div className="container">
      <h2 className="display-4">Preferences</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit({
            age: calculateAge(new Date(birthdate)),
            categories: preferredCategories,
            rating
          });
        }}
      >
        <DatePicker
          id="birthdatePicker"
          label="Birthdate"
          value={birthdate}
          onChange={dateStr => {
            setBirthdate(dateStr);
          }}
        />

        <MultiCheck
          label="Categories of interests"
          id="categories"
          items={categories}
          selectedItems={preferredCategories}
          onChange={arr => setPreferredCategories(arr)}
        />

        <NumberRange
          value={rating}
          onChange={n => setRating(n)}
          min={1}
          max={5}
          id="rating"
          label="Enter the minimum rating"
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
