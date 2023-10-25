import Image from "next/image";

//text
//bg

//custom colours
//config.ts

//media queries apply via sm: , md: , lg: , xl: , 2xl: 

//arbitrary values in []
export default function Home() {
  return (
    <div>
      <h1 className="bg-custom_blue-000 border-green-400">HELLO MUNDO!</h1>
      <h1 className="text-yellow-600 sm:text-sm md:text-lg xl:text-2xl">HELLO MUNDO!</h1>
      <h1 className="text-[#bada50] sm:text-sm md:text-lg xl:text-2xl">HELLO MUNDO!</h1>
    </div>
  );
}
