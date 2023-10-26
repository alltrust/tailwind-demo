import Link from "next/link";

const FlexboxPage = () => {
  // always place the "flex" as classname before using flex properties
  //ie. flex on parent div before adding grow on child
  // or on same div and inserting flex flex-col

  //grids are like mui grids

  //Where you decide to have darkmode trigger button, ensure you add logic to 
  //useEffect hook
  return (
    <>
      <div className="Parent">
        <h1>header</h1>
        <div className="flex justify-center">
          <div>Sidebar</div>
          <h1>HELLO FROM FLEX</h1>
        </div>
      </div>
      <Link href={"/"}>Home</Link>
      <Link href={"/container"}>Container</Link>
      <Link href={'/designsystem'}>DEsign System</Link>

    </>
  );
};

export default FlexboxPage;
