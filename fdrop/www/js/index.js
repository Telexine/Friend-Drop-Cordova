/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 

var app = {
    // Application Constructor
    initialize: function() {
        console.log("initialize")

        document.addEventListener("offline", onOffline, false);
        document.addEventListener("online", onOnline, false);
            function onOffline() {
                // Handle the offline event
                console.log("offline")
                ons.notification.alert("You are Offline");
                
                 
            }
            function onOnline() {
            
                // Handle the online event
            }
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        console.log("deviceready")

        shake.startWatch(onShake, 40 , onError );
        var onShake = function () {
          // Fired when a shake is detected
          console.log("shake")
        };
        
        var onError = function () {
          // Fired when there is an accelerometer error (optional)
        };

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log(id)
   
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();