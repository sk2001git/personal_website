"use client";
import { useState } from "react";
import ImageUploader from "./profile/ImageUploader";

import { createProject } from "@/lib/actions/ProjectManagement";
import { useRouter } from "next/navigation";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '@/firebaseConfig';


interface FormProps {
  userId: string;
}

export type CreateProject = {
  title: string;
  summary: string;
  description: string;
  link: string;
  documentation: string;
  Image: string;
  ProjectCategory: string;
}


const Form: React.FC<FormProps> = ({ userId }) => {
  const router = useRouter();
  const [projectName, setProjectName] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [link, setLink] = useState('');
  const [documentation, setDocumentation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [parentSelectedImage, setParentSelectedImage] = useState<string>("");
  const [parentSelectedFile, setParentSelectedFile] = useState<File | null>(null);
  const [downloadURL, setDownloadURL] = useState<string>("");

  // Callback function to receive selectedImage and selectedFile from child component
  const handleImageChange = (image: string, file: File | null) => {
    setParentSelectedImage(image);
    setParentSelectedFile(file);
  };

  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (!projectName) {
      alert ('Please enter a project name');
      return;
    }
    if (!parentSelectedImage || !parentSelectedFile) {
      alert ('Please upload an image');
      return;
    } 
    
    if (!category || category === 'Select a category') {
      // Category not selected, show an error message or handle it accordingly
      alert('Please select a category');
      return;
    }
    if (!link || !documentation) {
      alert('Please enter a link and documentation link, if they are the same, please enter the same link');
      return;
    }


    const file = parentSelectedFile;
    const storageRef = ref(storage, `projectImages/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const snapshot = await uploadTask;
    const downloadURL = await getDownloadURL(snapshot.ref);
    setDownloadURL(downloadURL);

    const project: CreateProject = {
      title: projectName,
      summary: summary,
      description: description,
      Image: downloadURL,
      link: link,
      documentation: documentation,
      ProjectCategory: category,
    } 
    await createProject({project, userId});
    router.push('/profile');
  };
  
  return (
    <form>
      {/* Header container for Post */}
      <div className="bg-white rounded-xl shadow= border-2 ">
        <div className=" flex items-center justify-center border-b-2 border-solid ">
          <h2 className="head-text">
            Create Post
          </h2>

        </div>
        
        {/* Body container for rest of the fields */}
        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
          <div className="space-y-6 sm:space-y-6">

            {/* Project name field */}
            <div className="space-y-2">
              <label htmlFor="project-name" className="labelForm">
                Project Name
              </label>
              <input
                id="project-name"
                type="text"
                className="inputForm"
                placeholder="Enter project name"
                maxLength={50}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <ImageUploader onImageChange={handleImageChange}/>
            </div>
            
            {/* description field */}
            <div className="space-y-2">
              <label htmlFor="description" className="labelForm">
                Summary
              </label>
              <textarea
                id="description"
                className="inputForm"
                rows={3}
                placeholder="Displayed summary"
                maxLength={80}
                onChange={(e) => setSummary(e.target.value)}
              ></textarea>
              <label htmlFor="description" className="labelForm">
                Description
              </label>
              <textarea
                id="description"
                className="inputForm"
                rows={6}
                placeholder="Description of project"
                maxLength={1000}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            
            {/* Project link field */}
            <div className="space-y-2">
              <label htmlFor="link" className="labelForm">
                Project Set-up Link
              </label>
              <input
                id="link"
                type="text"
                className="inputForm"
                placeholder="Enter project link"
                onChange={(e) => setLink(e.target.value)}
              />
              <label htmlFor="link" className="labelForm">
                Documentation Link
              </label>
              <input
                id="link"
                type="text"
                className="inputForm"
                placeholder="Enter documentation link"
                onChange={(e) => setDocumentation(e.target.value)}
              />
            </div>

        



            {/* Project category field */}
            <div className="space-y-2">
              <label htmlFor="category" className="labelForm">
                Category
              </label>

              <select
                id="category"
                className="inputForm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled hidden >Select a category</option>
                <option>School Project</option>
                <option>Individual Project</option>
                <option>Team Project</option>
                <option>Hackathon</option>
                <option>Others</option>
              </select>
            </div>

          </div>


          {/* Footer container for submit button */}
          <div className="mt-5 flex justify-center gap-x-2">
            <button
              type="button"
              className="btnForm hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit your project'}
            </button>
          </div>


        </div>
      </div>
    </form>  
  )
}

export default Form