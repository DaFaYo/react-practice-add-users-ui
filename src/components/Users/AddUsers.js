import React, { useState } from "react";

import styles from "./AddUsers.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "./ErrorModal";



const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)."
      });
      return;
    }

    if (enteredAge.trim().length > 0) {
      const parsedAge = parseInt(enteredAge);

      if (isNaN(parsedAge) || parsedAge <= 0) {
        setError({
          title: "Invalid age",
          message: "Please enter a valid age (> 0)."
        });
        return;
      }

      const enteredUser = {
        username: enteredUserName,
        age: enteredAge,
      };
      props.onAddUser(enteredUser);
      setEnteredUserName("");
      setEnteredAge("");
      setError(null);
    }
  };

  const usernameInputChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={() => setError(null)}/>
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <label>Username</label>
          <input type="text" value={enteredUserName} onChange={usernameInputChangeHandler} />
          <label>Age (Years)</label>
          <input type="number" value={enteredAge} step="1" onChange={ageInputChangeHandler} />
          <Button type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
