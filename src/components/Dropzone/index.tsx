import { cn } from "@/lib/utils";
import { File, Upload, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

import { type DropzoneProps } from "./types";

export const Dropzone = ({
  value = [],
  onChange,
  maxSize = 5 * 1024 * 1024, // 5MB default
  maxFiles = 1,
  accept = {
    "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    "application/pdf": [".pdf"],
  },
  disabled = false,
  className,
}: DropzoneProps) => {
  const [files, setFiles] = useState<File[]>(value);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles =
        maxFiles === 1 ? acceptedFiles : [...files, ...acceptedFiles];
      const limitedFiles = newFiles.slice(0, maxFiles);
      setFiles(limitedFiles);
      onChange?.(limitedFiles);
    },
    [files, maxFiles, onChange]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxSize,
      maxFiles,
      accept,
      disabled,
      multiple: maxFiles > 1,
    });

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange?.(newFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const getAcceptedExtensions = () => {
    const extensions: string[] = [];
    Object.values(accept).forEach((exts) => {
      extensions.push(...exts);
    });
    return extensions.join(", ");
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "relative rounded-lg border-2 border-dashed transition-colors",
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25 hover:border-primary/50",
          disabled && "opacity-50 cursor-not-allowed",
          !disabled && "cursor-pointer",
          files.length === 0 ? "p-12" : "p-6"
        )}
      >
        <input {...getInputProps()} />

        {files.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="rounded-full bg-primary/10 p-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">
                {isDragActive ? (
                  "Drop the files here..."
                ) : (
                  <>
                    <span className="text-primary">Click to upload</span> or
                    drag and drop
                  </>
                )}
              </p>
              <p className="text-xs text-muted-foreground">
                {getAcceptedExtensions()} (Max {formatFileSize(maxSize)})
              </p>
              {maxFiles > 1 && (
                <p className="text-xs text-muted-foreground">
                  Up to {maxFiles} files
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium mb-3">
              <File className="h-4 w-4" />
              <span>
                {files.length} {files.length === 1 ? "file" : "files"} selected
              </span>
            </div>
            <div className="space-y-2">
              {files.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between rounded-md border bg-background p-3"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <File className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(file.size)}
                      </p>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 flex-shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            {maxFiles > 1 && files.length < maxFiles && (
              <p className="text-xs text-muted-foreground text-center pt-2">
                Click or drag to add more files ({maxFiles - files.length}{" "}
                remaining)
              </p>
            )}
          </div>
        )}
      </div>

      {fileRejections.length > 0 && (
        <div className="mt-2 space-y-1">
          {fileRejections.map(({ file, errors }) => (
            <div
              key={file.name}
              className="text-xs text-destructive flex items-start gap-1"
            >
              <span className="font-medium">{file.name}:</span>
              <span>{errors[0]?.message}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
