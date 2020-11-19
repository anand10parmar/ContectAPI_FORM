import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

export default function UserList() {
  const { users, removeUser } = useContext(GlobalContext);

  return users.length > 0 ? (
    <ListGroup className="mt-4">
      {users.map((user) => (
        <ListGroupItem key={user.id} className="d-flex">
          <strong> {user.name} </strong>
          <div className="ml-auto">
            <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>
              Edit
            </Link>
            <Button
              className="btn btn-danger"
              onClick={() => removeUser(user.id)}
            >
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  ) : (
    <h4 className="text-center"> No User </h4>
  );
}
