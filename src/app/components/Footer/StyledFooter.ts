import styled from "styled-components";

/* Footer and divs */
export const StyledFooter = styled.footer`
  background-color: var(--secondary-color);
  font-family: "Montserrat";
  padding: 2em 2em 1em 2em;
  color: #fff;

  div {
    display: flex;
    margin: .5em 0 .5em 0;
  }

  div div {
    display: flex;
    flex-direction: column;
  }

  div div .social-medias {
    display: flex;
    flex-direction: row;
  }

  p {
    text-align: center;
  }
`;

/*
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
*/

export const LinksContainer = styled.div`
  width: 70%;

  a {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    transition: 0.5s;
    white-space: nowrap;

    &:hover {
      color: var(--third-color);
      border-bottom: 1px solid #fff;
      transition: 0.5s;
    }
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto auto;
    
  }

  ul li {
    padding: .2em 0 .2em 0;
  }
`;