const NotFound = () => {
  return (
    <section className="flex items-center h-full ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl mt-4 font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <button
            type="button"
            className="px-8 py-3 font-semibold border mt-5 rounded-xl bg-white text-black"
          >
            Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
