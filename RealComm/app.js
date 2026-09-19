const menu = document.querySelector('#example');
const grid = document.querySelector('#audio-grid');
const paths = [['digital','Digital source','Before the call'],['earpiece','OtA · Handset','Acoustic injection'],['speakerphone','OtA · Speakerphone','Acoustic injection'],['wired_headset','LtM · Wired','Direct injection']];
fetch('examples.json').then(r => { if (!r.ok) throw new Error(); return r.json(); }).then(examples => {
 menu.replaceChildren(...examples.map((e,i) => {const o=document.createElement('option');o.value=i;o.textContent=e.language+' · '+e.label;return o;}));
 function render(){
  document.querySelectorAll('audio').forEach(a=>a.pause());
  const e=examples[Number(menu.value)]; document.querySelector('#transcript').textContent='“'+e.text+'”';
  grid.replaceChildren(...paths.map(([key,title,subtitle])=>{
   const item=document.createElement('article');item.className='audio-item '+key;
   const h=document.createElement('h3');h.textContent=title;
   const p=document.createElement('p');p.textContent=subtitle;
   const audio=document.createElement('audio');audio.controls=true;audio.preload='metadata';audio.src=e.audio[key];audio.setAttribute('aria-label',e.language+' '+e.label+' — '+title);
   audio.addEventListener('play',()=>document.querySelectorAll('audio').forEach(other=>{if(other!==audio)other.pause();}));
   audio.addEventListener('error',()=>{document.querySelector('#audio-error').textContent='This recording could not be loaded. Please reload the page or use its download link.';});
   const link=document.createElement('a');link.href=e.audio[key];link.download='';link.textContent='Download WAV';link.className='audio-download';
   item.append(h,p,audio,link);return item;
  }));document.querySelector('#audio-error').textContent='';
 }
 menu.addEventListener('change',render);render();
}).catch(()=>{document.querySelector('#audio-error').textContent='Audio examples could not be loaded. Please reload the page.';menu.disabled=true;});
