import { type Accept } from "react-dropzone";
export interface DropzoneProps {
  value?: File[];
  onChange?: (files: File[]) => void;
  maxSize?: number; // in bytes
  maxFiles?: number;
  accept?: Accept;
  disabled?: boolean;
  className?: string;
}
