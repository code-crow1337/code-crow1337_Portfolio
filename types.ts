export type TIconType = {
  IconType: 'faLinkedin' | 'faGithub' | 'faEnvelope';
}

export type THamburgerMenu = {
  open?:boolean; 
}
export type TErrorMessage = {
  errorMessage:string;
  isError: boolean;
}
export type TProjectData = {
  name: string ;
  tech: string[];
  date: string;
  sourceCode: string;
  live: string;
  img: string;
  left?:boolean;
}