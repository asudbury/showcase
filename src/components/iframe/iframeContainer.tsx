import React from 'react';

interface IFrameContainerProps {
  url: string;
}

export default function IframeContainer({
  url
}: IFrameContainerProps): JSX.Element {
  return (
    <div>
      <iframe
        src={url}
        height="800px"
        width="100%"
        frameBorder="0"
        title="iframe title"
        scrolling="yes"
      />
    </div>
  );
}
