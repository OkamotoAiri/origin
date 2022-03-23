(function() {
    'use strict';
    

    // let vm = new Vue({
    //   el: '#app',
    //   data: {
    //     newTitle:'',
    //     newText:'',
    //     error1:false,
    //     error2:false,
    //     showEdit:false,
    //     editBtn:true,
    //     finBtn:false,
    //     items:[],
    //     newItem: '',
    //   },
    //   methods: {
    //     addItem: function() {
    //       if (this.newTitle == '') {
    //         this.error1 = true;
    //         return;
    //     }else if (this.newTitle == ''){
    //         this.error1 = false;
    //         return;
    //     }else{
    //           this.error1 = false;
    //     }
    //       if (this.newText == '') {
    //         this.error2 = true;
    //         return;
    //       }
        //   let blog = {
        //     title: this.newTitle,
        //     text: this.newText,
        //   }
        //   this.items.unshift(blog);
        //   this.newTitle = '';
        //   this.newText = '';
        //   this.error2 = false;
        // },
        // deleteItem:function(index){
        //     if (!confirm('記事をを削除しますか？')){
        //         return;
        //     }
        //     this.items.splice(index,1);
        // },
        // editItem:function(index){
        //     if(this.showEdit === false){
        //         this.showEdit= true;
        //     }else if (this.showEdit === true){
        //         this.showEdit = false;
        //     }
        // },
        // editTask:function(index){
        //     if (this.showEdit === true) {
        //         this.showEdit = false;
        //     }
        // }
    // }
    // });


{   //メニュー
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    open.addEventListener('click',function(){
        overlay.classList.add('show');
        open.classList.add('hide');
    });

    close.addEventListener('click',function(){
        overlay.classList.remove('show');
        open.classList.remove('hide');

    });
}

{   //カルーセル
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const ul = document.getElementById('imgs');
    const slides = ul.children;
    const dots = [];
    let currentIndex = 0;

    function updateButtons(){
        prev.classList.remove('hidden');
        next.classList.remove('hidden');
        if (currentIndex === 0){
            prev.classList.add('hidden');
        }
        if (currentIndex === slides.length -1){
            next.classList.add('hidden');
        }
    }

    function moveSlides(){
        const slideWidth = slides[0].getBoundingClientRect().width;
        ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }
    function setupDots(){
        for (let i = 0; i < slides.length; i++){
            const button = document.createElement('button');
            button.addEventListener('click',function(){
                currentIndex = i;
                updateDots();
                updateButtons();
                moveSlides();
            })
            dots.push(button);
            document.getElementById('slideBtn').appendChild(button);
        }
        dots[0].classList.add('current');
    }
function updateDots(){
    dots.forEach(function(dot){
        dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
}
    updateButtons();
    setupDots();

    next.addEventListener('click',function(){
        currentIndex++;
        updateButtons();
        updateDots();
        moveSlides();
    });
    prev.addEventListener('click',function(){
        currentIndex--;
        updateButtons();
        updateDots();
        moveSlides();
    });

    window.addEventListener('resize',function(){
        moveSlides();
    })
}




})();

