import {
  Link,
  Form,
  redirect,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import NAMES from "../NAMES";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: "joy@gmail.com",
      password: "okay1234",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Successfully logged in to explore the application");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="email"
          id="email"
          isRequired={true}
          labelText="Email-id"
        />
        <FormRow
          type="password"
          name="password"
          id="password"
          isRequired={true}
          labelText="Password"
        />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          {NAMES.ExploreApp}
        </button>
        <p>
          {NAMES.NotMember}
          <Link to="/register">{NAMES.Register}</Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
