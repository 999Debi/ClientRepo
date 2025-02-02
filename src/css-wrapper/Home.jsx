import styled from "styled-components";
const Wrapper = styled.div`


  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #eceaf5;
  .home-container {
    /* text-align: left; */
    padding: 20px;
    /* height: 90%; */
    width: 90vw;
    /* background-color: #f5e6d3; */
  }

  .upload-div {
    text-align: right;
  }
  .upload-btn {
    background-color: #464eb8;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 1em;
    font-weight: bold;
  }

  .meeting-table {
    width: 100%;
    margin: 20px auto;
    /* border: none; */
    border-collapse: collapse;
  }

  .meeting-table th,
  .meeting-table td {
    /* border: 1px solid #ddd;
     */
    border: none;
    padding: 10px;
    text-align: center;
  }
  .meeting-table tr {
    border: 1px solid #ddd;
  }
  .meeting-table th {
    background-color: #464eb8;
    color: white;
    cursor: pointer;
  }

  .meeting-table th:hover {
    background-color: #2f38a0;
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .popup-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
    width: 50%;
    position: relative;
    text-align: left;
  }
.popup-content h3{
text-align: center;
font-weight:bolder;
padding-bottom:0.5em;
}
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .input-group {
    margin: 15px 0;
  }

  .input-group label {
    display: block;
    margin-bottom: 5px;
  }

  .input-group input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .file-upload {
    margin-bottom:2em;
    padding: 10px;
    border: 2px dashed #464eb8;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  .file-upload:hover {
    background-color: #f3f4f6;
  }

  .upload-icon {
    font-size: 60px;
    color: #464eb8;
    margin-bottom: 10px;
  }

  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }

  .submit-btn {
    background-color: #464eb8;
    color: white;
    padding: 10px;
    width: 100%;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
    font-weight: bold;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .pagination button,
  .pagination select {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
  }

  .pagination button:hover,
  .pagination select:hover {
    background: #f3f4f6;
  }

  .pagination .selected {
    background-color: #464eb8;
    color: white;
  }

  .uploaded-file {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 8px;
    width: 80%;
    /* max-width: 300px; */
    margin: auto;
    font-size: 14px;
    color: #333;
  }

  .uploaded-file span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 85%;
  }

  .remove-icon {
    cursor: pointer;
    font-size: 18px;
    color: red;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .remove-icon:hover {
    transform: scale(1.2);
    color: darkred;
  }
`;

export default Wrapper;