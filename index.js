let Secret__key='FPwMD4naXFbaoWl5gSgogzoM1NySOuyBZsNJ4eFKBBc';
let FormEl=document.querySelector('form');
let InputSearch=document.getElementById('search-input');
let Search_Results=document.querySelector('.search-results');
let Search_Result=document.querySelector('.search-result');
let Show_More=document.getElementById('show-more');
let search_button=document.getElementById('search-button');
let InputData='';
let Page=1;

const Search_Images=async()=>{
    InputData=InputSearch.value;
    const url=`https://api.unsplash.com/search/photos?page=${Page}&query=${InputData}&client_id=${Secret__key}`
    const res=await (await fetch(url)).json();
    const ResData=res.results;
    if (Page==1) {
        Search_Results.innerHTML='';
    }
    ResData.map((result) => {
        const ImagesWrapper=document.createElement('div');
        ImagesWrapper.classList.add('search-result');
        const image=document.createElement('img');
        image.src=result.urls.small;
        image.alt=result.alt_description;

        const imagelink=document.createElement('a');
        imagelink.href=result.links.html;
        imagelink.target='_blank';
        imagelink.textContent=result.alt_description;
        ImagesWrapper.appendChild(image);
        ImagesWrapper.appendChild(imagelink);
        Search_Results.appendChild(ImagesWrapper)

    })
    Page++;
    if (Page>1) {
        Show_More.style.display='block';
    }
}

FormEl.addEventListener('submit',(event)=>{
    event.preventDefault();
    Page=1;
    Search_Images()
    InputSearch.value='';
})
Show_More.addEventListener('click',()=>{
    Search_Images()
    InputSearch.value='';
})

// Search_Images()
