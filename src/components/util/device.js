export default {


	Windows: function() {
      return /IEMobile/i.test(navigator.userAgent);
  },
  Android: function() {
      return /Android/i.test(navigator.userAgent);
  },
  BlackBerry: function() {
      return /BlackBerry/i.test(navigator.userAgent);
  },
  iOS: function() {
      return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  },
  anyMobile: function() {
      return (this.Android() || this.BlackBerry() || this.iOS() ||this.Windows());
  },

	isRetina: function() {
		if (typeof document !== 'undefined') {
	    if (window.matchMedia) {
	      var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
	      return (mq && mq.matches || (window.devicePixelRatio > 1));
	    }else{
				return false;
			}
		}else{
			return false;
		}
	},

	noJS: function() {
		if (typeof document !== 'undefined') {
			return document.documentElement.classList.contains("no-js");
		}else{
			return true;
		}
	}

}
