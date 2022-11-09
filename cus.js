
  var waypoint = new Waypoint({
    element: document.getElementById('footer'),
    handler: function(direction) {
     if (direction === "down") {
       document.querySelector (".footer-fixed").classList.add("show")
       document.querySelector (".footer-up-icon").classList.add("animate__fadeIn")
        console.log("down")
     } else {
       document.querySelector (".footer-fixed").classList.remove("show")
       document.querySelector (".footer-up-icon").classList.remove("animate__fadeIn")
        console.log("up")
     }
     
    },
    offset: '20%'
  })
 