import{$t as e,Jt as t,O as n,On as r,Qt as i,Tn as a,Tt as o,Xt as s,Yt as c,dn as l,ln as u,nn as d,on as f,t as p,tn as m,wn as h,xn as g}from"./_plugin-vue_export-helper-H4-cNFIh.js";import{a as _,i as v}from"./vehicleCatalog-BRsZjQV-.js";import{a as y,n as b}from"./checkbox-BsNfV5DU.js";import{t as x}from"./multiselect-BbUymtMi.js";import{a as S,c as C,i as w,l as T,m as E,s as D,t as O}from"./disclaimer-TnQ_x6bB.js";var ee={model:`Altima`,modelYear:2026,rate:4.9,term:60,startDate:`2026-09-01`,endDate:`2026-10-31`,notes:``},k={national:!1,states:[`Georgia`,`Tennessee`],dmas:[`522`]};function A({draft:e,geo:t}){Object.assign(e.config,ee),t&&typeof t.loadFrom==`function`&&t.loadFrom(k),Object.assign(e.geography,{...k})}var j={class:`grid`},M={class:`field`},N={class:`field`},P={class:`grid second`},F={class:`field`},I={class:`field`},L=p({__name:`StepVehicle`,props:{config:Object,models:Array,modelYears:Array},setup(t){let n=t,r=c(()=>_(n.config.model)),i=c(()=>v(n.config.model));return(n,a)=>(u(),e(`div`,null,[a[8]||=s(`h2`,{class:`step-h`},`Vehicle`,-1),a[9]||=s(`p`,{class:`step-sub muted`},`Choose the vehicle this APR offer applies to. Single-rate enforcement is keyed to model, model year, and term, so these come first.`,-1),s(`div`,j,[s(`div`,M,[a[4]||=s(`label`,{class:`lbl`},`Model Year`,-1),d(h(b),{modelValue:t.config.modelYear,"onUpdate:modelValue":a[0]||=e=>t.config.modelYear=e,options:t.modelYears,placeholder:`Select year`,class:`w`},null,8,[`modelValue`,`options`])]),s(`div`,N,[a[5]||=s(`label`,{class:`lbl`},`Model`,-1),d(h(b),{modelValue:t.config.model,"onUpdate:modelValue":a[1]||=e=>t.config.model=e,options:t.models,placeholder:`Select model`,filter:``,class:`w`},null,8,[`modelValue`,`options`])])]),s(`div`,P,[s(`div`,F,[a[6]||=s(`label`,{class:`lbl`},[m(`Trim `),s(`span`,{class:`muted`},`(leave empty for all)`)],-1),d(h(x),{modelValue:t.config.trims,"onUpdate:modelValue":a[2]||=e=>t.config.trims=e,options:r.value,disabled:!t.config.model,placeholder:`All trims`,maxSelectedLabels:3,class:`w`,filter:``},null,8,[`modelValue`,`options`,`disabled`])]),s(`div`,I,[a[7]||=s(`label`,{class:`lbl`},[m(`Packages `),s(`span`,{class:`muted`},`(optional)`)],-1),d(h(x),{modelValue:t.config.packages,"onUpdate:modelValue":a[3]||=e=>t.config.packages=e,options:i.value,disabled:!t.config.model,placeholder:`None`,maxSelectedLabels:2,class:`w`,filter:``},null,8,[`modelValue`,`options`,`disabled`])])])]))}},[[`__scopeId`,`data-v-32e790c0`]]),R=n.extend({name:`textarea`,style:`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-textarea p-component`,{"p-filled":t.$filled,"p-textarea-resizable ":n.autoResize,"p-textarea-sm p-inputfield-sm":n.size===`small`,"p-textarea-lg p-inputfield-lg":n.size===`large`,"p-invalid":t.$invalid,"p-variant-filled":t.$variant===`filled`,"p-textarea-fluid":t.$fluid}]}}}),z={name:`BaseTextarea`,extends:y,props:{autoResize:Boolean},style:R,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function B(e){"@babel/helpers - typeof";return B=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},B(e)}function V(e,t,n){return(t=H(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(e){var t=U(e,`string`);return B(t)==`symbol`?t:t+``}function U(e,t){if(B(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(B(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var W={name:`Textarea`,extends:z,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var e=this.$el.style.height,t=parseInt(e)||0,n=this.$el.scrollHeight;t&&n<t?(this.$el.style.height=`auto`,this.$el.style.height=`${this.$el.scrollHeight}px`):(!t||n>t)&&(this.$el.style.height=`${n}px`)}},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return f(this.ptmi(`root`,{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return o(V({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant===`filled`},this.size,this.size))}}},G=[`value`,`name`,`disabled`,`aria-invalid`,`data-p`];function K(t,n,r,i,a,o){return u(),e(`textarea`,f({class:t.cx(`root`),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":o.dataP,onInput:n[0]||=function(){return o.onInput&&o.onInput.apply(o,arguments)}},o.attrs),null,16,G)}W.render=K;var q={class:`grid`},J={class:`field`},te={class:`field`},Y={class:`field range`},X={class:`field notes`},Z=p({__name:`StepRate`,props:{config:Object,terms:Array},setup(t){let n=t,r=T.map(e=>({label:`${e.toFixed(1)}%`,value:e})),i=c(()=>n.terms.map(e=>({label:`${e} months`,value:e}))),a=c({get:()=>{let e=n.config.startDate?new Date(n.config.startDate+`T00:00:00`):null,t=n.config.endDate?new Date(n.config.endDate+`T00:00:00`):null;return e||t?[e,t]:null},set:e=>{let[t,r]=e||[];n.config.startDate=t?t.toISOString().slice(0,10):null,n.config.endDate=r?r.toISOString().slice(0,10):null}});return(n,o)=>(u(),e(`div`,null,[o[8]||=s(`h2`,{class:`step-h`},`Rate & Term`,-1),o[9]||=s(`p`,{class:`step-sub muted`},`Set the APR rate, term, and the date range the offer runs.`,-1),s(`div`,q,[s(`div`,J,[o[4]||=s(`label`,{class:`lbl`},`APR Rate`,-1),d(h(b),{modelValue:t.config.rate,"onUpdate:modelValue":o[0]||=e=>t.config.rate=e,options:h(r),optionLabel:`label`,optionValue:`value`,placeholder:`Select rate`,filter:``,class:`w`},null,8,[`modelValue`,`options`])]),s(`div`,te,[o[5]||=s(`label`,{class:`lbl`},`Term`,-1),d(h(b),{modelValue:t.config.term,"onUpdate:modelValue":o[1]||=e=>t.config.term=e,options:i.value,optionLabel:`label`,optionValue:`value`,placeholder:`Select term`,filter:``,class:`w`},null,8,[`modelValue`,`options`])])]),s(`div`,Y,[o[6]||=s(`label`,{class:`lbl`},`Offer runs`,-1),d(h(S),{modelValue:a.value,"onUpdate:modelValue":o[2]||=e=>a.value=e,selectionMode:`range`,manualInput:!1,dateFormat:`M d, yy`,placeholder:`Select start – end dates`,showIcon:``,class:`w`},null,8,[`modelValue`])]),s(`div`,X,[o[7]||=s(`label`,{class:`lbl`},[m(`Programming notes `),s(`span`,{class:`muted`},`(optional)`)],-1),d(h(W),{modelValue:t.config.notes,"onUpdate:modelValue":o[3]||=e=>t.config.notes=e,rows:`2`,autoResize:``,class:`w`,placeholder:`Internal notes`},null,8,[`modelValue`])])]))}},[[`__scopeId`,`data-v-ce636fc4`]]),Q={class:`lang`},ne={class:`block`},re={class:`summary`},ie={class:`block`},ae={class:`copy`},oe=p({__name:`StepDisclaimer`,props:{config:Object},setup(t){let n=t,i=g(`en`),o=c(()=>O(n.config));return(t,n)=>(u(),e(`div`,null,[n[4]||=s(`h2`,{class:`step-h`},`Disclaimer`,-1),n[5]||=s(`p`,{class:`step-sub muted`},`The offer summary and disclaimer are auto-generated from the offer’s attributes. Both English and Spanish are produced; use the toggle to review each.`,-1),s(`div`,Q,[s(`button`,{class:a({on:i.value===`en`}),onClick:n[0]||=e=>i.value=`en`},`English`,2),s(`button`,{class:a({on:i.value===`es`}),onClick:n[1]||=e=>i.value=`es`},`Español`,2)]),s(`div`,ne,[n[2]||=s(`div`,{class:`block-h`},`Offer summary`,-1),s(`div`,re,r(o.value.summary[i.value]),1)]),s(`div`,ie,[n[3]||=s(`div`,{class:`block-h`},`Disclaimer copy`,-1),s(`p`,ae,r(o.value.copy[i.value]),1)]),n[6]||=s(`div`,{class:`both muted`},[s(`i`,{class:`pi pi-language`}),m(` Both languages are stored with the offer. Spanish shown here is a prototype rendering; production uses NU-provided translations. `)],-1)]))}},[[`__scopeId`,`data-v-1693c245`]]),$={class:`cov-map`},se=[`viewBox`],ce=[`d`,`fill`],le=[`d`],ue=[`d`],de={class:`legend`},fe={class:`lg`},pe={key:0,class:`lg`},me={key:1,class:`lg`},he=p({__name:`CoverageMap`,props:{geography:Object},setup(n){let a=n;c(()=>{let e=a.geography||{};return e.national?new Set(C):new Set(e.states||[])});let o=c(()=>{let e=a.geography||{};return e.national?[]:(e.dmas||[]).filter(e=>D.dmas[e])});function d(e){let t=D.dmas[e];return t.bleedsSingleRate&&t.clipped?t.clipped:t.d}let f=c(()=>o.value.filter(e=>D.dmas[e].bleedsSingleRate).length),p=c(()=>{let e=a.geography||{national:!1,states:[],dmas:[]},t={};if(e.national){for(let e of C)t[e]=`direct`;return t}for(let n of e.states||[])t[n]=`direct`;return t});function g(e){return p.value[e]===`direct`?`var(--orc-brand)`:`#eef2f6`}let _=e=>E.has(e),v=Object.keys(w.states),y=v.filter(e=>E.has(e)),b=c(()=>({direct:Object.values(p.value).filter(e=>e===`direct`).length}));return(n,a)=>(u(),e(`div`,$,[(u(),e(`svg`,{viewBox:h(w).viewBox,class:`map-svg`,preserveAspectRatio:`xMidYMid meet`},[a[0]||=s(`defs`,null,[s(`pattern`,{id:`bleedHatch`,width:`6`,height:`6`,patternUnits:`userSpaceOnUse`,patternTransform:`rotate(45)`},[s(`rect`,{width:`6`,height:`6`,fill:`#dcebed`}),s(`rect`,{width:`3`,height:`6`,fill:`var(--orc-brand)`,opacity:`0.55`})])],-1),(u(!0),e(t,null,l(h(v),t=>(u(),e(`path`,{key:`f-`+t,d:h(w).states[t],fill:g(t),stroke:`#ffffff`,"stroke-width":`0.6`},[s(`title`,null,r(t)+r(_(t)?` (single-rate)`:``)+r(p.value[t]?` — covered`+(p.value[t]===`bleed`?` via cross-state DMA`:``):``),1)],8,ce))),128)),(u(!0),e(t,null,l(o.value,t=>(u(),e(`path`,{key:`dma-`+t,d:d(t),fill:`var(--orc-teal-700)`,stroke:`#0d2f34`,"stroke-width":`0.7`,"stroke-linejoin":`round`},[s(`title`,null,r(h(D).dmas[t].name)+` (DMA `+r(t)+`)`+r(h(D).dmas[t].bleedsSingleRate?` — clipped (excl. `+h(D).dmas[t].srStates.join(`, `)+`)`:``)+` — assigned`,1)],8,le))),128)),(u(!0),e(t,null,l(h(y),t=>(u(),e(`path`,{key:`sr-`+t,d:h(w).states[t],fill:`none`,stroke:`#d98a1f`,"stroke-width":`1.8`,"stroke-linejoin":`round`,"pointer-events":`none`},null,8,ue))),128))],8,se)),s(`div`,de,[s(`span`,fe,[a[1]||=s(`span`,{class:`sw direct`},null,-1),m(` Covered state (`+r(b.value.direct)+`)`,1)]),o.value.length?(u(),e(`span`,pe,[a[2]||=s(`span`,{class:`sw dma`},null,-1),m(` Assigned DMA (`+r(o.value.length)+`)`,1)])):i(``,!0),f.value?(u(),e(`span`,me,[a[3]||=s(`span`,{class:`sw sr`},null,-1),m(` `+r(f.value)+` clipped at single-rate border`,1)])):i(``,!0),a[4]||=s(`span`,{class:`lg`},[s(`span`,{class:`sw sr`}),m(` Single-rate state`)],-1)])]))}},[[`__scopeId`,`data-v-53d61921`]]);export{A as a,L as i,oe as n,Z as r,he as t};