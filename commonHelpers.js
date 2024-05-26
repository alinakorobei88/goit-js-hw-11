import{S as c,i as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="44034350-c8dd89b120010b9025e6f422d",f="https://pixabay.com/api/";function p(o){return fetch(`${f}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits)}function h(o){const r=document.querySelector(".gallery");r.innerHTML=o.map(s=>`<a href="${s.largeImageURL}" class="gallery_item">
        <image src="${s.webformatURL}" alt="${s.tags}" class="gallery_image" />
        <div class="gallery_info">
          <div class="info_labels">
              <p>Likes</p>
              <p>Views</p>
              <p>Comments</p>
              <p>Downloads</p>
        </div>
        <div class="info_values">
            <p>${s.likes}</p>
            <p>${s.views}</p>
            <p>${s.comments}</p>
            <p>${s.downloads}</p>
        </div>
        </div>
        </a>`).join(""),new c(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250}).refresh()}function a(o){d.error({title:"Error",message:o})}function m(){console.log("Show loader"),document.querySelector(".div-loader").classList.remove("hidden")}function l(){console.log("Hide loader"),setTimeout(()=>{document.querySelector(".div-loader").classList.add("hidden")},500)}document.querySelector(".search-form").addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.search_query.value.trim();if(r===""){a("Please enter a search query.");return}document.querySelector(".gallery").innerHTML="",o.target.reset(),m(),p(r).then(n=>{l(),n.length===0?a("Sorry, there are no images matching your search query. Please try again!"):h(n)}).catch(n=>{l(),a("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",n)})});
//# sourceMappingURL=commonHelpers.js.map
