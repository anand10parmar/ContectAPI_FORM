import React, { useContext, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

export default function AddUser() {
  const { addUser } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    const addedOne = { id: uuid(), name };
    addUser(addedOne);
    history.push("/");
  };
  return (
    <div className="App">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Enter the name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </FormGroup>

        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}
