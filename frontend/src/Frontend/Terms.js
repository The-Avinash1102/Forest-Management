import React from 'react';
import HandleNav from './Navigation';

const TermsOfService = () => {
  return (
    
    <div id='termsOfService' className='terms-main'>
      <div className="top-container">
        <div className="logo">
          <h1>Greenify</h1>
        </div>
        <HandleNav />
         </div>
      <div className='terms'>
      {/* <HandleNav /> */}
      <h1>Terms of Service</h1>
      <p>
        Last updated: 01-07-2024
      </p>
      <p>
        These Terms of Service govern your use of the Forest Database Management System provided by Greenify. By using the System, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the System.
      </p>
      <h3>1. Acceptance of Terms</h3>
      <p>
        By using the System, you acknowledge that you have read, understood, and agree to be bound by these Terms. These Terms may be updated from time to time, and it is your responsibility to review them regularly.
      </p>
      <h3>2. Use of the System</h3>
      <p>
        The System is provided solely for your use in managing forest data. You may not use the System for any other purpose, including but not limited to, commercial exploitation or resale.
      </p>
      <h3>3. Account Registration</h3>
      <p>
        To use the System, you must register for an account. You are responsible for maintaining the confidentiality and security of your account and password.
      </p>
      <h3>4. Content Ownership</h3>
      <p>
        You retain ownership of all data and content that you upload to the System. However, by uploading such data and content, you grant Greenify a non-exclusive, worldwide, royalty-free license to use, modify, and distribute such data and content solely for the purpose of providing the System.
      </p>
      <h3>5. Prohibited Use</h3>
      <p>
        You may not use the System to upload, post, or transmit any content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.
      </p>
      <h3>6. System Availability</h3>
      <p>
        Greenify will use reasonable efforts to ensure that the System is available 24/7, but we cannot guarantee that the System will be available at all times.
      </p>
      <h3>7. Warranty Disclaimer</h3>
      <p>
        The System is provided "as is" and "as available," without warranty of any kind, express or implied.
      </p>
      <h3>8. Limitation of Liability</h3>
      <p>
        In no event will Greenify be liable for any damages, including but not limited to, incidental, consequential, or punitive damages, arising out of the use or inability to use the System.
      </p>
      <h3>9. Governing Law</h3>
      <p>
        These Terms will be governed by and construed in accordance with the laws of Karnataka/India.
      </p>
      <h3>10. Changes to Terms</h3>
      <p>
        Greenify reserves the right to modify or update these Terms at any time without notice.
      </p>
      <p>
        If you have any questions about these Terms, please contact us at <span onClick={{mail}}>info@forestmanagement.com</span>
      </p>
      </div>
    </div>
  );
};

export default TermsOfService;