/*
 * Copyright (c) 2015 Hewlett-Packard Enterprise Development Company, L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/**
 * This module automatically selects a default configuration for the test harness.
 *
 * Usage: beforeEach(module('openstack.mock.$$selectedConfiguration'));
 */
angular.module('openstack.mock.$$selectedConfiguration', ['openstack.mock.$$configuration'])
  .run(function($$selectedConfiguration, $$persistentStorage, $rootScope) {
    'use strict';

    $$selectedConfiguration.set('test_config_1');
    $rootScope.$apply();

    afterEach(function() {
      // Clear any config selections we've made.
      $$persistentStorage.remove('$$selectedConfiguration');
    });
  });
