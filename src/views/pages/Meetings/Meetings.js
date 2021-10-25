import React from "react";

export default function Meetings() {
  return <div>

    <iframe title="Join a Meeting"
            src={process.env.REACT_APP_MEETING_URL}
            width="970"
            height="800"
            allow="camera; microphone" />

    
    
  
  </div>;
}