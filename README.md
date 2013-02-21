WebRTC & SignalR Video Chat
=================

[Live Demo](http://mg-webrtc.azurewebsites.net)

A demo project for playing around with Peer-to-Peer audio/video connections using WebRTC.  Signaling and management of users and active connections is handled by SignalR.

At the time of writing this, the application is working in the following browser releases:

- [Google Chrome Beta](https://www.google.com/intl/en/chrome/browser/beta.html) (26.0.1410.3)
- [Firefox Nightly](http://nightly.mozilla.org/) (21.0a1)

However, the WebRTC implementation is progressing in both browsers, so this may or may not be broken by the time you try to use it :)

- Rough around the edges
- Connections take a LONG time in Firefox.  Be patient, it will (probably) work if you didn't get a bunch of JavaScript errors.
- Currently limited to two callers on the line at once.  Conferencing is in the works.