"use client"; // Ensures this runs on the client-side
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import SearchBar from "../items/searchbar";
import SmallTextButton from "../items/smalltextbutton";

interface HeaderProps {
  showLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLogo = false }) => {
  const router = useRouter();
  // const pathname = usePathname();

  // const closeCurrentPage = () => {
  //   const pathSegments = pathname.split("/").filter(Boolean); // Remove empty segments
  //   if (pathSegments.length > 1) {
  //     pathSegments.pop(); // Remove last segment
  //     router.push(`/${pathSegments.join("/")}`);
  //   } else {
  //     router.push("/"); // Go back to home if only one segment remains
  //   }
  // };

  return (
    <div className="column-layout">
      {/* Logo in Top Right Corner (conditionally rendered) */}
      {showLogo && (
        <div>
          <Link href="/" className="logo-container">
            <img src="/images/Logo.png" alt="Logo" className="logo" />
          </Link>

          <div className="spacer" />
          <div className="spacer" />
        </div>
      )}

      {/* Title Below Image */}
      <h1 className="home-title">Welcome to Project Generaid</h1>
      <div className="searchwrap">
        <SearchBar height={50} />
      </div>

      {/* Row of Gradient Buttons */}
      <div className="button-row">
        <SmallTextButton
          text="Categories"
          onClick={() => router.push("/categories")}
        />
        <SmallTextButton
          text="Documentation"
          onClick={() => router.push("/documentation")}
        />
        <SmallTextButton text="Donate" onClick={() => router.push("/donate")} />
        <SmallTextButton
          text="Contact"
          onClick={() => router.push("/contact")}
        />
      </div>
      <div className="spacer" />
    </div>
  );
};

export default Header;
