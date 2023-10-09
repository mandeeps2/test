import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Counter, Calc, Card, Myclock, Abc } from "./components/First";
import { Test, Greeting, User, SlotM } from "./components/Test";
import Sdata from "./components/sdata";
import TodoList from "./components/TodoList";
import { Form, MYnote } from "./components/XYZ";
import { Route, Routes, Redirect } from "react-router-dom";
import ViewNote from "./components/ViewNote";
import ShowSlot from "./components/ShowSlot";
import SdataList from "./components/SdataList";
import Error from "./components/Error";
import Welcome from "./components/Welcome";
import Search from "./components/Search";

function App() {
  // console.log(addNote.note);
  return (
    <div>
      <Navbar />
      <Greeting />
      <Abc />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/todolist" element={<TodoList />} />
        <Route exact path="/viewnote" element={<ViewNote />} />
        <Route exact path="/showslot" element={<ShowSlot />} />
        <Route exact path="/clock" element={<Myclock />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/sdatalist" element={<SdataList />} />
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/calc" element={<Calc />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/:fname" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
