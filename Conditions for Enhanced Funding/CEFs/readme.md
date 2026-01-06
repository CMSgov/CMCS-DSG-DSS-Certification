# Conditions for Enhanced Funding

## Overview
As a condition of receiving enhanced federal financial participation (FFP) for Design, Development and Implementation (DDI) and Maintenance and Operations (M&O) state expenditures on Medicaid Enterprise Systems (MES), states must attest that the system complies with all of the applicable 22 conditions for enhanced funding (CEF) as provided in [42 CFR 433.112](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.112) and that the system remains compliant with federal Medicaid requirements for enhanced funding once it is in operation as provided in [42 CFR 433.116](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.116).  

## Conditions for Enhanced Funding
The following table contains the CEF described in 42 CFR 433.112, which is applicable to all MES modules.

This table and the applicable business area outcomes are a starting point for aligning the state’s goals for a MES project with applicable CMS-required outcomes. 

{% assign cms = "CEFs" %}

<div align="right" class="ds-u-margin-bottom--2">
  <a href="{{ site.baseurl }}/downloads/{{ cms }}.csv" target="_blank" download>Click here to download the Conditions for Enhanced Funding in a CSV file</a>
</div>

{% include table.html table=cms %}

[Click here for CEF Tips and Best Practices]({{site.baseurl}}/Conditions for Enhanced Funding/CEF Tips/)

## Metrics
As part of the ongoing continuous monitoring process on the security and privacy risk posture for an approved MES Information Technology (IT) environment, the state must demonstrate the efficacy of its continuous monitoring program through annual metrics reporting to meet the security and privacy elements of the CEF.  

**Note:** CMS is not changing the independent third-party security and privacy assessments or penetration testing timing. The requirement is on a biennial basis per 45 CFR § 95.621(f)(3) or annually if the state is following the Affordable Care Act (ACA) Administering Entity (AE) for the module. 

It is expected that this metric data would come from the state’s existing POA&M(s), which would contain all vulnerabilities/findings (i.e., security and privacy assessments, vulnerability scans, penetration tests, internal or external security controls assessment, and disaster recovery testing). 

The following table includes guidance on filling out the Metric Definition tab in the ORW.  Note: “Frequency” refers to the capture of the metric data, while “cadence” addresses the timing of report submission to CMS.

| Metric Element | Description |
| -------------- | ----------- |
| **ID** | [StateAbbreviation]-CR-[ModuleAbbreviation]-CEF-09.1 |
| **Name** | Open privacy and security risks |
| **Reference #** | CEF09 \| CEF12 \| CEF18 |
| **Description** | Metric data will be sourced from the POA&M(s), reported quarterly in [list the months it will be reported in by the state here] on the Metric Values tab (using three measure counts), and sent to CMS, with each module’s ORW, quarterly along with the latest POA&M(s). |
| **Value Type** | Numerical |
| **Reporting Frequency** | Quarterly |
| **Definitions** | Definitions are based on NIST Special Publication 800-30 Revision 1; the latest published definitions should be followed.<br/>**Very high risk** means that a threat event could be expected to have multiple severe or catastrophic adverse effects on organizational operations, organizational assets, individuals, other organizations, or the Nation.<br/>**High risk** means that a threat event could be expected to have a severe or catastrophic adverse effect on organizational operations, organizational assets, individuals, other organizations, or the Nation.<br/>**Moderate risk** means that a threat event could be expected to have a serious adverse effect on organizational operations, organizational assets, individuals, other organizations, or the Nation.<br/>**Low risk** means that a threat event could be expected to have a limited adverse effect on organizational operations, organizational assets, individuals, other organizations, or the Nation.<br/>**Very low risk** means that a threat event could be expected to have a negligible adverse effect on organizational operations, organizational assets, individuals, other organizations, or the Nation. |
| **Additional Guidance** | For all identified risks and vulnerabilities, a POA&M must be utilized to monitor progress and closure. All mitigated and closed POA&M entries must be tracked for at least one year.<br/>The POA&M should include all levels of findings, with at a minimum the following fields:<br/>- Identifier<br/>- Control Family<br/>- Description<br/>- Source<br/>- Date Identified<br/>- Scheduled Completion Date<br/>- Actual Completion Date<br/>- Status<br/>- Risk Level<br/>- Comments |

The following table includes guidance on filling out the ORW, Metric Values tab, Measure Count & Measure Count Description columns.  

| Measure Count | Measure Count Description | Additional Guidance (do not include in the ORW) |
| ------------- | ------------------------- | ---------------------------------------------- |
| 1 | Very High | Number of **open** privacy and security risks assessed at **Very High** |
| 2 | High | Number of **open** privacy and security risks assessed at **High** |
| 3 | Any Severity | Number of **open** privacy and security risks assessed at **any severity.** This is the sum of all risk levels: very high, high, moderate, low, very low |

## Additional Resources
- [SMC Guidance](../../SMC%20Guidance.pdf)
- [MES Testing Guidance Framework](https://www.medicaid.gov/medicaid/data-and-systems/downloads/mes-testing-guidance-framework.pdf)
- [Operational Report Workbook](https://www.medicaid.gov/medicaid/data-and-systems/downloads/operational-report-workbook.xlsx)
- [Transformed Medicaid Statistical Information System (T-MSIS)](https://www.medicaid.gov/medicaid/data-systems/macbis/transformed-medicaid-statistical-information-system-t-msis/index.html)
- [Section 508 Guidance](https://www.section508.gov/test)
- [Accessibility Guidance](https://accessibility.18f.gov)
- [Incident Response](https://www.cms.gov/about-cms/information-systems/privacy/incident-response)
- [Address Gaps in Cybersecurity: HHS OCR releases crosswalk between HIPAA Security Rule and NIST Cybersecurity Framework and NIST SP 800-53 controls](https://www.hhs.gov/guidance/sites/default/files/hhs-guidance-documents//nist-csf-to-hipaa-security-rule-crosswalk-02-22-2016-final.pdf)
- [Risk assessment determination and scale as defined in NIST SP 800-30 Revision 1](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf), see Appendix G (Likelihood of Occurrence), H (Impact), and I (Risk Determination)
- [PERM](https://www.cms.gov/data-research/monitoring-programs/improper-payment-measurement-programs/payment-error-rate-measurement-perm)
- [Enrollment data performance indicator report](https://www.medicaid.gov/medicaid/national-medicaid-chip-program-information/medicaid-chip-enrollment-data/monthly-medicaid-chip-application-eligibility-determination-and-enrollment-reports-data/index.html)
- [508 accessibility Level AA compliance new rule: Nondiscrimination on the Basis of Disability; Accessibility of Web Information and Services of State and Local Government Entities (ada.gov)](https://www.ada.gov/assets/pdfs/web-rule.pdf)  Note: compliance is required 2 or 3 years from published date of April 24, 2024, depending on public entity size and has exceptions as noted in the rule.

## References
- [28 CFR Part 35](https://www.ecfr.gov/current/title-28/chapter-I/part-35)
- [42 CFR § 433.112](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.112)
- [42 CFR § 433.116](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-C/part-433/subpart-C/section-433.116)
- [45 CFR § 164.308](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.308)
- [45 CFR § 95.621](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-A/part-95/subpart-F/subject-group-ECFR8ea7e78ba47a262/section-95.621)
- [Medicaid.gov SMC Site](https://www.medicaid.gov/medicaid/data-systems/certification/streamlined-modular-certification/index.html)
- [State Medicaid Director Letter #22-001](https://www.medicaid.gov/sites/default/files/2023-06/smd22001.pdf)
- [State Medicaid Director Letter #06-022](https://downloads.cms.gov/cmsgov/archived-downloads/SMDL/downloads/SMD092006.pdf)
- [State Medicaid Manual](https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Paper-Based-Manuals-Items/CMS021927)
- [Business Associates](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html)
- [Voluntary Product Accessibility Template (VPAT)](https://www.itic.org/policy/accessibility/vpat), see the latest WCAG version 
- [State Self-Assessment (SS-A)](https://www.medicaid.gov/medicaid/data-systems/medicaid-information-technology-architecture/medicaid-information-technology-architecture-framework/index.html)
- [Example Risk Acceptance Form](https://www.cms.gov/files/document/poamprocedurepdf) (see Attachment D) 
- [Example Concept of Operations template](https://www.nasa.gov/reference/appendix-s-concept-of-operations-annotated-outline/)
- [FedRAMP POA&M template](https://www.fedramp.gov/2022-06-28-update-poam-template/)
- [Acceptable Risk Controls for ACA, Medicaid, and Partner Entities (ARC-AMPE)](https://www.cms.gov/marketplace/resources/regulations-guidance)  
