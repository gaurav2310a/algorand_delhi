import { Contract } from '@algorandfoundation/algorand-typescript'
import { GlobalState } from '@algorandfoundation/algorand-typescript'
export class NoteKeeper extends Contract {

  note = GlobalState<string>({ key: "note", initialValue: "" });

  addNote(title: string, content: string): string {
    this.note.value = title + " - " + content;
    return "Note saved: " + title;
  }

  getNote(): string {
    return this.note.value;
  }
}
