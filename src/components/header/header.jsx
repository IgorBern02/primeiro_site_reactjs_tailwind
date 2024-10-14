function Header() {
  return (
    <main className="absolute w-full h-24 flex items-center justify-between p-5 pr-14 pl-14 fixed backdrop-blur text-white ">
      <section>
        <h1 className="text-black">Logo</h1>
      </section>

      <div>
        <button
          type="button"
          className="p-2 px-8 rounded bg-orange-600 hover:bg-orange-500 transition ease-in-out delay-100"
        >
          Login
        </button>
      </div>
    </main>
  );
}

export default Header;
