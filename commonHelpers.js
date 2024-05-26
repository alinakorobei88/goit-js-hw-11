import{S as l,i as u}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="44034350-c8dd89b120010b9025e6f422d",f="https://pixabay.com/api/";function p(s){return fetch(`${f}?key=${d}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits)}function h(s){const r=document.querySelector(".gallery");r.innerHTML=s.map(o=>`<a href="${o.largeImageURL}" class="gallery_item">
        <image src="${o.webformatURL}" alt="${o.tags}" class="gallery_image" />
        <div class="gallery_info">
          <div class="info_labels">
              <p>Likes</p>
              <p>Views</p>
              <p>Comments</p>
              <p>Downloads</p>
        </div>
        <div class="info_values">
            <p>${o.likes}</p>
            <p>${o.views}</p>
            <p>${o.comments}</p>
            <p>${o.downloads}</p>
        </div>
        </div>
        </a>`).join(""),new l(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250}).refresh()}function a(s){u.error({title:"Error",message:s})}function m(){document.querySelector(".loader").classList.add("hidden")}function c(){document.querySelector(".loader").classList.remove("hidden")}document.querySelector(".search-form").addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.search_query.value.trim();if(r===""){a("Please enter a search query.");return}m(),p(r).then(n=>{c(),n.length===0?a("Sorry, there are no images matching your search query. Please try again!"):h(n)}).catch(n=>{c(),a("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",n)})});
//# sourceMappingURL=commonHelpers.js.map
