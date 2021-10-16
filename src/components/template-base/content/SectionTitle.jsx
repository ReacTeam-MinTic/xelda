import React from "react";

const SectionTitle = ({subtitle, subtitletag}) => {
  return (
    <>
      <h2 className="section-title">{subtitle}</h2>
      <p className="section-lead">
        {subtitletag}
      </p>
    </>
  );
};

export default SectionTitle;
