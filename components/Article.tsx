/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface ArticleProps {
  title: string;
  seoText: string;
  coverImageSrc: string;
}

export default function Article(props: ArticleProps) {
  return (
    <div
      class={tw
        `grid grid-cols-4 place-items-center gap-4 bg-white px-3 py-3 rounded-md shadow-md`}
    >
      <div class={tw`col-span-3 flex flex-col gap-2`}>
        <h1 class={tw`font-medium`}>{props.title}</h1>
        <p class={tw`text-sm text-gray-700`}>{props.seoText}</p>
      </div>
      <div class={tw`rounded-md overflow-hidden`}>
        <img
          src={props.coverImageSrc}
          alt="Unable to load cover image"
        />
      </div>
    </div>
  );
}
