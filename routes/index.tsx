/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Achievement from "../components/Achievement.tsx";
import Article from "../components/Article.tsx";
import Book from "../components/Book.tsx";
import Project from "../components/Project.tsx";

export default function HomePage() {
  return (
    <div>
      <main
        class={tw
          `max-w-screen-md mx-auto my-16 px(4 sm:6 md:8) flex flex-col gap-10`}
      >
        {/* Introdcution */}
        <div
          class={tw
            `flex  sm:flex-row flex-col items-center justify-between gap-6`}
        >
          <div class={tw`flex flex-col items-center sm:items-start`}>
            <h3 class={tw`text-sm text-gray-400`}>Portfolio</h3>
            <h1 class={tw`text-lg font-medium`}>Sk Soyeb Akhter</h1>
            <p class={tw`text-gray-600`}>
              Full-stack developer
            </p>

            <div class={tw`flex gap-5`}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.3 12.94c-.1-.05-.15-.2-.15-.301V8.006c0-.1.05-.25.15-.351l.955-1.105V6.5H14.84l-2.56 6.478L9.366 6.5H5.852v.05l.903 1.256c.201.2.251.502.251.753v5.523c.05.302 0 .653-.15.954L5.5 16.894v.05h3.616v-.05L7.76 15.087c-.15-.302-.201-.603-.15-.954V9.11c.05.1.1.1.15.301l3.414 7.633h.05L14.54 8.76c-.05.3-.05.652-.05.904v5.925c0 .15-.05.25-.15.351l-1.005.954v.05h4.921v-.05l-.954-.954z" />
                </svg>
              </a>
            </div>
          </div>
          <div class={tw`rounded-xl overflow-hidden`}>
            <img
              src={"https://avatars.githubusercontent.com/u/66069520?v=4"}
              alt={"Unable to load: Profile Picture"}
            />
          </div>
        </div>

        {/* Projects */}
        <div>
          <h1 class={tw`text-lg font-medium text-gray-600`}>Projects</h1>
          <div class={tw`py-5 grid grid-cols-2 sm:grid-cols-3 gap-4`}>
            <Project
              imageSrc="projects\ring-read.png"
              title="Ring Read"
              details="An open-source medium alternative."
              codebaseLink="https://github.com/akhtersoyeb/ring-read"
            />
            <Project
              imageSrc="https://picsum.photos/200"
              title="Ring Read"
              details="An open-source medium alternative."
              codebaseLink="https://github.com/akhtersoyeb/ring-read"
            />
            <Project
              imageSrc="https://picsum.photos/200"
              title="Ring Read"
              details="An open-source medium alternative."
              codebaseLink="https://github.com/akhtersoyeb/ring-read"
              previewLink="#"
            />
          </div>
        </div>

        {/* Written Articles */}
        <div>
          <h1 class={tw`text-lg font-medium text-gray-600`}>
            Written Articles
          </h1>
          <div class={tw`py-5 flex flex-col gap-4`}>
            <Article
              title="How Next.js Won in 2022"
              seoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, beatae, quos hic eius harum ex dignissimos sit quasi nobis molestias soluta, repellat dolorem minus ad?"
              coverImageSrc="https://picsum.photos/200"
            />
            <Article
              title="How Next.js Won in 2022"
              seoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, beatae, quos hic eius harum ex dignissimos sit quasi nobis molestias soluta, repellat dolorem minus ad?"
              coverImageSrc="https://picsum.photos/200"
            />
            <Article
              title="How Next.js Won in 2022"
              seoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, beatae, quos hic eius harum ex dignissimos sit quasi nobis molestias soluta, repellat dolorem minus ad?"
              coverImageSrc="https://picsum.photos/200"
            />
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h1 class={tw`text-lg font-medium text-gray-600`}>Achievements</h1>
          <div class={tw`py-5 grid grid-cols-2 sm:grid-cols-3 gap-4`}>
            <Achievement
              imgSrc="https://picsum.photos/200"
              title="Best Programmer of 2022"
              givenBy="Google"
            />
          </div>
        </div>

        {/* Read Books */}
        <div>
          <h1 class={tw`text-lg font-medium text-gray-600`}>Books Read</h1>
          <div class={tw`py-5 grid grid-cols-2 sm:grid-cols-3 gap-4`}>
            <Book imgSrc="https://picsum.photos/200" />
          </div>
        </div>
      </main>
    </div>
  );
}
