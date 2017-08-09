import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px #c6c6c6;

  @media screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;

const Link = styled.a`line-height: 0;`;

export default () => (
  <Header>
    <Link href="/">
      <img src={logo} alt="Burrberry Logo" />
    </Link>
  </Header>
);
