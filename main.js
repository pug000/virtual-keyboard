(()=>{"use strict";class e{constructor(){this.container=document.createElement("div"),this.container.className="container"}init(){return this.container}}function t(e){localStorage.setItem("language",JSON.stringify(e))}class s{constructor(e,t,s){this.keyboardBody=document.createElement("div"),this.keyboardBody.className="body-keyboard",this.textarea=e,this.keyButtons=t,this.capsLock=!1,this.shift=!1,this.keys=[],this.lang=s,this.pressed={},this.currentPos=""}initKeyboard(){return this.keyboardBody.appendChild(this.createKeys()),this.keys=this.keyboardBody.children,this.handleClicks(),this.handleKey(),this.keyboardBody}createKeys(){const e=document.createDocumentFragment();return this.keyButtons.forEach((t=>{const{ru:s}=t.key,{en:i}=t.key;this.keyElement=document.createElement("div"),this.keyElement.className="keyboard__key",this.keyElement.classList.add(`${t.class}`),this.keyElement.setAttribute("data-key",`${t.code}`),"en"===this.lang?this.keyElement.textContent=i:this.keyElement.textContent=s,e.appendChild(this.keyElement)})),e}handleClicks(){Array.from(this.keys).forEach((e=>{e.addEventListener("mousedown",(t=>{t.target.classList.add("active"),this.textarea.focus(),e.classList.contains("Shift")?(this.addShift(t),this.pressed[t.key]=!0):e.classList.contains("Alt")&&(this.addAlt(t),this.pressed[t.key]=!0)})),e.addEventListener("mouseup",(t=>{this.currentPos=this.textarea.selectionStart;const s=this.textarea.value.slice(0,this.currentPos),i=this.textarea.value.slice(this.currentPos);t.target.classList.remove("active"),this.animation(e),this.mouseEvents(t,e,s,i)}))}))}mouseEvents(e,t,s,i){t.classList.contains("Backspace")?this.addBackspace(s,i):t.classList.contains("Delete")?this.addDelete(s,i):t.classList.contains("Tab")?this.addTab(s,i):t.classList.contains("Enter")?this.addEnter(s,i):t.classList.contains("CapsLock")?this.addCapsLock(e):t.classList.contains("Control")?this.addControl():t.classList.contains("Space")?this.addSpace(s,i):t.classList.contains("Switch-Lang")?this.addSwitchLang():t.classList.contains("Shift")?(delete this.pressed[e.key],this.addShift(e)):t.classList.contains("Alt")?(delete this.pressed[e.key],this.addAlt(e)):this.addDefaultKeys(t,s,i),this.textarea.focus(),this.textarea.setSelectionRange(this.currentPos,this.currentPos)}handleKey(){Array.from(this.keys).forEach((e=>{document.addEventListener("keydown",(t=>{this.currentPos=this.textarea.selectionStart;const s=this.textarea.value.slice(0,this.currentPos),i=this.textarea.value.slice(this.currentPos);t.code===e.dataset.key&&(t.preventDefault(),e.classList.add("active"),this.keyEvents(t,e,s,i),this.animation(e))})),document.addEventListener("keyup",(t=>{t.code===e.dataset.key&&(e.classList.remove("active"),"ShiftLeft"===t.code||"ShiftRight"===t.code?(delete this.pressed[t.key],this.addShift(t)):"AltLeft"!==t.code&&"AltRight"!==t.code||(delete this.pressed[t.key],this.addAlt(t)))}))}))}keyEvents(e,t,s,i){"Backspace"===e.code?this.addBackspace(s,i):"Delete"===e.code?this.addDelete(s,i):"Tab"===e.code?this.addTab(s,i):"Enter"===e.code?this.addEnter(s,i):"CapsLock"===e.code?this.addCapsLock(e):"ShiftLeft"===e.code||"ShiftRight"===e.code?(this.pressed[e.key]=!0,this.addShift(e)):"ControlLeft"===e.code||"ControlRight"===e.code?this.addControl():"AltLeft"===e.code||"AltRight"===e.code?(this.pressed[e.key]=!0,this.addAlt(e)):"Space"===e.code?this.addSpace(s,i):this.addDefaultKeys(t,s,i),this.textarea.focus(),this.textarea.setSelectionRange(this.currentPos,this.currentPos)}addBackspace(e,t){0!==this.currentPos&&(this.doNothingWrite(),this.textarea.value=e.slice(0,-1)+t,this.currentPos-=1)}addDelete(e,t){this.doNothingWrite(),this.textarea.value=e+t.substring(1)}addTab(e,t){this.textarea.value=e+"\t"+t,this.currentPos+=1}addCapsLock(e){e.repeat||(this.doNothingWrite(),this.toggleCapsLock())}addEnter(e,t){this.textarea.value=e+"\n"+t,this.currentPos+=1}addShift(e){e.repeat||(this.doNothingWrite(),this.toggleShift(),this.addShortCut())}addAlt(e){e.repeat||(this.doNothingWrite(),this.addShortCut())}addSwitchLang(){this.doNothingWrite(),this.toggleLang()}addSpace(e,t){this.textarea.value=e+" "+t,this.currentPos+=1}addControl(){this.doNothingWrite()}addDefaultKeys(e,t,s){this.textarea.value=t+e.textContent+s,this.currentPos+=1}doNothingWrite(){this.textarea.value+=""}toggleCapsLock(){this.capsLock=!this.capsLock,this.changeRegister()}toggleShift(){this.shift=!this.shift,this.changeRegister()}addShortCut(){this.pressed.Shift&&(this.pressed.Alt||this.pressed.AltGraph)&&this.toggleLang()}toggleLang(){this.lang="en"===this.lang?"ru":"en",this.changeRegister()}changeRegister(){for(let e=0;e<this.keys.length;e+=1){const{ru:s}=this.keyButtons[e].key,{en:i}=this.keyButtons[e].key,{shift:a}=this.keyButtons[e];"ru"===this.lang?(t(this.lang),this.capsLock?this.keys[e].textContent=s.toUpperCase():this.capsLock||(this.keys[e].textContent=s.toLowerCase()),this.shift?this.keys[e].textContent=a.ru:this.shift||(this.keys[e].textContent=s),this.capsLock&&!this.shift?this.keys[e].textContent=s.toUpperCase():this.capsLock&&this.shift&&(this.keys[e].textContent=a.ru.toLowerCase())):"en"===this.lang&&(t(this.lang),this.capsLock?this.keys[e].textContent=i.toUpperCase():this.capsLock||(this.keys[e].textContent=i.toLowerCase()),this.shift?this.keys[e].textContent=a.en:this.shift||(this.keys[e].textContent=i),this.capsLock&&!this.shift?this.keys[e].textContent=i.toUpperCase():this.capsLock&&this.shift&&(this.keys[e].textContent=a.en.toLowerCase()))}}animation(e){const t=Math.floor(361*Math.random())+0,s=`hsla(${t}, 100%, 50%, 50%)`,i=`hsl(${t}, 100%, 50%)`,a=`0 0 0.80em ${s}, 0 0 1.60em ${s}, 0 0 4em ${s}`,n=`-3px 3px 4px ${s}, 3px -3px 4px ${s}, 3px 3px 4px ${s}, \n    -3px -3px 4px ${s}, 0 0 10px ${s}`,c=Array.from(this.keys).indexOf(e),r=Array.from(this.keys).slice(c),o=Array.from(this.keys).slice(0,c),h=e=>{e.target.style.boxShadow="none",e.target.style.color=null,e.target.style.textShadow="none",e.target.removeEventListener("transitionend",h)};r.forEach(((e,t)=>{setTimeout((()=>{e.addEventListener("transitionend",h),r[t].style.boxShadow=n,r[t].style.color=i,r[t].style.textShadow=a}),35*t)})),o.forEach(((e,t)=>{const s=o.length-t;setTimeout((()=>{e.addEventListener("transitionend",h),o[t].style.boxShadow=n,o[t].style.color=i,o[t].style.textShadow=a}),35*s)}))}}class i{constructor(){this.textarea=document.createElement("textarea"),this.textarea.setAttribute("id","textarea"),this.textarea.setAttribute("spellcheck","false"),this.textarea.placeholder="Клавиатура создана в операционной системе Windows. \nПереключение языка: Shift + Alt."}initTextarea(){return this.textarea}}const a=[{class:"Backquote",code:"Backquote",key:{en:"`",ru:"ё"},shift:{en:"~",ru:"Ё"}},{class:"Digit1",code:"Digit1",key:{en:"1",ru:"1"},shift:{en:"!",ru:"!"}},{class:"Digit2",code:"Digit2",key:{en:"2",ru:"2"},shift:{en:"@",ru:'"'}},{class:"Digit3",code:"Digit3",key:{en:"3",ru:"3"},shift:{en:"#",ru:"№"}},{class:"Digit4",code:"Digit4",key:{en:"4",ru:"4"},shift:{en:"$",ru:";"}},{class:"Digit5",code:"Digit5",key:{en:"5",ru:"5"},shift:{en:"%",ru:"%"}},{class:"Digit6",code:"Digit6",key:{en:"6",ru:"6"},shift:{en:"^",ru:":"}},{class:"Digit7",code:"Digit7",key:{en:"7",ru:"7"},shift:{en:"&",ru:"?"}},{class:"Digit8",code:"Digit8",key:{en:"8",ru:"8"},shift:{en:"*",ru:"*"}},{class:"Digit9",code:"Digit9",key:{en:"9",ru:"9"},shift:{en:"(",ru:"("}},{class:"Digit0",code:"Digit0",key:{en:"0",ru:"0"},shift:{en:")",ru:")"}},{class:"Minus",code:"Minus",key:{en:"-",ru:"-"},shift:{en:"_",ru:"_"}},{class:"Equal",code:"Equal",key:{en:"=",ru:"="},shift:{en:"+",ru:"+"}},{class:"Backspace",code:"Backspace",key:{en:"Backspace",ru:"Backspace"},shift:{en:"Backspace",ru:"Backspace"}},{class:"Tab",code:"Tab",key:{en:"Tab",ru:"Tab"},shift:{en:"Tab",ru:"Tab"}},{class:"KeyQ",code:"KeyQ",key:{en:"q",ru:"й"},shift:{en:"Q",ru:"Й"}},{class:"KeyW",code:"KeyW",key:{en:"w",ru:"ц"},shift:{en:"W",ru:"Ц"}},{class:"KeyE",code:"KeyE",key:{en:"e",ru:"у"},shift:{en:"E",ru:"У"}},{class:"KeyR",code:"KeyR",key:{en:"r",ru:"к"},shift:{en:"R",ru:"К"}},{class:"KeyT",code:"KeyT",key:{en:"t",ru:"е"},shift:{en:"T",ru:"Е"}},{class:"KeyY",code:"KeyY",key:{en:"y",ru:"н"},shift:{en:"Y",ru:"Н"}},{class:"KeyU",code:"KeyU",key:{en:"u",ru:"г"},shift:{en:"U",ru:"Г"}},{class:"KeyI",code:"KeyI",key:{en:"i",ru:"ш"},shift:{en:"I",ru:"Ш"}},{class:"KeyO",code:"KeyO",key:{en:"o",ru:"щ"},shift:{en:"O",ru:"Щ"}},{class:"KeyP",code:"KeyP",key:{en:"p",ru:"з"},shift:{en:"P",ru:"З"}},{class:"BracketLeft",code:"BracketLeft",key:{en:"[",ru:"x"},shift:{en:"{",ru:"Х"}},{class:"BracketRight",code:"BracketRight",key:{en:"]",ru:"ъ"},shift:{en:"}",ru:"Ъ"}},{class:"Backslash",code:"Backslash",key:{en:"|",ru:'"'},shift:{en:"|",ru:"/"}},{class:"Delete",code:"Delete",key:{en:"Del",ru:"Del"},shift:{en:"Del",ru:"Del"}},{class:"CapsLock",code:"CapsLock",key:{en:"CapsLock",ru:"CapsLock"},shift:{en:"CapsLock",ru:"CapsLock"}},{class:"KeyA",code:"KeyA",key:{en:"a",ru:"ф"},shift:{en:"A",ru:"Ф"}},{class:"KeyS",code:"KeyS",key:{en:"s",ru:"ы"},shift:{en:"S",ru:"Ы"}},{class:"KeyD",code:"KeyD",key:{en:"d",ru:"в"},shift:{en:"D",ru:"В"}},{class:"KeyF",code:"KeyF",key:{en:"f",ru:"а"},shift:{en:"F",ru:"А"}},{class:"KeyG",code:"KeyG",key:{en:"g",ru:"п"},shift:{en:"G",ru:"П"}},{class:"KeyH",code:"KeyH",key:{en:"h",ru:"р"},shift:{en:"H",ru:"Р"}},{class:"KeyJ",code:"KeyJ",key:{en:"j",ru:"о"},shift:{en:"J",ru:"О"}},{class:"KeyK",code:"KeyK",key:{en:"k",ru:"л"},shift:{en:"K",ru:"Л"}},{class:"KeyL",code:"KeyL",key:{en:"l",ru:"д"},shift:{en:"L",ru:"Д"}},{class:"Semicolon",code:"Semicolon",key:{en:";",ru:"ж"},shift:{en:":",ru:"Ж"}},{class:"Quote",code:"Quote",key:{en:"'",ru:"э"},shift:{en:'"',ru:"Э"}},{class:"Enter",code:"Enter",key:{en:"Enter",ru:"Enter"},shift:{en:"Enter",ru:"Enter"}},{class:"Shift",code:"ShiftLeft",key:{en:"Shift",ru:"Shift"},shift:{en:"Shift",ru:"Shift"}},{class:"KeyZ",code:"KeyZ",key:{en:"z",ru:"я"},shift:{en:"Z",ru:"Я"}},{class:"KeyX",code:"KeyX",key:{en:"x",ru:"ч"},shift:{en:"X",ru:"Ч"}},{class:"KeyC",code:"KeyC",key:{en:"c",ru:"с"},shift:{en:"C",ru:"С"}},{class:"KeyV",code:"KeyV",key:{en:"v",ru:"м"},shift:{en:"V",ru:"М"}},{class:"KeyB",code:"KeyB",key:{en:"b",ru:"и"},shift:{en:"B",ru:"И"}},{class:"KeyN",code:"KeyN",key:{en:"n",ru:"т"},shift:{en:"N",ru:"Т"}},{class:"KeyM",code:"KeyM",key:{en:"m",ru:"ь"},shift:{en:"M",ru:"Ь"}},{class:"Comma",code:"Comma",key:{en:",",ru:"б"},shift:{en:"<",ru:"Б"}},{class:"Period",code:"Period",key:{en:".",ru:"ю"},shift:{en:">",ru:"Ю"}},{class:"Slash",code:"Slash",key:{en:"/",ru:"."},shift:{en:"?",ru:","}},{class:"ArrowUp",code:"ArrowUp",key:{en:"↑",ru:"↑"},shift:{en:"↑",ru:"↑"}},{class:"Shift",code:"ShiftRight",key:{en:"Shift",ru:"Shift"},shift:{en:"Shift",ru:"Shift"}},{class:"Control",code:"ControlLeft",key:{en:"Ctrl",ru:"Ctrl"},shift:{en:"Ctrl",ru:"Ctrl"}},{class:"Switch-Lang",code:"Switch-Lang",key:{en:"Rus",ru:"Eng"},shift:{en:"Rus",ru:"Eng"}},{class:"Alt",code:"AltLeft",key:{en:"Alt",ru:"Alt"},shift:{en:"Alt",ru:"Alt"}},{class:"Space",code:"Space",key:{en:"Space",ru:"Space"},shift:{en:"Space",ru:"Space"}},{class:"Alt",code:"AltRight",key:{en:"Alt",ru:"Alt"},shift:{en:"Alt",ru:"Alt"}},{class:"ArrowLeft",code:"ArrowLeft",key:{en:"←",ru:"←"},shift:{en:"←",ru:"←"}},{class:"ArrowDown",code:"ArrowDown",key:{en:"↓",ru:"↓"},shift:{en:"↓",ru:"↓"}},{class:"ArrowRight",code:"ArrowRight",key:{en:"→",ru:"→"},shift:{en:"→",ru:"→"}},{class:"Control",code:"ControlRight",key:{en:"Ctrl",ru:"Ctrl"},shift:{en:"Ctrl",ru:"Ctrl"}}];class n{constructor(){this.background=document.createElement("div"),this.video=document.createElement("video"),this.souceMp4=document.createElement("source"),this.souceWebm=document.createElement("source")}initBackground(){return this.background.className="background",this.video.setAttribute("autoplay",""),this.video.setAttribute("loop",""),this.video.setAttribute("playsinline",""),this.video.poster="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/874400/14e1a261b94ebe19eac8234a9c7e4abaae1084bb.jpg",this.souceMp4.src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/874400/2fda5d3781c6d198d70775f53809db245151928d.mp4",this.souceMp4.type="video/mp4",this.souceWebm.src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/874400/c6ec1e32708cb1e403a4c79db03b0128e080e1e8.webm",this.souceWebm.type="video/webm",this.video.muted=!0,this.background.append(this.video),this.video.appendChild(this.souceMp4),this.video.appendChild(this.souceWebm),this.background}}window.onload=()=>{const t=JSON.parse(localStorage.getItem("language")),c=new e,r=new n,o=new i,h=new s(o.initTextarea(),a,t);document.body.appendChild(r.initBackground()),document.body.appendChild(c.init()),c.init().appendChild(o.initTextarea()),c.init().appendChild(h.initKeyboard())}})();