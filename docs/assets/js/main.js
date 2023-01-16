"use strict";const arrowDesign=document.querySelector(".js-event"),arrowFill=document.querySelector(".js-eventFill"),arrowShare=document.querySelector(".js-eventShare"),arrowUpDesign=document.querySelector(".js-design-up"),arrowDownDesign=document.querySelector(".js-design-down"),formContainerDesign=document.querySelector(".js-design"),paletteOne=document.querySelector(".js-paletteOne"),paletteTwo=document.querySelector(".js-paletteTwo"),paletteThree=document.querySelector(".js-paletteThree"),previewCard=document.querySelector(".js-preview"),arrowUpFill=document.querySelector(".js-fill-up"),arrowDownFill=document.querySelector(".js-fill-down"),formContainerFill=document.querySelector(".js-fill"),arrowUpShare=document.querySelector(".js-share-up"),arrowDownShare=document.querySelector(".js-share-down"),formContainerShare=document.querySelector(".js-share"),shareContainer=document.querySelector(".js-card-created"),nameInput=document.querySelector(".js-input-name"),previewName=document.querySelector(".js-preview-name"),jobInput=document.querySelector(".js-input-job"),previewJob=document.querySelector(".js-preview-job"),emailInput=document.querySelector(".js-input-email"),previewEmail=document.querySelector(".js-preview-email"),phoneInput=document.querySelector(".js-input-phone"),previewPhone=document.querySelector(".js-preview-phone"),linkedinInput=document.querySelector(".js-input-linkedin"),previewLinkedin=document.querySelector(".js-preview-linkedin"),githubInput=document.querySelector(".js-input-github"),previewGithub=document.querySelector(".js-preview-github"),form=document.querySelector(".js-form"),createButton=document.querySelector(".js-create-button"),sectionCreatedCard=document.querySelector(".js-created-success"),linkShare=document.querySelector(".js-link-share"),linkTwitter=document.querySelector(".js-twitter-button"),resetBtn=document.querySelector(".js-reset-btn");let data={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:""};function updatePreview(){data.name=nameInput.value,data.job=jobInput.value,data.phone=phoneInput.value,data.email=emailInput.value,data.linkedin=linkedinInput.value,data.github=githubInput.value,""===data.name?previewName.innerHTML="Nombre Apellidos":previewName.innerHTML=data.name,""===data.job?previewJob.innerHTML="Front-end developer":previewJob.innerHTML=data.job,""===data.phone?previewPhone.href="":previewPhone.href="tel:"+data.phone,""===data.email?previewEmail.href="":previewEmail.href="mailto:"+data.email,""===data.linkedin?previewLinkedin.href="":previewLinkedin.href="https://www.linkedin.com/in/"+data.linkedin,""===data.github?previewGithub.href="":previewGithub.href="https://github.com/"+data.github}function renderSection(e,t,r,a,n,o){e.classList.add("hidden"),t.classList.add("hidden"),r.classList.add("rotate"),a.classList.add("rotate"),n.classList.remove("hidden"),o.classList.remove("rotate"),n.classList.add("transition"),n.style.height=n.scrollHeight+"px"}function handleClickDesignArrow(){renderSection(formContainerFill,formContainerShare,arrowDownFill,arrowDownShare,formContainerDesign,arrowDownDesign)}function handleClickFillArrow(){renderSection(formContainerDesign,formContainerShare,arrowDownDesign,arrowDownShare,formContainerFill,arrowDownFill)}function handleClickShareArrow(){renderSection(formContainerDesign,formContainerFill,arrowDownFill,arrowDownDesign,formContainerShare,arrowDownShare)}form.addEventListener("input",e=>{const t=e.target.name,r=e.target.value;t===[t]&&(data[t]=r),updatePreview(),saveInLocalStorage(data)}),arrowDesign.addEventListener("click",handleClickDesignArrow),arrowFill.addEventListener("click",handleClickFillArrow),arrowShare.addEventListener("click",handleClickShareArrow),paletteOne.addEventListener("click",e=>{previewCard.classList.remove("colorsPalette-2"),previewCard.classList.remove("colorsPalette-3"),previewCard.classList.add("colorsPalette-1"),previewCard.classList.add(e.currentTarget.value),data.palette=e.currentTarget.value}),paletteTwo.addEventListener("click",e=>{previewCard.classList.remove("colorsPalette-1"),previewCard.classList.remove("colorsPalette-3"),previewCard.classList.add("colorsPalette-2"),previewCard.classList.add(e.currentTarget.value),data.palette=e.currentTarget.value}),paletteThree.addEventListener("click",e=>{previewCard.classList.remove("colorsPalette-1"),previewCard.classList.remove("colorsPalette-2"),previewCard.classList.add("colorsPalette-3"),previewCard.classList.add(e.currentTarget.value),data.palette=e.currentTarget.value});const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundSize="cover",data.photo=fr.result}function enableSectionShare(){sectionCreatedCard.classList.remove("hidden")}function disableSectionShare(){sectionCreatedCard.classList.add("hidden")}function disableCreateBtn(){createButton.disabled=!0,createButton.classList.add("create-btn-disabled")}function enableCreateBtn(){createButton.disabled=!1,createButton.classList.remove("create-btn-disabled")}function handleCreateButtonClick(e){e.preventDefault(),disableCreateBtn(),enableSectionShare(),sendRequest()}function resetInput(){nameInput.value="",jobInput.value="",emailInput.value="",phoneInput.value="",linkedinInput.value="",githubInput.value="",profileImage.style.backgroundImage="",profilePreview.style.backgroundImage="",paletteOne.checked=!0,previewCard.classList.remove("colorsPalette-2"),previewCard.classList.remove("colorsPalette-3"),previewCard.classList.add("colorsPalette-1"),handleClickDesignArrow(),updatePreview(data)}function handleClickReset(e){e.preventDefault(),resetInput(),updatePreview(),disableSectionShare(),enableCreateBtn(),saveInLocalStorage(data)}function sendRequest(){fetch("https://awesome-profile-cards.herokuapp.com/card/",{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e.json),e.success?(linkShare.innerHTML="<a class='card-created-url' href="+e.cardURL+">"+e.cardURL+"</a>",linkTwitter.href="https://twitter.com/intent/tweet?text=%C2%A1Mira%20la%20m%C3%A1gica%20tarjeta%20que%20he%20creado!!&url="+e.cardURL):linkShare.innerHTML="ERROR:"+e.error})}function saveInLocalStorage(e){localStorage.setItem("dataFromForm",JSON.stringify(e))}function getLocalStorageData(){data=JSON.parse(localStorage.getItem("dataFromForm")),"1"===data.palette?(paletteOne.checked=!0,previewCard.classList.remove("colorsPalette-2"),previewCard.classList.remove("colorsPalette-3"),previewCard.classList.add("colorsPalette-1")):"2"===data.palette?(paletteTwo.checked=!0,previewCard.classList.remove("colorsPalette-1"),previewCard.classList.remove("colorsPalette-3"),previewCard.classList.add("colorsPalette-2")):(paletteThree.checked=!0,previewCard.classList.remove("colorsPalette-1"),previewCard.classList.remove("colorsPalette-2"),previewCard.classList.add("colorsPalette-3")),nameInput.value=data.name,jobInput.value=data.job,phoneInput.value=data.phone,emailInput.value=data.email,linkedinInput.value=data.linkedin,githubInput.value=data.github,updatePreview()}fileField.addEventListener("change",getImage),createButton.addEventListener("click",handleCreateButtonClick),resetBtn.addEventListener("click",handleClickReset),JSON.parse(localStorage.getItem("dataFromForm"))&&getLocalStorageData();const root=document.querySelector(":root");root.style.setProperty("--rando",Math.floor(20*Math.random())+1+"px");