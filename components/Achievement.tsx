/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface AchievementProps {
  imgSrc: string;
  title: string;
  givenBy: string;
}

export default function Achievement(props: AchievementProps) {
  return (
    <div class={tw`w-full rounded-md overflow-hidden shadow-md bg-white`}>
      <img
        class={tw`w-full object-cover`}
        src={props.imgSrc}
        alt="Unable to load"
      />
      <div class={tw`flex flex-col gap-2 px-3 py-3`}>
        <h1 class={tw`font-medium`}>{props.title}</h1>
        <p class={tw`text-sm text-gray-700`}>Given By: {props.givenBy}</p>
      </div>
    </div>
  );
}
