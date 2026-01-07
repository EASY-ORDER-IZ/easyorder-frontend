'use client';

import React, { useCallback, useState, type FC } from 'react';
import { useDropzone } from 'react-dropzone';
import { X, UploadCloud, FileImage, Trash2 } from 'lucide-react';
import { Button } from '../ui/button/button';

interface InputUploadProps {
  open: boolean;
  close: () => void;
  onSelectedFile: (files: File[]) => void;
}

const InputUpload: FC<InputUploadProps> = ({ open, close, onSelectedFile }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true,
  });

  if (!open) return null;

  const handleConfirm = () => {
    onSelectedFile(selectedFiles);
    close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <button
          onClick={close}
          className="text-text-400 hover:text-text-600 absolute top-3 right-3"
        >
          <X size={22} />
        </button>

        <h2 className="text-xl font-semibold">Upload files</h2>
        <p className="text-text-500 mb-4 text-sm">Select and upload the files of your choice</p>

        <div
          {...getRootProps()}
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-10 transition hover:border-gray-400"
        >
          <input {...getInputProps()} />
          <UploadCloud size={40} className="text-text-400 mb-3" />
          {isDragActive ? (
            <p className="text-text-600">Drop files here...</p>
          ) : (
            <>
              <p className="text-text-700 font-medium">Choose a file or drag & drop it here</p>
              <p className="text-text-400 text-sm">JPG, PNG — Max size 2MB</p>
            </>
          )}
        </div>

        {selectedFiles.length > 0 && (
          <div className="mt-6 max-h-52 space-y-2 overflow-y-auto">
            {selectedFiles.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border bg-gray-50 p-3"
              >
                <div className="flex items-center gap-2">
                  <FileImage className="text-[var(--color-primary)]-500" size={20} />
                  <span className="text-sm">{file.name}</span>
                </div>

                <button
                  onClick={() => removeFile(idx)}
                  className="text-[var(--color-primary)]-500 hover:text-[var(--color-primary)]-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
        <Button title="Select Files" onClick={handleConfirm} className="mt-2" />
      </div>
    </div>
  );
};

export default InputUpload;
