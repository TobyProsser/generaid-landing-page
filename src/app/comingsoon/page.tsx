import Header from "../components/sections/header"; // Adjust path if needed

export default function ComingSoon() {
  return (
    <div className="tab-page">
      <div className=" items-center justify-center min-h-screen bg-gray-100 text-center">
        <Header showLogo={true} />
        <h1 className="text-4xl font-bold mt-6">🚧 Coming Soon 🚧</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-md">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
    </div>
  );
}
