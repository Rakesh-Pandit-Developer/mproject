  const srcElement = document.querySelector("body"),
  btns = document.querySelectorAll("button");

  btns.forEach(btn => { // looping through each btn
    // adding click event to each btn
    btn.addEventListener("click", () => {
      // creating canvas of element using html2canvas
      html2canvas(srcElement).then(canvas => {
        // adding canvas/screenshot to the body
        if(btn.id === "take-src-only") {
          return document.body.appendChild(canvas);
        }

        // downloading canvas/screenshot
        const a = document.createElement("a");
        a.href = canvas.toDataURL();
        a.download = "screenshot.jpg";
        a.click();
      });
    });
  });