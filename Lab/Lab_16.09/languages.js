function languages(country) {
    let language
    country = country.toLowerCase()
    switch (country) {
        case 'england':
        case 'usa': language = 'English'; break
        case 'spain':
        case 'argentina':
        case 'mexico':language='Spanish';break
        default:language='unknown';break
    }
    console.log(language)
}

languages('england')
languages('spain')
languages('Mexico')