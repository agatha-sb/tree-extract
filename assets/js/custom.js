

// ************************************************* //
// * +++++++++++ Fancybox Gallery ++++++++++++ * //
// ************************************************* //

Fancybox.bind('[data-fancybox="gallery-1"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});

let faqDivs = document.querySelectorAll(".trex__faq-wrap .accordion-item");
let faqRow = document.querySelector(".trex__faq-wrap .accordion-flush .row");

if (faqDivs.length > 0) {
  let col1 = document.createElement("div");
  col1.className = "col-6";
  let col2 = document.createElement("div");
  col2.className = "col-6";

  for (let i = 0; i < faqDivs.length; i++) {
    if (i % 2 === 0) {
      col1.appendChild(faqDivs[i]);
    } else {
      col2.appendChild(faqDivs[i]);
    }
  }

  faqRow.appendChild(col1);
  faqRow.appendChild(col2);
}
// ************************************************* //
// * +++++++++++ Swiper Sliders ++++++++++++ * //
// ************************************************* //
var heroSwiper = new Swiper(".trex__hero-swiper", {
  slidesPerView: 1,
  autoPlay: false,
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next-heroSW",
    prevEl: ".swiper-button-prev-heroSW",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "progressbar",
  // },
  breakpoints: {
    0: {
      slidesPerView: 1
    }
  }
});
var testimonialsSwiper = new Swiper(".trex__testimonials-swiper", {
  autoPlay: false,
  spaceBetween: 45,
  navigation: {
    nextEl: ".swiper-button-next-testimonialsSW",
    prevEl: ".swiper-button-prev-testimonialsSW",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
var concernSwiper = new Swiper(".trex__concern-swiper", {
  autoPlay: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-concernSW",
    prevEl: ".swiper-button-prev-concernSW",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});
var productSwiper = new Swiper(".trex__product-swiper", {
  autoPlay: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-productSW",
    prevEl: ".swiper-button-prev-productSW",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    360: {
      slidesPerView: 2
    },
    767: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
});


// ************************************************* //
// * +++++++++++ Magnific Popup ++++++++++++ * //
// ************************************************* //
$('.popup-youtube').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: function (url) {
          var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
          if (!m || !m[1]) return null;
          return m[1];
        },
        src: '//www.youtube.com/embed/%id%?autoplay=1'
      },
      vimeo: {
        index: 'vimeo.com/',
        id: function (url) {
          var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
          if (!m || !m[5]) return null;
          return m[5];
        },
        src: '//player.vimeo.com/video/%id%?autoplay=1'
      }
    }
  }
});




const videoContainer = document.getElementById("trexVideoWrap");
const playButton = document.getElementById("trexPlayBtn");

videoContainer.addEventListener("mousemove", function (event) {
	const containerRect = videoContainer.getBoundingClientRect();
	const mouseX = event.clientX - containerRect.left;
	const mouseY = event.clientY - containerRect.top;

	const buttonWidth = playButton.offsetWidth;
	const buttonHeight = playButton.offsetHeight;
	const buttonX = mouseX - buttonWidth / 2;
	const buttonY = mouseY - buttonHeight / 2;

	const maxButtonX = containerRect.width - buttonWidth;
	const maxButtonY = containerRect.height - buttonHeight;
	playButton.style.left = Math.min(Math.max(buttonX, 0), maxButtonX) + "px";
	playButton.style.top = Math.min(Math.max(buttonY, 0), maxButtonY) + "px";
});

videoContainer.addEventListener("mouseleave", function () {
	setTimeout(function () {
		playButton.style.left = "50%";
		playButton.style.top = "50%";
		playButton.style.transform = "translate(-50%, -50%) scale(1)";
		playButton.style.transition = "all 0.3s ease-out";
	}, 50);
});

videoContainer.addEventListener("mouseover", function () {
	playButton.style.transition = "transform ease-out 0.3s";
	playButton.style.transform = "scale(1.2)";
});

const video = document.getElementById("trexVideoItem");

videoContainer.addEventListener("mouseenter", function () {
	if (!video.paused) {
		playButton.style.opacity = "1";
	}
});

videoContainer.addEventListener("mouseleave", function () {
	if (!video.paused) {
		playButton.style.opacity = "0";
		playButton.style.transition = "opacity ease 1s";
	}
});

videoContainer.addEventListener("click", function () {
	if (video.paused) {
		video.play();
		playButton.innerHTML =
			'<span class="pause-icon">Pause</span>';
	} else {
		video.pause();
		playButton.innerHTML =
			'<span class="play-icon">Play</span>';
	}
});

video.addEventListener("ended", function () {
	playButton.innerHTML =
		'<span class="play-icon">Play</span>';
	playButton.style.opacity = "1";
});

// *************************************** //
// * ++++++++ Home Page Video ++++++++++ * //
// ************************************** //

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      autohide: 1,
      modestbranding: 1,
      mute: 1,
      suggestedQuality: 'default',
      origin: 'https://www.dublinseo.net'
    },
    videoId: document.getElementById('player').dataset.id,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  player.mute();
}

var done = false;

function onPlayerStateChange(e) {
  var id = document.getElementById('player').dataset.id;

  if (e.data === YT.PlayerState.ENDED) {
    player.loadVideoById(id);
  }
}
