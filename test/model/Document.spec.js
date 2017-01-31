/**
 * Onfido API
 * The Onfido API is used to submit background checking requests
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
    instance = new Onfido.Document();
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

  describe('Document', function() {
    it('should create an instance of Document', function() {
      // uncomment below and update the code to test Document
      //var instane = new Onfido.Document();
      //expect(instance).to.be.a(Onfido.Document);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Onfido.Document();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Onfido.Document();
      //expect(instance).to.be();
    });

    it('should have the property fileName (base name: "file_name")', function() {
      // uncomment below and update the code to test the property fileName
      //var instane = new Onfido.Document();
      //expect(instance).to.be();
    });

    it('should have the property fileSize (base name: "file_size")', function() {
      // uncomment below and update the code to test the property fileSize
      //var instane = new Onfido.Document();
      //expect(instance).to.be();
    });

    it('should have the property fileType (base name: "file_type")', function() {
      // uncomment below and update the code to test the property fileType
      //var instane = new Onfido.Document();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Onfido.Document();
      //expect(instance).to.be();
    });

    it('should have the property side (base name: "side")', function() {
      // uncomment below and update the code to test the property side
      //var instane = new Onfido.Document();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instane = new Onfido.Document();
      //expect(instance).to.be();
    });

    it('should have the property downloadHref (base name: "download_href")', function() {
      // uncomment below and update the code to test the property downloadHref
      //var instane = new Onfido.Document();
      //expect(instance).to.be();
    });

  });

}));
