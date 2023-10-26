import Link from "next/link"

const Container = () => {
  return (
    <>
      <div className="container bg-red-300 mx-auto">container</div>
      <Link href={'/designsystem'}>DEsign System</Link>
    </>
  );
};


export default Container 