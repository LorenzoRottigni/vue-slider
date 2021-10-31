Vue.config.devtools = true;

//at content loaded
window.addEventListener('DOMContentLoaded',()=>{
    //instantiate vue app
    const vueApp = new Vue({
        //root selector
        el: '#vue-root',
        //app variables
        data: {
            //slides object array
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
            //index of the displayed image
            activeIndex : 0,
            //mouse hover on main main
            mouseOnContainer : false,
            //autoplayer clock
            clockTime : "3000",
            //autoplayer loop handler
            sliderLoop: undefined
        },
        methods : {
            /**
             * @param {int} newIndex - The new index to set.
             */
            setMainImage(newIndex){
                this.activeIndex = newIndex
            },
            /**
             * @param {boolean} operation - (operation) ? index increment : index decrement
             */
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
            /**
             * @param {boolean} isOn - (isOn) ? mouse is on container : mouse is out container
             */
            cursorHandler(isOn){
                if(isOn)
                    this.mouseOnContainer = true
                else
                    this.mouseOnContainer = false
            },
            /**
             * @description reset current loop time
             */
            scrollDelay(){
                this.cursorHandler(true)
                setTimeout(() => this.cursorHandler(false), parseInt(this.clockTime))
            },
            /**
             * @description (left-arrow || down-arrow) ? decrement and reset loop time : increment and reset loop time
             */
            keyboardHandler(){
                if (event.keyCode == 37 || event.keyCode == 38) {
                    this.indexIncrementer(false)
                    this.scrollDelay()
                } else if (event.keyCode == 39 || event.keyCode == 40 || event.keyCode == 32) {
                    this.indexIncrementer(true)
                    this.scrollDelay()
                }
            },
            /**
             * @description (checkbox.checked) ? set mouse out container : set mouse in container
             */
            checkboxHandler(){
                if(event.target.checked)
                    this.mouseOnContainer = false
                else
                    this.mouseOnContainer = true
            },
            /**
             * @description start loop if mouse is not on container,
             * looptime: this.clockTime
             */
            startClock(){
                this.sliderLoop = setInterval(()=> {
                    if(!this.mouseOnContainer)
                        this.indexIncrementer(true)
                }, parseInt(this.clockTime))  
            },
            /**
             * @description start loop with new clock time,
             * looptime: this.clockTime
             */
            restartClock(){
                clearInterval(this.sliderLoop);
                this.startClock()
            }
        },
        /**
         * @description executed at Vue loaded,
         * starts loop, and sets keyup listener
         */
        mounted(){
            this.startClock()
            document.addEventListener("keyup", this.keyboardHandler);
        }
    })
})