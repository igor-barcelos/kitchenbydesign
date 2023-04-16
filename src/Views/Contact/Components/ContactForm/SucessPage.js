import React from 'react';

const SuccessPage = () => {

const handleReturnHome = () => {
    window.location.href = '/';
};
  return (
    <div>
      <h1>Email Sent Successfully</h1>
      <p>Thank you for contacting us. Your message has been sent successfully.</p>
      <button onClick={handleReturnHome}>Return</button>
    </div>
  );
};

export default SuccessPage;