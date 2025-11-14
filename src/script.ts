
const days: Array<string> = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateClock(): void {
    
    const clock: HTMLElement = document.getElementById("clock") !;

    const date: Date = new Date();
    const day: string = days[date.getDay()];
    const hours: string = String(date.getHours()).padStart(2, "0");
    const minutes: string = String(date.getMinutes()).padStart(2, "0");

    clock.innerHTML = day + " " + hours + ":" + minutes;

}

updateClock();
setInterval(updateClock, 1000);

const stacks: HTMLElement = document.getElementById("stacks") !;

const images = import.meta.glob('/src/assets/stacks/*.png', { eager: true }) as Record<string, {default: string}>;

let toggledElement: HTMLElement | null= null;
const classes: Array<string> = ["scale-125", "shadow-sm!"];

const containerClasses: string = "h-[95px] w-[95px] bg-bg p-[10px] rounded-[12px] outline-1 outline-stacks \
  shadow-xs shadow-black flex flex-col justify-center gap-y-[10px] items-center transition-transform duration-300 text-[12px] text-center \
  lg:hover:scale-125 lg:hover:shadow-sm!";

const imgClasses: string = "h-[50%] w-[50%] object-contain";

// const hoveringClasses: Array<string> = ["scale-125","shadow-sm!"];

// let hovering: boolean = false;

for (const [path, image] of Object.entries(images)) {
  const fileName: string = path.split('/').at(-1)!.split('-').at(-1)!.slice(0,-4);

  const img = document.createElement("img");
  const imgContainer = document.createElement("div");

  const text = document.createElement("p");
  text.innerHTML = fileName;

  imgContainer.className = containerClasses;

  img.className = imgClasses;

  // imgContainer.addEventListener('mouseenter', () => {
  //   for (const s of hoveringClasses) {
  //     imgContainer.classList.toggle(s);
  //   }
  //   hovering = true;
  //   console.log("Mouse Entered");
  // });
  
  // imgContainer.addEventListener('mouseleave', () => {
  //   for (const s of hoveringClasses) {
  //     imgContainer.classList.toggle(s);
  //   }
  //   hovering = false;
  //   console.log("Mouse Exited");
  // })

  imgContainer.addEventListener("click", (event) => {

    event.stopPropagation();

    if (window.matchMedia("(width >= 64rem)").matches) return;

    if (toggledElement == null) {

      for (const s of classes) {
        imgContainer.classList.toggle(s);
      }
      toggledElement = imgContainer;

    } else if (toggledElement == imgContainer) {

      for (const s of classes) {
        imgContainer.classList.toggle(s);
      }  
      toggledElement = null;

    } else {

        for (const s of classes) {
          toggledElement.classList.toggle(s);
          imgContainer.classList.toggle(s);
        }

        toggledElement = imgContainer;
    }
    
  });
  img.src = image.default;
  imgContainer.appendChild(img);
  imgContainer.appendChild(text);
  stacks.appendChild(imgContainer);
}

const languages: HTMLElement = document.getElementById("languages") !;

const langs = import.meta.glob('/src/assets/languages/*.png', {eager: true}) as Record<string, {default: string}>;

for (const [path, image] of Object.entries(langs)) {
    const fileName: string = path.split('/').at(-1)!.split('-').at(-1)!.slice(0,-4);
    const img = document.createElement("img");
    const imgContainer = document.createElement("div");
    // imgContainer.className = "h-[75px] w-[75px] bg-bg p-[10px] rounded-[12px] outline-1 outline-stacks \
    // shadow-xs shadow-black flex justify-center items-center transition-transform duration-300"
    imgContainer.className = containerClasses;
    img.src = image.default;
    img.className = imgClasses;

    const text = document.createElement("p");
    text.innerHTML = fileName;

    // imgContainer.addEventListener('pointerenter', () => {
    //   for (const s of hoveringClasses) {
    //     imgContainer.classList.toggle(s);
    //   }
    //   hovering = true;
    //   console.log("Pointer Entered");
    // });
  
    // imgContainer.addEventListener('pointerleave', () => {
    //   for (const s of hoveringClasses) {
    //     imgContainer.classList.toggle(s);
    //   }
    //   hovering = false;
    //   console.log("Pointer Exited");
    // })

    imgContainer.addEventListener("click", (event) => {

    event.stopPropagation();

    if (window.matchMedia("(width >= 64rem)").matches) return;

    if (toggledElement == null) {

      for (const s of classes) {
        imgContainer.classList.toggle(s);
      }
      toggledElement = imgContainer;

    } else if (toggledElement == imgContainer) {

      for (const s of classes) {
        imgContainer.classList.toggle(s);
      }  
      toggledElement = null;

    } else {

        for (const s of classes) {
          toggledElement.classList.toggle(s);
          imgContainer.classList.toggle(s);
        }

        toggledElement = imgContainer;
    }
    
  });

  imgContainer.appendChild(img);
  imgContainer.appendChild(text);
  languages.appendChild(imgContainer);
}

document.addEventListener("click", () => {
  if (toggledElement) {
    for (const s of classes) {
      toggledElement.classList.toggle(s);
    }

    toggledElement = null;
  }
});