import React from "react";

export default function LivePage(props) {
    const { live_id } = props.location.state;

    return (
        <div>
            <iframe
                title="transmission"
                allowFullScreen
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                src={`https://www.youtube.com/embed/${live_id}`}
                frameBorder="0"
            />
        </div>
    );
}