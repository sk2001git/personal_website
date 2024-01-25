export type Project = {
  title: string;
  summary: string;
  description: string;
  Image: string;
  ProjectCategory: string;
  Team?: User[] | [];
}

export type User = {
  id: string;
  email: string;
  username: string;
  image: string;
  contact?: {
    linkedin: string;
    github: string;
  }; 
}