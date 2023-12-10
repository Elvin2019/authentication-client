import { Player } from "@lottiefiles/react-lottie-player";
import { useAuth } from "../context/use-auth";

const WelcomePage = () => {
  const { userInfo, logout } = useAuth();

  if (!userInfo) return null;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white min-h-full flex flex-col items-center justify-center p-20">
      <div className="mb-8">
        <Player
          src="https://lottie.host/259c8b29-4962-48c1-95c4-49d7c8492f74/pcecmO7WdH.json"
          className="player"
          loop
          autoplay
          style={{
            width: "40%",
            minWidth: "300px",
            minHeight: "200px",
          }}
        />
      </div>

      <h1 className="text-4xl mb-4 font-semibold">
        Welcome to the Application
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
        <p className="text-lg mb-2">User Information:</p>
        <p className="mb-2">
          <span className="font-semibold">Name:</span> {userInfo.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {userInfo.email}
        </p>
      </div>

      <button
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default WelcomePage;
