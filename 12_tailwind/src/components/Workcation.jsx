const Workcation = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg">
          <img
            src={"images/Workcation.png"}
            alt="Workcation"
            className="rounded-lg mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">You can work from anywhere. <span className="text-purple-500">Take advantage of it.</span></h1>
          <p className="text-gray-600 mb-6">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you`&#39;`re not on vacation.
          </p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
            BOOK YOUR ESCAPE
          </button>
        </div>
      </div>
    );
  };
  
  export default Workcation;