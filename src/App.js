import axios from "axios";
import { Container } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import "./App.css";
import NavbarComponent from "./component/NavbarComponent";

function App() {
  const responseSuccessGoogle = (res) => {
    console.log(res);
    axios({
      method: "POST",
      url: "http://localhost:5000/api/login",
      data: { tokenId: res.tokenId },
    }).then((response) => {
      console.log(response);
    });
  };
  const responseErrorGoogle = (res) => {
    console.log(res);
  };
  return (
    <div className="App">
      <NavbarComponent />
      <Container className="mt-3">
        <h3 className="text-center my-3"> login With Google</h3>
        <GoogleLogin
          clientId="829363947247-2n7d9ui3t25r7ep3cba83jd0kg9rph65.apps.googleusercontent.com"
          buttonText="Login with google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </Container>
    </div>
  );
}

export default App;
