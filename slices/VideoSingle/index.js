import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import VideoComponent from "../../components/VideoComponent";

/**
 * @typedef {import("@prismicio/client").Content.VideoSingleSlice} VideoSingleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoSingleSlice>} VideoSingleProps
 * @param { VideoSingleProps }
 */
const VideoSingle = ({ slice }) => {
  return (
    <section className={`${slice?.primary?.fullwidth ? '' : ''} py-10 md:py-36`}>
        <div className={`${slice?.primary?.fullwidth ? '' : 'container'} flex flex-wrap justify-center`}>
          <VideoComponent
              vimeo_video={slice?.primary?.vimeo_video?.video_id ? 
                `https://player.vimeo.com/video/${slice?.primary?.vimeo_video?.video_id}` : null}
              vimeo_src={slice?.primary?.vimeo_video.html}
              video_link_url={slice?.primary?.video_link?.url || slice?.primary?.vimeo_video?.embed_url}
              loop={slice?.primary?.loop}
              mute_and_autoplay={slice?.primary?.mute_and_autoplay}
              controls={slice?.primary?.controls}
            />
        </div>
    </section>
  )
}

export default VideoSingle