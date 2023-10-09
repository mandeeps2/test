import { useState } from "react";
import Button from "@mui/material/Button";

import AddIcon from "@mui/icons-material/Add";
import { Abc } from "./First";
export function CreateNote(props) {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevDate) => {
      return {
        ...prevDate,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };
  const btoNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <Abc />
      {/* <div className="noteheader">
        <h1>My Note</h1>
      </div> */}
      <div onDoubleClick={btoNormal}>
        <div className="main-note" onClick={expandIt}>
          <form>
            {expand ? (
              <input
                type="text"
                name="title"
                value={note.title}
                onChange={InputEvent}
                placeholder="Title"
              />
            ) : null}
            <textarea
              rows=""
              column=""
              name="content"
              value={note.content}
              onChange={InputEvent}
              placeholder="Write a note"
              //   onClick={expandIt}
            />
            {expand ? (
              <Button onClick={addEvent}>
                <AddIcon />
              </Button>
            ) : null}
          </form>
        </div>
      </div>
    </>
  );
}
