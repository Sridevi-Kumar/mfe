import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {
      onNavigate: ({ pathname: nextpathname }) => {
        const { pathname } = history.location;
        if (pathname != nextpathname) {
          console.log(nextpathname)
          history.push(nextpathname)
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};


