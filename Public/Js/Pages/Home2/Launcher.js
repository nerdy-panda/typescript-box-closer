import BoxCloser from "../../Services/BoxCloser.js";
const boxes = window.document.body.querySelectorAll(".box");
const boxClosers = [];
for (const box of boxes)
    boxClosers.push(new BoxCloser(box, { animation: "fadeOut" }));
//# sourceMappingURL=Launcher.js.map