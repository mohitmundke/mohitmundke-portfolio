/**
 * MONOLITH. // ARCHIVAL SOUND & PHYSICAL EDITIONS
 * Cinematic Portal & Interactive Application
 * 
 * Features:
 * 1. Reversible Scroll-Driven Portal Engine (60fps rAF with zero layout thrashing)
 * 2. System B: One-Time Reveal Animations via IntersectionObserver
 * 3. Tactile Throwable Physical Release-Card Deck (Pointer capture, touch, keyboard, buttons)
 * 4. Statement Fold Floating & Rotating Acoustic Sculpture
 * 5. Minimalist Hairline Artist Roster & Release Schedule
 * 6. Architectural Cropped Oversized Typography Footer
 * 7. Full prefers-reduced-motion & WCAG Accessibility Support
 */

(function () {
  'use strict';

  const data = window.PORTAL_DATA;
  if (!data) {
    console.error('PORTAL_DATA not found. Please ensure data.js is loaded.');
    return;
  }

  // State
  let activeCardIndex = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let currentDeltaX = 0;
  let currentDeltaY = 0;
  let activePointerId = null;
  let isThrowing = false;

  // DOM Elements Cache
  const elements = {};

  function init() {
    cacheElements();
    renderAllSections();
    bindScrollPortal();
    bindThrowableDeck();
    bindRevealObserver();
    bindNavigation();
    bindDispatchModal();
  }

  function cacheElements() {
    elements.heroTrack = document.getElementById('hero-scroll-track');
    elements.heroStage = document.getElementById('hero-sticky-stage');
    elements.panelLeft = document.getElementById('hero-panel-left');
    elements.panelRight = document.getElementById('hero-panel-right');
    elements.bgPhoto = document.getElementById('hero-bg-photo');
    elements.duotoneLayer = document.getElementById('hero-duotone-layer');
    elements.wordmarkContainer = document.getElementById('hero-wordmark-container');
    elements.wordmarkText = document.getElementById('hero-wordmark-text');
    elements.wordmarkLeft = document.getElementById('wordmark-half-left');
    elements.wordmarkRight = document.getElementById('wordmark-half-right');
    elements.dotAmber = document.getElementById('hero-dot-amber');
    elements.dotTeal = document.getElementById('hero-dot-teal');
    elements.statementSection = document.getElementById('statement');
    elements.statementFloatWrap = document.getElementById('statement-float-img-wrap');
    elements.deckContainer = document.getElementById('deck-container');
    elements.deckIndicators = document.getElementById('deck-indicators');
    elements.deckCounter = document.getElementById('deck-counter');
    elements.mobileMenu = document.getElementById('mobile-menu');
    elements.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    elements.dispatchModal = document.getElementById('dispatch-modal');
  }

  // ═══════════════════════════════════════════════════════════════════
  // 1. RENDER STATIC & DYNAMIC SECTIONS
  // ═══════════════════════════════════════════════════════════════════
  function renderAllSections() {
    renderCornerMetadata();
    renderStatementSection();
    renderDeckCards();
    renderRosterSection();
    renderDatesSection();
    renderClosingSection();
  }

  function renderCornerMetadata() {
    const meta = data.cornerMetadata;
    const cTL = document.getElementById('corner-tl');
    const cTR = document.getElementById('corner-tr');
    const cBL = document.getElementById('corner-bl');
    const cBR = document.getElementById('corner-br');

    if (cTL) cTL.innerHTML = `<span class="label-mono label-amber block mb-1">${meta.topLeft.label}</span><span class="text-xs text-[#EDE7DC] font-medium leading-tight block">${meta.topLeft.text}</span>`;
    if (cTR) cTR.innerHTML = `<span class="label-mono label-teal block mb-1">${meta.topRight.label}</span><span class="text-xs text-[#EDE7DC] font-medium leading-tight block">${meta.topRight.text}</span>`;
    if (cBL) cBL.innerHTML = `<span class="label-mono text-[#9EA5A8] block mb-1">${meta.bottomLeft.label}</span><span class="text-xs text-[#EDE7DC] font-medium leading-tight block">${meta.bottomLeft.text}</span>`;
    if (cBR) cBR.innerHTML = `<span class="label-mono label-amber block mb-1">${meta.bottomRight.label}</span><span class="text-xs text-[#EDE7DC] font-medium leading-tight block">${meta.bottomRight.text}</span>`;
  }

  function renderStatementSection() {
    const st = data.statement;
    const leadEl = document.getElementById('statement-lead');
    const detailsEl = document.getElementById('statement-details');

    if (leadEl) {
      leadEl.innerHTML = `${st.statementLead}<span class="statement-highlight">${st.statementHighlight}</span>${st.statementFollow}`;
    }

    if (detailsEl) {
      detailsEl.innerHTML = st.details.map(d => `
        <div class="border-t border-hairline pt-4">
          <span class="label-mono label-amber block mb-1.5">${d.term}</span>
          <p class="text-xs text-[#9EA5A8] leading-relaxed">${d.description}</p>
        </div>
      `).join('');
    }
  }

  function renderDeckCards() {
    if (!elements.deckContainer) return;
    const releases = data.catalogue.releases;

    elements.deckContainer.innerHTML = releases.map((rel, index) => {
      return `
        <div 
          class="sleeve-card" 
          id="sleeve-card-${index}"
          data-index="${index}"
          role="group"
          aria-label="Release ${index + 1} of ${releases.length}: ${rel.title} by ${rel.artist}"
          style="background: ${rel.palette};"
        >
          <!-- Vinyl Disc Preview Peeking -->
          <div class="vinyl-disc-edge" aria-hidden="true">
            <div class="vinyl-disc-groove"></div>
            <div class="vinyl-disc-label" style="background: ${rel.accentColor};"></div>
          </div>

          <!-- Abstract Cover Artwork Pattern -->
          <div class="card-cover-artwork" aria-hidden="true">
            ${getGraphicSvg(rel.coverGraphic, rel.accentColor)}
          </div>

          <!-- Top Metadata -->
          <div class="card-content-wrap">
            <div class="flex items-center justify-between border-b border-hairline pb-3">
              <span class="label-mono" style="color: ${rel.accentColor};">${rel.catalogueNumber}</span>
              <span class="label-mono text-[#9EA5A8]">${rel.date}</span>
            </div>

            <!-- Middle Title & Artist -->
            <div class="my-auto py-6">
              <span class="label-mono text-[#6C7378] block mb-1.5">${rel.genre}</span>
              <h3 class="font-display font-bold text-2xl sm:text-3xl text-[#EDE7DC] tracking-tight leading-tight">
                ${rel.title}
              </h3>
              <p class="font-display font-medium text-sm text-[#9EA5A8] mt-1">
                ${rel.artist}
              </p>
            </div>

            <!-- Bottom Specs -->
            <div class="border-t border-hairline pt-3 flex items-center justify-between text-xs font-body text-[#9EA5A8]">
              <span>${rel.format}</span>
              <span class="label-mono" style="color: ${rel.accentColor};">${rel.edition.split('·')[0]}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    updateDeckStackTransforms();
    renderDeckIndicators();
  }

  function getGraphicSvg(type, color) {
    if (type === 'geometric-rings') {
      return `
        <svg class="w-full h-full" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="160" stroke="${color}" stroke-width="1.5" stroke-dasharray="4 8" opacity="0.6"/>
          <circle cx="200" cy="200" r="110" stroke="${color}" stroke-width="1.5" opacity="0.4"/>
          <circle cx="200" cy="200" r="60" stroke="${color}" stroke-width="2" opacity="0.8"/>
          <line x1="40" y1="200" x2="360" y2="200" stroke="${color}" stroke-width="1" opacity="0.5"/>
        </svg>
      `;
    } else if (type === 'waveform-grid') {
      return `
        <svg class="w-full h-full" viewBox="0 0 400 400" fill="none">
          <path d="M40 200 Q 100 120, 160 200 T 280 200 T 360 200" stroke="${color}" stroke-width="2" opacity="0.7"/>
          <path d="M40 220 Q 100 160, 160 220 T 280 220 T 360 220" stroke="${color}" stroke-width="1" opacity="0.4"/>
          <path d="M40 180 Q 100 80, 160 180 T 280 180 T 360 180" stroke="${color}" stroke-width="1" opacity="0.3"/>
          <circle cx="200" cy="200" r="140" stroke="${color}" stroke-width="1" stroke-dasharray="2 6" opacity="0.3"/>
        </svg>
      `;
    } else if (type === 'architectural-lines') {
      return `
        <svg class="w-full h-full" viewBox="0 0 400 400" fill="none">
          <rect x="60" y="60" width="280" height="280" stroke="${color}" stroke-width="1" opacity="0.5"/>
          <line x1="60" y1="60" x2="340" y2="340" stroke="${color}" stroke-width="1.5" opacity="0.7"/>
          <line x1="60" y1="340" x2="340" y2="60" stroke="${color}" stroke-width="1" opacity="0.3"/>
          <circle cx="200" cy="200" r="80" stroke="${color}" stroke-width="1.5" opacity="0.6"/>
        </svg>
      `;
    } else if (type === 'concentric-arcs') {
      return `
        <svg class="w-full h-full" viewBox="0 0 400 400" fill="none">
          <path d="M80 320 A 160 160 0 0 1 320 320" stroke="${color}" stroke-width="2" opacity="0.7"/>
          <path d="M120 320 A 120 120 0 0 1 280 320" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
          <path d="M160 320 A 80 80 0 0 1 240 320" stroke="${color}" stroke-width="1" opacity="0.3"/>
        </svg>
      `;
    } else {
      return `
        <svg class="w-full h-full" viewBox="0 0 400 400" fill="none">
          <line x1="80" y1="100" x2="80" y2="300" stroke="${color}" stroke-width="2" opacity="0.7"/>
          <line x1="120" y1="140" x2="120" y2="260" stroke="${color}" stroke-width="3" opacity="0.6"/>
          <line x1="160" y1="80" x2="160" y2="320" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
          <line x1="200" y1="120" x2="200" y2="280" stroke="${color}" stroke-width="4" opacity="0.8"/>
          <line x1="240" y1="160" x2="240" y2="240" stroke="${color}" stroke-width="2" opacity="0.5"/>
          <line x1="280" y1="90" x2="280" y2="310" stroke="${color}" stroke-width="1.5" opacity="0.6"/>
          <line x1="320" y1="130" x2="320" y2="270" stroke="${color}" stroke-width="2" opacity="0.7"/>
        </svg>
      `;
    }
  }

  function renderDeckIndicators() {
    if (!elements.deckIndicators || !elements.deckCounter) return;
    const total = data.catalogue.releases.length;

    elements.deckCounter.textContent = `0${activeCardIndex + 1} / 0${total}`;

    elements.deckIndicators.innerHTML = Array.from({ length: total }).map((_, i) => {
      return `
        <button 
          class="deck-indicator-dot ${i === activeCardIndex ? 'active' : ''}" 
          data-target="${i}"
          aria-label="View sleeve ${i + 1}"
        ></button>
      `;
    }).join('');

    elements.deckIndicators.querySelectorAll('.deck-indicator-dot').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = parseInt(e.currentTarget.getAttribute('data-target'), 10);
        if (!isNaN(target) && target !== activeCardIndex) {
          activeCardIndex = target;
          updateDeckStackTransforms();
          renderDeckIndicators();
        }
      });
    });
  }

  function renderRosterSection() {
    const listEl = document.getElementById('roster-list');
    if (!listEl) return;

    listEl.innerHTML = data.roster.artists.map((art, idx) => `
      <div class="roster-row reveal-item" style="transition-delay: ${idx * 0.08}s;">
        <div class="flex items-center gap-4">
          <span class="label-mono label-amber w-40 sm:w-48 shrink-0">${art.category}</span>
          <h3 class="roster-artist-name">${art.name}</h3>
        </div>
        <div class="flex items-center gap-6">
          <span class="text-xs font-body text-[#6C7378] hidden md:inline-block">${art.origin}</span>
          <span class="label-mono text-[#9EA5A8] tracking-widest">${art.releaseCount}</span>
        </div>
      </div>
    `).join('');
  }

  function renderDatesSection() {
    const tbody = document.getElementById('dates-tbody');
    if (!tbody) return;

    tbody.innerHTML = data.releaseDates.dates.map((d, idx) => `
      <tr class="reveal-item" style="transition-delay: ${idx * 0.07}s;">
        <td class="label-mono label-amber font-semibold">${d.date}</td>
        <td class="label-mono text-[#9EA5A8]">${d.catalogueNumber}</td>
        <td>
          <span class="date-title">${d.title}</span>
        </td>
        <td class="font-display font-medium text-[#EDE7DC]">${d.artist}</td>
        <td class="text-xs text-[#9EA5A8]">${d.format}</td>
        <td>
          <span class="date-status-pill">${d.status}</span>
        </td>
      </tr>
    `).join('');
  }

  function renderClosingSection() {
    const cl = data.closing;
    const headline = document.getElementById('closing-headline');
    const subtext = document.getElementById('closing-subtext');
    const note = document.getElementById('closing-note');
    const colophon = document.getElementById('closing-colophon');

    if (headline) headline.textContent = cl.headline;
    if (subtext) subtext.textContent = cl.subtext;
    if (note) note.textContent = cl.dispatchNote;

    if (colophon) {
      colophon.innerHTML = `
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-hairline text-xs text-[#6C7378] font-body">
          <span>${cl.colophon.copyright}</span>
          <span>${cl.colophon.location}</span>
          <div class="flex flex-wrap items-center gap-4">
            ${cl.colophon.links.map(l => `<a href="${l.href}" class="hover:text-[#EDE7DC] transition-colors">${l.label}</a>`).join('')}
          </div>
        </div>
      `;
    }
  }

  // ═══════════════════════════════════════════════════════════════════
  // 2. SYSTEM A: REVERSIBLE SCROLL-DRIVEN PORTAL ENGINE (60fps rAF)
  // ═══════════════════════════════════════════════════════════════════
  function bindScrollPortal() {
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollEngine();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScrollEngine();
  }

  function updateScrollEngine() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (!elements.heroTrack) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const trackTop = elements.heroTrack.offsetTop;
    const trackHeight = elements.heroTrack.offsetHeight;
    const windowH = window.innerHeight;

    // Normalized progress between 0 and 1 over the 250svh scroll track
    const scrollDistance = trackHeight - windowH;
    let progress = (scrollTop - trackTop) / scrollDistance;
    progress = Math.max(0, Math.min(1, progress));

    // 1. Panels slide horizontally apart
    // Panel translation: from 0% out to 105% (clearing viewport completely)
    const panelTranslate = progress * 105;
    if (elements.panelLeft) {
      elements.panelLeft.style.transform = `translateX(-${panelTranslate}%)`;
    }
    if (elements.panelRight) {
      elements.panelRight.style.transform = `translateX(${panelTranslate}%)`;
    }

    // 2. Full-bleed Hero Photograph scales from slight overscale (1.15) down to 1.0
    const photoScale = 1.15 - (0.15 * progress);
    if (elements.bgPhoto) {
      elements.bgPhoto.style.transform = `scale(${photoScale.toFixed(4)})`;
    }

    // 3. Duotone layer opacity reaches subtle opacity (~0.42)
    const duotoneOpacity = progress * 0.42;
    if (elements.duotoneLayer) {
      elements.duotoneLayer.style.opacity = duotoneOpacity.toFixed(3);
    }

    // 4. Wordmark animation: grows moderately & letter-spacing tightens simultaneously
    // Wordmark scale: 1.0 -> 1.28
    // Letter-spacing: 0.08em -> -0.025em
    const wordmarkScale = 1.0 + (0.28 * progress);
    const letterSpacing = 0.08 - (0.105 * progress);
    if (elements.wordmarkContainer) {
      elements.wordmarkContainer.style.transform = `translate(-50%, -50%) scale(${wordmarkScale.toFixed(4)})`;
    }
    if (elements.wordmarkText) {
      elements.wordmarkText.style.letterSpacing = `${letterSpacing.toFixed(4)}em`;
    }

    // 5. Wordmark Halves separate toward opposite edges
    const halfTranslate = progress * 14; // in viewport width units (vw)
    if (elements.wordmarkLeft) {
      elements.wordmarkLeft.style.transform = `translateX(-${halfTranslate.toFixed(2)}vw)`;
    }
    if (elements.wordmarkRight) {
      elements.wordmarkRight.style.transform = `translateX(${halfTranslate.toFixed(2)}vw)`;
    }

    // 6. Accent dots travel toward opposite corners
    const dotTranslateX = progress * 42; // in vw
    const dotTranslateY = progress * 38; // in vh
    if (elements.dotAmber) {
      elements.dotAmber.style.transform = `translate(-50%, -50%) translate(-${dotTranslateX.toFixed(2)}vw, -${dotTranslateY.toFixed(2)}vh)`;
    }
    if (elements.dotTeal) {
      elements.dotTeal.style.transform = `translate(-50%, -50%) translate(${dotTranslateX.toFixed(2)}vw, ${dotTranslateY.toFixed(2)}vh)`;
    }

    // 7. Statement Section floating circular image drift and gentle rotation
    if (elements.statementSection && elements.statementFloatWrap) {
      const rect = elements.statementSection.getBoundingClientRect();
      const inView = rect.top < windowH && rect.bottom > 0;
      if (inView) {
        const stmtProgress = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
        const floatY = -50 + ((stmtProgress - 0.5) * 40); // percent
        const floatRot = (stmtProgress - 0.5) * 32; // degrees
        elements.statementFloatWrap.style.transform = `translateY(${floatY.toFixed(2)}%) rotate(${floatRot.toFixed(2)}deg)`;
      }
    }
  }

  // ═══════════════════════════════════════════════════════════════════
  // 3. TACTILE THROWABLE RELEASE-CARD DECK
  // ═══════════════════════════════════════════════════════════════════
  function updateDeckStackTransforms() {
    const total = data.catalogue.releases.length;

    for (let i = 0; i < total; i++) {
      const card = document.getElementById(`sleeve-card-${i}`);
      if (!card) continue;

      // Relative offset from current active card
      let relIndex = (i - activeCardIndex + total) % total;

      card.classList.remove('dragging');

      if (relIndex === 0) {
        // Active top card
        card.style.transform = 'translate3d(0, 0, 0) rotate(-1deg) scale(1)';
        card.style.zIndex = '10';
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
      } else if (relIndex === 1) {
        card.style.transform = 'translate3d(12px, 8px, 0) rotate(2.5deg) scale(0.96)';
        card.style.zIndex = '9';
        card.style.opacity = '0.92';
        card.style.pointerEvents = 'none';
      } else if (relIndex === 2) {
        card.style.transform = 'translate3d(-10px, 16px, 0) rotate(-3deg) scale(0.92)';
        card.style.zIndex = '8';
        card.style.opacity = '0.80';
        card.style.pointerEvents = 'none';
      } else if (relIndex === 3) {
        card.style.transform = 'translate3d(8px, 24px, 0) rotate(1.5deg) scale(0.88)';
        card.style.zIndex = '7';
        card.style.opacity = '0.62';
        card.style.pointerEvents = 'none';
      } else {
        card.style.transform = 'translate3d(-4px, 32px, 0) rotate(-2deg) scale(0.84)';
        card.style.zIndex = '6';
        card.style.opacity = '0.40';
        card.style.pointerEvents = 'none';
      }
    }
  }

  function bindThrowableDeck() {
    const deck = elements.deckContainer;
    if (!deck) return;

    // Pointer Events for Drag-to-Throw
    deck.addEventListener('pointerdown', onDeckPointerDown);
    window.addEventListener('pointermove', onDeckPointerMove);
    window.addEventListener('pointerup', onDeckPointerUp);
    window.addEventListener('pointercancel', onDeckPointerUp);

    // Keyboard Arrow Keys navigation
    deck.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        throwCardForward(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        throwCardBackward(-1);
      }
    });

    // Fallback UI Buttons
    const btnNext = document.getElementById('deck-btn-next');
    const btnPrev = document.getElementById('deck-btn-prev');

    if (btnNext) {
      btnNext.addEventListener('click', () => throwCardForward(1));
    }
    if (btnPrev) {
      btnPrev.addEventListener('click', () => throwCardBackward(-1));
    }
  }

  function onDeckPointerDown(e) {
    if (isThrowing) return;
    const topCard = document.getElementById(`sleeve-card-${activeCardIndex}`);
    if (!topCard) return;

    isDragging = true;
    activePointerId = e.pointerId;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    currentDeltaX = 0;
    currentDeltaY = 0;

    topCard.classList.add('dragging');
    try {
      topCard.setPointerCapture(e.pointerId);
    } catch (err) {
      // safe fallback
    }
  }

  function onDeckPointerMove(e) {
    if (!isDragging || e.pointerId !== activePointerId) return;

    currentDeltaX = e.clientX - dragStartX;
    currentDeltaY = e.clientY - dragStartY;

    const topCard = document.getElementById(`sleeve-card-${activeCardIndex}`);
    if (!topCard) return;

    // Rotate proportionally to horizontal travel distance
    const tiltRot = -1 + (currentDeltaX * 0.08);
    topCard.style.transform = `translate3d(${currentDeltaX}px, ${currentDeltaY}px, 0) rotate(${tiltRot}deg) scale(1.03)`;
  }

  function onDeckPointerUp(e) {
    if (!isDragging || (activePointerId !== null && e.pointerId !== activePointerId)) return;
    isDragging = false;

    const topCard = document.getElementById(`sleeve-card-${activeCardIndex}`);
    if (!topCard) return;

    try {
      if (topCard.hasPointerCapture(e.pointerId)) {
        topCard.releasePointerCapture(e.pointerId);
      }
    } catch (err) {}
    activePointerId = null;

    const deckWidth = elements.deckContainer.offsetWidth || 400;
    const threshold = deckWidth * 0.10; // ~10% threshold required by spec (approx 40px)

    if (Math.abs(currentDeltaX) > threshold) {
      // Exceeds threshold: Throw active card in direction of travel!
      const direction = currentDeltaX > 0 ? 1 : -1;
      executeThrowAnimation(topCard, direction, currentDeltaY);
    } else {
      // Snap back smoothly to original position
      topCard.classList.remove('dragging');
      topCard.style.transform = 'translate3d(0, 0, 0) rotate(-1deg) scale(1)';
    }
  }

  function executeThrowAnimation(card, direction, lastY) {
    isThrowing = true;
    card.classList.remove('dragging');

    // Throw beyond deck with directional rotation and vertical lift
    const throwX = direction * 620;
    const throwY = (lastY || 0) - 30;
    const throwRot = direction * 28;

    card.style.transition = 'transform 0.42s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.38s ease';
    card.style.transform = `translate3d(${throwX}px, ${throwY}px, 0) rotate(${throwRot}deg) scale(0.95)`;
    card.style.opacity = '0';

    setTimeout(() => {
      const total = data.catalogue.releases.length;
      activeCardIndex = (activeCardIndex + 1) % total;
      updateDeckStackTransforms();
      renderDeckIndicators();
      isThrowing = false;
    }, 380);
  }

  function throwCardForward(dir) {
    if (isThrowing) return;
    const topCard = document.getElementById(`sleeve-card-${activeCardIndex}`);
    if (topCard) {
      executeThrowAnimation(topCard, dir || 1, -20);
    }
  }

  function throwCardBackward(dir) {
    if (isThrowing) return;
    const total = data.catalogue.releases.length;
    // Step index backwards
    activeCardIndex = (activeCardIndex - 1 + total) % total;
    const newTopCard = document.getElementById(`sleeve-card-${activeCardIndex}`);
    if (newTopCard) {
      newTopCard.style.transition = 'none';
      newTopCard.style.transform = `translate3d(${dir * 550}px, -20px, 0) rotate(${dir * 25}deg) scale(1.02)`;
      newTopCard.style.opacity = '0';
      newTopCard.style.zIndex = '10';

      // Force reflow
      void newTopCard.offsetWidth;

      newTopCard.style.transition = 'transform 0.42s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease';
      newTopCard.style.transform = 'translate3d(0, 0, 0) rotate(-1deg) scale(1)';
      newTopCard.style.opacity = '1';

      setTimeout(() => {
        updateDeckStackTransforms();
        renderDeckIndicators();
      }, 350);
    }
  }

  // ═══════════════════════════════════════════════════════════════════
  // 4. SYSTEM B: ONE-TIME REVEAL ANIMATIONS (IntersectionObserver)
  // ═══════════════════════════════════════════════════════════════════
  function bindRevealObserver() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Fire once per spec!
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    });

    document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
  }

  // ═══════════════════════════════════════════════════════════════════
  // 5. NAVIGATION & MOBILE DRAWER
  // ═══════════════════════════════════════════════════════════════════
  function bindNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (elements.mobileMenu && !elements.mobileMenu.classList.contains('hidden')) {
              elements.mobileMenu.classList.add('hidden');
            }
          }
        }
      });
    });

    if (elements.mobileMenuToggle && elements.mobileMenu) {
      elements.mobileMenuToggle.addEventListener('click', () => {
        elements.mobileMenu.classList.toggle('hidden');
      });
    }
  }

  // ═══════════════════════════════════════════════════════════════════
  // 6. DISPATCH MODAL INTERACTION
  // ═══════════════════════════════════════════════════════════════════
  function bindDispatchModal() {
    const modal = elements.dispatchModal;
    const triggers = document.querySelectorAll('[data-action="open-dispatch"]');
    const closeBtn = document.getElementById('dispatch-modal-close');
    const form = document.getElementById('dispatch-form');
    const confirmation = document.getElementById('dispatch-confirmation');

    function openModal() {
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal() {
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    triggers.forEach(t => t.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    }));

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('dispatch-email-input');
        if (input && input.value) {
          form.classList.add('hidden');
          if (confirmation) confirmation.classList.remove('hidden');
          setTimeout(() => {
            closeModal();
            setTimeout(() => {
              form.classList.remove('hidden');
              if (confirmation) confirmation.classList.add('hidden');
              input.value = '';
            }, 400);
          }, 2400);
        }
      });
    }
  }

  // Kickoff on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
