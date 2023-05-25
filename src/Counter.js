import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
// import MailIcon from "@mui/icons-material/Mail";

export default function Counter() {
  // const like=10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const inc = () => {
    setLike(like + 1);
  };
  return (
    <div>
      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => {
          inc();
        }}
        color="primary"
      >
        <Badge badgeContent={like}>👍</Badge>
      </IconButton>
      <IconButton
        aria-label="delete"
        ssize="large"
        onClick={() => {
          setDislike(dislike + 1);
        }}
        color="error"
      >
        <Badge badgeContent={dislike}>👎</Badge>
        
      </IconButton>
    </div>
  );
}
