import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteCandidateById
} from './UserSlice'
function Modalir(props) {
  const { show, closeModal, grade, gpa, description, name,surname, ids, onFet } = props;
  const dispatch = useDispatch()
  const onDelete = Id => {
    console.log(ids)
    dispatch(deleteCandidateById({ Id: Id })) 
    closeModal()
    onFet()
  }
  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modalir" : "hide"}>
        <button onClick={closeModal}>X</button>
        <h1>{name} {surname}</h1>
        <table class='table table-striped'>
          <thead>
            <tr>
              <th>Grade</th>
              <th>GPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{grade}</td>
              <td>{gpa}</td>
            </tr>
          </tbody>
        </table>
        <h3>Description</h3>
        <p>{description}</p>

        <div class='btn btn-danger' onClick={() => onDelete(ids)}>
            Reject
        </div>

      </div>
    </>
  );
}

export default Modalir;