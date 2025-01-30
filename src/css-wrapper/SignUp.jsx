import styled from "styled-components";
const Wrapper = styled.div`
  /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  } */

  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eceaf5;

  .container {
    width: 70%;
    max-width: 500px;
    /* height: 90%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 20px;
    border-radius: 20px 20px;
  }

  @media screen and (max-width: 500px) {
    .container {
      width: 70%;
    }
  }
  @media screen and (min-width: 501px) {
    .container {
      width: 500px;
    }
  }

  .title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  .form {
    width: 80%;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
  }

  .input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }

  @media screen and (max-width: 500px) {
    .container {
      width: 70%;
    }
    label {
      display: block;
      font-size: 14px;
      color: #555;
      margin-bottom: 1px;
    }
    .error {
      margin-top: 1px;
    }
    .form-group {
      margin-bottom: 5px;
    }
  }
  @media screen and (min-width: 501px) {
    .container {
      width: 500px;
    }
  }

  .submit-button {
    width: 100%;
    background-color: #0078d4;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .submit-button:hover {
    background-color: #005ea6;
  }

  .toggle-text {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #555;
  }

  .toggle-link {
    color: #0078d4;
    cursor: pointer;
    font-weight: bold;
  }

  .toggle-link:hover {
    text-decoration: underline;
  }
`;
export default Wrapper;