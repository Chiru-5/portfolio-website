import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import ProjectCardGraphic from "./ProjectCardGraphic";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  link?: string;
  title?: string;
  category?: string;
  technologies?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const isExternalLink = Boolean(props.link && !props.link.startsWith("/"));

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const renderMedia = () => {
    if (props.title) {
      return (
        <ProjectCardGraphic
          title={props.title}
          category={props.category || "Project"}
          technologies={props.technologies || ""}
        />
      );
    }
    return <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />;
  };

  return (
    <div className="work-image">
      {props.link ? (
        isExternalLink ? (
          <a
            className="work-image-in"
            href={props.link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsVideo(false)}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor={"disable"}
            style={{ width: "100%" }}
          >
            <div className="work-link">
              <MdArrowOutward />
            </div>
            {renderMedia()}
            {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
          </a>
        ) : (
          <Link
            className="work-image-in"
            to={props.link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsVideo(false)}
            data-cursor={"disable"}
            style={{ width: "100%" }}
          >
            <div className="work-link">
              <MdArrowOutward />
            </div>
            {renderMedia()}
            {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
          </Link>
        )
      ) : (
        <div
          className="work-image-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          data-cursor={"disable"}
          style={{ width: "100%" }}
        >
          {renderMedia()}
          {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
