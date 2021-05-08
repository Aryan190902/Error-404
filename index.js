map = document.getElementById('maps')
    // console.log(map.src)
var mapId
var Place

mapPolice = document.getElementById('mapPolice')
mapFire = document.getElementById('mapFire')
mapAmbu = document.getElementById('mapAmbu')

mapPolice.addEventListener('click', police)
mapFire.addEventListener('click', fire)
mapAmbu.addEventListener('mouseover', ambu)

function police() {
    var mapId = 'police%20station'
    map.src = 'https://www.google.com/maps/embed/v1/search?q=' + mapId + '%20in%20bhopal&key=AIzaSyDd2AeyXCohymH6I8R7XrtPlxvpm4e2Xls'
    console.log(map.src)
}

function fire() {
    var mapId = 'fire%20station'
    map.src = 'https://www.google.com/maps/embed/v1/search?q=' + mapId + '%20in%20bhopal&key=AIzaSyDd2AeyXCohymH6I8R7XrtPlxvpm4e2Xls'
    console.log(map.src)
}

function ambu() {
    var mapId = 'hospitals'
    map.src = 'https://www.google.com/maps/embed/v1/search?q=' + mapId + '%20in%20bhopal&key=AIzaSyDd2AeyXCohymH6I8R7XrtPlxvpm4e2Xls'
        // document.body.style.backgroundColor = 'Pink'
}



// map.src = 'https://www.google.com/maps/embed/v1/search?q=' + { mapId } + '%20in%20bhopal&key=AIzaSyDd2AeyXCohymH6I8R7XrtPlxvpm4e2Xls'



// Updates


updates = document.getElementById('updates')

updates.style.display = 'none'

corona = document.getElementById('corona')

corona.addEventListener('click', update)

function update() {
    if (updates.style.display == 'none') {
        updates.style.display = 'block'
    } else {
        updates.style.display = 'none'
    }
=======
map = document.getElementById('maps')
    // console.log(map.src)
var mapId
var Place

mapPolice = document.getElementById('mapPolice')
mapFire = document.getElementById('mapFire')
mapAmbu = document.getElementById('mapAmbu')

mapPolice.addEventListener('click', police)
mapFire.addEventListener('click', fire)
mapAmbu.addEventListener('mouseover', ambu)

function police() {
    var mapId = 'police%20station'
    map.src = 'https://www.google.com/maps/embed/v1/search?q=' + mapId + '%20in%20bhopal&key=AIzaSyDd2AeyXCohymH6I8R7XrtPlxvpm4e2Xls'
    console.log(map.src)
}

function fire() {
    var mapId = 'fire%20station'
    map.src = 'https://www.google.com/maps/embed/v1/search?q=' + mapId + '%20in%20bhopal&key=AIzaSyDd2AeyXCohymH6I8R7XrtPlxvpm4e2Xls'
    console.log(map.src)
}

function ambu() {
    var mapId = 'hospitals'
    map.src = 'https://www.google.com/maps/embed/v1/search?q=' + mapId + '%20in%20bhopal&key=AIzaSyDd2AeyXCohymH6I8R7XrtPlxvpm4e2Xls'
        // document.body.style.backgroundColor = 'Pink'
}



// map.src = 'https://www.google.com/maps/embed/v1/search?q=' + { mapId } + '%20in%20bhopal&key=AIzaSyDd2AeyXCohymH6I8R7XrtPlxvpm4e2Xls'



// Updates


updates = document.getElementById('updates')

updates.style.display = 'none'

corona = document.getElementById('corona')

corona.addEventListener('click', update)

function update() {
    if (updates.style.display == 'none') {
        updates.style.display = 'block'
    } else {
        updates.style.display = 'none'
    }
>>>>>>> 8ed52755c00b60524fc69429d0cb1e7c4abd107f
}
