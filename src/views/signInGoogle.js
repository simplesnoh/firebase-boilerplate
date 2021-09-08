import react from "react";
import { googleAuth } from "../helpers/googleAuth"; // !! Make sure to import your functions
import { Button, Header, Grid } from "semantic-ui-react";

function SignInGoogle() {
  // Here is your submit login for your google auth
  // Don't forget you can also you the googleAuth.signOut() function
  const onSubmitLogin = () => {
    googleAuth.signIn();
  };

  return (
    <>
      <Grid>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Login With Google?
            </Header>
            <Button type="submit" color="teal" onClick={onSubmitLogin}>
              Let's Do It!
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default SignInGoogle;
