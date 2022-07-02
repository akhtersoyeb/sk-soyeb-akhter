/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface BookProps {
  imgSrc: string;
}

export default function Book(props: BookProps) {
  return (
    <div class={tw`w-full rounded-md overflow-hidden shadow-md bg-white`}>
      <img
        class={tw`w-full object-cover`}
        src={props.imgSrc}
        alt="Unable to load book image"
      />
    </div>
  );
}
