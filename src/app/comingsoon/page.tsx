"use client";
import Colors from "@components/constants/Colors";
import Header from "../components/sections/header"; // Adjust path if needed

export default function ComingSoon() {
  return (
    <div
      style={{ display: "flex", background: "white", justifyContent: "center" }}
    >
      <div className="tab-page">
        <div className=" items-center justify-center min-h-screen  text-center">
          <Header showLogo={true} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h1
              className="text-4xl font-bold mt-6"
              style={{ color: Colors.darkGrey }}
            >
              🚧 Coming Soon 🚧
            </h1>
            <div className="spacer" />
            <p className="mt-4 text-lg text-gray-700 max-w-md">
              We&apos;re working hard to bring you something amazing. Stay
              tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
