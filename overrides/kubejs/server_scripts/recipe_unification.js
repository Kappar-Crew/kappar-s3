console.info('KubeJS: Crafting Recipe Unification...')

// In all recipes, replace Stick with Oak Sapling in output items 
//event.replaceOutput({}, 'minecraft:stick', 'minecraft:oak_sapling')
//event.replaceOutput({},'','')

onEvent('recipes', event =>{
    //Iron
    event.replaceOutput({},'#forge:ingots/iron','minecraft:iron_ingot')
    event.replaceOutput({},'#forge:nuggets/iron','minecraft:iron_nugget')
    event.replaceOutput({},'#forge:storage_blocks/iron','minecraft:iron_block')
    event.replaceOutput({},'#forge:plates/iron','ftbic:iron_plate')
    event.replaceOutput({},'#forge:rods/iron','ftbic:iron_rod')
    event.replaceOutput({},'#forge:gears/iron','ftbic:iron_gear')
    event.replaceOutput({},'#forge:dusts/iron','thermal:iron_dust')

    //Copper
    event.replaceOutput({},'#forge:ingots/copper','minecraft:copper_ingot')
    event.replaceOutput({},'#forge:nuggets/copper','create:copper_nugget')
    event.replaceOutput({},'#forge:storage_blocks/copper','minecraft:copper_block')
    event.replaceOutput({},'#forge:plates/copper','ftbic:copper_plate')
    event.replaceOutput({},'#forge:rods/copper','ftbic:copper_rod')
    event.replaceOutput({},'#forge:gears/copper','ftbic:copper_gear')
    event.replaceOutput({},'#forge:dusts/copper','thermal:copper_dust')

    //Gold
    event.replaceOutput({},'#forge:rods/gold','ftbic:gold_rod')
    event.replaceOutput({},'#forge:gears/gold','ftbic:gold_gear')
    event.replaceOutput({},'#forge:dusts/gold','thermal:gold_dust')

    //Steel
    event.replaceOutput({},'#forge:ingots/steel','thermal:steel_ingot')
    event.replaceOutput({},'#forge:nuggets/steel','thermal:steel_nugget')
    event.replaceOutput({},'#forge:storage_blocks/steel','immersiveengineering:storage_steel')
    event.replaceOutput({},'#forge:plates/steel','thermal:steel_plate')
    event.replaceOutput({},'#forge:rods/steel','immersiveengineering:stick_steel')
    event.replaceOutput({},'#forge:gears/steel','thermal:steel_gear')
    event.replaceOutput({},'#forge:dusts/steel','thermal:steel_dust')

    //tin
    event.replaceOutput({},'#forge:ingots/tin','ftbic:tin_ingot')
    event.replaceOutput({},'#forge:nuggets/tin','ftbic:tin_nugget')
    event.replaceOutput({},'#forge:storage_blocks/tin','ftbic:tin_block')
    event.replaceOutput({},'#forge:plates/tin','ftbic:tin_plate')
    event.replaceOutput({},'#forge:rods/tin','ftbic:tin_rod')
    event.replaceOutput({},'#forge:gears/tin','ftbic:tin_gear')
    event.replaceOutput({},'#forge:dusts/tin','ftbic:tin_dust')

    //Lead
    event.replaceOutput({},'#forge:ingots/lead','ftbic:lead_ingot')
    event.replaceOutput({},'#forge:nuggets/lead','ftbic:lead_nugget')
    event.replaceOutput({},'#forge:storage_blocks/lead','thermal:lead_block')
    event.replaceOutput({},'#forge:plates/lead','ftbic:lead_plate')
    event.replaceOutput({},'#forge:rods/lead','ftbic:lead_rod')
    event.replaceOutput({},'#forge:gears/lead','ftbic:lead_gear')
    event.replaceOutput({},'#forge:dusts/lead','thermal:lead_dust')

    //bronze
    event.replaceOutput({},'#forge:ingots/bronze','ftbic:bronze_ingot')
    event.replaceOutput({},'#forge:nuggets/bronze','ftbic:bronze_nugget')
    event.replaceOutput({},'#forge:storage_blocks/bronze','thermal:bronze_block')
    event.replaceOutput({},'#forge:plates/bronze','ftbic:bronze_plate')
    event.replaceOutput({},'#forge:rods/bronze','ftbic:bronze_rod')
    event.replaceOutput({},'#forge:gears/bronze','ftbic:bronze_gear')
    event.replaceOutput({},'#forge:dusts/bronze','thermal:bronze_dust')

    //uranium
    event.replaceOutput({},'#forge:ingots/uranium','ftbic:uranium_ingot')
    event.replaceOutput({},'#forge:nuggets/uranium','ftbic:uranium_nugget')
    event.replaceOutput({},'#forge:storage_blocks/uranium','immersiveengineering:storage_uranium')
    event.replaceOutput({},'#forge:plates/uranium','ftbic:uranium_plate')
    event.replaceOutput({},'#forge:rods/uranium','ftbic:uranium_rod')
    event.replaceOutput({},'#forge:gears/uranium','ftbic:uranium_gear')

    //aluminum
    event.replaceOutput({},'#forge:ingots/aluminum','tinkers_reforged:aluminum_ingot')
    event.replaceOutput({},'#forge:nuggets/aluminum','tinkers_reforged:aluminum_nugget')
    event.replaceOutput({},'#forge:storage_blocks/aluminum','tinkers_reforged:aluminum_block')
    event.replaceOutput({},'#forge:plates/aluminum','ftbic:aluminum_plate')
    event.replaceOutput({},'#forge:rods/aluminum','ftbic:aluminum_rod')
    event.replaceOutput({},'#forge:gears/aluminum','ftbic:aluminum_gear')

    //silver
    event.replaceOutput({},'#forge:ingots/silver','thermal:silver_ingot')
    event.replaceOutput({},'#forge:nuggets/silver','thermal:silver_nugget')
    event.replaceOutput({},'#forge:storage_blocks/silver','thermal:silver_block')
    event.replaceOutput({},'#forge:plates/silver','thermal:silver_plate')
    event.replaceOutput({},'#forge:gears/silver','thermal:silver_gear')
    event.replaceOutput({},'#forge:dusts/silver','thermal:silver_dust')

})