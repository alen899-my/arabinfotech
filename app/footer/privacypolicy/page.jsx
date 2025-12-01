import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full min-h-screen bg-white selection:bg-[#ae5c83] selection:text-white">
      
      {/* --- FIXED PINK BANNER --- */}
      <div className="fixed top-20 left-0 w-full bg-[#ae5c83] py-3 md:px-10 z-20 shadow-lg border-b border-[#924b6d]">
        <div className="max-w-[1280px] mx-auto w-full px-6">
          <h1 className="momo-font text-white text-lg sm:text-xl md:text-2xl font-semibold uppercase mb-1">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-[10px] sm:text-xs md:text-sm tracking-wide uppercase">
            Last Updated: November 30, 2025
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-5xl mx-auto px-6 pb-15 pt-[180px] md:pt-[200px]">
        <div className="text-gray-800 text-sm md:text-base leading-7 text-justify space-y-4">
          
          {/* INTRODUCTION */}
          <section className="space-y-4">
            {/* Main Lead Paragraph */}
            <p className="roboto-text">
              This Privacy Policy is on behalf of <strong>AIT INFORMATION TECHNOLOGY L.L.C / trading as ARABINFOTEC</strong>.
            </p>

            {/* Nested Sub-Points (1, 2, 3) with Left Spacing */}
            <ol className="list-decimal pl-8 md:pl-12 space-y-4 roboto-text marker:text-gray-600 font-medium text-gray-700">
              <li className="pl-2">
                <span className="font-normal text-gray-800">
                  References to ‘ ARABINFOTEC’ or ‘ arabinfotechllc.com’ are references to the AIT INFORMATION TECHNOLOGY L.L.C / trading as ARABINFOTEC, registered in the UAE, and whose registered office is at Dubai, UAE. ARABINFOTEC maintains this website (www.arabinfotechllc.com).
                </span>
              </li>
              <li className="pl-2">
                <span className="font-normal text-gray-800">
                  This policy applies only to activities that ARABINFOTEC engages in on its website (www.arabinfotechllc.com) and does not apply to ARABINFOTEC activities that are "offline" or unrelated to the website. arabinfotechllc.com collects certain anonymous data regarding the usage of the website. This information does not personally identify users, by itself or in combination with other information, and is gathered to improve the performance of the website. The anonymous data collected by the arabinfotechllc.com website can include information such as the type of browser you are using, and the length of the visit to the website.
                </span>
              </li>
              <li className="pl-2">
                <span className="font-normal text-gray-800">
                  You may also be asked to provide personally identifiable information on the arabinfotechllc.com website, which may include your name, telephone number, and e-mail address. This information can be gathered when feedback or e-mails are sent to arabinfotechllc.com when you register for services or make purchases via the website. In all such cases, you have the option of providing us with personally identifiable information.
                </span>
              </li>
            </ol>
          </section>

          {/* 1. USE AND DISCLOSURE OF INFORMATION */}
          <section>
            <h2 className="momo-font text-xl text-[#ae5c83] font-bold uppercase mb-2 md:mb-4 border-b border-gray-200 pb-2 tracking-normal text-left">
               USE AND DISCLOSURE OF INFORMATION
            </h2>
            <p className="mb-4 roboto-text">
              Except as otherwise stated below, we do not sell, trade, or rent your personally identifiable information collected on the site to others. The information collected by our site is used to process ARABINFOTEC memberships, to keep you informed about your order status, to notify you of products or special offers that may be of interest to you, and for statistical purposes for improving our site.
            </p>
            <p className="roboto-text">
              We will only disclose your membership details to third parties for tracking purposes or process your membership, as appropriate, to improve the functionality of our site, perform statistical and data analyses and deliver promotional emails to you from us.
            </p>
          </section>

          {/* 2. PAYMENT INFORMATION */}
          <section>
            <h2 className="momo-font text-xl text-[#ae5c83] font-bold uppercase mb-2 md:mb-4 border-b border-gray-200 pb-2 tracking-normal text-left">
              PAYMENT INFORMATION
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-[#ae5c83] roboto-text">
              <li>
                All credit and debit card details and other similar personally identifiable information will <strong>NOT</strong> be stored, sold, shared, rented, or leased to any third parties.
              </li>
            </ul>
          </section>

          {/* COOKIES */}
          <section>
            <h2 className="momo-font text-xl text-[#ae5c83] font-bold uppercase mb-2 md:mb-4 border-b border-gray-200 pb-2 tracking-normal text-left">
              COOKIES
            </h2>
            <p className="mb-4 roboto-text">
              Cookies are small bits of data cached in a user’s browser. arabinfotechllc.com utilizes cookies to determine whether or not you have visited the home page in the past. However, no other user information is gathered.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-[#ae5c83] roboto-text">
              <li>
                arabinfotechllc.com may use non-personal "aggregated data" to enhance the operation of our website or analyze interest in the areas of our website. Additionally, if you provide arabinfotechllc.com with content for publishing or feedback, we may publish your user name or other identifying data with your permission.
              </li>
              <li>
                arabinfotechllc.com may also disclose personally identifiable information in order to respond to a subpoena, court order, or other such requests. arabinfotechllc.com may also provide such personally identifiable information in response to a law enforcement agency request or as otherwise required by law.
              </li>
              <li>
                Your personally identifiable information may be provided to a party if ARABINFOTEC files for bankruptcy, or there is a transfer of the assets or ownership of arabinfotechllc.com in connection with proposed or consummated corporate reorganizations, such as mergers or acquisitions.
              </li>
            </ul>
          </section>

          {/* 3. SECURITY */}
          <section>
            <h2 className="momo-font text-xl text-[#ae5c83] font-bold uppercase mb-2 md:mb-4 border-b border-gray-200 pb-2 tracking-normal text-left">
               SECURITY
            </h2>
            <p className="roboto-text">
              arabinfotechllc.com takes appropriate steps to ensure data privacy and security including through various hardware and software methodologies. However, arabinfotechllc.com cannot guarantee the security of any information that is disclosed online.
            </p>
          </section>

          {/* 4. OTHER WEBSITES */}
          <section>
            <h2 className="momo-font text-xl text-[#ae5c83] font-bold uppercase mb-2 md:mb-4 border-b border-gray-200 pb-2 tracking-normal text-left">
            OTHER WEBSITES
            </h2>
            <p className="mb-4 roboto-text">
              arabinfotechllc.com is not responsible for the privacy policies of websites to which it links. If you provide any information to such third parties different rules regarding the collection and use of your personal information may apply. We strongly suggest you review such third party’s privacy policies before providing any data to them. We are not responsible for the policies or practices of third parties.
            </p>
            <p className="roboto-text">
              Please be aware that our sites may contain links to other sites on the Internet that are owned and operated by third parties. The information practices of those Web sites linked to our site are not covered by this Policy. These other sites may send their own cookies or clear GIFs to users, collect data or solicit personally identifiable information. We cannot control this collection of information. You should contact these entities directly if you have any questions about their use of the information that they collect.
            </p>
          </section>

          {/* MINORS */}
          <section>
            <h2 className="momo-font text-xl text-[#ae5c83] font-bold uppercase mb-2 md:mb-4 border-b border-gray-200 pb-2 tracking-normal text-left">
              MINORS
            </h2>
            <p className="roboto-text">
              arabinfotechllc.com does not knowingly collect personal information from minors under the age of 18. Minors are not permitted to use the arabinfotechllc.com website or services, and arabinfotechllc.com requests that minors under the age of 18 not submit any personal information to the website. Since information regarding minors under the age of 18 is not collected, arabinfotechllc.com does not knowingly distribute personal information regarding minors under the age of 18.
            </p>
          </section>

          {/* CORRECTIONS AND UPDATES */}
          <section>
            <h2 className="momo-font text-xl text-[#ae5c83] font-bold uppercase mb-2 md:mb-4 border-b border-gray-200 pb-2 tracking-normal text-left">
              CORRECTIONS AND UPDATES
            </h2>
            <p className="roboto-text">
              If you wish to modify or update any information arabinfotechllc.com has received, please contact visit your nearest ARABINFOTEC location for assistance.
            </p>
          </section>

          {/* MODIFICATIONS OF THE PRIVACY POLICY */}
          <section>
            <h2 className="momo-font text-xl text-[#ae5c83] font-bold uppercase mb-2 md:mb-4 border-b border-gray-200 pb-2 tracking-normal text-left">
              MODIFICATIONS OF THE PRIVACY POLICY
            </h2>
            <p className="roboto-text">
              The Website Policies and Terms & Conditions would be changed or updated occasionally to meet the requirements and standards. Therefore the Customers’ are encouraged to frequently visit these sections in order to be updated about the changes on the website. Modifications will be effective on the day they are posted.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;