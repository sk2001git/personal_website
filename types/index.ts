export type Project = {
  _id: string;
  title: string;
  summary: string | "";
  description: string | "";
  Image: string;
  ProjectCategory: string;
  Team: User[] | [];
}

export type User = {
  _id: string;
  email: string;
  username: string;
  image: string;
  contact?: {
    linkedin: string;
    github: string;
  }; 
}