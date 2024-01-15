
<div class="sb-body-overlay">
  <!--!-->
  <div id="loader" class="sb-loading" ><svg class="circular" height="40" width="40" >
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="6" stroke-miterlimit="10" ></circle>
    </svg></div>
</div>
<div class="bg-image"></div>

-- CSS --
.sb-body-overlay {
    z-index: 10000023;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .25);
    overflow: hidden;
    pointer-events: none;
    top: 0;
    bottom: 0;
}
.sb-loading {
    width: 56px;
    height: 56px;
    position: fixed;
    top: calc(50% - 28px);
    left: calc(50% - 28px);
    z-index: 10000;
    border-radius: 50%;
    padding: 3px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    display: inline-block;
    background: #222;
}
.circular {
    animation: rotate 2s linear infinite;
    height: 50px;
    width: 50px;
    border-radius: 50%;
}
.path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
    stroke: #007bff;
}
@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
    }
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.bg-image {
  height: 500px;
  background-image: url(https://www.w3schools.com/html/img_girl.jpg);

}
