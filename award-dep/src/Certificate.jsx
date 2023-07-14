import React from 'react';

const Certificate = ({ certificate }) => {
  return (
    <div className="certificate">
      <img src={certificate.image} alt={certificate.title} />
      <h3>{certificate.title}</h3>
    </div>
  );
};

export default Certificate;
