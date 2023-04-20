import React from "react";
import classes from "./ClothesSummary.module.css";

const ClothesSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Mark M</h2>
      <p>마크엠은 음악의 한 장르인 Lo-Fi처럼,</p>
      <p>
        날 것의 신선함을 편안하고 감각적으로 풀어내 과하지 않은 새로운 차원의
        힙(Hip)한 스타일을 제안합니다.
      </p>
    </section>
  );
};

export default ClothesSummary;
