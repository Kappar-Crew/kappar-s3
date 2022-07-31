onEvent('player.logged_in', (event) => {
event.server.schedule(100, () => {

    let name = event.getEntity()

    event.player.potionEffects.add('minecraft:resistance', 200, 5, false, true)

    if (name.equals('Lashmak')) {
        event.server.tell('§5§l-All praise The Lord of Darkness!-')
//      event.server.runCommandSilent(`summon minecraft:lightning_bolt ${event.player.getX()} ${event.player.getY()+16} ${event.player.getZ()}`)
    }

    if (!event.player.stages.has('has_logged_in')) {
        event.player.stages.add('has_logged_in')
        loginNew(event,name)
    }
    else {
        loginAgain(event,name)
    }

})


function loginNew(event,name) {
    let welcomeNew = Component.green('Welcome to the server, ').append(Component.darkGreen(name)).append('!')
    event.server.tell(welcomeNew)

    if (name.equals('DerCommander323')) {
        event.player.give('create:goggles')}
    if (name.equals('Lashmak')) {
        event.player.give('hat:goggles_of_thaumaturgy')}
}

function loginAgain(event,name) {
    //'§aWelcome back, §3'+name+'!'
    let welcomeAgain = Component.green('Welcome back, ').append(Component.darkGreen(name)).append('!')

    if (!name.equals('Purplik') && !name.equals('Lashmak')) {
        event.player.tell(welcomeAgain)
    }
}})
