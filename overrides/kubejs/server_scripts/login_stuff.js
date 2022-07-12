onEvent('player.logged_in', event => {
    event.server.scheduleInTicks(5, event => {
        let name = event.player.getName()
        if (!event.player.stages.has('has_logged_in')) {
            event.player.stages.add('has_logged_in')
            loginNew(event,name)
        }
        else {
            loginAgain(event,name)
            loginNew(event,name)
        }
        })
    }
)

function loginNew(event,name) {
    event.server.tell('§aWelcome to the server, '+Text.purple(name)+'§a!')
    if (name=='DerCommander323') {
        event.player.give('create:goggles')}
    if (name=='DerCommander323') {
        event.player.give('hat:goggles_of_thaumaturgy')}
}

function loginAgain(event,name) {
    if (name=='DerCommander323') {
        event.server.tell('§l§5All praise The Lord of Darkness!')
    } 
    if (!name=='Purplik' && !name=='Lashmak') {
        event.player.tell('Welcome back,'+Text.purple(name)+'!')}
}