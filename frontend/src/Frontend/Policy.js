import React from 'react';
import HandleNav from './Navigation';

const PrivacyPolicy = () => {
  return (
    <div className='privacy policy' id='privacy'>
      <HandleNav />
      <h1>Privacy Policy</h1>
      <p>
        At Greenify, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy explains how we collect, use, and disclose personal information in connection with our Forest Database Management System (the "System").
      </p>
      <h2>What Personal Information Do We Collect?</h2>
      <p>
        We collect the following types of personal information:
      </p>
      <ul>
        <li><strong>User Information:</strong> When you create an account, we collect your name, email address, and password.</li>
        <li><strong>Usage Data:</strong> We collect information about how you use the System, including the features you access, the frequency of your visits, and the duration of your sessions.</li>
        <li><strong>Device Information:</strong> We collect information about the device you use to access the System, including the device type, operating system, and browser type.</li>
      </ul>
      <h2>How Do We Use Your Personal Information?</h2>
      <p>
        We use your personal information for the following purposes:
      </p>
      <ul>
        <li><strong>To Provide the System:</strong> We use your personal information to provide you with access to the System and to ensure that it is functioning properly.</li>
        <li><strong>To Improve the System:</strong> We use your usage data to improve the System, including to identify areas for improvement and to develop new features.</li>
        <li><strong>To Communicate with You:</strong> We use your email address to communicate with you about the System, including to send you notifications and updates.</li>
        <li><strong>To Ensure Security:</strong> We use your personal information to ensure the security of the System, including to detect and prevent fraud and unauthorized access.</li>
      </ul>
      <h2>How Do We Share Your Personal Information?</h2>
      <p>
        We do not share your personal information with third parties, except in the following circumstances:
      </p>
      <ul>
        <li><strong>Service Providers:</strong> We may share your personal information with service providers who help us to operate the System, such as cloud hosting providers and payment processors.</li>
        <li><strong>Legal Requirements:</strong> We may share your personal information if we are required to do so by law, such as in response to a subpoena or court order.</li>
        <li><strong>Business Transfer:</strong> We may share your personal information in connection with a merger, acquisition, or sale of our business.</li>
      </ul>
      <h2>How Do We Protect Your Personal Information?</h2>
      <p>
        We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
      </p>
      <p>
      </p>
    </div>
  );
};

export default PrivacyPolicy;