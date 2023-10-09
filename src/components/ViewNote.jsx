import { useState } from "react";
import { CreateNote } from "./CreateNote";
import { Note } from "./Note";

export default function ViewNote() {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    if (note.title !== "" && note.content !== "") {
      setAddItem((prevData) => {
        return [...prevData, note];
      });
    }
  };
  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };
  console.log(addItem);
  return (
    <>
      <CreateNote passNote={addNote} />
      <div className="note-list">
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
    </>
  );
}
