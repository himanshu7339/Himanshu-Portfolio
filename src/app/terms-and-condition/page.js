import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-white text-gray-900 leading-relaxed">
      <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-2">Last updated: August 24, 2025</p>
      <p className="mb-6">
        Please read these terms and conditions carefully before using Our Service.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Interpretation and Definitions</h2>
      <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
      <p className="mb-4">
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </p>
      <h3 className="text-xl font-semibold mb-2">Definitions</h3>
      <p className="mb-4">For the purposes of these Terms and Conditions:</p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
        <li><strong>Country</strong> refers to: Delhi, India</li>
        <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Himanshudm.</li>
        <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
        <li><strong>Service</strong> refers to the Website.</li>
        <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
        <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
        <li><strong>Website</strong> refers to Himanshudm, accessible from <a href="https://www.himanshudm.pro/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.himanshudm.pro/</a></li>
        <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Acknowledgment</h2>
      <p className="mb-6">
        These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
      </p>

      <p className="mb-6">
        Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
      </p>

      <p className="mb-6">
        By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
      </p>

      <p className="mb-6">
        You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
      </p>

      <p className="mb-6">
        Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Links to Other Websites</h2>
      <p className="mb-6">
        Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
      </p>
      <p className="mb-6">
        The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
      </p>
      <p className="mb-6">
        We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
      </p>

      {/* Add the rest of the sections similarly, keeping spacing and headings consistent */}

      <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      <p>
        If you have any questions about these Terms and Conditions, You can contact us:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          By visiting this page on our website: <a href="https://www.himanshudm.pro/contact" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.himanshudm.pro/contact</a>
        </li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
