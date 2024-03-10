import React from 'react'

const importAll = (context) => context.keys().reduce((acc, key) => {
    const imageKey = key.replace('./', '').replace(/\.(png|jpe?g|gif|svg)$/i, '');
    acc[imageKey] = context(key);
    return acc;
  }, {});
  
  const images = importAll(require.context('./', false, /\.(png|jpe?g|gif|svg)$/i));
  
  export default images;
  
