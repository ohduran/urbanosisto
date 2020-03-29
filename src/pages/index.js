import React from "react";
import '../styles/index.css';
import Layout from '../components/Layout';
import Pexels_Videos_2180924 from '../videos/Pexels_Videos_2180924.mp4'
import jess_harper_sunday_O1DhTK0_1iQ_unsplash from '../images/jess-harper-sunday-O1DhTK0_1iQ-unsplash.jpg'

export default class extends React.Component {

    // componentDidMount (props) {
    //   var vid = document.getElementById("bgvid");
    //
    //   if (window.matchMedia('(prefers-reduced-motion)').matches) {
    //       vid.removeAttribute("autoplay");
    //       vid.pause();
    //   }
    //
    //   function vidFade() {
    //     vid.classList.add("stopfade");
    //   }
    //
    //   vid.addEventListener('ended', function()
    //   {
    //   // only functional if "loop" is removed
    //   vid.pause();
    //   // to capture IE10
    //   vidFade();
    //   });
    // }

  render () {
    return (
      <Layout>
        {/*
        <video poster={jess_harper_sunday_O1DhTK0_1iQ_unsplash} id="bgvid" playsInLine autoPlay muted loop>
          <source src={Pexels_Videos_2180924} type="video/mp4" />
        </video>
        */}
      </Layout>
    )
  }
}
