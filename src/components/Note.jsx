import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <Button onClick={deleteNote}>
          <DeleteIcon className="deleteIcon" />
        </Button>
      </div>
    </>
  );
}
