import"./chunk-IFRY25KZ.js";import{a as j}from"./chunk-45UHWB3Q.js";import{a as k}from"./chunk-YLPF43NJ.js";import"./chunk-NX2OY7UJ.js";import{i as T,q as V}from"./chunk-CFVOPMJY.js";import{Aa as s,Na as f,Oa as u,Pa as g,Qa as w,Sa as d,X as v,Xa as t,Ya as i,Za as x,ab as S,cb as b,da as _,db as h,ea as C,fb as y,gb as E,hb as A,ib as n,jb as m,kb as I,mb as D,va as p,za as o}from"./chunk-XP6ZYIC6.js";import"./chunk-TMC7WMLO.js";var F=["animeCharacters"],O=()=>[import("./chunk-K76EHYVB.js").then(a=>a.AnimecharactersComponent)];function z(a,Q){a&1&&x(0,"app-animecharacters",15,1)}function M(a,Q){if(a&1){let e=S();t(0,"div",2)(1,"div",3)(2,"div"),x(3,"img",4),i()(),t(4,"div",5)(5,"div")(6,"h2",6),n(7),i(),t(8,"span",7),n(9),i(),t(10,"div",8)(11,"span",9),n(12,"Score:"),i(),t(13,"span",10),n(14),i()(),t(15,"div",8)(16,"span",9),n(17,"Status:"),i(),t(18,"span",10),n(19),i()(),t(20,"div",8)(21,"span",9),n(22,"type:"),i(),t(23,"span",10),n(24),i()(),t(25,"div",8)(26,"span",9),n(27,"duration:"),i(),t(28,"span",10),n(29),i()(),t(30,"p",11),n(31),i(),t(32,"button",12)(33,"a",13),n(34,"show more deatails in myanimelist"),i()(),t(35,"button",14,0),b("click",function(){_(e);let l=h();return C(l.scrollToAnimeCharacters())}),n(37,"show chracters"),i()()()(),f(38,z,2,0),u(39,38,O),w(35)}if(a&2){let e=h();d("@animeCharacterAnimation",e.animeCharacters),o(3),d("src",e.animecard.images.jpg.image_url,p),o(4),m(e.animecard.title),o(2),m(e.animecard.rating),o(5),I("",e.animecard.score,"/10"),o(5),m(e.animecard.status),o(5),m(e.animecard.type),o(5),m(e.animecard.duration),o(2),m(e.animecard.synopsis),o(2),d("href",e.animecard.url,p)}}var K=(()=>{class a{constructor(e,r,l){this._animeService=e,this._activatedRoute=r,this._ViewportScroller=l,r.params.subscribe({next:c=>{console.log(c.id),this.animeid=c.id}})}scrollToAnimeCharacters(){this._ViewportScroller.scrollToAnchor("animeCharacters"),setTimeout(()=>{let e=document.getElementById("animeCharacters");e?e.scrollIntoView({behavior:"smooth"}):console.error("Element not found")},100)}getanimedetails(){this._animeService.getanimedetails(this.animeid).subscribe({next:e=>{console.log(e.data),this.animecard=e.data},error:e=>{console.log(e)}})}ngOnInit(){this.getanimedetails()}static{this.\u0275fac=function(r){return new(r||a)(s(k),s(V),s(T))}}static{this.\u0275cmp=v({type:a,selectors:[["app-animedetails"]],viewQuery:function(r,l){if(r&1&&y(F,5),r&2){let c;E(c=A())&&(l.animeCharacters=c.first)}},standalone:!0,features:[D],decls:3,vars:0,consts:[["chracters",""],["animeCharacters",""],[1,"flex","mt-7","flex-wrap","p-2"],[1,"w-full","md:w-full","p-2","lg:w-1/3"],["alt","",1,"w-full","object-cover",3,"src"],[1,"w-full","md:w-full","p-2","lg:w-2/3","flex","items-center"],[1,"font-bold","text-[30px]"],[1,"mb-1","block"],[1,"flex"],[1,"inline-block","text-gray-500","mr-2","font-bold"],[1,"mb-1"],[1,""],[1,"bg-red-600","p-2","rounded-lg","text-white","mt-3"],[3,"href"],[1,"block","bg-blue-400","p-2","mt-3","rounded-lg","text-white",3,"click"],["id","animeCharacters"]],template:function(r,l){r&1&&(f(0,M,41,10),u(1,0),g(2e3))},data:{animation:[j]}})}}return a})();export{K as AnimedetailsComponent};
