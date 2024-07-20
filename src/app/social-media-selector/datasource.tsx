import classNames from "classnames";
import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaLinkedin
} from "react-icons/fa";
import { Option } from "./enums";
import style from "./styles.module.css";

export const DEFAULT_OPTION: Option = {
  name: "Social Media",
  Icon: () => <></>
};

export const SOCIAL_MEDIA_OPTIONS: Option[] = [
  {
    name: "Facebook",
    Icon: () => <FaFacebookSquare className={classNames(style.facebookIcon)} />
  },
  {
    name: "Twitter",
    Icon: () => <FaTwitter className={classNames(style.twitterIcon)} />
  },
  {
    name: "Youtube",
    Icon: () => <FaYoutube className={classNames(style.youtubeIcon)} />
  },
  {
    name: "Linkedin",
    Icon: () => <FaLinkedin className={classNames(style.linkedinIcon)} />
  }
];
