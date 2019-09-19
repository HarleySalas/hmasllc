import React, { useRef } from "react";

import "./MissionSection.scss";

import { useAnimateObserverOnce } from '../../utils';

const MissionSection = () => {
  const ref1 = useRef(null);

  const animated = useAnimateObserverOnce({
    itemRef: ref1
  })
  return (
    <section className={`mission ${animated && 'mission--animated'}`} ref={ref1}>
      <div className="container container--padding-3">
        <h2 className="mission__header">Mission Statement</h2>
        <p className="mission__text">
          Our mission is to do all of the things you hate to deal with when
          running a business so you can focus on what you love. You went into
          business because you found something you love to do and people were
          willing to pay you to do it. Don’t let the details of business
          ownership decrease how much you love doing what you do. HM Accounting
          Services will take all of the pesky business tasks off of your plate,
          allowing you to be more efficient and available for your clients.
        </p>
      </div>
    </section>
  );
};

export default MissionSection;
