"use client";

import { useState, useEffect } from "react";
import ImageUploader from "./ImageUploader";
import { getProject, updateProject } from "@/lib/actions/ProjectManagement";
import { useRouter } from "next/navigation";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '@/firebaseConfig';
import { Project } from "@/types/project";
import UserSearch from "./UserSearch";
import { User } from "@/types/user";
import { getUsers, getUsersFromProject } from "@/lib/actions/UserManagement";
import { set } from "mongoose";

interface EditFormProps {
  project: string;
  members: string;
  allusers: string;
}

export type EditProject = {
  title: string;
  summary: string;
  description: string;
  link: string;
  documentation: string;
  Image: string;
  ProjectCategory: string;
  team: string[];
}



const EditForm: React.FC<EditFormProps> = ({project, members, allusers}: EditFormProps) => {
  const router = useRouter();
  // Origial members and project
  const [currentProject, setProject] = useState<Project>(JSON.parse(project));
  const [currentMembers, setMembers] = useState<User[]>(JSON.parse(members));


  // This is for all the fields in the form 
  const [projectName, setProjectName] = useState(currentProject.title);
  const [summary, setSummary] = useState(currentProject.summary || "");
  const [description, setDescription] = useState(currentProject.description || "");
  const [category, setCategory] = useState(currentProject.ProjectCategory);
  const [link, setLink] = useState(currentProject.link);
  const [documentation, setDocumentation] = useState(currentProject.documentation);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Users State 
  const [selectedUsers, setSelectedUsers] = useState<User[]>(currentMembers);
  const allUsers: User[] = JSON.parse(allusers);

  // Image selection
  const [parentSelectedImage, setParentSelectedImage] = useState<string>("");
  const [parentSelectedFile, setParentSelectedFile] = useState<File | null>(null);


  

  const handleImageChange = (image: string, file: File | null) => {
    setParentSelectedImage(image);
    setParentSelectedFile(file);
  };

  const handleUserSelect = (user: User) => {
    setSelectedUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleUserRemove = (userId: string) => {
  
    setSelectedUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
  };


  const handleSubmit = async () => {
    setIsSubmitting(true);

    if (!projectName || !category || category === 'Select a category' || !link || !documentation) {
      console.log(projectName, parentSelectedImage, parentSelectedFile, category, link, documentation);
      alert('Please fill in name, image, project link, documentation link and category.');
      setIsSubmitting(false);
      return;
    }
    let updatedDownloadURL = currentProject.Image;
    if (parentSelectedFile) {
      const file = parentSelectedFile;
      const storageRef = ref(storage, `projectImages/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      const snapshot = await uploadTask;
      updatedDownloadURL = await getDownloadURL(snapshot.ref);

    }
    
    


    const updatedProject: EditProject = {
      title: projectName,
      summary: summary,
      description: description,
      Image: updatedDownloadURL,
      link: link,
      documentation: documentation,
      ProjectCategory: category,
      team: selectedUsers.map((user) => user._id),
    };

    await updateProject(updatedProject, currentProject._id);
    setIsSubmitting(false);

    router.push('/profile');
  };

  return (
    <form>
      <div className="bg-white rounded-xl shadow= border-2">
        <div className="flex items-center justify-center border-b-2 border-solid">
          <h2 className="head-text">
            Edit Post
          </h2>
        </div>
        
        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
          <div className="space-y-6 sm:space-y-6">

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
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <img className="mx-auto object-contain rounded-xl" src={currentProject.Image} alt={`${currentProject.title}/photo`}/>
              <p className="text-gray text-center"> The current photo </p>

              <ImageUploader onImageChange={handleImageChange}  />
            </div>

            <div className="space-y-2">
              <label htmlFor="summary" className="labelForm">
                Summary
              </label>
              <textarea
                id="summary"
                className="inputForm"
                rows={3}
                placeholder="Displayed summary"
                maxLength={80}
                value={summary}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="space-y-2">
              <label htmlFor="link" className="labelForm">
                Project Set-up Link
              </label>
              <input
                id="link"
                type="text"
                className="inputForm"
                placeholder="Enter project link"
                value={link}
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
                value={documentation}
                onChange={(e) => setDocumentation(e.target.value)}
              />
            </div>

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
          <div className="space-y-5 mt-5">
            <UserSearch
              onUserSelect={handleUserSelect}
              onUserRemove={handleUserRemove}
              selectedUsers={selectedUsers}
              allUsers={allUsers}
            />
            <div>
                <h3>Current Users:</h3>
                <ul >
                  {currentMembers.map(user => (
                    <li className="py-1 px-2 m-2 text-sm font-medium rounded-md border border-blue-400 bg-blue-100 text-blue-600 hover:bg-blue-200" key={user._id}>{user.username}</li>
                  ))}
                </ul>
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-x-2">
            <button
              type="button"
              className="btnForm hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Updating...' : 'Update your project'}
            </button>
          </div>

        </div>
      </div>
    </form>
  );
};

export default EditForm;
