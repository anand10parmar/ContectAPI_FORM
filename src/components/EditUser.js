import React, { useContext, useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export default function EditUser(props) {
  const [selectedUser, setSeletctedUser] = useState({
    id: "",
    name: ""
  });
  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserId = props.match.params.id;

  const onChange = (e) => {
    setSeletctedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const selectedId = currentUserId;
    const selectedUser = users.find((user) => user.id === selectedId);
    setSeletctedUser(selectedUser);
  }, [currentUserId, users]);

  const onSubmit = (e) => {
    history.push("/");
    editUser(selectedUser);
  };

  console.log("currentUserId", currentUserId);
  return (
    <div className="App">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={selectedUser.name}
            name="name"
            placeholder="Enter the name"
            onChange={onChange}
          ></Input>
        </FormGroup>

        <Button type="submit"> Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}
