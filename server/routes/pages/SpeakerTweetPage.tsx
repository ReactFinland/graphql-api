import * as React from "react";

function SpeakerTweetPage({ speaker: { name, image, talks } }) {
  return (
    <div>
      {name} <img src={image.url} />
    </div>
  );
}

export default SpeakerTweetPage;
