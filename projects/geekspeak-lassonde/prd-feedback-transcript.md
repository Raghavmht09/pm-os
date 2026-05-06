# DSA - Content score override control PRD updates

Summary

### Action Items

- [ ]  Write clear documentation about structural changes required in engineering (front end to back end)
- [ ]  Implement score updates for file computation for audits
- [ ]  Add additional column for audit and updated timestamp of the file
- [ ]  Do high level design of complete user journey end to end, including audit panel and override functionality
- [ ]  Create sample report file which will be updated
- [ ]  List down technical nuances that are possible
- [ ]  Create a loom video explaining the overall PRD at a high level
- [ ]  Create a loom video walkthrough of the design
- [ ]  Add more detail about role-based access control and specify it should live under the DSA module
- [ ]  Document how roles propagate from user login to gateway to front end
- [ ]  Remove unnecessary items from the PRD
- [ ]  Make feedback reason writing optional

### Functional Requirements

- Content audit and override functionality should be standard for brands, not specifically for GeekSpeak as a project
- Files will be generated from the S3 bucket

### Technical Implementation Details

- Structural changes required across the full stack: product engineering from front end to back end
- Score updates needed for file computation for audits
- Additional column required for audit and updated timestamp of the file

### Documentation & Design Requirements

- Complete end-to-end high level design of user journey needed, covering audit panel and override functionality
- Sample report file to be created
- Technical nuances to be documented
- Long video walkthrough needed for both PRD and design

### Access Control Requirements

- Role-based access control details should be specified more clearly
- Should be implemented under the DSA module
- Documentation needed on role propagation flow from user login through gateway to front end

Notes

Transcript

So couple of functionality updates and functional changes are required in the content audit and override functionality in SAP Rd. One is... Should be standard for brands and not for GeekSpeak. as a project. There was a Write it very clearly about the structural changes required in terms of engineering, product engineering from front end to back end. Score updates. for file computation for audits and for additional column of audit and updated timestamp of the file.

which is generated from the S3 bucket Then Do a high level design of of the complete user journey end to end. along with this thing the audit panel and the override functionality Also create a sample this report file which will be updated List down some nuances which are possible technically. Night. Then Create a loan video explaining the overall PRD in a very high level. then create a long video for the design as well Walkthrough of design.

Mention more detail about role based access control, where should it live, should be under the DSA module. mention some details about how How? from user login to gateway to The front end the role propagates in general. Also remove anything which is unnecessary from the PRD.

and the feedback of the reason of our writing should be optional