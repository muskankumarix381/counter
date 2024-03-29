const plusBtn = document.querySelector('.plus-btn');
const minBtn = document.querySelector('.minus-btn');
const values = document.querySelector('.value');
const changeBy = document.querySelector('.changeby');
const resets = document.querySelector('.reset');

    async function sharepages(){
        await navigator.share({
            title:document.title,
            url:window.location.href
        })
    }


plusBtn.addEventListener('click', ()=>{
    const valuecount=parseInt(values.innerText);
    // console.log(valuecount1);
    const changebyvalue = parseInt(changeBy.value);
    values.innerText=valuecount+changebyvalue;
})

minBtn.addEventListener('click', ()=>{
    const valuecount=parseInt(values.innerText);
    const changebyvalue = parseInt(changeBy.value);
    values.innerText=valuecount-changebyvalue;
})

resets.addEventListener('click' ,()=>{
    values.innerText=0;
})