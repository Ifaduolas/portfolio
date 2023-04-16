import React from "react"
import "./style.css"
import { FaGithub, FaTwitter, FaFacebookF, FaLinkedin} from "react-icons/fa"
import {BsDiscord, BsInstagram} from "react-icons/bs"
//import { socialprofils } from "../../content_option";

export const Socialicons = () => {
    return(
        <div className="stick_follow_icon">
            <ul>
                <li>
                    <a href="/">
                        <FaTwitter/>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FaGithub/>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FaLinkedin/>
                    </a>
                </li>

                <li>
                    <a href="/">
                        <BsInstagram/>
                    </a>
                </li>
                
                <li>
                    <a href="/">
                        <FaFacebookF/>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <BsDiscord/>
                    </a>
                </li>
            </ul>
            <p>Follow Me</p>
        </div>
    );
};