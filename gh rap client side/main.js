document.querySelector('button').addEventListener('click', getRequest)

async function getRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://gh-rappers-api.herokuapp.com/api/${rapperName}`)
        const data = await response.json()        
        console.log(data)

        document.getElementById('rapName').innerText = data.birthName
        document.querySelector('#stageName').innerText = data.stageName
        document.querySelector('#age').innerText = data.age
        document.querySelector('#albums').innerText = data.albums
        document.querySelector('#fanbase').innerText = data.fanBase

        document.querySelector('#rapperImage').src = data.image
    }
    catch(error){
        console.log(error)
    }
}