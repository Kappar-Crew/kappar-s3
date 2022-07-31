let RemoveAndHide= [
    'twilightforest:uncrafting_table','cyclic:uncrafter','lightmanscurrency:coinmint'
]
//,'lavaplus:bronze'

onEvent('recipes', event => {
    RemoveAndHide.forEach(element =>
        event.remove({output: element})
    )
    //event.remove({id:'lavaplus:alloysmelting_bronze'})

})