let RemoveAndHide= [
    'twilightforest:uncrafting_table','lavaplus:bronze','cyclic:uncrafter'
]

onEvent('recipes', event => {
    RemoveAndHide.forEach(element =>
        event.remove({output: element})
    )
    event.remove({id:'lavaplus:alloysmelting_bronze'})

})