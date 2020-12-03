import React from "react";
import "./Header.scss";

  // we can use children even though we haven't defined them in our CardProps
interface HeaderModel {
    username: string;
    email: string;
}

  export const Header = ({ username, email }: HeaderModel) => {
    return (
      <div className="header">
        <h2>{username}</h2>
        <h3>{email}</h3>
      </div>
    )
  };
