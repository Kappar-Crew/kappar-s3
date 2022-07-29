onEvent('jei.hide.items', event => {
    event.hide([
        'lightmanscurrency:coinmint',
        'createaddition:gold_rod',
        'assemblylinemachines:gold_rod',
        'thermal:gold_plate',
        'ftbic:gold_dust',
        'thermal:iron_gear',
        'thermal:iron_plate',
        'createaddition:iron_rod',
        'assemblylinemachines:iron_rod',
        'assemblylinemachines:ground_iron',
        'ftbic:iron_dust',
        'create:iron_sheet',
        'ftbic:copper_nugget',
        'ftbic:copper_dust',
        'cyclic:copper_nugget',
        'tconstruct:copper_nugget',
        'thermal:copper_plate',
        'thermal:copper_gear',
        'thermal:copper_nugget',
        'createaddition:copper_rod',
        'create:copper_sheet',
        'assemblylinemachines:steel_ingot',
        'thermal:steel_dust',
        'thermal:steel_nugget',
        'thermal:steel_ingot',
        'thermal:steel_block',
        'thermal:tin_plate',
        'thermal:tin_gear',
        'thermal:tin_dust',
        'thermal:tin_nugget',
        'thermal:tin_ingot',
        'ftbic:tin_chunk',
        'thermal:tin_block',
        'ftbic:deepslate_tin_ore',
        'ftbic:tin_ore',
        'ftbic:lead_block',
        'ftbic:lead_dust',
        'thermal:lead_plate',
        'thermal:lead_gear',
        'thermal:lead_nugget',
        'thermal:lead_ingot',
        'ftbic:bronze_block',
        'thermal:bronze_plate',
        'thermal:bronze_gear',
        'thermal:bronze_nugget',
        'thermal:bronze_ingot',
        'assemblylinemachines:titanium_ingot',
        'assemblylinemachines:ground_titanium',
        'ftbic:enderium_block',
        'thermal:enderium_plate',
        'thermal:enderium_gear',
        'thermal:enderium_nugget',
        'ftbic:enderium_dust',
        'ftbic:enderium_ingot',
        'occultism:silver_dust',
        'occultism:silver_ingot',
        'occultism:silver_nugget',
        Item.of('chiselsandbits:block_bit').ignoreNBT(),
        Item.of('evilcraft:dark_tank').ignoreNBT(),
        Item.of('ftbic:fluid_cell').ignoreNBT(),
        Item.of('ae2:facade').ignoreNBT(),
        Item.of('tconstruct:crafting_station').ignoreNBT(),
        Item.of('tconstruct:tinker_station').ignoreNBT(),
        Item.of('tconstruct:part_builder').ignoreNBT(),
        'twilightforest:uncrafting_table',
        'cyclic:uncrafter'
    ])
})

onEvent('jei.remove.categories', event => {
    //console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
    
    event.remove('twilightforest:uncrafting')
})

onEvent('jei.add.items', event => {
	event.add(Item.of('evilcraft:dark_tank', {}))
	event.add(Item.of('ftbic:fluid_cell', {}))
	event.add(Item.of('ae2:facade', '{item:"minecraft:stone"}'))
	event.add(Item.of('tconstruct:crafting_station', '{texture:"minecraft:stripped_oak_wood"}'))
	event.add(Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}'))
	event.add(Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'))
})

onEvent('jei.remove.recipes', event => {
    event.remove('create:automatic_shapeless','integrateddynamics:special/facade')
})
