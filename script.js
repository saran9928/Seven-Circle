document.addEventListener("DOMContentLoaded", () => {
  const whatsappNumber = "919567931726";
  const whatsappMessage = "Hey Seven Circle, I need some help getting my business out there more. How do your packages work?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  document.querySelectorAll("a").forEach((link) => {
    if (link.textContent.trim().toLowerCase() !== "whatsapp") return;
    link.href = whatsappLink;
    link.target = "_blank";
    link.rel = "noreferrer";
  });

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  const cursor = document.querySelector(".cursor-glow");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (menuToggle && header && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("no-scroll", isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      header.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    }));
  }

  if (cursor && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.classList.add("is-visible");
    }, { passive: true });
    document.querySelectorAll("a, button, summary, input, textarea, select").forEach((element) => {
      element.addEventListener("mouseenter", () => cursor.classList.add("is-hovering"));
      element.addEventListener("mouseleave", () => cursor.classList.remove("is-hovering"));
    });
  }

  const tickerTrack = document.querySelector(".ticker-track");
  const tickerGroup = tickerTrack?.querySelector(".ticker-group");
  if (tickerTrack && tickerGroup) {
    const updateTickerDistance = () => {
      tickerTrack.style.setProperty("--ticker-end", `-${tickerGroup.getBoundingClientRect().width}px`);
    };
    const activateTicker = () => {
      updateTickerDistance();
      tickerTrack.classList.add("is-ready");
    };
    tickerTrack.classList.remove("is-ready");
    if (document.fonts?.ready) document.fonts.ready.then(() => window.requestAnimationFrame(activateTicker));
    else activateTicker();
    window.addEventListener("resize", updateTickerDistance);
    if ("ResizeObserver" in window) new ResizeObserver(updateTickerDistance).observe(tickerGroup);
  }

  const serviceModal = document.querySelector("#service-modal");
  if (serviceModal) {
    const serviceDetails = {
      branding: { number: "01", title: "Branding", summary: "A brand people remember, not just recognize.", whatsappMessage: "Hey Seven Circle, I need some help with Branding for my business. when can we talk?", items: ["Logo design", "Brand color palette & typography", "Brand guidelines document", "Business card & letterhead design", "Brand voice & positioning", "Packaging / label design (if applicable)"] },
      social: { number: "02", title: "Social Media Management", summary: "A social presence that feels alive.", whatsappMessage: "Hey Seven Circle, can you manage my business's social media pages?", items: ["Content research & trend tracking", "Monthly content calendar", "Post design (feed + stories)", "Reels / short-video editing", "Caption & hashtag writing", "Scheduling & publishing", "Community management (comments / DMs)", "Monthly performance report"] },
      content: { number: "03", title: "Content Creation", summary: "Posters, reels, carousels — on repeat.", whatsappMessage: "Hey Seven Circle, I need to create content for my business. Can you help me?", items: ["Poster / graphic design", "Reels & short-video production", "Carousel design", "Product shoot direction", "Brand templates (reusable design kits)", "Content repurposing across platforms"] },
      copywriting: { number: "04", title: "Copywriting", summary: "Words that sound like you — only sharper.", items: ["Social captions", "Website copy", "Ad copy", "Product descriptions", "WhatsApp / email broadcast copy", "Brand voice & tone guide"] },
      ads: { number: "05", title: "Paid Advertising", summary: "Better reach. Smarter spend.", items: ["Meta Ads (Instagram / Facebook) setup & management", "Google Ads (Search / Display)", "Audience research & targeting", "Ad creative design", "A/B testing", "Budget optimization", "Monthly ad performance report"] },
      google: { number: "06", title: "Google Business Management", summary: "Be found when nearby matters most.", items: ["Google Business Profile setup & optimization", "Review management & response", "Local citations & directory listings", "Keyword-optimized business description", "Photos & posts on your profile", "Local ranking tracking"] },
      whatsapp: { number: "07", title: "WhatsApp Automation", summary: "Make every enquiry easier to handle.", items: ["Auto-reply & greeting messages", "Product catalog setup", "Broadcast campaigns", "FAQ / order chatbot flow", "Lead capture & follow-up automation", "CRM / order integration"] },
      website: { number: "08", title: "Website Development", summary: "A digital home built to convert.", items: ["Landing page design", "Full multi-page business website", "E-commerce store setup", "Mobile optimization", "Contact / lead forms", "Basic on-page SEO", "Hosting & maintenance"] },
      marketplace: { number: "09", title: "Marketplace Listings", summary: "Products that earn the click.", items: ["Title & description optimization", "Keyword research", "Listing images / A+ content", "Category & pricing setup", "Inventory / catalog management", "Review & rating strategy", "Platforms: Amazon, Flipkart"] },
      ai: { number: "10", title: "AI Automation & Chatbots", summary: "More time back in your day.", items: ["AI chatbot builder (website / WhatsApp)", "Appointment / booking automation", "Lead qualification automation", "Automated follow-ups & reminders", "Review-request automation", "Internal ops automation (invoicing, reporting)"] },
      "digital-card": { number: "11", title: "Digital Business Card", summary: "Your details, one tap away.", items: ["Digital card design (name, photo, contact)", "Tap-to-share / QR code setup", "Social & WhatsApp links integration", "Custom landing page for the card", "Editable / updatable anytime", "Analytics (who viewed / saved your card)"] },
      "app-development": { number: "12", title: "App Development", summary: "Turn your business idea into a powerful mobile experience.", items: ["Android & iOS app development", "Customer & service apps", "Booking and appointment apps", "E-commerce apps", "Business utility apps", "App UI/UX design", "API & third-party integrations", "App maintenance and updates"] },
      "business-software": { number: "13", title: "Business Software Development", summary: "Less paperwork. Fewer repetitive tasks. More control over your business.", items: ["Custom business management software", "Digital customer records", "Billing & invoicing systems", "Inventory management", "Staff & task management", "Booking & appointment systems", "Reports & dashboards", "Workflow automation", "Digital forms and document management", "WhatsApp / payment / API integrations"] },
      "local-seo-geo": { number: "14", title: "Local SEO & GEO", summary: "Get discovered on Google, Maps, and the next generation of AI search.", items: ["Local SEO", "Google Business Profile optimization", "Google Maps visibility", "Local keyword strategy", "On-page SEO", "Technical SEO", "Review & reputation signals", "Local citations", "Product SEO", "Content optimization", "AI / Generative Engine Optimization (GEO)", "Search visibility tracking & reporting"] },
      custom: { number: "15", title: "Custom / Something Else", summary: "Got a need that doesn’t fit above? Let’s talk.", custom: true }
    };
    const standard = serviceModal.querySelector("#service-modal-standard");
    const custom = serviceModal.querySelector("#service-modal-custom");
    const modalNumber = serviceModal.querySelector("#service-modal-number");
    const modalTitle = serviceModal.querySelector("#service-modal-title");
    const modalSummary = serviceModal.querySelector("#service-modal-summary");
    const modalList = serviceModal.querySelector("#service-modal-list");
    const modalCta = serviceModal.querySelector("#service-modal-cta");
    let lastServiceCard = null;

    const closeServiceModal = () => {
      serviceModal.classList.remove("is-open");
      serviceModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      if (lastServiceCard) lastServiceCard.focus();
    };

    document.querySelectorAll(".service-card[data-service-key]").forEach((card) => {
      card.addEventListener("click", () => {
        const data = serviceDetails[card.dataset.serviceKey];
        if (!data) return;
        lastServiceCard = card;
        modalNumber.textContent = data.number;
        modalTitle.textContent = data.title;
        modalSummary.textContent = data.summary;
        modalList.innerHTML = (data.items || []).map((item) => `<li>${item}</li>`).join("");
        standard.hidden = Boolean(data.custom);
        custom.hidden = !data.custom;
        if (!data.custom) {
          const message = data.whatsappMessage || `Hey Seven Circle, I need some help with ${data.title} for my business. when can we talk?`;
          modalCta.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        }
        serviceModal.classList.add("is-open");
        serviceModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("no-scroll");
        serviceModal.querySelector(".service-modal-close").focus();
      });
    });
    serviceModal.querySelectorAll("[data-close-service]").forEach((element) => element.addEventListener("click", closeServiceModal));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && serviceModal.classList.contains("is-open")) closeServiceModal();
    });
    const customForm = serviceModal.querySelector("#custom-service-form");
    const customMessage = serviceModal.querySelector("#custom-service-message");
    customForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = customMessage.value.trim() || "I have a custom requirement.";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hey Seven Circle, ${message}`)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  const packageModal = document.querySelector("#package-modal");
  const packageTrigger = document.querySelector(".package-pricing-trigger");
  if (packageModal && packageTrigger) {
    const closePackageModal = () => {
      packageModal.classList.remove("is-open");
      packageModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      packageTrigger.focus();
    };
    const openPackageModal = () => {
      packageModal.classList.add("is-open");
      packageModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      packageModal.querySelector(".package-modal-close").focus();
    };
    packageTrigger.addEventListener("click", openPackageModal);
    packageModal.querySelectorAll("[data-close-packages]").forEach((element) => element.addEventListener("click", closePackageModal));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && packageModal.classList.contains("is-open")) closePackageModal();
    });
  }

  const workModal = document.querySelector("#work-modal");
  const workTriggers = document.querySelectorAll(".case-study[data-work-key]");
  if (workModal && workTriggers.length) {
    const workDetails = {
      feed: {
        category: "Content systems · Social",
        image: "assets/content-studio.png",
        alt: "Content studio scene with phone and campaign cards",
        title: "Build a feed people",
        accent: "want to return to.",
        summary: "Direction, recurring formats and a consistent visual world — so every post compounds into a stronger brand.",
        sections: [
          { heading: "A feed is a place, not a queue.", paragraphs: ["The strongest social presence feels recognisable before someone reads every word. It has a point of view, a pace and a set of formats people learn to trust.", "We shape the visual language, recurring content pillars and publishing rhythm together so the feed gets easier to sustain — and more valuable over time."] },
          { heading: "Consistency with room to move.", paragraphs: ["The system leaves space for timely moments without asking every post to reinvent the brand. Useful ideas, proof points and offers can all live in the same world."] }
        ]
      },
      campaign: {
        category: "Production · Campaign",
        image: "assets/hero-studio.png",
        alt: "Cinematic camera setup on a warmly lit production set",
        title: "Give the big moment",
        accent: "the right frame.",
        summary: "From first brief to final cut, we assemble the right creative and production partners around the moment that matters.",
        sections: [
          { heading: "Start with the feeling.", paragraphs: ["A campaign film has to do more than look expensive. It needs a clear emotional centre, a memorable image and a reason for the audience to keep watching.", "We move from concept and script through production planning, the shoot and post-production with one point of view holding the pieces together."] },
          { heading: "Built for the places it will live.", paragraphs: ["The final work is shaped for launch films, social cut-downs, reels and the smaller moments that keep the campaign moving after release."] }
        ]
      },
      website: {
        category: "Digital presence · Website",
        image: "assets/hero-marketing.png",
        alt: "Laptop and visual identity materials on a dark creative desk",
        title: "Make your website",
        accent: "work harder.",
        summary: "A clear, confident digital home that turns attention into the next useful action.",
        sections: [
          { heading: "Clarity before decoration.", paragraphs: ["A good website makes the right story easy to find. We organise the offer, sharpen the message and create a visual rhythm that helps people understand what to do next.", "Every page has a job — from the first impression to the enquiry form — so the site feels considered and useful instead of merely polished."] },
          { heading: "Made to stay useful.", paragraphs: ["Responsive layouts, reusable content patterns and a clean hand-off make it easier for the site to keep working as the business grows."] }
        ]
      },
      branding: {
        category: "Identity · Branding",
        image: "assets/hero-writing.png",
        alt: "Hand writing in a notebook beside a laptop on a dark desk",
        title: "Make the brand",
        accent: "easy to remember.",
        summary: "A sharper point of view, a more useful visual system and a voice that feels like you everywhere.",
        sections: [
          { heading: "Find the thing only you can say.", paragraphs: ["Branding starts with the choices underneath the logo: what the business stands for, who it is for and what it wants to be known for.", "We turn those choices into a focused identity system — colour, type, imagery, voice and practical rules that make everyday communication feel more joined up."] },
          { heading: "Distinct, not difficult.", paragraphs: ["The result is designed to be recognisable in a feed, clear on a sign and easy for a team to use without losing the character that made it feel right in the first place."] }
        ]
      },
      automation: {
        category: "Systems · AI automation",
        image: "assets/production-studio.png",
        alt: "Camera, laptop and creative tools in a dark studio",
        title: "Build calmer systems",
        accent: "behind the scenes.",
        summary: "Automation that handles repetition while the human conversation stays human.",
        sections: [
          { heading: "Give repetitive work somewhere to go.", paragraphs: ["The best automation quietly takes care of the hand-offs that slow a team down: first replies, lead capture, reminders, bookings and routine updates.", "We map the real workflow before choosing the tool, so the system fits how the business already works instead of creating another layer to manage."] },
          { heading: "Helpful, not robotic.", paragraphs: ["Clear prompts, useful context and a well-timed human handover keep the experience warm while giving the team more time for the work that needs judgement."] }
        ]
      }
    };
    const modalCategory = workModal.querySelector("#work-modal-category");
    const modalImage = workModal.querySelector("#work-modal-image");
    const modalTitle = workModal.querySelector("#work-modal-title");
    const modalSummary = workModal.querySelector("#work-modal-summary");
    const modalBody = workModal.querySelector("#work-modal-body");
    const modalCta = workModal.querySelector("#work-modal-cta");
    let lastWorkTrigger = null;

    const closeWorkModal = () => {
      workModal.classList.remove("is-open");
      workModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      lastWorkTrigger?.focus();
    };

    const openWorkModal = (trigger) => {
      const data = workDetails[trigger.dataset.workKey];
      if (!data) return;
      lastWorkTrigger = trigger;
      modalCategory.textContent = data.category;
      modalImage.src = data.image;
      modalImage.alt = data.alt;
      modalTitle.innerHTML = `${data.title} <em>${data.accent}</em>`;
      modalSummary.textContent = data.summary;
      modalBody.innerHTML = data.sections.map((section) => `<section><h3>${section.heading}</h3>${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}</section>`).join("");
      modalCta.href = `contact.html?service=${encodeURIComponent(data.category)}`;
      workModal.classList.add("is-open");
      workModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      workModal.querySelector(".work-modal-close").focus();
    };

    workTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => openWorkModal(trigger));
      trigger.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        openWorkModal(trigger);
      });
    });
    workModal.querySelectorAll("[data-close-work]").forEach((element) => element.addEventListener("click", closeWorkModal));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && workModal.classList.contains("is-open")) closeWorkModal();
    });
  }

  const dragonfly = document.createElement("button");
  dragonfly.type = "button";
  dragonfly.className = "scroll-dragonfly";
  dragonfly.setAttribute("aria-label", "Scroll down");
  dragonfly.innerHTML = `
    <svg class="dragonfly-visual" viewBox="0 0 120 110" aria-hidden="true">
      <defs>
        <linearGradient id="dragonflyWingGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fff5a6"></stop>
          <stop offset=".42" stop-color="#f4da4c"></stop>
          <stop offset="1" stop-color="#bd9715"></stop>
        </linearGradient>
        <radialGradient id="dragonflyBodyMetal" cx="35%" cy="28%" r="78%">
          <stop offset="0" stop-color="#4c4c4c"></stop>
          <stop offset=".38" stop-color="#171717"></stop>
          <stop offset="1" stop-color="#050505"></stop>
        </radialGradient>
      </defs>
      <g class="dragonfly-wings dragonfly-wing-left">
        <path d="M55 45C39 18 19 8 9 15C8 30 21 45 50 54Z"></path>
        <path class="dragonfly-wing-gloss" d="M49 47C36 26 22 17 14 19C21 28 32 38 49 47Z"></path>
        <path class="dragonfly-wing-vein" d="M50 53L19 22M51 56L14 63"></path>
        <path d="M53 54C32 48 12 52 7 65C21 77 39 74 57 62Z"></path>
        <path class="dragonfly-wing-gloss" d="M48 58C33 55 20 57 13 63C23 67 34 67 50 61Z"></path>
      </g>
      <g class="dragonfly-wings dragonfly-wing-right">
        <path d="M65 45C81 18 101 8 111 15C112 30 99 45 70 54Z"></path>
        <path class="dragonfly-wing-gloss" d="M71 47C84 26 98 17 106 19C99 28 88 38 71 47Z"></path>
        <path class="dragonfly-wing-vein" d="M70 53L101 22M69 56L106 63"></path>
        <path d="M67 54C88 48 108 52 113 65C99 77 81 74 63 62Z"></path>
        <path class="dragonfly-wing-gloss" d="M72 58C87 55 100 57 107 63C97 67 86 67 70 61Z"></path>
      </g>
      <path class="dragonfly-antenna" d="M57 34L47 25M63 34L73 25"></path>
      <circle class="dragonfly-head" cx="60" cy="37" r="6"></circle>
      <path class="dragonfly-body" d="M56 41C55 51 56 67 60 91C64 67 65 51 64 41Z"></path>
      <path class="dragonfly-body-highlight" d="M59 43C58 53 59 69 60 82"></path>
      <path class="dragonfly-body-accent" d="M57.5 54H62.5M58 64H62M59 74H61M59.5 84H60.5"></path>
    </svg>
    <span class="dragonfly-arrow" aria-hidden="true">↑</span>
  `;
  const dragonflyTrail = document.createElement("span");
  dragonflyTrail.className = "scroll-dragonfly-trail";
  dragonflyTrail.setAttribute("aria-hidden", "true");
  document.body.appendChild(dragonflyTrail);
  document.body.appendChild(dragonfly);

  let scrollFrame = null;
  let previousScrollY = window.scrollY;
  const updateDragonfly = () => {
    const root = document.documentElement;
    const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    const isAtEnd = maxScroll <= 1 || window.scrollY >= maxScroll - 48;
    const isMovingUp = window.scrollY < previousScrollY - 1;
    const maxTravel = reducedMotion ? 0 : Math.min(window.innerHeight * 0.45, 430);
    dragonfly.style.setProperty("--fly-y", `${Math.round(progress * maxTravel)}px`);
    dragonflyTrail.style.setProperty("--trail-height", `${Math.max(0, Math.round(progress * maxTravel - 7))}px`);
    dragonfly.classList.toggle("is-end", isAtEnd);
    dragonfly.classList.toggle("is-flying-down", progress > 0.02 && !isAtEnd && !isMovingUp);
    dragonfly.classList.toggle("is-flying-up", isMovingUp);
    dragonflyTrail.classList.toggle("is-active", progress > 0.025 && !reducedMotion);
    dragonfly.setAttribute("aria-label", isAtEnd ? "Back to top" : "Scroll down");
    previousScrollY = window.scrollY;
    scrollFrame = null;
  };
  const requestDragonflyUpdate = () => {
    if (scrollFrame === null) scrollFrame = window.requestAnimationFrame(updateDragonfly);
  };
  window.addEventListener("scroll", requestDragonflyUpdate, { passive: true });
  window.addEventListener("resize", requestDragonflyUpdate);
  dragonfly.addEventListener("click", () => {
    const behavior = reducedMotion ? "auto" : "smooth";
    if (dragonfly.classList.contains("is-end")) window.scrollTo({ top: 0, behavior });
    else window.scrollBy({ top: Math.min(window.innerHeight * 0.72, 640), behavior });
  });
  updateDragonfly();

  document.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (reducedMotion || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target && link.target !== "_self") return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;
      event.preventDefault();
      document.body.classList.add("is-leaving");
      window.setTimeout(() => window.location.assign(destination.href), 340);
    });
  });

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  const form = document.querySelector("#contact-form");
  const success = document.querySelector("#form-success");
  const serviceSelect = document.querySelector("#service-select");
  if (form && success) {
    const params = new URLSearchParams(window.location.search);
    if (params.get("service") === "cinematic" && serviceSelect) serviceSelect.value = "Cinematic Ads Production";
    if (params.get("service") === "custom-package" && serviceSelect) serviceSelect.value = "Custom package consultation";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  document.querySelectorAll("details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) detail.animate([{ opacity: .6 }, { opacity: 1 }], { duration: 250, easing: "ease-out" });
    });
  });
});
