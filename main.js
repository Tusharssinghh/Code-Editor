
    let output = document.querySelector('#output')
    // output.contentDocument.body.innerHTML = "<h1>Hello Buddy</h1>"
    // output.contentDocument.head.innerHTML = "<style>h1{color:red};</style>"
    // output.contentWindow.eval('let a = 10; let b = 20; alert(a+b)')
    let htmlcode, csscode, jscode = ''
    let user_input = document.querySelectorAll('.left textarea')
    user_input.forEach((element, index) => {
        element.addEventListener("keyup", () => {
            if(index == 0){
                // console.log(element.value)
                htmlcode = element.value
            }
            if(index == 1){
                csscode = element.value
            }
            if(index == 2){
                jscode = element.value
            }

            output.contentDocument.body.innerHTML = htmlcode
            output.contentDocument.head.innerHTML = `<style>${csscode}</style>`
            output.contentWindow.eval(jscode)
        })
    })