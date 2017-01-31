# onfido

Onfido - JavaScript client for onfido
The Onfido API is used to submit background checking requests
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.0
- Package version: 1.0.0
- Build date: 2017-01-31T17:01:36.590Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install onfido --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/onfido/api-javascript-client
then install it via:

```shell
    npm install onfido/api-javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Onfido = require('onfido');

var defaultClient = Onfido.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = 'token=' + 'YOUR API KEY';
Token.apiKeyPrefix = 'Token';

var api = new Onfido.DefaultApi();

// setting applicant details
var applicant = new Onfido.Applicant();
applicant.first_name = 'John';
applicant.last_name = 'Smith';
applicant.dob = new Date('1980-01-22');
applicant.country = 'GBR';

var address = new Onfido.Address();
address.building_number = '100';
address.street = 'Main Street';
address.town = 'London';
address.postcode = 'SW4 6EH';
address.country = 'GBR';

applicant.addresses = [address];

// setting check request details
var check = new Onfido.CheckCreationRequest();
check.type = 'express';

var report = new Onfido.Report();
report.name = 'identity';

check.reports = [report];

var createApplicantCallback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    var applicantId = data.id;
    api.createCheck(applicantId, {'data': check}, createCheckCallback);
  }
};

var createCheckCallback = function(error, data, response) {
  if (error) {
    console.error(error.response.body);
  } else {
    console.log(data);
  }
};

api.createApplicant({'data': applicant}, createApplicantCallback);


```

## Documentation for API Endpoints

All URIs are relative to *https://api.onfido.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Onfido.DefaultApi* | [**cancelReport**](docs/DefaultApi.md#cancelReport) | **POST** /checks/{check_id}/reports/{report_id}/cancel | This endpoint is for cancelling individual paused reports.
*Onfido.DefaultApi* | [**createApplicant**](docs/DefaultApi.md#createApplicant) | **POST** /applicants | Create Applicant
*Onfido.DefaultApi* | [**createCheck**](docs/DefaultApi.md#createCheck) | **POST** /applicants/{applicant_id}/checks | Create a check
*Onfido.DefaultApi* | [**destroyApplicant**](docs/DefaultApi.md#destroyApplicant) | **DELETE** /applicants/{applicant_id} | Delete Applicant
*Onfido.DefaultApi* | [**downloadDocument**](docs/DefaultApi.md#downloadDocument) | **GET** /applicants/{applicant_id}/documents/{document_id}/download | Download a documents raw data
*Onfido.DefaultApi* | [**findApplicant**](docs/DefaultApi.md#findApplicant) | **GET** /applicants/{applicant_id} | Retrieve Applicant
*Onfido.DefaultApi* | [**findCheck**](docs/DefaultApi.md#findCheck) | **GET** /applicants/{applicant_id}/checks/{check_id} | Retrieve a Check
*Onfido.DefaultApi* | [**findDocument**](docs/DefaultApi.md#findDocument) | **GET** /applicants/{applicant_id}/documents/{document_id} | A single document can be retrieved by calling this endpoint with the document’s unique identifier.
*Onfido.DefaultApi* | [**findReport**](docs/DefaultApi.md#findReport) | **GET** /checks/{check_id}/reports/{report_id} | A single report can be retrieved using this endpoint with the corresponding unique identifier.
*Onfido.DefaultApi* | [**findReportTypeGroup**](docs/DefaultApi.md#findReportTypeGroup) | **GET** /report_type_groups/{report_type_group_id} | Retrieve single report type group object
*Onfido.DefaultApi* | [**listApplicants**](docs/DefaultApi.md#listApplicants) | **GET** /applicants | List Applicants
*Onfido.DefaultApi* | [**listChecks**](docs/DefaultApi.md#listChecks) | **GET** /applicants/{applicant_id}/checks | Retrieve Checks
*Onfido.DefaultApi* | [**listDocuments**](docs/DefaultApi.md#listDocuments) | **GET** /applicants/{applicant_id}/documents | List documents
*Onfido.DefaultApi* | [**listReportTypeGroups**](docs/DefaultApi.md#listReportTypeGroups) | **GET** /report_type_groups | Retrieve all report type groups
*Onfido.DefaultApi* | [**listReports**](docs/DefaultApi.md#listReports) | **GET** /checks/{check_id}/reports | All the reports belonging to a particular check can be listed from this endpoint.
*Onfido.DefaultApi* | [**resumeCheck**](docs/DefaultApi.md#resumeCheck) | **POST** /checks/{check_id}/resume | Resume a Check
*Onfido.DefaultApi* | [**resumeReport**](docs/DefaultApi.md#resumeReport) | **POST** /checks/{check_id}/reports/{report_id}/resume | This endpoint is for resuming individual paused reports.
*Onfido.DefaultApi* | [**updateApplicant**](docs/DefaultApi.md#updateApplicant) | **PUT** /applicants/{applicant_id} | Update Applicant
*Onfido.DefaultApi* | [**uploadDocument**](docs/DefaultApi.md#uploadDocument) | **POST** /applicants/{applicant_id}/documents | Upload a document


## Documentation for Models

 - [Onfido.Address](docs/Address.md)
 - [Onfido.Applicant](docs/Applicant.md)
 - [Onfido.ApplicantsList](docs/ApplicantsList.md)
 - [Onfido.Check](docs/Check.md)
 - [Onfido.CheckCreationRequest](docs/CheckCreationRequest.md)
 - [Onfido.ChecksList](docs/ChecksList.md)
 - [Onfido.Document](docs/Document.md)
 - [Onfido.DocumentsList](docs/DocumentsList.md)
 - [Onfido.Error](docs/Error.md)
 - [Onfido.IdNumber](docs/IdNumber.md)
 - [Onfido.Report](docs/Report.md)
 - [Onfido.ReportType](docs/ReportType.md)
 - [Onfido.ReportTypeGroup](docs/ReportTypeGroup.md)
 - [Onfido.ReportTypeGroupsList](docs/ReportTypeGroupsList.md)
 - [Onfido.ReportTypeOption](docs/ReportTypeOption.md)
 - [Onfido.ReportsList](docs/ReportsList.md)
