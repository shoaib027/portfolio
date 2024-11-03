
onload = () => {
    const c = setTimeout(() => {
      document.getElementsByClassName("phool")[0].remove()
      document.getElementsByClassName("hidden")[0].classList.remove("hidden")
      clearTimeout(c);
    }, 6000);
  };