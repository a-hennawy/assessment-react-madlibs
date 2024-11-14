import { useState } from "react";
import MadlibsForm from "./MadlibsForm";
import MadlibStories from "./madlibStories";

import "./App.css";

function Madlibs() {
  const [story, setStory] = useState({});

  const createMadlib = (storyObj) => {
    setStory(storyObj);
  };

  // console.log(story);
  return (
    <div>
      <h1>Madlibs!</h1>
      <MadlibsForm createMadlib={createMadlib} />
      <MadlibStories
        noun={story.noun}
        noun2={story.noun2}
        adjective={story.adjective}
        color={story.color}
      />
    </div>
  );
}

export default Madlibs;
