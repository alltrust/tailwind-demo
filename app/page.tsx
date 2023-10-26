import Image from "next/image";

//text
//bg
//p
//w & max-w; min-w
//h & max-h;min-h

//custom colours
//config.ts

//media queries apply via sm: , md: , lg: , xl: , 2xl:

//arbitrary values in []

//to use decoration styles, ensure you have the 'underline' class
//or whichever class is required for corresponding style

//padding with p- space inside elementer
export default function Home() {
  return (
    <>
      <div>
        <h1 className="bg-custom_blue-000 border-green-400 italic underline">
          HELLO MUNDO!
        </h1>
        <h1 className="text-yellow-600 sm:text-sm md:text-lg xl:text-2xl">
          HELLO MUNDO!
        </h1>
        <h1 className="text-[#bada50] sm:text-sm md:text-lg xl:text-2xl">
          HELLO MUNDO!
        </h1>
      </div>
      <div>
        <h1 className="text-3xl line-through ">Title 1</h1>
        <h2 className="text-2xl">Title 2</h2>
        <h3 className="text-xl underline decoration-red-500 decoration-wavy">
          Title 3
        </h3>
        <p className="text-base">some regular words</p>
        <p className="truncate">
          description that is very long and apparently might run off the screen
          so we use the truncate class to prevent this with tailwin css- i
          should have lorem ipsumed
        </p>
        <p className="text-xs note">A little note</p>
      </div>
      <div>
        <p className="p-4 bg-red-500">SOME WORDS with padding</p>
        <p className="m-4 bg-red-600">SOME WORDS with margin</p>

      </div>
      <div className="flex w-9/12 ">
        <div className="bg-blue-300  w-1/2 h-6">?</div>
        <div className="bg-green-300 w-1/2 h-6">!</div>
        <div></div>
      </div>
    </>
  );
}
