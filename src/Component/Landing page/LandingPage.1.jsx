import { useState } from "react";
import Button from "../button/Button";
import Content from "../content/Content";
import Heading from "../heading/Heading";
import Input from "../input/Input";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import ImgOne from "../../Assets/images/tv.png";
import ImgTwo from "../../Assets/images/strangeThings.jpg";
import ImgThree from "../../Assets/images/tvImg2.png";
import ImgFour from "../../Assets/images/children.png";
import VideoOne from "../../Assets/videos/tvVideo1.m4v";
import VideoTwo from "../../Assets/videos/tvVideo2.m4v";
import Accordion from "../accordion/Accordion";

export const LandingPage = () => {
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <div>
      <div className="main-banner">
        <Navbar />
        <div className="main-title">
          <Heading
            font="extra-large"
            title="Unlimited movies, TV shows and more"
          />
          <Content
            size="large"
            color="white"
            content="Starts at ₹149. Cancel anytime."
          />
          <Content
            size="extra-small"
            color="white"
            content="Ready to watch? Enter your email to create or restart your membership."
          />
          <div className="email-box">
            <Input
              size="larger"
              bg="bg-transparent"
              label="email address"
              color="white"
              content="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              content="Get Started"
              size="getstarted"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
      <div className="whole-banner">
        <div className="banner">
          <div className="content-contain">
            <Heading
              title={"Enjoy on your TV"}
              size="extra-large"
              color="white"
            />
            <Content
              color="white"
              size="small"
              content="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            />
          </div>
          <Banner
            video={VideoOne}
            vidSize="small-video"
            img={ImgOne}
            imgSize="img-one"
          />
        </div>
        <div className="banner">
          <Banner img={ImgTwo} imgSize="img-two" />
          <div className="content-contain">
            <Heading
              title={"Download your shows to watch offline"}
              size="extra-large"
              color="white"
            />
            <Content
              color="white"
              size="small"
              content="Save your favourites easily and always have something to watch. "
            />
          </div>
        </div>
        <div className="banner">
          <div className="content-contain">
            <Heading
              title={"Watch everywhere"}
              size="extra-large"
              color="white"
            />
            <Content
              color="white"
              size="small"
              content="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV. "
            />
          </div>
          <Banner
            video={VideoTwo}
            vidSize="second-video"
            img={ImgThree}
            imgSize="img-three"
          />
        </div>
        <div className="banner">
          <div className="image-four">
            <Banner img={ImgFour} imgSize="img-four" />
          </div>
          <div className="content-contain">
            <Heading
              title={"Create profiles for kids"}
              color="white"
              size="extra-large"
            />
            <Content
              color="white"
              size="small"
              content="Send children on adventures with their favourite characters in a space made just for them—free with your membership. "
            />
          </div>
        </div>
      </div>
      <div className="faqs">
        <Heading Content="Frequetly Asked Questions" />
        <Accordion />
      </div>
    </div>
  );
};
