import { useState, useEffect } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Button from "@mui/material/Button";
import { Clock } from "react-clock";
import "react-clock/dist/Clock.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export function Form() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: " ",
  });
  const inputEvent = (event) => {
    // setName(event.target.value);
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;
    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
      //   if (name === "fName") {
      //     return {
      //       fname: value,
      //       lname: preValue.lname,
      //     };
      //   } else if (name === "lName") {
      //     return {
      //       fname: preValue.lname,
      //       lname: value,
      //     };
      //   }
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <Clock value={value} />
          <h1>
            <AccessTimeFilledIcon />
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <input
            type="text"
            placeholder="Enter your name"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your Last name"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
}

export function MYnote(props) {
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
  console.log(note);

  const addEvent = () => {
    props.passNote();
  };

  return (
    <>
      <div className="noteheader">
        <h1>My Note</h1>
      </div>
      <div className="main-note">
        <form>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
          />
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note"
          />
          <Button onClick={addEvent}>
            <AddIcon />
          </Button>
        </form>
      </div>
      <div className="note-list">
        <div className="note">
          <h2>Title</h2>
          <p>This is the content</p>
          <Button>
            <DeleteIcon className="deleteIcon" />
          </Button>
        </div>
      </div>
    </>
  );
}
