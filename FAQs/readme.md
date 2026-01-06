# Streamlined Modular Certification Frequently Asked Questions (FAQs)

CMS prepared this set of FAQs to inform states and the public about the Streamlined Modular Certification (SMC) process and requirements. The [SMC Guidance](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf) is the primary source of information on the SMC process and requirements. Other helpful information is available in the MES Certification Repository, and State Officers are available to answer your questions. Questions may also be submitted via the Medicaid Enterprise System mailbox at <MES@cms.hhs.gov>. 

- [Overview of SMC](#overview)
- [What States Must Know about the SMC Process](#impact)
- [Outcomes and Metrics](#outcomes)
- [Conditions for Enhanced Funding](#CEF)
- [Intake Form](#intake)
- [Certification](#certification)
- [Reporting Requirements](#reporting)
- [Metrics](#metrics)

***

## Overview of SMC {#overview}

### Q1: What is SMC?
A: Streamlined Modular Certification (SMC) is the process for certifying discrete Medicaid information technology (IT) systems. State Medicaid Agencies use these IT systems and modules, known as Medicaid Enterprise Systems (MES), to manage, monitor, and administer their Medicaid program. The SMC framework promotes reduced burden and increased flexibility for states while ensuring states meet federal requirements (and state-specific outcomes) for systems and modules.

SMC contains the following certification elements:
-	Conditions for Enhanced Funding that require ongoing state compliance.
-	CMS-required outcomes are based on statutory or regulatory requirements to promote the efficient, economical, and effective administration of the state’s Medicaid program.
-	State-specific outcomes that reflect the unique circumstances, characteristics, or program priorities that the state’s IT project will directly address while ensuring benefit to the state’s Medicaid program.
-	Metrics to provide evidence about whether the outcomes are achieved continuously.
-	Required artifacts are required for certification. These are documents that demonstrate the progression of a state’s IT project.

For all systems that comprise the MES, SMC is designed to:
-	Enhance collaboration between CMS and states to focus certification on demonstrated evidence to achieve business goals for state Medicaid programs.
-	Leverage data and testing to better inform CMS’s assessment of the successful delivery of systems and better inform subsequent funding decisions.

### Q2: How can I learn about the new SMC process and requirements? 
A: The [State Medicaid Director Letter (SMDL) # 22-001](https://www.medicaid.gov/federal-policy-guidance/downloads/smd22001.pdf) and the [SMC Guidance](https://www.medicaid.gov/medicaid/data-and-systems/downloads/smc-certification-guidance.pdf) are the primary sources of information on the SMC process and requirements. Materials and tools are available to help facilitate the SMC process on [Medicaid.gov](https://www.medicaid.gov/medicaid/data-systems/certification/streamlined-modular-certification/index.html) and the MES Certification Repository on GitHub.  

### Q3: Can we provide the entry criteria after we schedule the review?
A: No. States must provide entry criteria for both ORR and CR before a formal review is scheduled. In order to reduce risk to the process, a state may not schedule a review with CMS more than three months before the intended date for the review.

***

## What States Must Know about the SMC Process {#impact}

### Q4: Why will CMS not sign Non-Disclosure Agreements (NDAs) or similar agreements from states or vendors?
A: CMS operates under specific federal regulations prioritizing transparency and information access. CMS has the authority to conduct program reviews and audits as part of its federal oversight responsibilities. Regulations, including but not limited to 45 CFR 95.615 and 42 CFR 495.346, mandate that state agencies must provide the Department of Health and Human Services (HHS) with full access to their systems and records. This access encompasses all aspects of the system, such as state staff involvement, design developments, operations, and cost records of contractors and subcontractors. The primary reasons why CMS is not required to sign NDAs or similar agreements are:

1.	**Regulatory Compliance:** CMS is bound by federal regulations that require open access to information. Signing an NDA could conflict with these regulations, particularly 45 CFR 95.615, which ensures that the Department can evaluate the system's efficiency, economy, and effectiveness without restrictions.
2.	**Transparency and Accountability:** As a federal agency, CMS is committed to maintaining transparency and accountability in its operations. NDAs could limit the ability of CMS and other oversight bodies to access necessary information, thereby hindering their ability to ensure that public funds are used appropriately and that systems are functioning as intended.
3.	**Public Interest:** CMS must ensure that systems undergo scrutiny and review to protect the public interest, promote better service delivery, and safeguard against the misuse of resources and funds.
4.	**Operational Efficiency:** Allowing unrestricted access to systems and records enables CMS to conduct timely and thorough evaluations. This helps identify areas for improvement and implement necessary changes swiftly, ultimately leading to more efficient and effective service delivery. 

In summary, CMS does not enter into NDAs with states during program or system review to maintain transparency and accountability, comply with legal requirements, and effectively fulfill its oversight responsibilities. This approach ensures that CMS can fulfill its mission to provide high-quality healthcare services while adhering to legal and ethical standards.

However, this does not mean that CMS does not take steps to protect sensitive information. CMS has procedures in place to protect confidential and proprietary information, and it may enter into other types of legal agreements, such as MOU/MOA/DUA, that govern the use and disclosure of certain types of information.  To further support these efforts, CMS utilizes the Box Cloud Content Management Platform in accordance with 42 C.F.R. §§ 433.112(b)(15) and 433.116(b), (c), and (i). This platform facilitates the Streamlined Modular Certification (SMC) framework by enabling secure file exchange and storage of Protected Health Information (PHI) and Personally Identifiable Information (PII). Box has achieved numerous U.S. Government certifications for privacy and security, including FedRAMP Moderate, DoD SRG IL4, NIST SP 800-171, AICPA SOC 2/SOC 3/AT 101 Type II, IRS Publication 1075, and HIPAA. These certifications ensure that state files loaded in Box are secure, providing states with confidence in the safety of their information even in the absence of NDAs.


### Q5: What requirements must states comply with under SMC?
A: The SMC Guidance and MES Certification Repository presents the process, requirements, and materials states must follow under the SMC process. This includes Conditions for Enhanced Funding (CEF), outcomes, and metrics as key elements. In addition, states must complete an Operational Readiness Review (ORR) and Certification Review (CR).

### Q6: What are the key SMC process touchpoints, and how do they correspond to the IT lifecycle?
A: The SMC process is designed to support the IT investment lifecycle phases as follows:
-	**Planning – Should the APD be approved?**
    - During the Planning phase, the state submits the Advance Planning Document (APD), including proposed outcomes and metrics, to the CMS State Officer for approval.
    - For SMC, the state begins populating the Intake Form and Operational Report Workbook (ORW), which aligns with the approved APD outcomes and metrics.
-	**Development – Is the project healthy?**
    - During the Development phase, the state provides CMS monthly reports on project status in preparation for the Operational Readiness Review before system go-live.
    - For SMC, the state submits the entry criteria to demonstrate review readiness, receives confirmation on an ORR date, finalizes the Intake Form, and places all certification documentation (evidence, required artifacts, Intake Form, ORW, ORR agenda, and presentation) in the CMS Box.
-	**Production – Is the system delivering outcomes?**
    - During the Production phase, the state continues to assure CMS of the project’s health via monthly status reports and operational reports documenting how well the system performs after go-live.
    - For SMC, the state finalizes the Intake Form and submits entry criteria in preparation for CR, where the state will demonstrate the system in the live production environment. The state submits unredacted evidence, required artifacts, metrics data via the ORW, and the agenda and presentation for the CR. Once certified, the state submits the Operational APD (OAPD) to CMS for approval.


### Q7: What is the Certification Request Letter, and where do states send it?
A: States may download an example of the [Sample SMC Certification Request Letter Template](../Sample_SMC_Certification_Request_Letter_Template.docx) on the MES Certification Repository.

States should email the Certification Request Letter to their CMS State Officer and <MES@cms.hhs.gov>. It is also used as an entry criteria for scheduling a CR and a required artifact. The state must also upload the letter to the applicable Box folder for certification.


### Q8: What date should the state put in the Certification Request Letter?
A: The state should use the go-live date as the retroactive date in the Certification Request Letter, unless there was a system issue, then use the date the issue was resolved and include a brief description of the issue in the letter.


### Q9: What is the retroactive date for claiming the 75% Federal Financial Participation (FFP) rate once a system is certified?
A: Per 42 CFR 433.116(a), the 75% FFP rate begins retroactively on the first day of the calendar quarter following the system’s implementation date. For example, if a system goes live on February 1, 2025, and CMS approves certification back to that date, the state can claim the 75% FFP rate starting April 1, 2025.
- The enhanced DDI rate (90/10) applies up to the implementation (go-live) date.(February 1,  2025 in this example).
- After implementation, any months remaining in that calendar quarter are claimed at the 50% FFP rate (February-March 2025 in this example).
- The enhanced M&O rate (75/25) starts on the first day of the calendar quarter following the retroactive certification approval date (April 1, 2025 in this example).
- States are encouraged to implement in the last month of a calendar quarter.


### Q10: How is the Information Request Listing used?
A: One (1) week before the review, the state will receive an Information Request Listing (IRL) for any additional clarifications. Although CMS encourages written responses to these questions before the review, this is not mandatory. The state should be prepared to address all outstanding questions from the IRL during the ORR or CR discussions and demonstrations.

### Q11: An updated SMC Guidance (version 2.0) document was released. What are the key takeaways from updates? 
The following are key takeaways and updates from the most recent version of the SMC Guidance 2.0: 
- Electronic Visit Verification (EVV) Outcomes Based Certification (OBC) will follow the SMC Guidance.
- Removed the CMS-required outcome appendices; they are now located only in the MES Certification Repository on GitHub.
- Clarified which modules must be certified through the new “Scope of Certification”.
- Introduced a new required Status Report template; refer to the MES Certification Repository [Templates Page]({{site.baseurl}}/Templates/) (this is required monthly for those performing SMC).
- Introduced a new CEF metric for all MES modules; refer to the MES Certification Repository CEF page for metric details.

### Q12: How does a state determine if a system requires certification?
A: During the planning process, states will work with CMS to determine whether a system is eligible for certification.

CMS regulations provide that only Medicaid Management Information Systems (MMIS) and Eligibility & Enrollment (E&E) systems and modules must be certified. Standalone services, including shared services, deployed in support of and/or contribute to an approved mechanized claim processing and information retrieval system (MCPIRS), are not required to receive discrete approval for enhanced funding for maintenance and operations. These services, however, remain under CMS oversight; accordingly, states should discuss applicability to SMC and confirm the schedule for periodic metric reporting with their CMS State Officer.

### Q13: Under the new scope for certification guidance, do standalone services require certification?
A: Standalone services, including but not limited to, shared services, that support or contribute to an approved mechanized claims processing and information retrieval system (MCPIRS) do not require discrete approval (also known as certification) for enhanced funding for maintenance and operations. These services, however, remain under CMS oversight and require monthly operational and metric reporting. Any issues preventing the state from submitting operational reporting data must be discussed and confirmed with the CMS MES State Officer.

### Q14: Under the new scope for certification, my previously certified system would not require certification today. Will this impact any previous funding decisions?
A: No, so long as the state continues to submit the required monthly operational reporting data by using the required Operational Report Workbook, the state is still eligible to receive the enhanced Federal Financial Participation (FFP) for Maintenance and Operations as previously described in your Certification Decision Letter from CMS and as approved via your Operational Advance Planning Document (OAPD).

### Q15: Do Electronic Visit Verification (EVV) certifications continue to follow a different process than SMC?
A: No. CMS has aligned the EVV OBC guidance with SMC to streamline the certification process. As announced in the State Health Official (SHO) letter, “Streamlining Medicaid Enterprise Systems (MES) funding and oversight process,” this updated SMC Guidance aims to create efficiencies for both states and CMS, while addressing challenges since the release of SMDL #22-001.

The letter formally sunsets the existing EVV OBC process. States must adhere to the latest version of the SMC Guidance. EVV OBC components, including CEF, CMS-required outcomes, state-specific outcomes, and metrics, now align with SMC.

***

## Outcomes and Metrics {#outcomes}

Please visit the [Metrics and Ongoing Reporting]({{site.baseurl}}/Ongoing Reporting/Overview/) page on GitHub for additional information.

### Q16: Are there resources to help states work with their State Officers to develop appropriate state-specific outcomes and metrics?
A: States should discuss their ideas for outcomes early in the planning process and include these outcomes in the Advance Planning Document (APD). State-specific outcomes should be specific to the state’s IT investment and should help the state demonstrate progress toward meeting its goals. Resources to help states are available on [Medicaid.gov](https://www.medicaid.gov/medicaid/data-systems/certification/streamlined-modular-certification/index.html) and the MES Certification Repository on GitHub.

### Q17: Where can states find examples and more information on CMS-required and state-specific outcomes and metrics?
A: The MES Certification Repository on GitHub provides a collaborative space where states can learn, share, and contribute information about the SMC process and its related artifacts.

### Q18: Do states need to develop state-specific outcomes for all projects?
A: In certain circumstances, a project may only have CMS-required outcomes (e.g., if a state is proposing a project to implement a new basic capability or if the goal of the state’s project is to comply with a federal requirement).

States should augment the CMS-required outcomes by having state-specific outcomes that emphasize alignment and contributions to the state’s Medicaid program strategies.

### Q19: When should states develop state-specific outcomes?
A: States should develop state-specific outcomes and related metrics early in the Planning phase and update CMS on progress throughout the IT investment cycle.
States must obtain CMS approval for an Advance Planning Document (APD) that includes state-specific outcomes and metrics. States should engage their CMS State Officer’s support in drafting an APD that includes state-specific outcomes and related metrics that clearly align the proposed IT project with the state’s goals.

### Q20: Are states expected to have a metric for every outcome?
A: CMS does not expect states to establish a metric for every outcome. One metric may be relevant for multiple outcomes in each module. Alternatively, multiple metrics may be appropriate for a single outcome. Some outcomes may only require an attestation or demonstration during the Certification Review and should be noted in the Intake Form. States must work with their MES State Officer to discuss any outcomes that may not have metrics and receive CMS’s approval for these outcomes.

### Q21: When and how should states report progress on CMS-required outcomes, state-specific outcomes, and metrics?
A: Once CMS approves the APD, the state should enter the CMS-required and state-specific outcomes from the APD into the Intake Form and metrics from the APD into the Operational Report Workbook for discussion and approval with their CMS State Officer. The state and their CMS State Officer should agree on a preliminary list of evidence to demonstrate that outcomes have been achieved (drafted in the Intake Form).

During ORR, the state must demonstrate that the system has met the outcomes and will support collecting and reporting metrics described in the APD. During CR, the state will need to demonstrate—with appropriate evidence—that the system in production is achieving the approved CMS-required and state-specific outcomes and metrics. States will also report on state-specific outcomes and related metrics in ongoing operational reports after the CR. Please refer to the SMC Guidance for more details.

CMS anticipates that states may need to revisit and update outcomes and metrics for their investment periodically. States should first discuss any revisions to a state’s CMS-required outcomes, state-specific outcomes, or metrics with the CMS State Officer. Based on these revisions, the state may be required to submit an APD-Update (APD-U).

### Q22: What module-specific outcome materials have been developed as part of SMC?
A: Under SMC, states will select all CMS-required outcomes for the certification module. CMS-required outcomes for MES modules are available in the MES Certification Repository. These outcomes are aligned with regulatory and policy requirements that states must follow when implementing modules.

States should also propose their state-specific outcomes depending on what they seek to accomplish for their Medicaid program and if their goals are not otherwise included in the CMS-required outcomes. State-specific outcomes should be specific to the state’s IT investment and should help the state demonstrate progress toward meeting its programmatic goals.

### Q23: What are hard edits regarding EVV, and are hard edits required to be in place before certification?
A: The term “hard edits” for an EVV module means the claim should be denied if one of the six required data elements mandated by the 21st Century Cures Act is missing. Hard edits are not required to be in place before certification; however, CMS assumes the state will turn on hard edits for metrics efficiency. The Certification Team will include an observation/recommendation to advise that hard edits be in place. The state must check for all six required data elements for EVV, but they could post edit and pay (a “soft edit” instead of denying the claim). If the state is not checking for all six data elements on the claim, this could impact certification approval.

***

## Conditions for Enhanced Funding {#CEF}

Please visit the [Conditions for Enhanced Funding (CEF)]({{site.baseurl}}/Conditions for Enhanced Funding/CEFs/) page on GitHub for examples of evidence.  The CEF includes privacy and security (please refer to CEF 9, 12, and 18). 

Please visit the [CEF Tips and Best Practices]({{site.baseurl}}/Conditions for Enhanced Funding/CEF Tips/) page on GitHub for additional tips and best practices.   

Please visit the [CEF Security and Privacy]({{site.baseurl}}/Conditions for Enhanced Funding/Security and Privacy/) page on GitHub for additional security and privacy tips, best practices, and FAQs.  

***

## Intake Form {#intake}

### Q24: What is the Intake Form, and how should it be used?
A: The states and CMS use the Intake Form to track what a state seeks to achieve with a given project, including the CMS-required outcomes, state-specific outcomes, metrics, and associated evidence. Ideally, the state begins working on the Intake Form between the submission of the state’s APD and the submission of the state’s Request for Proposal (RFP). After APD approval, states will fill out the Intake Form by including their state-specific outcomes as well as CMS-required outcomes. States will also identify their proposed metrics to evaluate their progress in achieving CMS-required and state-specific outcomes.

Given that states must include state-specific outcomes and metrics in their APDs, it is important that the Intake Form matches what is listed in the APD. When a state approaches ORR and CR, it will need to meet with CMS to finalize and approve the specific evidence it will provide as part of the certification process.

The Intake Form template is available in the MES Certification Repository as well as on Medicaid.gov.

### Q25: When should a state fill out the Intake Form?
A: States should start filling out the Intake Form once the outcomes and metrics in the APD have been approved. If a state did not complete the Intake Form as part of the APD approval and the project is nearing ORR, CMS will work with the state to complete the Intake Form with outcomes and metrics selected by the state.

***

## Certification {#certification}

### Q26: When can the state schedule their review?  Are there readiness requirements?
A: The SMC review calendar opens on the first day of each month for the upcoming three months, including that month. States must demonstrate their readiness for review by submitting all the entry criteria for either ORR or CR. The CMS State Officer will send an email containing the entry criteria for the state’s response. The CMS Certification Team will review and confirm the completion of the entry criteria before confirming a review date.

### Q27: Are Required Artifacts part of the Entry Criteria?
A: While there is some overlap, Required Artifacts must be submitted to the state’s CMS Box folders two weeks before the review date. By contrast, Entry Criteria items are submitted to schedule the review date. The SMC Guidance provides descriptions of what each Required Artifact should typically include.

It is important to distinguish between Evidence and Required Artifacts. Evidence is documentation or data that proves the achievement of an outcome as listed in the Intake Form on the Outcomes and Metrics tab. On the other hand, Required Artifacts are documents that demonstrate the progression of a state’s project and are not typically used as evidence for outcomes.

### Q28: Does the state need at least six months of metrics from a live system before requesting to schedule a CR?
A: No, a state does not need at least six months of metrics reporting of a live system to request a CR date; however, the state must be able to provide all metric data back to the go-live date (a minimum of six months) two weeks before the CR date. Please refer to the SMC Guidance for requirements for requesting a CR.

### Q29: Will CMS conduct an annual recertification of state investments?
A: CMS will not “recertify” systems on an annual basis. Instead, states will submit operational reports containing data and/or other evidence to show that modules continue to meet all applicable requirements for the state’s claimed federal matching funds. Operational reports should include metric data corresponding to the agreed-upon outcomes listed in the APD for each applicable MES module.

These operational reports should be submitted annually in support of the Operational APD (OAPD) request; however, more frequent reporting on key operational metrics may be necessary. States will coordinate with their CMS State Officer to determine which modules and metrics may need more frequent reporting.

***

## Reporting Requirements {#reporting}

### Q30: What is the monthly project status report? Which states must start submitting these reports?
A: The monthly project status report is required during the Development phase or DDI (i.e. after the Implementation APD is approved leading up to the CR). This report is required as part of ORR and CR evidence. The monthly project status report apprises CMS of the project’s progress toward achieving the CEF and desired program outcomes.

The monthly project status report includes information and updates on progress tracking, the testing framework, test results, and the defect and risk list. The template is available in the MES Certification Repository on GitHub and Medicaid.gov. The monthly project status report should be submitted to the state’s CMS State Officer via the applicable folder on CMS Box.

### Q31: What are operational reports, and what are states’ obligations for submitting them?
A: To effectively demonstrate ongoing, successful system operations, states must submit operational reports containing metric data to CMS. The state’s operational reports must contain the metrics noted in their APD. The metrics captured in the operational reports document that the system is meeting the state’s planned outcomes and are evidence that the module meets all applicable requirements to demonstrate ongoing, successful system operations for the state’s claimed federal matching funds.

Before the CR, the state should populate the Operational Reporting Workbook (ORW) with its metric data and submit it to its CMS Box certification folder. CMS developed the ORW as a standardized method to simplify the submission of agreed metric definitions and values. All states can use the ORW at all stages of the operational reporting process.

If the state is going through certification, it can submit all metric data captured since go-live once certification is complete using the ORW to its CMS Box metric folder.

States will submit monthly operational reports using the Operational Report Workbook and upload the file to the appropriate metrics file location in the CMS designated repository. Additionally, every OAPD submission should include an attestation specifying the CMS repository folder location of the submitted Operational Report Workbooks. (“Frequency” refers to the capture of the metric data, while “cadence” addresses the timing of report submission to CMS.)

### Q32: Do operational reports need to be submitted using the Operational Report Workbook (ORW) template?
A: Yes, CMS requires states use the ORW to ensure they capture all relevant details about their metrics in a format that can be included in the database. If state-submitted data does not align with the database, states will be asked to resubmit their data or risk failing compliance with required operational reporting.

***

## Metrics {#metrics}

### Q33: What is the purpose of metrics? Why are they required under SMC? 
A: Metrics reporting enhances transparency and accountability of Medicaid Enterprise System (MES) projects. Metrics help ensure the module meets statutory and regulatory requirements and the state’s program goals. In accordance with 42 C.F.R. §433.112(b)(15) and §433.116(b), (c), and (i), states must be capable of producing data, reports, and performance information from and about their MES modules to facilitate evaluation, continuous improvement in business operations, and transparency and accountability, as a condition for receiving enhanced federal matching for MES expenditures. State reporting of metrics also gives states and CMS early and continuing insight into program evaluation and opportunities for continuous improvement.
 
### Q34: Are states required to report on all CMS-required metrics currently listed on GitHub?
A: The MES Certification Repository provides a default set of recommended metrics for each required outcome. If states have alternative metrics that better suit their project needs, they can propose these to their State Officer for approval. States should begin with the metrics listed in the MES Certification Repository and maintain regular communication with their State Officer regarding the metrics they plan to report. States are required to report on applicable metrics for projects undergoing certification and legacy systems receiving enhanced funding.
 
### Q35: What should states do if they believe the default metrics are not relevant for their current module under review? 
A: States should work with their State Officer to select the most appropriate and meaningful metrics for their project. As states identify outcomes and metrics that are more applicable to their project than the CMS-required outcomes and default metrics, states should review and discuss these state-specific outcomes and metrics with their State Officer. State Officer approval of any state-specific outcomes and metrics is required before states can include and begin reporting on them in the OAPD. 
 
### Q36: What metric information are states expected to present at ORR? At CR?
A: At ORR, the state should be prepared to discuss the outcomes and planned metrics. In addition, the state should be prepared to discuss how it intends to generate the identified metrics and the expected reporting cadence.

At CR, states must have been operational for **at least** six months to receive a systems certification approval. States **must** also provide metric data back to the state’s requested retroactive certification date for all months the system has been operational. States should be ready to discuss the numerical data presented in the operational report, anomalies in the data, changes to the metric methodology, and any plans for future reporting.
 
### Q37: How much metric data should states provide to schedule a CR?
A: States must submit all agreed-upon operational metrics related to the module, starting from the date the system became operational as the system of record and up to the most recent month's end. This is a prerequisite for CMS to schedule the state’s CR date. The system must be live, and the state must be able to show that it is collecting and reporting metric data. For example, if a state collects metrics monthly and wants to schedule a CR, the state should provide all available months of data before requesting a CR. The state must submit a minimum of six months of data two weeks prior to the CR.
 
### Q38: How often must states submit operational reports?
A: If the state’s system has been certified or if it has a legacy system in operation for which it seeks enhanced funding, the state must submit operational reports monthly. The frequency of capturing metric values is typically monthly but may be quarterly or annually, as applicable. The State Officer might require more frequent reporting for specific metrics.

### Q39: What steps must a state take to retire a metric?
A: Currently, CMS does not publish guidance on how to retire a metric. States should, however, note the following:
- If a state believes it is ready to retire a metric and will no longer report on it, it should inform its State Officer about the change and explain the reason for retiring it in the Operational Reporting Workbook (ORW) and via an APD-U submission.
- If a state wishes to revise its reported metrics, it should discuss the change with its State Officer and update the metrics via the APD submission. Depending on the changes, a revised metric may include retiring the current one and creating a new one. Once the state has updated the metrics, with approval from the SO, it should report this within the ORW.
- Do not delete the row in the ORW / Metric Definition tab that contains the metric to be retired because this will generate an error in the database. Make a note in the ORW’s “OAPD Metric Status” column that the metric has ended and keep the metric in the ORW with the other current metrics.
- Finally, please remember that Metric IDs cannot be reused. Retiring a metric also retires its associated Metric ID.

CMS will continue to add to the FAQs as new questions arise.
