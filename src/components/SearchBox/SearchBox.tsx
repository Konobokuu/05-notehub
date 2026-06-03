import type { ChangeEvent } from 'react';
import css from './SearchBox.module.css';

interface SearchBoxProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={onChange}
    />
  );
}