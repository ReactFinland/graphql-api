import React from "react";

function IndexPage() {
  return (
    <ul>
      <li>
        <a href="./badges">Generate badges</a>
      </li>
      <li>
        <a href="./speaker-tweet">Generate speaker tweets</a>
      </li>
      <li>
        <a href="./schedule">Generate a schedule poster</a>
      </li>
      <li>
        <a href="./presentation#0">Generate a presentation with speakers</a>
      </li>
      <li>
        <a href="./text#'Speakers' room">Generate a speakers' room poster</a>
      </li>
      <li>
        <a href="./text#←">Generate a left arrow poster</a>
      </li>
      <li>
        <a href="./text#→">Generate a right arrow poster</a>
      </li>
    </ul>
  );
}

export default IndexPage;
