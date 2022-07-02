
interface ProjectInterface {
  title: string;
  imageSrc: string;
  description: string;
  codebaseURL: string;
  previewURL?: string;
}

export const projects: ProjectInterface[] = [
  {
    title: 'Ring Read',
    imageSrc: 'projects/ring-read.png',
    description: 'An open source medium alternative',
    codebaseURL: 'https://github.com/akhtersoyeb/ring-read'
  }
]

