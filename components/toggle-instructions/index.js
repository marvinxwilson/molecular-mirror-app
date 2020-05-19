const instructionsIconTemplate = document.createElement("template"); 
instructionsIconTemplate.innerHTML = /* html */ `
  <style>
    a {
      cursor: pointer;
      position: absolute;
      top: 70%;
      right: 5px;
      transform: translateY(-70%);
      z-index: 1;
    }
    svg {
      transition: transform 0.2s;
      width: 40px;
      height: 40px;
    }
    path {
      transition: 0.2s;
      fill: white;
    }
    a:hover path{
      fill: var(--orange);
    }
  </style>
  <a id="anchor">
    <svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <g transform="matrix(1.79021,0,0,1.79021,53.7063,19.6923)">
          <circle cx="113" cy="132" r="143" style="fill:rgb(23,58,123);"/>
      </g>
      <g id="camera" transform="matrix(0.71875,0,0,0.722656,256,256)">
          <g transform="matrix(1,0,0,1,-256,-256)">
              <g id="Page-1">
                  <g id="paths" >
                      <path d="M24.055,268.535L102.4,322.56L102.4,477.867C102.4,496.718 117.682,512 136.533,512L375.467,512C394.318,512 409.6,496.718 409.6,477.867L409.6,322.56L487.936,268.535C494.867,263.757 499.007,255.877 499.007,247.458C499.007,239.039 494.867,231.159 487.936,226.381L409.6,172.373L409.6,34.133C409.6,15.282 394.318,0 375.467,0L136.533,0C117.682,0 102.4,15.282 102.4,34.133L102.4,172.373L24.055,226.389C17.128,231.168 12.991,239.046 12.991,247.462C12.991,255.878 17.128,263.757 24.055,268.535ZM409.6,193.092L478.251,240.444C480.559,242.037 481.937,244.662 481.937,247.467C481.937,250.271 480.559,252.897 478.251,254.49L409.6,301.833L409.6,193.092ZM321.63,17.067L310.682,28.74C307.457,32.179 302.954,34.131 298.24,34.133L213.76,34.133C209.044,34.127 204.54,32.176 201.31,28.74L190.37,17.067L321.63,17.067ZM119.467,181.325L122.803,179.021C125.647,177.057 127.025,173.572 126.294,170.195C125.563,166.817 122.868,164.214 119.467,163.601L119.467,34.133C119.467,24.708 127.108,17.067 136.533,17.067L166.972,17.067L188.86,40.414C195.323,47.281 204.33,51.183 213.76,51.2L298.24,51.2C307.672,51.189 316.681,47.286 323.14,40.414L345.028,17.067L375.467,17.067C384.892,17.067 392.533,24.708 392.533,34.133L392.533,163.601C389.132,164.214 386.437,166.817 385.706,170.195C384.975,173.572 386.353,177.057 389.197,179.021L392.533,181.325L392.533,313.591L260.838,404.429C257.923,406.438 254.069,406.438 251.153,404.429L119.467,313.609L119.467,181.325ZM119.467,334.336L241.493,418.475C250.257,424.47 261.803,424.47 270.566,418.475L392.533,334.336L392.533,435.2C392.533,444.626 384.892,452.267 375.467,452.267L136.533,452.267C127.108,452.267 119.467,444.626 119.467,435.2L119.467,334.336ZM119.467,464.589C124.632,467.66 130.524,469.298 136.533,469.333L375.467,469.333C381.476,469.298 387.368,467.66 392.533,464.589L392.533,477.867C392.533,487.292 384.892,494.933 375.467,494.933L136.533,494.933C127.108,494.933 119.467,487.292 119.467,477.867L119.467,464.589ZM33.749,240.444L102.4,193.075L102.4,301.841L33.741,254.49C31.433,252.897 30.055,250.271 30.055,247.467C30.055,244.662 31.433,242.037 33.741,240.444L33.749,240.444Z" />
                      <path d="M199.859,124.066C201.585,124.063 203.269,123.536 204.689,122.556L221.065,111.258C223.659,109.562 225.13,106.593 224.907,103.502C224.685,100.411 222.804,97.684 219.994,96.377C217.184,95.07 213.886,95.39 211.379,97.212L195.012,108.501C191.931,110.62 190.588,114.499 191.7,118.07C192.812,121.641 196.119,124.071 199.859,124.066Z" />
                      <path d="M162.253,131.089L145.92,142.387C142.141,145.096 141.226,150.332 143.863,154.162C146.5,157.992 151.718,159.006 155.597,156.442L171.972,145.143C175.751,142.434 176.666,137.198 174.029,133.369C171.392,129.539 166.175,128.525 162.295,131.089L162.253,131.089Z" />
                      <path d="M253.815,88.67L256,87.168L258.185,88.67C262.061,91.203 267.25,90.183 269.878,86.371C272.507,82.559 271.616,77.346 267.87,74.624L260.838,69.777C257.925,67.771 254.075,67.771 251.162,69.777L244.13,74.624C240.384,77.346 239.493,82.559 242.122,86.371C244.75,90.183 249.939,91.203 253.815,88.67Z" />
                      <path d="M307.319,122.556C311.199,125.12 316.416,124.106 319.053,120.276C321.69,116.446 320.775,111.21 316.996,108.501L300.621,97.212C298.119,95.252 294.736,94.844 291.841,96.154C288.945,97.464 287.018,100.275 286.838,103.447C286.659,106.62 288.257,109.63 290.987,111.258L307.319,122.556Z" />
                      <path d="M356.446,156.442C358.956,158.172 362.199,158.431 364.953,157.122C367.707,155.813 369.553,153.134 369.796,150.095C370.039,147.055 368.642,144.117 366.131,142.387L349.756,131.089C345.877,128.525 340.659,129.539 338.022,133.369C335.385,137.198 336.3,142.434 340.079,145.143L356.446,156.442Z" />
                      <path d="M256,298.667C257.599,298.667 259.166,298.217 260.523,297.37L328.789,254.703C331.284,253.144 332.8,250.409 332.8,247.467L332.8,170.667C332.8,167.724 331.284,164.99 328.789,163.43L260.523,120.764C257.756,119.034 254.244,119.034 251.477,120.764L183.211,163.43C180.716,164.99 179.2,167.724 179.2,170.667L179.2,247.467C179.2,250.409 180.716,253.144 183.211,254.703L251.477,297.37C252.834,298.217 254.401,298.667 256,298.667ZM315.733,242.739L264.533,274.773L264.533,218.069L315.733,186.069L315.733,242.739ZM256,138.061L308.164,170.667L256,203.273L203.836,170.667L256,138.061ZM247.467,274.773L196.267,242.773L196.267,186.069L247.467,218.069L247.467,274.773Z" />
                  </g>
              </g>
          </g>
      </g>
    </svg>
  </a>`;

class ToggleInstructions extends HTMLElement {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(instructionsIconTemplate.content.cloneNode(true));

    this.buttonElement = this.shadowRoot.querySelector("a");

    this.buttonElement.addEventListener("click", this.handleClick);
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent("toggleInstructions"));
  }
}

customElements.define("toggle-instructions", ToggleInstructions);
