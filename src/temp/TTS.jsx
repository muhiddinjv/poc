import React, { useMemo } from "react";
import Speech from "react-text-to-speech";

function NewsItem({ title, desc }) {
  const text = useMemo(
    () => (
      <>
        <h4 style={{ margin: 0 }}>{title}</h4>
        <div style={{ marginBottom: "0.5rem" }}>{desc}</div>
      </>
    ),
    [title, desc],
  );
  return (
    <div>
      {text}
      <Speech text={text} pitch={1.5} rate={2} voiceURI="Microsoft Heera - English (India)">
        {({ speechStatus, isInQueue, start, pause, stop }) => (
          <div style={{ display: "flex", columnGap: "0.5rem" }}>
            {speechStatus !== "started" ? <button onClick={start}>Start</button> : <button onClick={pause}>Pause</button>}
            <button onClick={stop}>Stop</button>
          </div>
        )}
      </Speech>
    </div>
  );
}

export default function TTS() {
  // 'news' holds response from some News API
  const news = [
    { id: "1", title: "First random title.", desc: "First random description." },
    { id: "2", title: "Second random title.", desc: "Second random description." },
    { id: "3", title: "Third random title.", desc: "Third random description." },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
      {news.map(({ id, title, desc }) => (
        <NewsItem key={id} title={title} desc={desc} />
      ))}
    </div>
  );
}