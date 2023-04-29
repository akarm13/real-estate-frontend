import { Image, X } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import "./style.css";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../../../components/ErrorMessage";

interface FileWithPreview extends File {
  preview?: string;
}

type Props = {
  onSubmit: (data: any) => void;
};
export const PhotosForm = ({ onSubmit }: Props) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;

    const newFiles = Array.from(fileList).map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );

    setFiles((prevFiles) => {
      const mergedFiles = [...prevFiles, ...newFiles];
      return mergedFiles.slice(0, 9);
    });
  };

  const handleRemove = (index: number) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const placeholders = Array.from({ length: 9 }, (_, index) => {
    const file = files[index];
    const key = `placeholder-${index}`;

    return (
      <label
        key={key}
        className="placeholder relative w-32 h-32 md:w-52 md:h-52 border border-gray-100 rounded-lg m-1 flex justify-center items-center cursor-pointer hover:border-primary-500 transition"
      >
        <input
          type="file"
          className="hidden"
          accept="image/*"
          multiple
          onChange={(e) => handleChange(e)}
        />
        {file ? (
          <>
            <img
              src={file.preview}
              className="img w-full h-full object-cover rounded-lg"
              alt={file.name}
            />
            <button
              className="remove-button absolute top-0 right-0 bg-white rounded-full p-1 m-1 shadow hover:bg-red-500 transition"
              onClick={(e) => {
                e.preventDefault();
                handleRemove(index);
              }}
            >
              <X width={16} height={16} className="close-icon" />
            </button>
          </>
        ) : (
          <Image
            width={48}
            height={48}
            className="text-gray-300 transition image-icon"
          />
        )}
      </label>
    );
  });

  useEffect(() => {
    setValue("files", files);
  }, [files, setValue]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold text-primary-500">Photos</h3>
        <h4 className="text-lg text-gray-600">
          Include high-quality photos that showcase the property's best features
          and give potential buyers or renters a clear sense of the space.
        </h4>
        <div className="min-h-[24px] mt-4">
          {errors.files && (
            <ErrorMessage>
              {(errors.files.message as string) || "Photos is required"}
            </ErrorMessage>
          )}
        </div>
      </div>
      <div className="flex flex-wrap mt-8">{placeholders}</div>
    </div>
  );
};
