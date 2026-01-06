# Conditions for Enhanced Funding (CEF) Tips & Best Practices

## General
- Typically, there is no need to perform separate demonstrations or develop slides for CEFs during the reviews. Providing the appropriate evidence and accounting for discussion time on the review agenda for additional questions from CMS is sufficient. Files uploaded to CMS designated repository as evidence for CEFs should not be redacted. This includes, but is not limited to, security risk assessments, penetration tests, screenshots, or reports that include Protected Health Information (PHI) and Personally Identifiable Information (PII).
-	The CEF tab of the Intake Form must be fully completed for both the Operational Readiness Review (ORR) and Certification Review (CR). However, if certain CEF requirements are met during the ORR, the state does not need to go over them during CR, unless there are significant changes to the system or a large time-lapse between ORR and CR (i.e., this may include an annual Disaster Recovery (DR) test or the biennial assessment provision).
-	Not every CEF requirement will apply to every system. For example, CEF 17 is related to Eligibility and Enrollment systems and does not apply to a Provider Management module. In this scenario, a state would mark the CEF as “Not Applicable” in the Intake Form and provide a brief explanation as to why the state believes the CEF is not applicable to their system.
-	The term “reporting” either refers to internal quality management, performance reporting, or federal reports (e.g., CMS-37, CMS-64, T-MSIS). In all instances, the system should improve reporting wherever possible in comparison to previous reporting efforts. In addition, the state maintains complete and accurate historical T-MSIS data for program evaluation and the continuous improvement of business operations. The state can demonstrate that data quality issues are meeting the targets for Outcomes Based Assessment (OBA) critical priority data quality checks, high priority data quality checks, and the expenditure data content category. The state should also demonstrate they are working in good faith to resolve issues identified during the file submissions. Generally, CMS will consider the state out of compliance with T-MSIS requirements if it is not meeting the targets for OBA criteria in critical priority data quality checks, high priority data quality checks, and the expenditure data content category and/or the state is not working in good faith to resolve any identified data quality issues. The state must meet all requirements outlined in the T-MSIS Reporting - Standard Operating Procedures (SOP) for any Large System Enhancements (LSEs) affecting T-MSIS reporting.

## Artifacts
-	As shown in the CEF Example Evidence column, 
    -	The most common artifacts for security related CEF are third-party penetration test results, security/privacy assessment report, and plan of action and milestones (POA&M).
    -	The most common artifacts for the non-security-related CEF are typically the APD (AoA and CBA), SS-A, vendor contracts, system design documents, 508 test results, T-MSIS concurrence, ConOps, Disaster Recovery Plans, and Disaster Recovery Test Report.

## System Architecture
-	States must show how open architecture and vendor communication allows the system to continue performing in a plug-and-play manner despite potential vendor turnover.
-	States should provide a systems diagram that explains its architecture and the interaction between various aspects of the overarching MES ecosystem to demonstrate the larger system structure and how business areas communicate.

## Using Contracts and APDs
-	Certain sections of contractual language with vendors typically contain system cost, leveraging current system functionality, and ownership information. Many times, states do not own the software, although they do own the data and bring that to the vendors; subscription fees are paid to vendors and are documented down to the line level in the APD. The state will need to discuss if the costs are appropriate for the implementation and ensure a data use agreement (DUA) is in place.
-	Certain sections of contractual language from the APD typically contain system cost, leveraging current system functionality, and ownership of data.

## ConOps
-	A Concept of Operations (ConOps) is a user-oriented document that “describes systems characteristics for a proposed system from a user’s perspective. A ConOps also describes the user organization, mission, and objectives from an integrated systems point of view and is used to communicate overall quantitative and qualitative system characteristics to stakeholders.” ConOps documents "should be updated periodically" to reflect evolving situations in the system.[^1]
-	A ConOps “describes the proposed system in terms of the user needs it will fulfill, its relationship to existing systems or procedures, and the ways it will be used. ConOps can be tailored for many purposes, for example, to obtain consensus among the acquirer, developers, supporters, and user agencies on the operational concept of a proposed system. Additionally, a ConOps may focus on communicating the user’s needs to the developer or the developer’s ideas to the user and other interested parties.”[^2]

## Security and Privacy
The Conditions for Enhanced Funding under 42 CFR 433.112(b), specifically CEF 9, 12, and 18, encompass privacy and security requirements. Please see the [Privacy & Security]({{site.baseurl}}/Conditions for Enhanced Funding/Security and Privacy/) page for additional tips and FAQs for CEF 9, 12, and 18. 

## Additional Resources
- [SMC Guidance](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf)
- [Transformed Medicaid Statistical Information System (T-MSIS)](https://www.medicaid.gov/medicaid/data-systems/macbis/transformed-medicaid-statistical-information-system-t-msis/index.html)
- [Section 508 Guidance](https://www.section508.gov/test)
- [Accessibility Guidance](https://guides.18f.org/accessibility/)

## References
- [28 CFR Part 35](https://www.ecfr.gov/current/title-28/chapter-I/part-35)
- [42 C.F.R. § 433.112](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.112)
- [42 C.F.R. § 433.116](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.116)
- [45 C.F.R. § 164.308](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.308)
- [45 C.F.R. § 95.621](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-95/subpart-F/subject-group-ECFR8ea7e78ba47a262/section-95.621)
- [Medicaid.gov SMC Site](https://www.medicaid.gov/medicaid/data-systems/certification/streamlined-modular-certification/index.html)
- [State Medicaid Director Letter #22-001](https://www.medicaid.gov/sites/default/files/2023-06/smd22001.pdf)
- [State Medicaid Director Letter #06-022](https://downloads.cms.gov/cmsgov/archived-downloads/SMDL/downloads/SMD092006.pdf)
- [State Medicaid Manual](https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Paper-Based-Manuals-Items/CMS021927)
- [State Self-Assessment (SS-A)](https://www.medicaid.gov/medicaid/data-systems/medicaid-information-technology-architecture/medicaid-information-technology-architecture-framework/index.html)
- [Example Risk Acceptance Form](https://www.cms.gov/files/document/poamprocedurepdf) (see Attachment D) 
- [Example Concept of Operations Template](https://www.nasa.gov/reference/appendix-s-concept-of-operations-annotated-outline/)

[^1]: [IEEE Computer Society, March 19, 1998, IEEE Guide for Information Technology—System Definition—Concept of Operations (ConOps) Document (IEEE Std 1362-1998)](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=761853).
[^2]: [Office of Management and Budget, December 5, 1994, Operational Concept Description (OCD), Data Item Description DI-IPSC-81430](https://www.dau.edu/cop/se/documents/operational-concept-description-ocd-data-item-description-did).

