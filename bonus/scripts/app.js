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
            activeIndex : 0
        },
        methods : {
            setMainImage(newIndex){
                this.activeIndex = newIndex
            },
            indexIncrementer(operation){
                if(operation>0){
                    if(this.activeIndex === this.slides.length)
                        this.activeIndex = 0
                    
                    this.activeIndex++
                }else{
                    if(this.activeIndex === 0)
                        this.activeIndex = this.slides.length
                
                    this.activeIndex--
                }
            }
        }
    })
})