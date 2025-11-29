(function(){
    // Small, robust copy button injector for all <pre> blocks.
    // Adds one .copy-btn per pre if not present. Uses Clipboard API with textarea fallback.
    async function copyText(text){
        if(!text) return false;
        if(navigator.clipboard && navigator.clipboard.writeText){
            try{ await navigator.clipboard.writeText(text); return true; }catch(e){ /* fallback below */ }
        }
        try{
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed'; ta.style.left='-9999px'; ta.style.top='0';
            document.body.appendChild(ta);
            ta.focus(); ta.select();
            const ok = document.execCommand('copy');
            document.body.removeChild(ta);
            return ok;
        }catch(e){ return false; }
    }

    function makeButtonForPre(pre){
        if(!pre || pre.querySelector('.copy-btn')) return;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'copy-btn';
        btn.textContent = 'Copy';
        btn.addEventListener('click', async function(e){
            e.preventDefault();
            const code = pre.querySelector('code');
            const text = (code && (code.innerText || code.textContent)) || pre.innerText || pre.textContent || '';
            const original = btn.textContent;
            const ok = await copyText(text);
            if(ok){ btn.textContent = 'Copied'; btn.classList.add('copied'); setTimeout(()=>{ btn.textContent = original; btn.classList.remove('copied'); }, 1400); }
            else { btn.textContent = 'Failed'; setTimeout(()=>{ btn.textContent = original; }, 1200); }
        });
        // ensure pre is positioned so absolute button works
        const parent = pre;
        const pos = window.getComputedStyle(parent).position;
        if(pos === 'static' || !pos) parent.style.position = 'relative';
        parent.appendChild(btn);
    }

    function init(){
        document.querySelectorAll('pre').forEach(p => makeButtonForPre(p));
    }

    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

    // observe for dynamically added pre tags
    const obs = new MutationObserver((mutations)=>{
        for(const m of mutations){
            if(m.addedNodes && m.addedNodes.length){
                m.addedNodes.forEach(n=>{
                    if(n.nodeType===1){
                        if(n.tagName === 'PRE') makeButtonForPre(n);
                        else if(n.querySelector) { const pres = n.querySelectorAll('pre'); pres.forEach(p=>makeButtonForPre(p)); }
                    }
                });
            }
        }
    });
    try{ obs.observe(document.documentElement || document.body, { childList: true, subtree: true }); }catch(e){}
})();

