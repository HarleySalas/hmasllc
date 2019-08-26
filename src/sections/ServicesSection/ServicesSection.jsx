import React from "react";

import "./ServicesSection.scss";

import ServiceCard from "./ServiceCard/ServiceCard.jsx";

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="container container--padding-5 services__container">
        <h2 className="services__heading">Services</h2>
        <ServiceCard
          icon="book-open"
          name="Bookkeeping"
          description="Monthly, quarterly and yearly bookkeeping services."
          content="We provide Monthly, Quarterly, & Yearly bookkeeping services. All transactions will be categorized properly to right expense or sales accounts. Provide monthly Profit & Loss & Balance Sheet reports."
        />
        <ServiceCard
          icon="calendar-check"
          name="Payroll"
          description="Worry-free payroll which is on-time, every-time."
          content={
            <ul>
              <li className="service__card__modal__li">
                Your payroll checks prepared or sent on-time, every-time.
              </li>
              <li className="service__card__modal__li">
                Worry Free IRS and State tax reporting as well as EFTPS tax
                deposits.
              </li>
              <li className="service__card__modal__li">
                Prepare easy to understand monthly, quarterly, and annual
                payroll tax reports, including W-2, W-3 and 1099 forms.
              </li>
              <li className="service__card__modal__li">
                Creation and filing of the required new hire reports.
              </li>
              <li className="service__card__modal__li">
                Your payroll records maintained in tip top shape.
              </li>
            </ul>
          }
        />
        <ServiceCard
          icon="percentage"
          name="Sales Tax Reporting"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc aliquet bibendum enim facilisis gravida neque. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Cursus in hac habitasse platea dictumst. At risus viverra adipiscing at in. Semper auctor neque vitae tempus quam pellentesque nec nam. Pharetra convallis posuere morbi leo urna molestie at."
        />
        <ServiceCard
          icon="building"
          name="Opening A Company"
          description="We will prepare and file all necessary documents."
          content={
            <ul>
              <li className="service__card__modal__li">
                Prepare and file all required state filing
              </li>
              <li className="service__card__modal__li">
                Prepare and file your application for your Federal Employer
                Identification Number.
              </li>
              <li className="service__card__modal__li">
                Prepare and file all necessary forms for the type of entity
              </li>
            </ul>
          }
        />
        <ServiceCard
          icon="university"
          name="Bank Reconciliation"
          description="Keeping your bank account, accounting, and taxes up-to-date."
          content={
            <div>
              <p>
                Reconciling your business checking account each month allow us
                to keep your bank account, accounting, and taxes up-to-date.
              </p>
              <br />
              <p>Having us reconcile your account each month allows you to…</p>
              <ul>
                <li className="service__card__modal__li">
                  Identify lost checks, lost deposits and unauthorized wire
                  transactions.
                </li>
                <li className="service__card__modal__li">
                  Detect and prevent excess/unjustified bank charges and ensures
                  transactions are posted correctly by your bank.
                </li>
                <li className="service__card__modal__li">
                  Detect and prevent embezzlement of funds from within your
                  company.
                </li>
                <li className="service__card__modal__li">
                  Know how your business is doing? You can’t really know unless
                  all accounts are reconciled and properly accounted for on your
                  financial statement.
                </li>
                <li className="service__card__modal__li">
                  Protect yourself. By timely reconciling and promptly objecting
                  to your bank about any unauthorized, fraudulent or forged
                  checks presented to your bank and paid by that bank, you can
                  relieve your agency of responsibility for the shortfall and
                  transfer the risk to the bank. This reason to reconcile alone
                  should be enough. Crime exists.
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default ServicesSection;
