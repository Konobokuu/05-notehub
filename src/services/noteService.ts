import axios from 'axios';
import type { Note, NoteTag } from '../types/note';

const API_TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

const noteApi = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async ({
  page,
  perPage,
  search,
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const response = await noteApi.get<FetchNotesResponse>('/notes', {
    params: { page, perPage, search: search || undefined },
  });
  return response.data;
};

export const createNote = async (payload: CreateNotePayload): Promise<Note> => {
  const response = await noteApi.post<Note>('/notes', payload);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await noteApi.delete<Note>(`/notes/${id}`);
  return response.data;
};