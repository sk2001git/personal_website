import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';

interface ImageUploaderProps {
  onImageChange: (image: string, file: File | null) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageChange }) => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File is too large. Please select a file less than 2 MB.");
        return;
      }

      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (fileExtension !== 'jpeg' && fileExtension !== 'jpg' && fileExtension !== 'png') {
        alert('Please select a valid image file (JPEG or PNG).');
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const image = e.target?.result as string;

        
        setSelectedImage(image);
        setSelectedFile(file);
        onImageChange(image, file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor="af-submit-app-upload-images" className="inline-block text-sm font-medium text-gray-800 mt-2.5 ">
        Upload Image
      </label>

      <label htmlFor="af-submit-app-upload-images" className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
        <input id="af-submit-app-upload-images" name="af-submit-app-upload-images" type="file" className="sr-only" onChange={handleFileSelect} accept=".png, .jpeg, .jpg, .svg" />
        {selectedImage ? (
          <div className='flex-col flex items-center'>
            <div className="flex-1 relative flex flex-col gap-5 p-4 rounded-md items-center">
              <Image src={selectedImage} alt="Selected Image" width={100} height={100} />
            </div>
            <div className='font-bold items-center w-1/2 rounded-lg'>
              {selectedFile?.name}
            </div>
          </div>
          
          
        ) : (
          <>
            <Image src="/assets/icons/cloud-upload.svg" alt="Upload Icon" width={100} height={100} className="w-10 h-10 mx-auto text-gray-400" />
            <span className="mt-2 block text-sm text-gray-800 dark:text-gray-200">
              Browse your device or <span className="group-hover:text-blue-700 text-blue-600">Drag and Drop</span>
            </span>
            <span className="mt-1 block text-xs text-gray-500">
              Maximum file size is 2 MB
            </span>
          </>
        )}
      </label>
    </div>
  );
};

export default ImageUploader;