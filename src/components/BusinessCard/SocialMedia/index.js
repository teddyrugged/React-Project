import React from 'react'
// import './'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
export const SocialMedia = () => {
  return (
    <div className='icon' style={{background:'#161619'}}>
      <FaFacebookF className="fb" />
      <FaTwitter className="tw" />
      <FaLinkedinIn className="li" />
      <FaGithubSquare className="gh" />
    </div>
  )
}
