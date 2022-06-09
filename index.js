
// making two comparisions
function findMatching( driver, passednamed){
    return (driver.filter(driver=> driver.toLowerCase() === passednamed.toLowerCase()))
}
function fuzzyMatch(driver, passedNamed) {
    return (driver.filter(driver=>driver.toLowerCase().indexOf(passedNamed.toLowerCase())===0))
    
}function matchName(driver ,passedName) {
    return (driver.filter(driver=>driver.name===passedName))
}