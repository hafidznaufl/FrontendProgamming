import styled from "styled-components";

const NavbarStyle = styled.div`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  li {
    margin-bottom: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h2 {
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }
`;

export default NavbarStyle;
