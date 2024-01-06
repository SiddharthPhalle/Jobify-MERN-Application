import React from "react";
import { Form, redirect, Link, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow, SubmitBtn } from "../components";
import NAMES from "../NAMES";
import customFetch from "../utils/customFetch.js";
import axios from "axios";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          id="name"
          name="name"
          isRequired={true}
          labelText="name"
        />
        <FormRow
          type="text"
          id="lastName"
          name="lastName"
          isRequired={true}
          labelText="Last Name"
        />
        <FormRow
          type="text"
          id="location"
          name="location"
          isRequired={false}
          labelText="Location"
        />
        <FormRow
          type="text"
          id="email"
          name="email"
          isRequired={true}
          labelText="email"
        />
        <FormRow
          type="password"
          id="password"
          name="password"
          isRequired={true}
          labelText="Password"
        />
        <SubmitBtn />
        <p>
          {NAMES.AlreadyMember}
          <Link to="/login" className="member-btn">
            {NAMES.Login}
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
