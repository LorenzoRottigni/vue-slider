Vue.config.devtools = true;

//at content loaded
window.addEventListener('DOMContentLoaded',()=>{
    //instantiate vue app
    const vueApp = new Vue({
        //root selector
        el: '#vue-root',
        //app variables
        data:
            slides = [
                {
                    src: '../images/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem1'
                },
                {
                    src: '../images/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem2'
                },
                {
                    src: '../images/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem3'
                },
                {
                    src: '../images/04.jpg',
                    title: 'Germania',
                    text: 'Lorem4'
                },
                {
                    src: '../images/05.jpg',
                    title: 'Paradise',
                    text: 'Lorem5'
                }
            ]
            
       
        }
    )
})