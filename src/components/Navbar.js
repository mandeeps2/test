import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <>
      {/* <Link to="/">Greeting </Link> */}
      <div className="main-menu">
        <NavLink exact activeClassName="active_class" to="/todolist">
          TodoList
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/viewnote">
          ViewNote
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/showslot">
          ShowSlot
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/sdatalist">
          SdataList
        </NavLink>

        <NavLink exact activeClassName="active_class" to="/clock">
          Myclock
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/search">
          Search
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/counter">
          Counter
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/test">
          Test
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/calc">
          Calc
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/form">
          Form
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/user">
          User
        </NavLink>
      </div>
    </>
  );
}
