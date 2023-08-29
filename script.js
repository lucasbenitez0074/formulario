const $inputs = document.querySelectorAll(".contactForm [required]");


$inputs.forEach((input)=>{
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("spanError", "displayNone")
    input.insertAdjacentElement("afterend",$span);
} )
console.log(document.querySelectorAll("span"))
document.addEventListener("keyup",(e)=>{
    if(e.target.matches(".contactForm [required]")){
        let $input = e.target;
        let pattern = $input.pattern || $input.dataset.pattern;
        if(pattern && $input.value !== ""){
            let regex = new RegExp(pattern);
            return !regex.exec($input.value) ? document.getElementById($input.name).classList.remove("displayNone") :  document.getElementById($input.name).classList.add("displayNone")
        
    }
    if(!pattern){
        return $input.value === "" ? document.getElementById($input.name).classList.remove("displayNone") :  document.getElementById($input.name).classList.add("displayNone")
    }
}})

document.addEventListener("submit",(e)=>{
    e.preventDefault()
    const $loader = document.getElementById("loader")
    $loader.classList.add("loaderContainer")
    setTimeout(()=>{
        $loader.classList.remove("loaderContainer")
        window.location.href = "ty.html";
    },5000)
})