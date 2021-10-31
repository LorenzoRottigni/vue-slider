Vue.config.devtools = true;

//at content loaded
window.addEventListener('DOMContentLoaded',()=>{
    //instantiate vue app
    const vueApp = new Vue({
        //root selector
        el: '#vue-root',
        //app variables
        data: {
            slides: [
                {
                    src: '../images/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem Ispum Dolorem1'
                },
                {
                    src: '../images/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem Ispum Dolorem2'
                },
                {
                    src: '../images/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem Ispum Dolorem3'
                },
                {
                    src: '../images/04.jpg',
                    title: 'Germania',
                    text: 'Lorem Ispum Dolorem4'
                },
                {
                    src: '../images/05.jpg',
                    title: 'Paradise',
                    text: 'Lorem Ispum Dolorem5'
                },
                {
                    src: '../images/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem Ispum Dolorem1'
                },
                {
                    src: '../images/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem Ispum Dolorem2'
                },
                {
                    src: '../images/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem Ispum Dolorem3'
                },
                {
                    src: '../images/04.jpg',
                    title: 'Germania',
                    text: 'Lorem Ispum Dolorem4'
                },
                {
                    src: '../images/05.jpg',
                    title: 'Paradise',
                    text: 'Lorem Ispum Dolorem5'
                }
            ],
            activeIndex : 0,
            mouseOnContainer : false,
            clockTime : "3000",
            sliderLoop: undefined
        },
        methods : {
            setMainImage(newIndex){
                this.activeIndex = newIndex
            },
            indexIncrementer(operation){
                if(operation){
                    if(this.activeIndex === ((this.slides.length)-1))
                        this.activeIndex = 0
                    
                    this.activeIndex++
                }else{
                    if(this.activeIndex === 0)
                        this.activeIndex = this.slides.length
                
                    this.activeIndex--
                }
                
            },
            cursorHandler(isOn){
                if(isOn)
                    this.mouseOnContainer = true
                else
                    this.mouseOnContainer = false
            },
            //on scroll slide click wait 3 extra seconds
            scrollDelay(delay){
                this.cursorHandler(true)
                setTimeout(() => this.cursorHandler(false), parseInt(delay))
            },
            keyboardHandler(){
                if (event.keyCode == 37 || event.keyCode == 38) {
                    this.indexIncrementer(false)
                    this.scrollDelay(this.clockTime)
                } else if (event.keyCode == 39 || event.keyCode == 40 || event.keyCode == 32) {
                    this.indexIncrementer(true)
                    this.scrollDelay(this.clockTime)
                }
            },
            checkboxHandler(){
                if(event.target.checked)
                    this.mouseOnContainer = false
                else
                    this.mouseOnContainer = true
            },
            startClock(){
                this.sliderLoop = setInterval(()=> {
                    if(!this.mouseOnContainer)
                        this.indexIncrementer(1)
                }, parseInt(this.clockTime))  
            },
            restartClock(){
                clearInterval(this.sliderLoop);
                this.startClock()
            }
        },
        mounted(){
            this.startClock()
            document.addEventListener("keyup", this.keyboardHandler);
        }
    })
})