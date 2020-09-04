const ZoomIconContent = /* html */ `
  <style>
    a {
      cursor: pointer;
    }
    svg {
      transition: transform 0.2s;
      width: 40px;
      height: 40px;
    }
    #circle {
      fill: #FFFFFF;
      transition: 0.2s;
    }
    .path {
      fill: var(--primarydark);
    }
    a:hover #circle{
      fill: var(--secondary);
    }

    #circle.active {
      fill: var(--secondary);
    }

    @media (max-width: 440px) {
      svg {
        width: 30px;
        height: 30px;
      }
    }
    @media screen and (max-height: 450px) and (orientation: landscape) {
      svg {
        width: 30px;
        height: 30px;
      }
    }
  </style>
  <a id="anchor">
    <svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <g transform="matrix(1.79021,0,0,1.79021,53.7063,19.6923)">
          <circle cx="113" cy="132" r="143" id="circle" />
      </g>
      <g id="search" class="path" transform="matrix(0.585939,0,0,0.585939,256,256)">
        <g transform="matrix(1,0,0,1,-256,-256)">
            <path d="M508.874,478.708L360.142,329.976C388.352,295.149 405.333,250.873 405.333,202.667C405.333,90.917 314.416,0 202.666,0C90.916,0 0,90.917 0,202.667C0,314.417 90.917,405.334 202.667,405.334C250.873,405.334 295.149,388.352 329.976,360.143L478.708,508.875C482.875,513.04 489.627,513.04 493.794,508.875L508.875,493.793C513.04,489.627 513.04,482.873 508.874,478.708ZM202.667,362.667C114.438,362.667 42.667,290.896 42.667,202.667C42.667,114.438 114.438,42.667 202.667,42.667C290.896,42.667 362.667,114.438 362.667,202.667C362.667,290.896 290.896,362.667 202.667,362.667Z" />
        </g>
      </g>
    </svg>

  </a>`;

class ZoomIcon extends HTMLElement {

  static get observedAttributes() {
    return ["isActive"];
  }

  set isActive(value) {
    this._isActive = value;
    if(this._isActive) {
      this.circleElement.classList.add("active");
    } else {
      this.circleElement.classList.remove("active");
    }
  }

  get isActive() {
    return this._isActive;
  }

  constructor() {
    super();

    let shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = ZoomIconContent;

    this.circleElement = this.shadowRoot.getElementById("circle");
  }

  connectedCallback() {
    if(this.isActive) {
      this.circleElement.classList.add("active");
    }
  }

  toggle() {
    this.circleElement.classList.toggle("active");
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "isActive") {
      this.isActive = newValue;
      this.toggle();
    }
  }
}

customElements.define("zoom-icon", ZoomIcon);
