function gramophone(band,album,song){
    let duration=(album.length*band.length)*song.length/2
    let times=duration/2.5
    console.log(`The plate was rotated ${Math.ceil(times)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')