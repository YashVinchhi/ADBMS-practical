(function(){
    // Robust copy helper with fallback and UI feedback.
    async function copyTextToClipboard(text){
        if (!text) return false;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            try { await navigator.clipboard.writeText(text); return true; } catch(e) { /* fallback below */ }
        }
        // Fallback using textarea + execCommand
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            // avoid scrolling to bottom
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            ta.style.top = '0';
            document.body.appendChild(ta);
            ta.focus();
            ta.select();
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            return ok;
        } catch(e) {
            return false;
        }
    }

    function makeCopyButton(pre, codeEl){
        if (!pre) return;
        if (pre.querySelector('.copy-btn')) return; // already added
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.type = 'button';
        btn.textContent = 'COPY CODE';
        btn.addEventListener('click', async function(){
            const text = (codeEl && (codeEl.innerText || codeEl.textContent)) || pre.innerText || '';
            const original = btn.textContent;
            const success = await copyTextToClipboard(text);
            if (success){
                btn.textContent = 'COPIED_';
                btn.classList.add('copied');
                setTimeout(()=>{ btn.textContent = original; btn.classList.remove('copied'); }, 1600);
            } else {
                btn.textContent = 'COPY FAIL';
                setTimeout(()=>{ btn.textContent = original; }, 1600);
            }
        });
        // ensure parent has positioning for absolute children
        if (getComputedStyle(pre).position === 'static') pre.style.position = 'relative';
        pre.appendChild(btn);
    }

    function findNearestCodeElement(btn){
        if (!btn) return null;
        // look for explicit data-target
        const target = btn.getAttribute('data-target');
        if (target){
            return document.querySelector(target);
        }
        // look for a code element inside closest .code-wrapper or .question-card or pre
        const wrapper = btn.closest('.code-wrapper') || btn.closest('.question-card') || btn.closest('pre') || btn.parentElement;
        if (wrapper){
            const code = wrapper.querySelector('code');
            if (code) return code;
            // maybe wrapper contains a PRE element
            const preSibling = wrapper.querySelector('pre');
            if (preSibling) return preSibling;
        }
        // fallback: check previousSibling chain for a PRE element
        let el = btn.previousElementSibling;
        while(el){
            if (el.tagName === 'PRE') return el.querySelector('code') || el;
            el = el.previousElementSibling;
        }
        return null;
    }

    function wireStaticButtons(){
        // Buttons that are present in markup (may have inline onclick handlers). Add a robust handler.
        document.querySelectorAll('button.copy-btn:not([data-wired])').forEach(btn=>{
            btn.setAttribute('data-wired','1');

            btn.addEventListener('click', async (e)=>{
                // If a data-target attribute exists, copy from it
                const target = btn.getAttribute('data-target');
                let codeEl = null;
                if (target) codeEl = document.querySelector(target);
                else codeEl = findNearestCodeElement(btn);

                if (!codeEl){
                    // If an inline onclick exists that calls copyToClipboard(this), let it run (do nothing here)
                    // But many pages used inline function; try to call it if available
                    if (typeof window.copyToClipboard === 'function'){
                        try{ window.copyToClipboard(btn); return; } catch(e){}
                    }
                    return;
                }

                const text = codeEl.innerText || codeEl.textContent || '';
                const original = btn.textContent;
                const success = await copyTextToClipboard(text);
                if (success){ btn.textContent='COPIED_'; btn.classList.add('copied'); setTimeout(()=>{ btn.textContent=original; btn.classList.remove('copied'); },1600); }
                else { btn.textContent='COPY FAIL'; setTimeout(()=>{ btn.textContent=original; },1600); }
            }, {capture: false});
        });
    }

    function initCopyButtons(){
        // Add buttons to code blocks inside question cards
        document.querySelectorAll('.question-card pre').forEach(pre=>{
            const code = pre.querySelector('code') || pre;
            makeCopyButton(pre, code);
        });
        wireStaticButtons();
    }

    // Provide a robust global copyToClipboard(button) to replace any inline implementations
    window.copyToClipboard = async function(button){
        try{
            const btn = button instanceof Element ? button : document.querySelector(button);
            const codeEl = findNearestCodeElement(btn) || (btn && (btn.parentElement.querySelector('code') || btn.parentElement.querySelector('pre')));
            const text = (codeEl && (codeEl.innerText || codeEl.textContent)) || '';
            const original = btn && btn.textContent;
            const success = await copyTextToClipboard(text);
            if (btn){
                if (success){ btn.textContent = 'COPIED_'; btn.classList.add('copied'); setTimeout(()=>{ if (original) btn.textContent=original; btn.classList.remove('copied'); },1600); }
                else { btn.textContent = 'COPY FAIL'; setTimeout(()=>{ if (original) btn.textContent=original; },1600); }
            }
            return success;
        }catch(e){ return false; }
    };

    // MutationObserver to catch dynamically added code blocks or buttons
    const observer = new MutationObserver((mutations)=>{
        let found = false;
        for(const m of mutations){
            if (m.addedNodes && m.addedNodes.length){
                m.addedNodes.forEach(n=>{
                    if (n.nodeType!==1) return;
                    if (n.matches && (n.matches('.question-card') || n.matches('pre') || n.matches('.code-wrapper') || n.querySelector && n.querySelector('pre, code, .question-card'))){
                        found = true;
                    }
                    if (n.querySelector && n.querySelector('.copy-btn')) found = true;
                });
            }
        }
        if (found) setTimeout(initCopyButtons, 80);
    });
    try{ observer.observe(document.documentElement || document.body, { childList: true, subtree: true }); } catch(e){}

    // Also schedule a few periodic retries in case observer misses something
    let retries = 0; const retryInterval = setInterval(()=>{ initCopyButtons(); retries++; if (retries>10) clearInterval(retryInterval); }, 800);

    // Run on DOM ready and also after a short delay
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ()=>{ initCopyButtons(); setTimeout(initCopyButtons, 600); });
    else { initCopyButtons(); setTimeout(initCopyButtons, 600); }

    // expose for debugging
    window.__adbms_copy_init = initCopyButtons;
})();
