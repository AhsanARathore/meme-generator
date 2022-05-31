let memeForm = document.querySelector("#memeform");
let imgurl = document.querySelector("#imgurl");
let topText = document.querySelector("#toptext");
let bottomText = document.querySelector("#bottomtext");
let textColor = document.querySelector('#color')

memeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let div = document.createElement("div");
  div.setAttribute("class", "picture");
  let body = document.querySelector("body");
  body.appendChild(div);

  div.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG" || "H2") {
      event.target.parentNode.remove();
    }
  });

  let img = document.createElement("img");
  img.setAttribute('class', 'image')
  img.src = imgurl.value;
  div.appendChild(img);

  let top = document.createElement("p");
  top.setAttribute("class", "top");
  top.innerText = topText.value;
  top.style.color = textColor.value;
  div.appendChild(top);
  

  let bottom = document.createElement("p");
  bottom.setAttribute("class", "bottom");
  bottom.innerText = bottomText.value;
  bottom.style.color = textColor.value;
  div.appendChild(bottom);

  

  memeForm.reset();
});
