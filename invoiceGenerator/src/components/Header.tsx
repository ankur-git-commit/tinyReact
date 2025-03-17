export default function Header() {
  return (
    <>
      <div className={className.headerWrapper}>
        <header className={className.headerContainer}>
          <h1 className={className.topHeader}>Invoice Creator</h1>
          <p className={className.botheader}>
            Thanks for choosing GoodCorp, LLC!
          </p>
        </header>
      </div>
    </>
  );
}

const className = {
  headerWrapper: `bg-[#3A69D2] p-10 text-center`,
  headerContainer: `flex flex-col gap-3 py-10`,
  topHeader: `text-5xl font-bold`,
  botheader: `font-light tracking-wide text-lg`,
  new: `p-4 flex text-white bg-black m-2 rounded-lg`,
};
