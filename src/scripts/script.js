const d = document.getElementsByClassName("draggable");

for (let i = 0; i < d.length; i++) {
  d[i].style.position = "relative";
}

function filter(e) {
  let target = e.target;

  if (!target.classList.contains("draggable")) {
    return;
  }

  target.moving = true;

  //NOTICE THIS 👇 Check if Mouse events exist on users' device
  if (e.clientX) {
    target.oldX = e.clientX; // If they exist then use Mouse input
    target.oldY = e.clientY;
  } else {
    target.oldX = e.touches[0].clientX; // Otherwise use touch input
    target.oldY = e.touches[0].clientY;
  }
  //NOTICE THIS 👆 Since there can be multiple touches, you need to mention which touch to look for, we are using the first touch only in this case

  target.oldLeft = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1;
  target.oldTop = window.getComputedStyle(target).getPropertyValue('top').split('px')[0] * 1;

  document.onmousemove = dr;
  //NOTICE THIS 👇
  document.ontouchmove = dr;
  //NOTICE THIS 👆

  function dr(event) {
    event.preventDefault();

    if (!target.moving) {
      return;
    }
    //NOTICE THIS 👇
    if (event.clientX) {
      target.distX = event.clientX - target.oldX;
      target.distY = event.clientY - target.oldY;
    } else {
      target.distX = event.touches[0].clientX - target.oldX;
      target.distY = event.touches[0].clientY - target.oldY;
    }
    //NOTICE THIS 👆

    target.style.left = target.oldLeft + target.distX + "px";
    target.style.top = target.oldTop + target.distY + "px";
  }

  function endDrag() {
    target.moving = false;
  }
  target.onmouseup = endDrag;
  //NOTICE THIS 👇
  target.ontouchend = endDrag;
  //NOTICE THIS 👆
}
document.onmousedown = filter;
//NOTICE THIS 👇
document.ontouchstart = filter;
//NOTICE THIS 👆


function myFunction(){
  document.getElementById("add-friend").innerHTML = 
  `
  <div class="userwrap">
  <div class="user">
  <div class="namewrap"><div class="input-group">
  <div class="message" data-cy="message">Add friend name:<br></div>
  <span class="input-group-addon"><span class="input-icon fui-user"></span></span> <input id="nuser0" data-cy="add-friend-name" class="form-control name" type="text" name="n0" value="Name 1" onfocus="(this.value == 'Name 1') &amp;&amp; (this.value = '')" onblur="(this.value == '') &amp;&amp; (this.value = 'Name 1')"></div></div>
  <div class="totalwrap"><i class="icon-tag"></i><span class="total">0</span><input type="hidden" name="xuser0" class="total"></div>
    <div class="bef"></div>
    <a href="#"><div class="pluswrap"><div class="plus" id="addScntuser0" data-cy="add-friend">&#xFF0B;<span class="normal"> more</span></div></div></a>
  </div>
  <div class="clearfix"></div>
  </div>
  `; 
};