/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-camera' : '&#x21;',
			'icon-camera-2' : '&#x22;',
			'icon-mic' : '&#x23;',
			'icon-mic-2' : '&#x24;',
			'icon-phone-hang-up' : '&#x25;',
			'icon-phone-hang-up-2' : '&#x26;',
			'icon-call-outgoing' : '&#x27;',
			'icon-bubble-dots' : '&#x28;',
			'icon-spinner' : '&#x29;',
			'icon-cancel-circle' : '&#x2a;',
			'icon-cancel-circle-2' : '&#x2b;',
			'icon-checkmark-circle' : '&#x2c;',
			'icon-checkmark-circle-2' : '&#x2d;',
			'icon-cancel' : '&#x2e;',
			'icon-spam' : '&#x2f;',
			'icon-info' : '&#x30;',
			'icon-chrome' : '&#x31;',
			'icon-firefox' : '&#x32;',
			'icon-IE' : '&#x33;',
			'icon-opera' : '&#x34;',
			'icon-safari' : '&#x35;',
			'icon-IcoMoon' : '&#x36;',
			'icon-html5' : '&#x37;',
			'icon-css3' : '&#x38;',
			'icon-html5-2' : '&#x39;',
			'icon-calculate' : '&#x3a;',
			'icon-calculate-2' : '&#x3b;',
			'icon-support' : '&#x3c;',
			'icon-phone' : '&#x3d;',
			'icon-contact-add' : '&#x3e;',
			'icon-contact-remove' : '&#x3f;',
			'icon-contact-add-2' : '&#x40;',
			'icon-spinner-2' : '&#x41;',
			'icon-checkmark' : '&#x42;',
			'icon-checkmark-2' : '&#x43;',
			'icon-checkmark-3' : '&#x44;',
			'icon-contact-remove-2' : '&#x45;',
			'icon-call-incoming' : '&#x46;',
			'icon-phone-2' : '&#x47;',
			'icon-phone-3' : '&#x48;',
			'icon-grid' : '&#x49;',
			'icon-spinner-3' : '&#x4a;',
			'icon-phone-4' : '&#x4b;',
			'icon-phone-5' : '&#x4c;',
			'icon-user' : '&#x4d;',
			'icon-user-2' : '&#x4e;',
			'icon-happy' : '&#x4f;',
			'icon-happy-2' : '&#x50;',
			'icon-smiley' : '&#x51;',
			'icon-smiley-2' : '&#x52;',
			'icon-tongue' : '&#x53;',
			'icon-tongue-2' : '&#x54;',
			'icon-sad' : '&#x55;',
			'icon-sad-2' : '&#x56;',
			'icon-wink' : '&#x57;',
			'icon-wink-2' : '&#x58;',
			'icon-grin' : '&#x59;',
			'icon-grin-2' : '&#x5a;',
			'icon-cool' : '&#x5b;',
			'icon-cool-2' : '&#x5c;',
			'icon-angry' : '&#x5d;',
			'icon-angry-2' : '&#x5e;',
			'icon-evil' : '&#x5f;',
			'icon-evil-2' : '&#x60;',
			'icon-shocked' : '&#x61;',
			'icon-shocked-2' : '&#x62;',
			'icon-confused' : '&#x63;',
			'icon-confused-2' : '&#x64;',
			'icon-neutral' : '&#x65;',
			'icon-neutral-2' : '&#x66;',
			'icon-wondering' : '&#x67;',
			'icon-wondering-2' : '&#x68;',
			'icon-warning' : '&#x69;',
			'icon-notification' : '&#x6a;',
			'icon-question' : '&#x6b;',
			'icon-question-2' : '&#x6c;',
			'icon-point-up' : '&#x6d;',
			'icon-twitter' : '&#x6e;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};