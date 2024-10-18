function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Locomotive Scroll for smooth scrolling
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  // Sync Locomotive Scroll updates with ScrollTrigger
  locoScroll.on("scroll", ScrollTrigger.update);

  // Proxy ScrollTrigger methods to handle Locomotive Scroll
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // Refresh both Locomotive Scroll and ScrollTrigger on window updates
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

loco();  // Initialize smooth scrolling with Locomotive Scroll

// Text Animation for #text3 > h2
var clutter = "";
document.querySelector("#text3>h2").textContent.split("").forEach(function(dets) {
  clutter += `<span>${dets}</span>`;
});
document.querySelector("#text3>h2").innerHTML = clutter;

gsap.to("#text3>h2>span", {
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "50% 50%",
    end: "70% top",
    scrub: true,
  },
  color: "white",
  stagger: 0.5,
  ease:"power4.inOut"
});

// Pinning #page2 section
gsap.to("#page2", {
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
});

// Canvas animation for image sequence on #page3
function canvas() {
  const canvas = document.querySelector("#home");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Resize the canvas when window is resized
  window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();  // Re-render the canvas after resize
  });

  // Dynamically generate image file paths using a loop
  function generateFilePaths() {
    const paths = [];
    const totalFrames = 66;
    const startFrame = 7;
    const step = 3;

    for (let i = 0; i < totalFrames; i++) {
      const frameNumber = String(startFrame + i * step).padStart(5, '0');
      paths.push(`./image/frames${frameNumber}.png`);
    }
    return paths;
  }

  const frameCount = 66;
  const images = [];
  const imageSeq = { frame: 1 };

  const imagePaths = generateFilePaths();  // Get all image paths

  // Load images into the array
  imagePaths.forEach((src) => {
    const img = new Image();
    img.src = src;
    images.push(img);
  });

  // Scroll animation for canvas frame sequence
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.5,
      trigger: "#page3",
      start: "top top",
      end: "250% top",
      scroller: "#main",
    },
    onUpdate: render,
  });

  // Render the current frame of the animation
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  // Scale and center the image on the canvas
  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }

  // Pinning the canvas section
  ScrollTrigger.create({
    trigger: "#page3",
    pin: true,
    scroller: "#main",
    start: "top top",
    end: "250% top",
  });
}

canvas();  // Initialize the canvas animation


// PAGE4
var clutter = "";
document.querySelector("#home2>h2").textContent.split("").forEach(function(dets) {
  clutter += `<span>${dets}</span>`;
});
document.querySelector("#home2>h2").innerHTML = clutter;

gsap.to("#home2>h2>span", {
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "50% 50%",
    end: "70% top",
    scrub: true,
  },
  color: "white",
  stagger: 0.3,
  ease:"power4.inOut"
});

// Pinning #page4 section
gsap.to("#page4", {
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
});


function canvas1() {
  const canvas = document.querySelector("#home3");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Resize the canvas when window is resized
  window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();  // Re-render the canvas after resize
  });

  // Dynamically generate image file paths using a loop
  function generateFilePaths() {
    const paths = [];
    const totalFrames = 54;
    const startFrame = 4;
    const step = 3;

    for (let i = 0; i < totalFrames; i++) {
      const frameNumber = String(startFrame + i * step).padStart(5, '0');
      paths.push(`./image/bridges${frameNumber}.png`);
    }
    return paths;
  }

  const frameCount = 54;
  const images = [];
  const imageSeq = { frame: 1 };

  const imagePaths = generateFilePaths();  // Get all image paths

  // Load images into the array
  imagePaths.forEach((src) => {
    const img = new Image();
    img.src = src;
    images.push(img);
  });

  // Scroll animation for canvas frame sequence
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 0.5,
      trigger: "#page5",
      start: "top top",
      end: "250% top",
      scroller: "#main",
    },
    onUpdate: render,
  });

  // Render the current frame of the animation
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  // Scale and center the image on the canvas
  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }

  // Pinning the canvas section
  ScrollTrigger.create({
    trigger: "#page5",
    pin: true,
    scroller: "#main",
    start: "top top",
    end: "250% top",
  });
}

canvas1()


// page6
var clutter = "";
document.querySelector("#home4>h2").textContent.split("").forEach(function(dets) {
  clutter += `<span>${dets}</span>`;
});
document.querySelector("#home4>h2").innerHTML = clutter;

gsap.to("#home4>h2>span", {
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    start: "50% 50%",
    end: "70% top",
    scrub: true,
  },
  color: "white",
  stagger: 0.4,
  ease:"power4.inOut"
});

// Pinning #page4 section
gsap.to("#page6", {
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
  },
});