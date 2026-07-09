
document.querySelectorAll('.copy').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const code=btn.closest('.code-card').querySelector('code').innerText;
    navigator.clipboard.writeText(code);
    btn.innerText='Copiado';
    setTimeout(()=>btn.innerText='Copiar',1200);
  });
});
const search=document.querySelector('.search');
if(search){
  search.addEventListener('input',()=>{
    const q=search.value.toLowerCase();
    document.querySelectorAll('.topic-card,.sidebar a').forEach(el=>{
      el.style.display=el.innerText.toLowerCase().includes(q)?'':'none';
    });
  });
}


// v0.2.0 - Navegação por telas, sem rolagem longa
const chapterOrder = ['home','terraform-quick-setup',
  'visao-geral-componentes-de-rede-do-oci',
  'componentes-de-rede-da-topologia-de-referencia',
  'vcn-e-roteamento-de-subrede',
  'nota-sobre-vnics',
  'firewall-e-conntrack-table',
  'funcionamento-do-roteamento-no-drg',
  'roteamento-via-firewall-central',
  'hub-spoke-com-local-peering-gateway',
  'network-visualizer',
  'policy-routing',
  'dns',
  'roteamento-dinamico',
  'tos-e-qos'
];

function showView(target, updateHash){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const el = document.getElementById('view-' + target) || document.querySelector('[data-view="' + target + '"]');
  if(el){ el.classList.add('active'); }
  document.querySelectorAll('.nav-link').forEach(a=>{
    const active = a.dataset.target === target;
    a.classList.toggle('active', active);
    if(active){ a.setAttribute('aria-current','page'); } else { a.removeAttribute('aria-current'); }
  });
  if(updateHash !== false){
    history.pushState({view:target}, '', '#' + target);
  }
  const mainEl = document.getElementById('main-content');
  if(mainEl){ mainEl.focus({preventScroll:true}); }
  window.scrollTo({top:0, behavior:'smooth'});
}

document.querySelectorAll('.nav-link,.nav-card').forEach(el=>{
  el.addEventListener('click', e=>{
    e.preventDefault();
    showView(el.dataset.target);
  });
});

// Deep-linking: abre o capítulo certo direto pela URL (#capitulo) e
// respeita os botões voltar/avançar do navegador.
window.addEventListener('popstate', e=>{
  const target = (e.state && e.state.view) || location.hash.replace('#','') || 'home';
  if(target !== 'capitulos'){ showView(target, false); }
});

document.addEventListener('DOMContentLoaded', ()=>{
  const initial = location.hash.replace('#','');
  if(initial && initial !== 'capitulos' && (document.getElementById('view-' + initial) || document.querySelector('[data-view="' + initial + '"]'))){
    showView(initial, false);
  }
  document.querySelectorAll('.doc-section.view img, figure img').forEach(img=>{
    if(!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
  });
});

document.querySelectorAll('.back-home').forEach(btn=>{
  btn.addEventListener('click',()=>showView('home'));
});

document.querySelectorAll('.doc-section.view').forEach(sec=>{
  const target = sec.dataset.view || sec.id;
  const idx = chapterOrder.indexOf(target);
  if(idx >= 0){
    const nav = document.createElement('div');
    nav.className = 'chapter-nav';
    const prev = chapterOrder[idx-1] || 'home';
    const next = chapterOrder[idx+1];
    nav.innerHTML = `
      <button data-go="${prev}">← ${prev === 'home' ? 'Início' : 'Capítulo anterior'}</button>
      ${next ? `<button data-go="${next}">Próximo capítulo →</button>` : `<button data-go="home">Voltar ao início</button>`}
    `;
    sec.appendChild(nav);
  }
});

document.querySelectorAll('.chapter-nav button').forEach(btn=>{
  btn.addEventListener('click',()=>showView(btn.dataset.go));
});
