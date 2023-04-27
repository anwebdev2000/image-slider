const images = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'
    
];


const n = images.length
const flexContainer = document.getElementById('flex-container')
const leftButton = document.getElementById('left-btn')
const rightButton = document.getElementById('right-btn')


const containerWidth= 80;
const flexContainerWidth = n*containerWidth;
flexContainer.style.width = flexContainerWidth


for(let i = 0; i<n; i++){
    const newImg = document.createElement('img');
    newImg.src = images[i]
    newImg.classList.add('img-style')
    flexContainer.appendChild(newImg)
}

let curPosition = 0
leftButton.addEventListener('click',()=>{
    if(curPosition>0){
        curPosition--
        showImg()
    }
})

rightButton.addEventListener('click',()=>{
    if(curPosition<n-1){
        curPosition++;
        showImg()
    }
})  

function showImg(){
    const translateXDistance = -curPosition*containerWidth
    flexContainer.style.transform = `translateX(${translateXDistance}vw)`
}


