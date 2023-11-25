// Loading.js
import React, { useEffect, useState } from 'react';

const Loading = ({ loadingDelayHidden }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementCounterImgs = () => {
      setLoading(false);
    };

    const hideLoading = () => {
      setLoading(false);
    };

    const init = () => {
      const loadingElement = document.querySelector('.loading');
      const imgs = Array.from(document.images);

      if (imgs.length === 0) {
        hideLoading();
      } else {
        imgs.forEach((img) => {
          img.addEventListener('load', incrementCounterImgs, false);
        });
      }
    };

    document.addEventListener('DOMContentLoaded', init);

    return () => {
      document.removeEventListener('DOMContentLoaded', init);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, loadingDelayHidden);

    return () => clearTimeout(timer);
  }, [loadingDelayHidden]);

  return loading ? (
    <div className="loading show">
      <div className="spin"></div>
    </div>
  ) : null;
};

export default Loading;
