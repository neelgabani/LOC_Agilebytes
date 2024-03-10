import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    // Connect to WebSocket server
    const socket = new WebSocket("ws://localhost:8000");

    // Event listener for incoming messages
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Update notes based on received data
      setNotes(data.notes);
    };

    return () => {
      // Cleanup WebSocket connection
      socket.close();
    };
  }, []);

  const handleNoteChange = (event) => {
    setCurrentNote(event.target.value);
  };

  const handleSaveNote = () => {
    const newNote = {
      id: uuidv4(),
      content: currentNote,
    };
    // Send new note to server
    // Server will broadcast the updated notes to all clients
    // Implement this functionality on the server side
  };

  return (
    <div>
      <h1>Real-time Collaborative Note Taking</h1>
      <div>
        <textarea value={currentNote} onChange={handleNoteChange}></textarea>
        <button onClick={handleSaveNote}>Save Note</button>
      </div>
      <div>
        {notes.map((note) => (
          <div key={note.id}>{note.content}</div>
        ))}
      </div>
    </div>
  );
};

export default Note;
