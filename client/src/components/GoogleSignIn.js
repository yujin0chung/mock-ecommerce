import React, { useState } from "react";
import styled from "styled-components";

const GoogleSignIn = ({ receiveUser, updateUserAuth }) => {
  return (
    <GoogleButtonContainer href="/auth/google">
      <Logo src={process.env.PUBLIC_URL + "/icons/google.svg"} />
      <Text>Sign in with Google</Text>
    </GoogleButtonContainer>
  );
};

export default GoogleSignIn;

const GoogleButtonContainer = styled.a`
  display: flex;
  flex-direction: row;
  color: dimgray;
  border-style: outset;
  border-width: 1px;
  text-decoration: none;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 20px;
  margin-right: 18px;
`;

const Text = styled.div`
  font-size: 13px;
`;
