function MadlibStories({ noun, noun2, adjective, color }) {
  const story = ` I found a ${color} ${noun} under my ${adjective} ${noun2}. It was amazing!`;
  console.log(story);
  return <p>{story}</p>;
}

export default MadlibStories;
