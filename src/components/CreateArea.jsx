import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExtended, setIsExtended] = useState(false);

  function clicked() {
    setIsExtended(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExtended && (
          <input
            name="title"
            onClick={clicked}
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={clicked}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExtended ? 3 : 1}
        />
        <Zoom in={isExtended}>
          <IconButton onClick={submitNote}>
            <AddIcon />
          </IconButton>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
