"use client";

import { FaPlus } from "react-icons/fa";
import { Button } from "../../../components";
import styles from "./styles.module.css";
import { ChangeEvent, useState } from "react";
import { CacheService } from "./services/CacheService";

const cachedService = new CacheService();

const cachedNotes = cachedService.load();
const allNotes = cachedNotes ? JSON.parse(cachedNotes) : [];

export default function NoteApp() {
  const [notes, setNotes] = useState<string[]>(allNotes);

  const addNoteHandler = () => {
    setNotes([...notes, ""]);
  };

  const insertNoteContent = (
    e: ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const content = e.target.value;
    if (!content) {
      return;
    }

    notes[index] = content;
    const updatedNotes = [...notes];

    setNotes(updatedNotes);
    cachedService.save(updatedNotes);
  };

  const deleteNote = (deleteNoteIndex: number) => {
    const filteredNotes = notes.filter(
      (note, index) => index !== deleteNoteIndex
    );

    setNotes(filteredNotes);
    cachedService.save(filteredNotes);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>Note App</div>
      <div>Double click on a note to remove it</div>
      <div className={styles.notesContainer}>
        {notes.map((note, index) => (
          <textarea
            className={styles.note}
            key={index}
            value={note}
            placeholder="Empty Note"
            onChange={(e) => insertNoteContent(e, index)}
            onDoubleClick={() => deleteNote(index)}
          />
        ))}
        <Button
          customStyles={[styles.addNoteBtn]}
          iconStyles={[styles.addNoteBtnIcon]}
          btnIcon={<FaPlus />}
          onClick={addNoteHandler}
        />
      </div>
    </div>
  );
}
