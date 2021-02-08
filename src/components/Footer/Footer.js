import React from "react";

import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";
import PlaylistPlayRoundedIcon from "@material-ui/icons/PlaylistPlayRounded";
import Slider from "@material-ui/core/Slider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import Grid from "@material-ui/core/Grid";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* left */}
      <div className="footer_left">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfc3flBMkl_pokprRIPVzb3eIbH7SWFXnTaA&usqp=CAU"
          alt="song_image"
        />
        <div className="footer_song_info">
          <h4>Thinking out Loud</h4>
          <p>Ed sheran</p>
        </div>
      </div>
      {/* center */}
      <div className="footer_center">
        <ShuffleIcon className="footer_icon" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleFilledIcon className="footer_icon" fontSize="large" />
        <SkipNextIcon className="footer_icon" />
        <RepeatRoundedIcon className="footer_icon" />
      </div>
      {/* right */}
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <VolumeUpOutlinedIcon />
          </Grid>
          <Grid item>
            <PlaylistPlayRoundedIcon />
          </Grid>
          <Grid item xs>
            <Slider defaultValue={30} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
