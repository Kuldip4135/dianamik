const faqs = [
  {
    question:
      "What are the mandatory licenses required to start a hospital in India?",
    answer: `
      To start a hospital in India, the following licenses and registrations are generally mandatory:
      <ul>
        <li>Clinical Establishment Registration (State Act / CEA Act)</li>
        <li>Trade License from Local Municipal Authority</li>
        <li>Fire Safety NOC</li>
        <li>Biomedical Waste (BMW) Authorization</li>
        <li>Pollution Control Board Consent (CTE/CTO, as applicable)</li>
        <li>Shop & Establishment Registration</li>
        <li>Professional Tax Registration</li>
        <li>PAN, TAN, and GST (if applicable)</li>
      </ul>
      Additional licenses depend on bed strength, specialty services, equipment, and state-specific regulations.
    `,
  },
  {
    question:
      "Is Clinical Establishment (CEA) registration compulsory for hospitals?",
    answer: `
      Yes. Clinical Establishment registration is compulsory under:
      <ul>
        <li>Clinical Establishments Act, or</li>
        <li>Relevant State Clinical Establishment Acts</li>
      </ul>
      It applies to hospitals, nursing homes, clinics, and diagnostic centres. Registration must be obtained before starting operations and renewed as per state rules.
    `,
  },
  {
    question:
      "What is Biomedical Waste (BMW) authorization and why is it required?",
    answer: `
      Biomedical Waste authorization is issued by the State Pollution Control Board. It ensures:
      <ul>
        <li>Safe segregation, storage, transportation, and disposal of waste</li>
        <li>Compliance with BMW Management Rules, 2016</li>
        <li>Prevention of environmental and public health hazards</li>
      </ul>
    `,
  },
  {
    question: "Does a hospital require Pollution Control Board (PCB) consent?",
    answer: `
      Yes. PCB consent depends on:
      <ul>
        <li>Total bed strength</li>
        <li>Type of services (OT, ICU, dialysis, imaging, etc.)</li>
      </ul>
      Typically required:
      <ul>
        <li>Consent to Establish (CTE) before setup</li>
        <li>Consent to Operate (CTO) before commencing services</li>
      </ul>
      Small clinics may be treated differently depending on state rules.
    `,
  },
  {
    question: "Is Fire Safety NOC mandatory for hospitals?",
    answer: `
      Yes. Hospitals fall under high-risk buildings and require approval from the State Fire Department to ensure:
      <ul>
        <li>Adequate fire exits</li>
        <li>Firefighting equipment</li>
        <li>Emergency evacuation plans</li>
      </ul>
      It must be renewed regularly, and fire drills are required.
    `,
  },
  {
    question: "What is the role of NABH accreditation in hospital compliance?",
    answer: `
      NABH accreditation is optional but beneficial. It:
      <ul>
        <li>Demonstrates quality and patient safety standards</li>
        <li>Increases patient confidence</li>
        <li>Supports insurance tie-ups</li>
        <li>Strengthens documentation and legal preparedness</li>
      </ul>
    `,
  },
  {
    question: "Is NABH accreditation required for insurance empanelment?",
    answer: `
      NABH is not legally compulsory, but many TPAs and insurers prefer it, especially for:
      <ul>
        <li>Cashless services</li>
        <li>Government schemes</li>
        <li>Corporate empanelment</li>
      </ul>
      Entry-Level NABH is often accepted as a minimum benchmark.
    `,
  },
  {
    question: "What licenses are required for ICU and critical care services?",
    answer: `
      Hospitals offering ICU services may require:
      <ul>
        <li>Approval for ICU bed strength</li>
        <li>Qualified full-time specialists</li>
        <li>Valid BMW authorization</li>
        <li>Fire NOC with ICU safety compliance</li>
        <li>Proper ICU equipment (ventilators, monitors, oxygen supply)</li>
        <li>Electrical safety and backup power arrangements</li>
      </ul>
      Incorrect representation of ICU facilities may result in penalties.
    `,
  },
  {
    question: "Are diagnostic centers required to obtain separate licenses?",
    answer: `
      Yes. Required approvals include:
      <ul>
        <li>Clinical Establishment Registration</li>
        <li>Pollution Control Board approval (especially imaging centers)</li>
        <li>AERB approval for X-ray, CT, mammography</li>
        <li>Biomedical Waste authorization</li>
        <li>Fire Safety NOC (if applicable)</li>
      </ul>
      MRI units have additional safety and zoning requirements.
    `,
  },
  {
    question: "What is AERB approval and who needs it?",
    answer: `
      AERB approval is mandatory for facilities using radiation equipment such as:
      <ul>
        <li>X-ray</li>
        <li>CT Scan</li>
        <li>Mammography</li>
        <li>Fluoroscopy</li>
      </ul>
      It ensures radiation safety for patients and staff.
    `,
  },
  {
    question: "Is renewal of hospital licenses mandatory?",
    answer: `
      Yes. Licenses requiring renewal include:
      <ul>
        <li>PCB Consent</li>
        <li>Trade License</li>
        <li>Clinical Establishment Registration</li>
        <li>Fire Safety NOC</li>
        <li>BMW Authorization</li>
      </ul>
      Failure to renew may lead to penalties, suspension of services, or legal action.
    `,
  },
  {
    question: "Can a hospital operate without all licenses in place?",
    answer: `
      No. Operating without mandatory licenses is illegal and may result in:
      <ul>
        <li>Sealing of premises</li>
        <li>Monetary penalties</li>
        <li>Legal prosecution</li>
        <li>Rejection from NABH and insurance empanelment</li>
      </ul>
    `,
  },
  {
    question: "Why is regulatory compliance important for hospitals?",
    answer: `
      Regulatory compliance ensures:
      <ul>
        <li>Patient safety</li>
        <li>Legal protection</li>
        <li>Ethical medical practice</li>
        <li>Smooth insurance and government scheme empanelment</li>
        <li>Long-term sustainability</li>
      </ul>
      Non-compliance increases operational, legal, and reputational risks.
    `,
  },
  {
    question: "Can hospitals outsource compliance management?",
    answer: `
      Yes. Hospitals often engage consultancy firms for:
      <ul>
        <li>Licensing support</li>
        <li>NABH/NABL accreditation</li>
        <li>Documentation</li>
        <li>Regulatory audits</li>
        <li>Renewal tracking</li>
      </ul>
    `,
  },
  {
    question:
      "Do small clinics and day care centers need the same licenses as hospitals?",
    answer: `
      No. Requirements vary depending on:
      <ul>
        <li>Invasive procedures</li>
        <li>Bed strength</li>
        <li>Imaging or laboratory services</li>
      </ul>
      However, minimum registrations such as Clinical Establishment and BMW authorization are usually mandatory.
    `,
  },
];
