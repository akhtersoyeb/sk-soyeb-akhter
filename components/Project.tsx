/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface ProjectProps {
  imageSrc: string;
  title: string;
  details: string;
  previewLink?: string;
  codebaseLink: string;
}

export default function Project(props: ProjectProps) {
  return (
    <div class={tw`w-full rounded-md overflow-hidden shadow-md bg-white`}>
      <img
        class={tw`w-full object-cover`}
        src={props.imageSrc}
        alt={`Unable to load image for: ${props.title}`}
      />
      <div class={tw`flex flex-col gap-2 px-3 py-3`}>
        <h2 class={tw`font-medium`}>{props.title}</h2>
        <p class={tw`text-sm text-gray-700`}>{props.details}</p>
        <div class={tw`flex items-center justify-between`}>
          <a
            class={tw
              `text-sm bg-gray-100 py-2 px-3 rounded-md hover:bg-gray-200`}
            href={props.codebaseLink}
          >
            Codebase
          </a>
          {props.previewLink && (
            <a
              class={tw
                `text-sm bg-gray-100 py-2 px-3 rounded-md hover:bg-gray-200`}
              href={props.previewLink}
            >
              Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
