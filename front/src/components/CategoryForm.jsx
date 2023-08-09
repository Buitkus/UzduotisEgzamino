import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useDispatch } from "react-redux";
import { setCategory } from "../services/categoriesSlices";
import { toast } from "react-toastify";

const CategoryForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setCategory({ name }));
    toast.success("Kategorija prideta sekmingai");
    setName("");
  };

  return (
    <div>
      <Container className="m-4">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3 w-50" controlId="formBasicCategory">
            <Form.Label>Kategorija</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Iveskite kategorija"
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Prideti
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CategoryForm;
