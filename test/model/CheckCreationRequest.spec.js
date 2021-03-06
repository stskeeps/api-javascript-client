/**
 * Onfido API
 * The Onfido API is used to submit check requests.
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Onfido);
  }
}(this, function(expect, Onfido) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Onfido.CheckCreationRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CheckCreationRequest', function() {
    it('should create an instance of CheckCreationRequest', function() {
      // uncomment below and update the code to test CheckCreationRequest
      //var instane = new Onfido.CheckCreationRequest();
      //expect(instance).to.be.a(Onfido.CheckCreationRequest);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Onfido.CheckCreationRequest();
      //expect(instance).to.be();
    });

    it('should have the property redirectUri (base name: "redirect_uri")', function() {
      // uncomment below and update the code to test the property redirectUri
      //var instane = new Onfido.CheckCreationRequest();
      //expect(instance).to.be();
    });

    it('should have the property reports (base name: "reports")', function() {
      // uncomment below and update the code to test the property reports
      //var instane = new Onfido.CheckCreationRequest();
      //expect(instance).to.be();
    });

    it('should have the property reportTypeGroups (base name: "report_type_groups")', function() {
      // uncomment below and update the code to test the property reportTypeGroups
      //var instane = new Onfido.CheckCreationRequest();
      //expect(instance).to.be();
    });

    it('should have the property criminalHistoryReportDetails (base name: "criminal_history_report_details")', function() {
      // uncomment below and update the code to test the property criminalHistoryReportDetails
      //var instane = new Onfido.CheckCreationRequest();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new Onfido.CheckCreationRequest();
      //expect(instance).to.be();
    });

    it('should have the property suppressFormEmails (base name: "suppress_form_emails")', function() {
      // uncomment below and update the code to test the property suppressFormEmails
      //var instane = new Onfido.CheckCreationRequest();
      //expect(instance).to.be();
    });

    it('should have the property chargeApplicantForCheck (base name: "charge_applicant_for_check")', function() {
      // uncomment below and update the code to test the property chargeApplicantForCheck
      //var instane = new Onfido.CheckCreationRequest();
      //expect(instance).to.be();
    });

  });

}));
