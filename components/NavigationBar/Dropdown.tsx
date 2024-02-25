"use client";
import Image from "next/image";
import { useState } from "react";
import { DropdownItem } from "./DropdownItem";
import { signOut, useSession } from "next-auth/react";

const Dropdown: React.FC = ()  => {
  const { data: session } = useSession();
  const username = session?.user?.name ;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const dropDownItems = [
    {
      name: "Profile",
      onClick: () => {
      },
      href: "/profile"
    },
    {
      name: "Sign Out",
      onClick: async () => { try{await signOut() } catch (error ) {
        console.log(error);
      };},
      href: "/api/auth/signout"
    }
  ];

  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="flex-shrink-0 hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-md hover:bg-gray-50 "
        onClick = {() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        
        <span className="px-2 text-md text-black font-bold truncate max-w-[7.5rem]"> {username} </span>
        
        <Image 
                src="/assets/icons/down.svg"
                width={16}
                height={16}
                alt="home"
        />
      </button>

      {isDropdownOpen && 
      (
        <div className="dropDownPanel">
          {dropDownItems.map((item, index) => (
            <DropdownItem key={index} name={item.name} onClick={item.onClick} href={item.href} />
          ))}
        </div>
        )
      }

    </div>
  );
};

export default Dropdown;