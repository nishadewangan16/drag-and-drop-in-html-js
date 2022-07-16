console.log("Drag and drop");
const imgboxs = document.querySelector(".imgbox");

const whiteboxs = document.getElementsByClassName("whitebox");

imgboxs.addEventListener("dragstart", (e) => {
  console.log("drag start with trigger");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});

imgboxs.addEventListener("dragend", (e) => {
  console.log("dragend with trigger");
  e.target.className = "imgbox";
});

for (whitebox of whiteboxs) {
  whitebox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("drageover with trigger");
  });

  whitebox.addEventListener("dragenter", (e) => {
    e.target.className += " dashed";
    console.log("dragenter with trigger");
  });

  whitebox.addEventListener("dragleave", (e) => {
    e.target.className = "whitebox";
    console.log("dragleave with trigger");
  });

  whitebox.addEventListener("drop", (e) => {
    console.log("drop with trigger");
    e.target.append(imgboxs);
  });
}
