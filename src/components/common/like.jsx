import React from "react";

// liked : boolean
// onClick: function

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
  }
  return (
    <i
      onClick={props.onLikeToggle}
      style={{ cursor: "pointer" }}
      className={classes}
    />
  );
};

export default Like;
