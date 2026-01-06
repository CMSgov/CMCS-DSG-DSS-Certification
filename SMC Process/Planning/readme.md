# Planning

## Project & Procurement Planning 
The Advanced Planning Documents (APD) is the starting point of the process and should include, applicable CMS-required outcomes (as outlined in Appendix B of the SMC Guidance), state-specific outcomes, and metrics. These outcomes and metrics will be used throughout the SMC process.

CMS-Required Outcomes are based on statutory, regulatory, and policy requirements and provide a baseline for what is required of an MES module.  The state should identify its MES module and review all CMS-required outcomes listed under that applicable module and determine if each outcome applies to their module.

The state-specific outcomes are what a state hopes to realize with the proposed Medicaid Enterprise Systems (MES) project which not only serves as justification for the investment but also serves as a way to measure whether or not a project was a success. State-specific outcomes should target specific problems and derive Medicaid benefits. Refer to [writing a good outcome statement]({{site.baseurl}}/writing-outcome-statements) for additional information. 

Metrics should be defined within the APD and used for continuous monitoring throughout the maintenance & operation of the system. Metrics provide evidence about whether the intended outcomes are achieved through the delivery of a new module or enhancement to an existing module. Metrics reporting enhances transparency and accountability of IT solutions to help ensure the MES and its modules are meeting statutory and regulatory requirements, as well as the state’s program goals. Refer to [metrics and ongoing reporting]({{site.baseurl}}/Ongoing Reporting/Overview/) for additional information. 

To illustrate a state-specific outcome and metric, consider the following hypothetical example:

<center><img src="{{ site.baseurl }}/SMC Process/Planning/State Example.png"></center>

## Procurement Planning 
After the APD is approved and prior to releasing an RFP, the state should copy the CMS-required outcomes, state-specific outcomes, and metrics from the APD to the [Streamlined Modular Certification Intake Form Template](https://www.medicaid.gov/medicaid/data-and-systems/downloads/intake-form.xlsx). Once this is drafted, it should be discussed with their CMS State Officer and a preliminary list of evidence for both Operational Readiness Review (ORR) and Certification Review (CR) should be added for the Conditions for Enhanced Funding (CEF) and Outcome and Metrics tabs. Those CEFs and outcomes determined as not applicable should include the reason why it is not applicable to this module’s certification. The drafted Intake Form will then be used throughout the IT investment lifecycle and updated as needed. Refer to the [Intake Form guidance]({{site.baseurl}}/Intake Form/) for filling out the Intake Form.

## Best Practices

### Outcomes and Metrics
-	State may update their metrics over time but must discuss the changes with their CMS State Officer and submit an updated APD.
-	Evidence and required artifacts can be existing documentation already required by the SMA (typically stated in RFP as deliverables), ultimately reducing, or eliminating the additional level of effort associated with “evidence curation” for reviews. The SMA should leverage the documentation from the DDI, there is no need to create a “package” or new file for evidence. However, CMS reserves the right to request updated documentation, as needed, in order to satisfy the needs for certification.  

### Privacy and Security/CEF 
The state should know when the following are scheduled for completion and are either dictated within the RFP or included in the RFP response from vendors:
-	Independent Security Audit (the System Security Plan must be completed before the audit starts): 
    -	Must be performed every 2 years if following NIST or if following MARS-E then at minimum a subset every year so that all controls are tested during a 3-year period.
    -	If completing a System and Organization Controls (SOC) audit, it must cover all 5 trusting principles 
    -	E&E would follow the MARS-E guidance and MMIS modules would utilize the latest revision of NIST 800-53. Only the state can require that the MMIS modules use MARS-E (this is not a CMS requirement).
    -	Ensure framework is followed as detailed in the SMC Guidance.
-	Penetration test
    -	Must be performed every 2 years if following NIST or if following MARS-E then every year. 
-	Vulnerability scans
    -	For ORR, these scans would be in the test environment. For the CR, these scans would be in the production environment. 
    -	Scans should occur at least monthly if not more often.
-	Plan of Action and Milestone (POA&M)
    -	It is recommended to report on and track all vulnerabilities to closure within the same POA&M, otherwise this could lead to additional questions on why a vulnerability wasn’t logged in the POA&M, where it was logged, when it was closed, etc.
    -	There are different types of templates to use, but the state should ensure the date opened, source, risk level, estimated date for closure, and actual date for closure are tracked. This will help with tracking the resolution timeframes as listed in the System Security Plan.
-	Disaster Recovery/Business Continuity Plan 
    -	Must include Recovery Time Objective (RTO) and Recovery Point Objective (RPO).
-	Disaster Recovery Test Results 
    -	The type of test is not strict, but a test must be performed at a minimum yearly and the first one should be performed prior to go-live. The test does need to include details on meeting the RTO and RPO listed in the Disaster Recovery plan.
    -	If there are gaps or issues documented from the test prior to go-live, the state should resolve them before the CR review. A retest should be considered if there were major gaps or issues.
-	508 Compliance 
    -	A [Voluntary Product Accessibility Template (VPAT)](https://www.itic.org/policy/accessibility/vpat) is preferred otherwise the state must ensure all the latest applicable WCAG are tested and results reported on, along with noting why others are not applicable.
    -	This testing should be done for all UI development and documentation updated continuously as applicable.
    -	The state should define the level of compliance. Industry best practice is Level AA (which means that all Level A and Level AA are supported or not applicable – not partially or do not support).
-	T-MSIS, if applicable
    -	Recommend getting confirmation in writing from CMS DIS (Division of Information Systems) State Liaison (CMS T-MSIS team) that T-MSIS large system enhancement (LSE) Standard Operating Procedure (SOP) is not applicable for the scope of this DDI.
    -	If it is applicable to the scope of the DDI, then the schedule should reflect the required artifacts and testing timelines.
    -	The state should confirm with the Division of Information Systems (DIS) State Liaison (CMS Transformed Medicaid Statistical Information System (T-MSIS) team) if the state will be required to go through the large system enhancement (LSE) Standard Operating Procedure (SOP) (T-MSIS LSE SOP). The LSE SOP requires extensive artifacts and testing so the timeline should be carefully considered.
-	All testing-level tasks should be included, but most importantly ORR should be scheduled after UAT is complete and prior to go-live.
-	Operational procedures 
    -	Should be completed prior to the Operational Readiness Testing so these procedures can be tested and updated prior to go-live.

## Resources 
-	[SMC Guidance Document](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf)
-	[Code of Federal Regulations](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433)
-	MES module outcomes (by business area)
-	[Writing a good outcome statement]({{site.baseurl}}/writing-outcome-statements)
-	[Streamlined Modular Certification Intake Form template](https://www.medicaid.gov/medicaid/data-and-systems/downloads/intake-form.xlsx)
-	[Metrics and Ongoing Reporting]({{site.baseurl}}/Ongoing Reporting/Overview/) (includes FAQs under the Resources section) 
-	[CEF Example Evidence, Tips, and Best Practices]({{site.baseurl}}/Conditions for Enhanced Funding/CEFs/)
-	[Intake Form Guidance]({{site.baseurl}}/Intake Form/)

## References
-	[SMDL #02-005 Attachment A: An APD Guidance Document. April 4, 2002](https://www.medicaid.gov/Federal-Policy-Guidance/downloads/smd040402.pdf) (page 18)
-	[Medicaid and CHIP Frequently Asked Questions (FAQs) Advanced Planning Documents (APD) for System Development Associated with 1115 Demonstrations June 13, 2019](https://www.medicaid.gov/federal-policy-guidance/downloads/faq061319.pdf)
-	[SMD # 16-009 Mechanized Claims Processing and Information Retrieval Systems – APD Requirements June 27, 2016](https://www.medicaid.gov/federal-policy-guidance/downloads/smd16009.pdf) 
-	[Transformed Medicaid Statistical Information System (T-MSIS)](https://www.medicaid.gov/medicaid/data-systems/macbis/transformed-medicaid-statistical-information-system-t-msis/index.html)
