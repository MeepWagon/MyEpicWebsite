window.addEventListener('load', function () {
    var elements = document.getElementsByClassName("sidebar-button")

    console.log(elements.length)
    
    for (var i=0; i < elements.length; i++) {
        const element = elements[i]



        element.addEventListener("click", function() {
            console.log("clicked!")
            var span = element.querySelector("span").firstChild
            
            if (element.classList.contains("collapsed")) {
                console.log("hi")
                span.classList.remove("rotate-animate-down")
                span.classList.add("rotate-animate-up")
            } else {
                span.classList.remove("rotate-default")
                span.classList.add("rotate-animate-down")
            }
            // span.classList.toggle("rotate")
        })
    }
})