import * as React from "react";

const ContestPreview: React.FC<{
  contest: object;
  onClick: any;
}> = ({ contest, onClick }) => {
  // const ContestPreview: any = ({ contest }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(contest.id);
  };

  return (
    <div className="contest-preview link" onClick={handleClick}>
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestPreview;
