/**
 * @license Copyright 2017 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @type {Array<Smokehouse.ExpectedRunnerResult>}
 * Expected Lighthouse audit values for tricky metrics tests
 */
module.exports = [
  {
    lhr: {
      requestedUrl: 'http://localhost:10200/tricky-tti.html',
      finalUrl: 'http://localhost:10200/tricky-tti.html',
      audits: {
        'first-cpu-idle': {
          // stalls for 5 seconds, 5 seconds out, so should be around 10s
          numericValue: '>9000',
        },
        'interactive': {
          // stalls for 5 seconds, 5 seconds out, so should be around 10s
          numericValue: '>9000',
        },
      },
    },
  },
  {
    lhr: {
      requestedUrl: 'http://localhost:10200/delayed-fcp.html',
      finalUrl: 'http://localhost:10200/delayed-fcp.html',
      audits: {
        'first-contentful-paint': {
          numericValue: '>1', // We just want to check that it doesn't error
        },
      },
    },
  },
];
