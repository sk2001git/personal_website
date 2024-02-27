"use client";
import Image from "next/image"
import { LoginButton } from "../auth/LoginButton"
import Dropdown from "./Dropdown"
import {useSession} from "next-auth/react";


const Navbar = () => {
  const {data: session, status} = useSession();

  
  return (
    <header className="w-full">
      <nav className="nav">
          <div>
            <a className="nav-words inline-flex gap-x-2 " href="/">
              <Image 
                src="/assets/icons/home.svg"
                width={24}
                height={24}
                alt="home"
              />
              Home 
            </a>
          </div>
          <div className="flex justify-between gap-x-5">
            
            <a className="nav-words m-2" href={`/profile/${process.env.MAIN_ID}`}>
              Portfolio
            </a>
            <div className="sm:flex m-2">

              {status === "authenticated" ? <Dropdown/> : <LoginButton/>}

            </div>
          </div>
        
      </nav>
    </header>
  )
}

export default Navbar