import React from "react";
import NavBar from "../components/organisms/NavBar";
import '../App.css';
import '../index.css';
import ContactMeDesktopContactPage from "../components/molecules/ContactMeDesktopContactPage";
import FooterDesktop from "../components/molecules/FooterDesktop";

export default function Contact() {
  return (
    <>
    <div className="">
      <header className="">
      <NavBar/>

      </header>
    </div>
    <ContactMeDesktopContactPage/> 
    <FooterDesktop/>
    </>
    
  );
}