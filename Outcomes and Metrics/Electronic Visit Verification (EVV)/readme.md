# Electronic Visit Verification (EVV)

#### How does this system support the Medicaid Program

Electronic Visit Verification (EVV) is a system under which visits conducted as part of Personal Care Services (PCS) and Home Health Care Services (HHCS) are electronically verified with respect to (i) the type of service performed; (ii) the individual receiving the service; (iii) the date of the service; (iv) the location of service delivery; (v) the individual providing the service; and (vi) the time the service begins and ends.

---

## CMS-Required Outcomes

Each CMS-required outcome is based on statutory or regulatory requirements or a requirement for receiving system approval from CMS, otherwise known as systems certification. CMS-required outcomes and metrics are used to demonstrate that a system is compliant with the applicable federal regulations that pertain to that specific system or module. CMS-required outcomes form the baseline for system/module functionality, which must continue to receive enhanced federal funding for operations.

[Download a copy of the Intake Form pre-populated for EVV](../../SMC%20Intake%20Form_EVV.xlsx).

| Reference Number | CMS Required Outcomes | Default Metrics | Required Evidence | Regulatory Source |
| ---------------- | --------------------- | --------------- | ----------------- | ----------------- |
| EVV01 | The electronic visit verification (EVV) solution captures and verifies data with respect to personal care services or home healthcare services, including:<br/>- Type of service performed;<br/>- Individual receiving the service;<br/>- Date of service;<br/>- Location of service delivery;<br/>- Individual providing the service; and<br/>- Time the service begins and ends.  | - [Association of EVV Record to Claim/Encounter](#association) <br/>- [EVV Record Match Against Approved Services, Providers, and Units](#match)<br/>- [EVV Records Without Manual Edits](#edits) |  1.1: Automated test report and screenshot(s) verifying that the EVV solution captures service type.<br/>1.2: Automated test report and screenshot(s) verifying that the EVV solution captures service location.<br/>1.3: Automated test report and screenshot(s) verifying that the EVV solution captures which individual provided the service and which individual received the service.<br/>1.4: Automated test report and screenshot(s) verifying that the EVV solution correctly captures the beginning and end time of service visit.<br/>1.5: Automated test report and screenshot(s) verifying that the EVV solution correctly and completely 1) stores and 2) transmits all required data elements to the state's chosen database. For the certification review, the state needs to provide evidence showing that these six data elements were being collected as far back as the date from which the state is requesting enhanced funding.<br/>1.6: Automated test report and screenshot(s) verifying that users can retrieve records by searching on one or more of the individual elements (i.e., service type, date, individual, date, etc.)<br/>1.7: Automated test report and screenshot(s) verifying that the EVV solution identifies incomplete records. | Section 1903(l) of the Social Security Act, as added by the 21st Century Cures Act (“Cures Act,” Pub. L. No. 114-255) |
| EVV02 | For states that mandate or offer the use of a state-procured EVV solution, the EVV solution is able to save and transmit data regardless of the mode of communication (for example, network connectivity, telephony, and cell coverage). The system is designed such that even if there is a break in communication service, the data is stored and can be transmitted when the service is restored. | - [Association of EVV Record to Claim/Encounter](#association) <br/>- [EVV Record Match Against Approved Services, Providers, and Units](#match)<br/>- [EVV Records Without Manual Edits](#edits) | 2.1: Explanation of how the solution (primary and alternate taken together) can store and transmit data in cases where the communication service is interrupted. Include relevant screenshots (such as timestamp logs showing the delay between the time the visit ended and was logged and when the data was received). | Medicaid Best Practice (MBP) |
| EVV03 | Each visit initiated is captured within the EVV system, whether or not the visit was verified. | - [Association of EVV Record to Claim/Encounter](#association) <br/>- [EVV Record Match Against Approved Services, Providers, and Units](#match)<br/>- [EVV Records Without Manual Edits](#edits) | 3.1: Automated test report and screenshot verifying that EVV visit information is captured, even if the visit is not verified by the beneficiary or a caregiver. | MBP |
| EVV04 | For states that receive EVV data from various EVV platforms, the state standardizes EVV data elements. The state validates incoming data against its EVV data standards. (This could be through the EVV solution or through some other data aggregation function.) | - [Association of EVV Record to Claim/Encounter](#association) <br/>- [EVV Record Match Against Approved Services, Providers, and Units](#match)<br/>- [EVV Records Without Manual Edits](#edits) | 4.1: Automated test report and screenshot showing that data elements received by the EVV solution or data aggregator that are not compliant with the state's EVV data definitions are rejected, and that the system returns an error message to the sender.<br/>4.2: Automated test report and screenshot showing that data elements received by the EVV solution or data aggregator that are compliant with the state's EVV data<br/>definitions are accepted.<br/>4.3: The state's EVV data definitions, available to all relevant stakeholders. | MITA 3.0 IA ML3 |
| EVV05 | The state Medicaid agency uses the EVV data to avoid paying for unauthorized or unapproved services. The state uses EVV data to check that for each claim/encounter, <br/><br/>1) the provider in the EVV visit record is approved for the beneficiary and matches the one in the claim/encounter submission,<br/>2) the visit procedure codes match those in the EVV record, <br/>3) the visit procedure codes in the record are approved for the beneficiary, and<br/>4) the number of units charged for a beneficiary does not exceed the beneficiary’s total number of approved units.<br/><br/>These validations need not be part of the EVV system; they can be done as part of claims adjudication or another function. This criterion applies to benefits given under all relevant authorizations. Approval could be in the form of a physician’s order, prior authorization, service plan, or other forms of approvals under relevant authorities. | - [Association of EVV Record to Claim/Encounter](#association) <br/>- [EVV Record Match Against Approved Services, Providers, and Units](#match)<br/>- [EVV Records Without Manual Edits](#edits) | 5.1: Explanation of 1) how the state uses EVV data to check each of the items listed for encounters, if applicable, and 2) how the state uses EVV data to apply edits to claims.<br/>5.2: Screenshots showing claims that were edited, along with reason codes for the following scenarios:<br/>- Provider mismatch<br/>- Type of services not approved for that beneficiary<br/>- Number of units not approved or that exceed an approved amount | MBP |
| EVV06 | All EVV data flows and interfaces are documented and tested, such as data flow from state-provided devices/telephony, non-state run EVV platforms, data aggregator, and to other Medicaid systems. | - [Association of EVV Record to Claim/Encounter](#association) <br/>- [EVV Record Match Against Approved Services, Providers, and Units](#match)<br/>- [EVV Records Without Manual Edits](#edits) | 6.1: Automated test report(s) and screenshot(s) verifying that the EVV solution correctly transfers and receives data to/from all interfacing systems and that incorrect transmissions are flagged, and error messages are generated.<br/>6.2: High-level diagram showing all interfaces and types of data flow.<br/>6.3: Explanation of how changes to the system are communicated to stakeholders. If this is automated, example informational message. | MITA 3.0 TCM ML3 and ML2, industry best practice  |
| EVV07 | For states that mandate or offer the use of a state-procured EVV solution, providers, beneficiaries, and caregivers are able to submit the necessary verification information via alternate methods, should the primary mode of submission be out of service. (For example, if a handheld device is not working properly, the provider is able to phone in the visit information or submit it via a website portal.) | - [EVV System Availability](#availability)  | 7.1: Automated test report and screenshot(s) showing that, for each alternative submission method, the required EVV data is correctly received and stored.<br/>7.2: Training materials for users that explain how visit information can be submitted should the primary method of submission be out of service. | MBP |
| EVV08 | The state provides user training and stakeholder outreach. | - [EVV System Availability](#availability)  | 8.1: Training plan and materials, record of when training occurred or are scheduled, and for which stakeholder groups. For states that only aggregate data from providers' or MCOs' EVV platforms, this means an explanation of how those stakeholders can properly send data to the state. | Section 1903(l) of the Social Security Act, as added by the 21st Century Cures Act (“Cures Act,” Pub. L. No. 114-255) |
| EVV09 | For states that mandate or offer the use of a state-procured EVV solution, the state provides support for non-native English speakers. | - [EVV System Availability](#availability) | 9.1: List of all languages supported and how they are supported (e.g., translated user interfaces, on-call translators, etc.). | Civil Rights Act of 1964, Title VI, Affordable Health Care Act of 2010, Sect. 1557 |


The following tables include guidance on filling out the Metric Definition tab in the Operational Report Workbook (ORW). Note: “Frequency” refers to the capture of the metric data while “cadence” addresses the timing of report submission to CMS.

### Association of EVV record to claim/encounter {#association}

| Metric Element | Description |
| -------------- | ----------- |
| **Name** | Association of EVV record to claim/encounter |
| **Outcome Reference #** | EVV01 \| EVV02 \| EVV03 \| EVV04 \| EVV05 \| EVV06 |
| **Description** | To ensure that claims and encounters are not being paid for unverified visits. |
| **Value Type** | Percent |
| **Numerator** | Number of paid claims and encounters that have complete EVV visit records associated with them |
| **Denominator** | Number of paid claims and encounters for PCS and/or HHCS |
| **Reporting Frequency** | Monthly |
| **Definitions** | HHCS – home health care service<br/>PCS – personal care service<br/>Complete EVV record: all required data elements are captured in the record. According to the 21st Century Cures Act, these are  <br/>1) the type of service performed <br/>2) the individual receiving the service<br/>3) the date of the service<br/>4) the location of service delivery<br/>5) the individual providing the service<br/>6) the time the service begins and ends |
| **Additional Guidance** | Claims and encounters counted in this calculation are those that are non-duplicative and were paid during the quarter.<br/>This metric does not stipulate how a state chooses to associate an EVV record with its corresponding claim or encounter. This metric is reported for the previous quarter, which allows the state to account for a complete quarter of data. For example, the first quarter’s results are reported in the second quarter. |

### EVV record match against approved services, providers, and units {#match}

| Metric Element | Description |
| -------------- | ----------- |
| **Name** | EVV record match against approved services, providers, and units |
| **Outcome Reference #** | EVV01 \| EVV02 \| EVV03 \| EVV04 \| EVV05 \| EVV06 |
| **Description** | To ensure linkage between authorized provider, service, units, and beneficiary for home visits. |
| **Value Type** | Percent |
| **Numerator** | Number of procedure codes paid for, which units, providers, and services were approved/authorized |
| **Denominator** | Number of home visit procedure codes paid |
| **Reporting Frequency** | Monthly |
| **Definitions** | The SMA should be checking claims and encounters against the associated EVV record to ensure that:  <br/>1)	the provider shown in the EVV record is associated with the beneficiary and matches the one in the claim/encounter submission<br/>2)	the procedure codes match those in the EVV record and were approved for the beneficiary<br/>3)	the number of units charged did not exceed the beneficiary’s total number of approved units<br/>Service codes for which the beneficiary, provider, service, or number of units do not match what is appropriate under the relevant authorities should not be paid. |
| **Additional Guidance** | Claims/encounter procedure codes counted in this calculation are those that are non-duplicative and were paid during the quarter.<br/>This metric applies to all home visit-related authorities. Authorization could be in the form of a physician’s order, prior authorization, service plan, or other forms of approval under relevant authorities. This metric is reported for the previous quarter, which allows the state to account for a complete quarter of data. For example, the second quarter’s results are reported in the third quarter. |

### EVV records without manual edits {#edits}

| Metric Element | Description |
| -------------- | ----------- |
| **Name** | EVV records without manual edits |
| **Outcome Reference #** | EVV01 \| EVV02 \| EVV03 \| EVV04 \| EVV05 \| EVV06 |
| **Description** | To reduce the incidence of manually entered or edited EVV records. |
| **Value Type** | Percent |
| **Numerator** | Number of EVV records for verified visits which have no manual edits |
| **Denominator** | Number of EVV records for verified visits received  |
| **Reporting Frequency** | Monthly |
| **Definitions** | A state-run EVV system is one that the state operates, either itself or through a contract with a vendor. |
| **Additional Guidance** | EVV records counted in this calculation are those that are non-duplicative and were received during the quarter.<br/>This metric is reported for the previous quarter. Therefore, the first quarter’s results are reported during the second quarter. This allows the state to account for a complete quarter’s worth of data.<br/><br/>Some states’ EVV solutions aggregate data from providers’ or MCO EVV systems. Some such states may have stipulated that those records need to include information as to whether the original EVV record was manually edited. Other states may not have made this a requirement of their providers or MCOs. Those states that aggregate data and can report against this KPI should report against this KPI. |

### EVV System Availability {#availability}

| Metric Element | Description |
| -------------- | ----------- |
| **Name** | EVV System Availability |
| **Outcome Reference #** | EVV07 \| EVV08 \| EVV09 |
| **Description** | To ensure that the EVV system has a high availability. |
| **Value Type** | Percent |
| **Numerator** | Uptime outside of scheduled maintenance |
| **Denominator** | Minutes in the quarter, not including scheduled maintenance |
| **Reporting Frequency** | Monthly |
| **Definitions** | Uptime is the time during which the solution can perform all its required functions. |
| **Additional Guidance** | None |

---

## State-Specific Outcomes - CMS Approved

States requesting enhanced FFP for systems that fulfill _state-specific program needs_, beyond minimum legal requirements and the baseline of the _CMS-required outcomes_, should propose _state-specific outcomes_ that address the proposed enhancements.

When drafting state-specific outcomes statements, keep [these tips](../../writing-outcome-statements) in mind.

### Examples for this Electronic Visit Verification

We are actively gathering and evaluating outcomes statements crafted by states for this business area.

Please send examples from your state that you'd like to share to <MES@cms.hhs.gov>. Our team will collect and share the best examples.

{% assign states = "MES Outcomes - State-Specific EVV" %}

<div align="right" class="ds-u-margin-bottom--2">
  <a href="{{ site.baseurl }}/downloads/{{ states }}.csv" target="_blank" download>Click here to download the State-Specific outcomes in a CSV file</a>
</div>

{% include table.html table=states %}
