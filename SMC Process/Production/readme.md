# Production

Once a system is in production, states should be able to regularly and consistently provide metrics that demonstrate the system complies with applicable regulations and meets outcomes. States begin reporting on metrics after go-live and before the Certification Review. From then on, as long as the state continues to receive enhanced funding for its MES solution, metrics should be submitted to CMS monthly.

## Operational Reporting
In accordance with 42 CFR 433.112(b)(15), states are required to report on the system’s performance to CMS as a condition for receiving enhanced funding. Reporting metrics enhance transparency and accountability of IT solutions in meeting regulatory requirements and the state’s program goals.

In preparation for the CR, the state should submit metrics in the appropriate CMS Box certification folder, utilizing the Operational Report Workbook (ORW). To be certified, states must submit at least six months of metrics data or data back to their requested retroactive certification date, whichever is greater.

After the CR, states must submit operational reports containing metrics in the appropriate CMS Box metrics folder. For all modules, the state must provide a monthly breakdown of metric data within its ORW, as applicable. A state must submit the ORW for all modules with its Operational Advanced Planning Documents (OAPD) submission. The ORWs of EVV modules must be submitted quarterly at minimum (broken down by month), with monthly reporting recommended for timely updates.

## Certification Review (CR)
A CR is necessary for the state to receive enhanced federal funding for system maintenance and operations. The CR is focused on demonstrating the impact of that functionality in production, as assessed by metrics.

CMS encourages states to include all appropriate program, business operations, and IT subject matter experts in the CR.

In accordance with 42 CFR 433.116, the enhanced FFP may be claimed retroactive to the first day in the calendar quarter following the implementation date of the module. Should the state need to claim FFP beyond the two-year timely filing limit, the state must submit the certification letter with a good cause waiver for approval before requesting the funds beyond the two-year limit.

The state can schedule its review as early as three months before its target date. For example, if the state intends to hold a CR in March, it can submit its request as early as January. It’s advised that the CR take place toward the end of the seventh month after go-live, as metrics must be pulled and provided with the evidence and required artifacts no later than two weeks before the CR.

Prior to scheduling a Certification Review (CR), the state must provide the following to CMS:
- Operational Report / Metrics
    - Latest Intake Form
        - This can be a draft but will need to be finalized and loaded to the applicable certification Box folder two weeks prior to the review. This allows the Certification Team to review and ensure that all the CMS-required outcomes and Conditions for Enhanced Funding have been appropriately captured and identify opportunities for technical assistance.
    - Metric data back to the requested go-live date
        - States must submit data back to the go-live date (or the date requesting retroactive certification), up to the most recent month end.
    - The independent, third-party security and privacy controls assessment report (SAR) and penetration test results conducted within the last two years from the requested CR date.
    - Most recent Plan of Action & Milestones (POA&M) documenting the status of vulnerabilities (from SAR, penetration tests, vulnerability scans, and disaster recovery test results).
        - All critical vulnerabilities should be resolved prior to scheduling a CR date. However, states can request a date with unresolved critical items if a mitigation/remediation plan is submitted and approved by CMS, using the recommended risk acceptance template, which can be found in Attachment D of the CMS Information Security Plan of Action and Milestones (POA&M) Procedure document.
- Certification Request Letter
    - The letter should align with the [example template]({{site.baseurl}}/Templates/) posted on the Medicaid Enterprise Systems (MES) Certification Repository.
    - The letter should include all information required for inclusion in [SMDL 22-001](https://www.medicaid.gov/federal-policy-guidance/downloads/smd22001.pdf). See the [example System Acceptance Letter]({{site.baseurl}}/Templates/) on the MES Certification Repository.
    - Send the Certification Request Letter and applicable attachments via email to the CMS State Officer and MES@cms.hhs.gov.
    - Since the Certification Request Letter and the System Acceptance Letter are also SMC Required Artifacts (see SMC Guidance), these documents should also be uploaded to the applicable [Box folder]({{site.baseurl}}/Box/) for certification.
- Link to CMS Box location
    - Work with your CMS State Officer, who will set up a file structure in CMS Box, grant access, and provide this link.
- As necessary, the CMS State Officer will contact the CMS T-MSIS team to get confirmation via email that the state and system being certified meet all Outcomes-Based Assessment (OBA) compliance.

Note that meeting the above entry criteria for CR only clears the way for scheduling the CR. The state must provide the most up-to-date documents two weeks prior to the CR in the applicable certification [Box folders]({{site.baseurl}}/Box/) for evaluation by the CMS Certification Team.

For the CR, the following steps are completed:
1.	The state finalizes the state columns of the Intake Form.
    - The state must use the exact filename(s) loaded in CMS Box when populating the Intake Form evidence columns.
2.	Preferably, earlier but no later than two weeks before the CR, the state saves all evidence, required artifacts, the Intake Form, metrics (via Operational Report Workbook), the CR agenda, 
    - No files uploaded to CMS Box should be redacted, including but not limited to security risk assessments, penetration tests, screen prints, or reports that include PHI/PII.
    - The state notifies the CMS State Officer when they have completed loading all documentation (no later than 2 weeks prior to the review date).
    - The CMS Certification Team will then begin a review of the evidence and required artifacts.
3.	The CMS Certification Team will send the state an Information Request Listing (IRL) approximately one week before the review. This includes questions and feedback on the files uploaded to CMS Box. Although providing written responses to these questions before the review is encouraged, it is not mandatory. The state should be prepared to address all outstanding questions from the IRL during the ORR or CR discussions and demonstrations.
4.	The CR meeting is held, and action items are documented, reviewed, and agreed to.
    - The demonstrations must be in the production environment (test data should not be entered).
    - The state should try to respond to all action items as soon as possible, preferably within 24 hours.
5.	 After the CR, CMS will review and enter comments into the Intake Form and assemble the certification package. CMS will follow up with the state to discuss any necessary remediations. Once certification is approved, the state will receive the updated Intake Form, the certification report, and the certification letter from CMS.
  

<center><img src="{{ site.baseurl }}/SMC Process/Production/CR Flow.png"></center>


### Review Preparation 
- States are highly encouraged to utilize the sample agenda provided by the CMS Certification Team, see one example below.

<center><img src="{{ site.baseurl }}/SMC Process/Production/CR Agenda.png"></center>

[Download the CR Sample Agenda](../../CR%20Sample%20Agenda.docx)

## Resources 
- [SMC Guidance](../../SMC%20Guidance.pdf)
- [Code of Federal Regulations](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433)
- [Templates]({{site.baseurl}}/Templates/)
- [Metrics and Ongoing Reporting]({{site.baseurl}}/Ongoing Reporting/Overview/) (includes FAQs under the Resources section) 
- [CEF Example Evidence, Tips, and Best Practices]({{site.baseurl}}/Conditions for Enhanced Funding/CEFs/)
- [Intake Form Guidance]({{site.baseurl}}/Intake Form/)
- [Medicaid Enterprise Systems Testing Guidance Framework](https://www.medicaid.gov/medicaid/data-and-systems/downloads/mes-testing-guidance-framework.pdf)
- [Using Box]({{site.baseurl}}/Box/)
- [CMS Information Security POA&M Procedure document](https://www.cms.gov/files/document/poamprocedurepdf)

## References
- [Transformed Medicaid Statistical Information System (T-MSIS)](https://www.medicaid.gov/medicaid/data-systems/macbis/transformed-medicaid-statistical-information-system-t-msis/index.html)
