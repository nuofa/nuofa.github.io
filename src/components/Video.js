import React, { Component } from 'react'
import styled from 'styled-components'

const Youtube = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  display: none;
  iframe {
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
    border: 0;
  }
}`

const script = `
<script>
  function showYoutube() {
    [].forEach.call(document.querySelectorAll('.youtube'), function(div) {
      var iframe = document.createElement('iframe');
      iframe.src = div.dataset.url;
      iframe.width = '420';
      iframe.height = '315';
      div.appendChild(iframe);
      div.style.display = 'block';
    });
  }

  var xhr = new XMLHttpRequest();
  xhr.timeout = 4000; // time in milliseconds
  xhr.open('GET', 'http://ip-api.com/json', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
        var json = JSON.parse(xhr.response);

        // Youtube is blocked!
        if (['Iran', 'China'].indexOf(json.country) > -1) {
          
        } else {
          showYoutube();
        }
      }
      else {
        showYoutube();
      }
  };
  xhr.ontimeout = function (e) {
    showYoutube();
  };
  xhr.send();
</script>
`

const Video = styled.video`
  width: 100%;
  height: auto;
`

export default class VideoComponent extends Component {

  render() {
    let youtube = null;
    if (this.props.youtube) {
      youtube = (
        <Youtube className='youtube' data-url={this.props.youtube}>
          Vide does not support
        </Youtube>
      )

      return (
        <div>
          {youtube}
          <div dangerouslySetInnerHTML={{__html: script}}></div>
        </div>
      )
    } else {
      return (
        <Video controls poster={this.props.poster}>
            {/* MP4 must be first for iPad! */}
            {this.props.mp4 && (<source src={this.props.mp4}  type="video/mp4" />)} {/* Safari / iOS, IE9  */}
            {this.props.webm && (<source src={this.props.webm} type="video/webm" />)}{/* Chrome10+, Ffx4+, Opera10.6+  */}
            {this.props.ogv && (<source src={this.props.ogv} type="video/ogg"  />)}{/* Firefox3.6+ / Opera 10.5+  */}
            {/* fallback to Flash:  */}
            <object width="640" height="360" type="application/x-shockwave-flash" data="/video/player.swf">
                {/* Firefox uses the `data` attribute above, IE/Safari uses the param below  */}
                <param name="movie" value="/video/player.swf" />
                <param name="flashvars" value={`controlbar=over&image=${this.props.poster}&file=/video/paypalbox.mp4`} />
                {/* fallback image  */}
                <img src={this.props.poster} width="640" height="360" alt="Big Buck Bunny" title="No video playback capabilities, please download the video below" />
            </object>
        </Video>
      )
    }

    
  }

}