import{j as r}from"./chunk-CFVOPMJY.js";import{O as i,T as a}from"./chunk-XP6ZYIC6.js";var s=(()=>{class e{constructor(t){this._httpClient=t}getanime(){return this._httpClient.get("https://api.jikan.moe/v4/anime")}getanimedetails(t){return this._httpClient.get(`https://api.jikan.moe/v4/anime/${t}/full`)}getanimecharacter(t){return this._httpClient.get(`https://api.jikan.moe/v4/anime/${t}/characters`)}getanimecharacterdfull(t){return this._httpClient.get(`https://api.jikan.moe/v4/characters/${t}/full`)}static{this.\u0275fac=function(n){return new(n||e)(a(r))}}static{this.\u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{s as a};
