import react, { useState } from "react";
import { emailAuth } from "../helpers/emailAuth"; // !! Make sure to import your functions
import { Button, Form, Header, Grid } from "semantic-ui-react";

function SignInEmail() {
  const [register, setRegister] = useState(false);
  // Set your user object
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const onFieldChange = (event) => {
    const newUser = { ...userObject };
    newUser[event.target.id] = event.target.value;
    setUserObject(newUser);
  };

  // Here! Here! Here's your signIn!
  const onSubmitLogin = () => {
    emailAuth.signIn(userObject);
  };

  // Here! Here! Here's your Register!
  // Don't forget you can also use the emailAuth.signOut() function
  const onSubmitRegister = () => {
    emailAuth.register(userObject);
  };

  return (
    <>
      <Grid>
        {!register && (
          <Grid.Row centered columns={3}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Login
              </Header>
              <Form>
                <Form.Field></Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    id="email"
                    onChange={onFieldChange}
                    placeholder="example@email.com"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    id="password"
                    onChange={onFieldChange}
                    placeholder="1234@@"
                  />
                </Form.Field>
                <Button type="submit" color="teal" onClick={onSubmitLogin}>
                  Submit
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        )}
        {register && (
          <Grid.Row centered columns={3}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Register
              </Header>
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input
                    id="displayName"
                    onChange={onFieldChange}
                    placeholder="Jane Doe"
                  />
                  <label>Email</label>
                  <input
                    id="email"
                    onChange={onFieldChange}
                    placeholder="example@email.com"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    id="password"
                    onChange={onFieldChange}
                    placeholder="1234@@"
                  />
                </Form.Field>
                <Button type="submit" color="teal" onClick={onSubmitRegister}>
                  Submit
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        )}
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Button
              basic
              color="green"
              disabled={!register}
              onClick={() => setRegister(false)}
            >
              Login
            </Button>
            <Button
              basic
              color="green"
              disabled={register}
              onClick={() => setRegister(true)}
            >
              Register
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default SignInEmail;
