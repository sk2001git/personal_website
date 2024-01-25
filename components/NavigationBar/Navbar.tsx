"use client";
import Image from "next/image"
import { LoginButton } from "../auth/LoginButton"
import Dropdown from "./Dropdown"
import {useState } from "react";
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
            <a className="nav-words" href="/about">
              About Me 
            </a>
            <a className="nav-words" href="/portfolio">
              Portfolio
            </a>
            <div className="sm:flex ">

              {status === "authenticated" ? <Dropdown/> : <LoginButton/>}

            </div>
          </div>
        
      </nav>
    </header>
  )
}

export default Navbar