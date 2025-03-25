import React from 'react';

const GoogleMap = () => {
  return (
    <div className='GoogleMap'>
      <iframe
        style={{ border: 0  }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=31.6854541,-8.0566502&output=embed"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;