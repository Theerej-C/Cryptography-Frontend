import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UserRegistration() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [proffesion, setProffesion] = useState("");
  const [sudoname, setSudoName] = useState("");
  const [error, setError] = useState(null);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/save", {
        username: username,
        password: password,
        email: email,
        proffesion: proffesion,
        sudoname: sudoname,
      });
      alert("User Added");
      setUserName("");
      setPassword("");
      setEmail("");
      setProffesion("");
      setSudoName("");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>UserName</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter UserName"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your username with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>{" "}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
        />
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
      </Form.Group>{" "}
      <Form.Group className="mb-3">
        <Form.Label>Proffesion</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter UserName"
          value={proffesion}
          onChange={(e) => setProffesion(e.target.value)}
        />
      </Form.Group>{" "}
      <Form.Group className="mb-3">
        <Form.Label>SudoName</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter SudoName"
          value={sudoname}
          onChange={(e) => setSudoName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
