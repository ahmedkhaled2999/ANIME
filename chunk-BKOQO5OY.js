import{a as M}from"./chunk-45UHWB3Q.js";import{a as x}from"./chunk-YLPF43NJ.js";import{q as V,t as F}from"./chunk-CFVOPMJY.js";import{Aa as l,Na as S,Sa as s,Ta as E,Ua as I,Va as k,Wa as A,X as u,Xa as a,Ya as o,Za as m,ab as b,bb as j,cb as d,da as g,db as v,ea as _,ib as c,jb as p,kb as T,ma as y,mb as w,va as f,za as r}from"./chunk-XP6ZYIC6.js";var B=(()=>{class n{constructor(e){this._animeService=e,this.newItemEvent=new y}close(){this.newItemEvent.emit(!1)}static{this.\u0275fac=function(t){return new(t||n)(l(x))}}static{this.\u0275cmp=u({type:n,selectors:[["app-charatersdetails"]],inputs:{showd:"showd",details:"details"},outputs:{newItemEvent:"newItemEvent"},standalone:!0,features:[w],decls:15,vars:4,consts:[[1,"fixed","bg-black","bg-opacity-80","w-full","right-0","left-0","top-0","flex","justify-center","h-[100%]]","bottom-0","items-center","p-2"],[1,"flex","flex-wrap","justify-center","items-center","p-2"],[1,"w-1/2","p-2","md:w-1/3"],["alt","",1,"w-full",3,"src"],[1,"w-full","md:w-2/3","text-white","p-3"],[1,"text-[30px]","font-bold","relative"],[1,"mb-4"],[1,"font-bold","text-[16px]"],[1,"text-white","text-[50px]","absolute","top-0","right-[10px]",3,"click"],[1,"fa-solid","fa-x"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),m(4,"img",3),o()(),a(5,"div",4)(6,"div")(7,"h2",5),c(8),o(),a(9,"h4",6),c(10),o(),a(11,"p",7),c(12),o()()()(),a(13,"div",8),d("click",function(){return i.close()}),m(14,"i",9),o()()),t&2&&(r(4),s("src",i.details.images.jpg.image_url,f),r(4),T(" ",i.details.name," "),r(2),p(i.details.nicknames),r(2),p(i.details.about))}})}}return n})();function H(n,C){if(n&1){let e=b();a(0,"div",7),d("click",function(){let i=g(e).$implicit,h=v();return _(h.getdetailschracter(i.character.mal_id))}),a(1,"div",8),m(2,"img",9),a(3,"span",10),c(4),o()()()}if(n&2){let e=C.$implicit;r(2),s("src",e.character.images.jpg.image_url,f),r(2),p(e.character.name)}}function L(n,C){if(n&1){let e=b();a(0,"app-charatersdetails",11),d("newItemEvent",function(i){g(e);let h=v();return _(h.show=i)}),o()}if(n&2){let e=v();s("showd",e.show)("details",e.charactersdetails)}}var N=(()=>{class n{constructor(e,t){this._activatedRoute=e,this._animeService=t,this.animeCharacterAnimation="",e.params.subscribe({next:i=>{console.log(i),this.characterid=i.id}})}getcharacterid(){this._animeService.getanimecharacter(this.characterid).subscribe({next:e=>{console.log(e.data),this.animecharacter=e.data}})}ngOnInit(){this.getcharacterid()}getdetailschracter(e){console.log(e),this._animeService.getanimecharacterdfull(e).subscribe({next:t=>{console.log(t.data),this.charactersdetails=t.data,console.log(this.charactersdetails)}}),this.show=!0}static{this.\u0275fac=function(t){return new(t||n)(l(V),l(x))}}static{this.\u0275cmp=u({type:n,selectors:[["app-animecharacters"]],hostVars:1,hostBindings:function(t,i){t&2&&j("@animeCharacterAnimation",i.animeCharacterAnimation)},standalone:!0,features:[w],decls:10,vars:2,consts:[[1,"relative"],[1,"text-[30px]","font-bold","uppercase","line","relative","w-fit","mb-3"],[1,"flex","flex-wrap"],[1,"w-1/2","md:w-1/3","lg:w-1/5","p-2","cursor-pointer","flex","justify-center","items-center"],[1,"flex","justify-center","items-center","mt-2","mb-3","w-full"],[1,"bg-red-700","p-2","text-white","rounded-lg","font-bold",3,"routerLink"],[1,"",3,"showd","details"],[1,"w-1/2","md:w-1/3","lg:w-1/5","p-2","cursor-pointer","flex","justify-center","items-center",3,"click"],[1,"border","border-black","p-2","rounded-lg","w-[40%]","md:w-[80%]","h-[200px]"],["alt","",1,"w-full","h-[75%]","md:h-[90%]","object-scale-down","bg-bottom","bg-cover",3,"src"],[1,"font-bold","text-[13px]"],[1,"",3,"newItemEvent","showd","details"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"h2",1),c(2," characters "),o()(),a(3,"div",2),k(4,H,5,2,"div",3,I),a(6,"div",4)(7,"button",5),c(8," show all characters "),o()()(),S(9,L,1,2,"app-charatersdetails",6)),t&2&&(r(4),A(i.animecharacter.slice(0,6)),r(3),s("routerLink","/allcharacter/"+i.characterid),r(2),E(9,i.show?9:-1))},dependencies:[F,B],styles:['.line[_ngcontent-%COMP%]:before{content:"";width:100%;height:7px;border-radius:10px;background:#000;background:linear-gradient(144deg,#000 52%,#9e2626 52%);position:absolute;left:0;bottom:-5px}app-animecharacters[_ngcontent-%COMP%]{transition:opacity .3s ease-in-out,transform .3s ease-in-out}'],data:{animation:[M]}})}}return n})();export{B as a,N as b};
