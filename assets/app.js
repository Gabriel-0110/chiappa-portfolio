// Simple i18n
const dict={
  en:{banner:"🚧 Under construction — integrations & media are coming soon.",tagline:"LegalTech Architect & Automation Specialist — Arandia Law • Building AI systems that do real work.",nav_about:"About",nav_projects:"Projects",nav_contact:"Contact",hero_h:"I ship automations that lawyers actually use.",hero_p:"From SharePoint + Power Automate to OpenAI + Microsoft 365, I build end-to-end workflows that cut busywork and move cases forward.",about_h:"About",about_p:"I’m a LegalTech Architect & Automation Specialist at Arandia Law. I design AI-powered systems for immigration workflows — integrating SharePoint, Power Automate, and OpenAI with real-world ops. Fluent in English and Portuguese, working Spanish. I bias to shipping, not demos.",projects_h:"Featured Projects",p1:"Composable messaging pipelines with orchestration and AI helpers.",p2:"Policy-aware assistant for intake & case procedures. Built for busy teams.",contact_h:"Contact",contact_p:"Want a no-fluff consult on automations? Drop a note — I’ll route it to my Flow.",send:"Send",btn_contact:"Let’s build something",btn_resume:"Resume (PDF)"},
  pt:{banner:"🚧 Em construção — integrações e mídia chegando em breve.",tagline:"Arquiteto de LegalTech & Especialista em Automação — Arandia Law • Sistemas de IA que entregam.",nav_about:"Sobre",nav_projects:"Projetos",nav_contact:"Contato",hero_h:"Eu entrego automações que os advogados realmente usam.",hero_p:"De SharePoint + Power Automate a OpenAI + Microsoft 365, construo fluxos de ponta a ponta que reduzem tarefas repetitivas e aceleram casos.",about_h:"Sobre",about_p:"Sou Arquiteto de LegalTech & Especialista em Automação na Arandia Law. Desenho sistemas com IA para imigração — integrando SharePoint, Power Automate e OpenAI com a operação real. Fluente em inglês e português; espanhol intermediário. Eu priorizo entrega, não demos.",projects_h:"Projetos em destaque",p1:"Pipelines de mensagens componíveis com orquestração e IA.",p2:"Assistente ciente de políticas para intake & procedimentos — feito para equipes ocupadas.",contact_h:"Contato",contact_p:"Quer uma consultoria sem enrolação? Envie uma mensagem — vou direcionar para meu Flow.",send:"Enviar",btn_contact:"Vamos construir algo",btn_resume:"Currículo (PDF)"},
  es:{banner:"🚧 En construcción — integraciones y medios pronto.",tagline:"Arquitecto LegalTech y Especialista en Automatización — Arandia Law • Sistemas de IA que hacen el trabajo.",nav_about:"Acerca de",nav_projects:"Proyectos",nav_contact:"Contacto",hero_h:"Entrego automatizaciones que los abogados realmente usan.",hero_p:"De SharePoint + Power Automate a OpenAI + Microsoft 365, construyo flujos de punta a punta que reducen tareas y aceleran casos.",about_h:"Acerca de",about_p:"Soy Arquitecto LegalTech y Especialista en Automatización en Arandia Law. Diseño sistemas con IA para inmigración — integrando SharePoint, Power Automate y OpenAI en la operación real. Fluido en inglés y portugués; español funcional. Priorizo entregar, no demos.",projects_h:"Proyectos destacados",p1:"Canalizaciones de mensajería componibles con orquestación e IA.",p2:"Asistente consciente de políticas para intake y procedimientos del caso.",contact_h:"Contacto",contact_p:"¿Quieres una consultoría directa? Escribe — lo enviaré a mi Flow.",send:"Enviar",btn_contact:"Construyamos algo",btn_resume:"CV (PDF)"}
};

const qs=(s,el=document)=>el.querySelector(s);const qsa=(s,el=document)=>[...el.querySelectorAll(s)];
const setLang=lang=>{const t=dict[lang]||dict.en;qsa('[data-i18n]').forEach(n=>{n.textContent=t[n.getAttribute('data-i18n')]||n.textContent});localStorage.setItem('lang',lang)};
qsa('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem('lang')||'en');

// Year
qs('#year').textContent=new Date().getFullYear();

// Contact form (Flow placeholder)
const FLOW_URL=localStorage.getItem('flow_url')||''; // you will set this later
qs('#contact-form').addEventListener('submit',async e=>{
  e.preventDefault();
  const f=e.currentTarget;const fd=new FormData(f);const payload=Object.fromEntries(fd.entries());
  const status=qs('#form-status');
  if(!FLOW_URL){status.textContent='Flow URL not set yet. I\'ll email you in the meantime.';return}
  try{
    const res=await fetch(FLOW_URL,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});
    status.textContent=res.ok?'Sent — I\'ll get back to you.':'Failed to send. Try again later.';
  }catch(err){status.textContent='Network error. Try again later.'}
});
