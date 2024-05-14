import binPic from "../assets/bin.png"


export default function FormBtns({ handleDelete, handleShowForm, handleSave }) {

  return(
    <div className="form-btns">
    <button className="form-btn delete" type="button" onClick={handleDelete}> <img src={binPic} alt=""/>Delete</button>
    <button className="form-btn cancel" type="button" onClick={handleShowForm}>Cancel</button>
    <button className="form-btn save" type="button" onClick={handleSave}>Save</button>
  </div>
  )
}