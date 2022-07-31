//Credit for this script goes to max.#0001 from the latvian.dev (KubeJS) discord!

onEvent("rei.group", (event) => {
    const groupId = (id) => Utils.id(`roughlyenoughitems:groups/${id}`);

    //C&B
    event.groupSameItem(groupId('chiselsandbits/bits'), 'Chisels & Bits Bit Blocks', Item.of('chiselsandbits:block_bit'))

    //Fluid Containers
    event.groupSameItem(groupId('fluidcontainers/dark_tank'), 'Dark Tanks', Item.of('evilcraft:dark_tank'))
    event.groupSameItem(groupId('fluidcontainers/ftbic_fluid_cell'), 'Fluid Cells', Item.of('ftbic:fluid_cell'))

    //Material Elements
    event.groupItems(groupId("material_elements/cloths"), "Cloths", /^material_elements:cloth.*/);
    event.groupItems(groupId("material_elements/leather_sheets"), "Leather Sheets", /^material_elements:leather_sheet.*/);
    event.groupItems(groupId("material_elements/leather_strips"), "Leather Strips", /^material_elements:leather_strip.*/);
    event.groupItems(groupId("material_elements/special_sticks_half_size"), "Special Sticks (Half Size)", /^material_elements:.*_stick_half_size$/);
    event.groupItems(groupId("material_elements/slab_frames"), "Slab Frames", /^material_elements:.*_slab_frame$/);

/*
    // ae2 cables
    ["glass", "covered", "smart", "covered_dense"].forEach((type) => {
        event.groupItemsByTag(
            groupId(`ae2/${type}_cables`),
            `${global.toMultiTitleCase(type)} Cables`,
            `ae2:${type}_cable`
        );
    });
*/
    const byTag = [
        "ae2:memory_cards",
        "supplementaries:hanging_signs",
        "supplementaries:hanging_signs_dense",
        "supplementaries:sign_posts",
        "farmersdelight:canvas_signs",

        "material_elements:wooden_sticks",
        "material_elements:test_tube_color",
        "material_elements:cube_frames",
        "material_elements:cube_glass_frames",
        "material_elements:skeleton_frames",
        "material_elements:triangular_frames",
        "material_elements:construction_cube_frames",
        "material_elements:construction_slab_frames",
        "material_elements:construction_triangular_frames",

    ];

    // group by tag
    byTag.forEach((tag) => {
        const { namespace, path } = Utils.id(tag);
        event.groupItemsByTag(groupId(`tag/${namespace}/${path}`), global.toMultiTitleCase(path), tag);
    });

    // not using tags herebecause of the lumen balls
    event.groupItems(groupId("ae2/paint_balls"), "Paint Balls", /^ae2:.*_paint_ball$/);

    // these should be grouped together ignoring nbt
    const useNbt = [
        "tconstruct:crafting_station",
        "tconstruct:tinker_station",
        "tconstruct:part_builder",
        "enchanted_book",
        "industrialforegoing:infinity_drill",
        "industrialforegoing:infinity_saw",
        "industrialforegoing:infinity_hammer",
        "industrialforegoing:infinity_trident",
        "industrialforegoing:infinity_backpack",
        "industrialforegoing:infinity_launcher",
        "industrialforegoing:infinity_nuke",
        "reliquary:magazines/neutral_magazine",
        "reliquary:bullets/neutral_bullet",
        "reliquary:mob_charm",
        "reliquary:mob_charm_fragment",

        "tconstruct:repair_kit",
        "tconstruct:pick_head",
        "tconstruct:hammer_head",
        "tconstruct:small_axe_head",
        "tconstruct:broad_axe_head",
        "tconstruct:small_blade",
        "tconstruct:broad_blade",
        "tconstruct:round_plate",
        "tconstruct:large_plate",
        "tconstruct:tool_binding",
        "tconstruct:tool_handle",
        "tconstruct:tough_handle",
        "tconstruct:pickaxe",
        "tconstruct:sledge_hammer",
        "tconstruct:vein_hammer",
        "tconstruct:mattock",
        "tconstruct:pickadze",
        "tconstruct:excavator",
        "tconstruct:hand_axe",
        "tconstruct:broad_axe",
        "tconstruct:kama",
        "tconstruct:scythe",
        "tconstruct:dagger",
        "tconstruct:sword",
        "tconstruct:cleaver",
        "materialis:wrench_head",
        "materialis:wrench",
        "tinkers_reforged:large_round_plate",
        "tinkers_reforged:great_blade",
        "tinkers_reforged:frying_pan",
        "tinkers_reforged:greatsword",
        "tconstruct:tinkers_anvil",
        "tconstruct:scorched_avnil",
        "tconstruct:slime_helmet",

        "sophisticatedbackpacks:backpack",
        "sophisticatedstorage:barrel",
        "sophisticatedstorage:iron_barrel",
        "sophisticatedstorage:gold_barrel",
        "sophisticatedstorage:diamond_barrel",
        "sophisticatedstorage:netherite_barrel",
        "sophisticatedstorage:chest",
        "sophisticatedstorage:iron_chest",
        "sophisticatedstorage:gold_chest",
        "sophisticatedstorage:diamond_chest",
        "sophisticatedstoragenetherite_:chest",
        "sophisticatedstorage:shulker_box",
        "sophisticatedstorage:iron_shulker_box",
        "sophisticatedstorage:gold_shulker_box",
        "sophisticatedstorage:diamond_shulker_box",
        "sophisticatedstorage:netherite_shulker_box",

        "rftoolsutility:syringe",
        "mna:thaumaturgic_link",
        "quark:seed_pouch",
        "bloodmagic:upgradetome"
    ];
    useNbt.forEach((id) => {
        const item = Item.of(id);
        const { namespace, path } = Utils.id(item.id);
        event.groupSameItem(groupId(`${namespace}/${path}`), item.getName(), item);
    });

    // same here, except we want to have a "better" display name
    // rather than "Uncraftable Potion"
    [
        "potion",
        "lingering_potion",
        "splash_potion",
        "tipped_arrow",
        "immersiveengineering:potion_bucket",
        "tconstruct:potion_bucket",
        "reliquary:potion",
        "reliquary:lingering_potion",
        "reliquary:splash_potion",
        "reliquary:tipped_arrow",
        "forbidden_arcanus:utrem_jar",
        "primalmagick:concoction",
        "primalmagick:alchemical_bomb",
        "material_elements:test_tube_filled",
        "enigmaticlegacy:common_potion",
        "enigmaticlegacy:common_potion_splash",
        "enigmaticlegacy:common_potion_lingering",
        "enigmaticlegacy:ultimate_potion",
        "enigmaticlegacy:ultimate_potion_splash",
        "enigmaticlegacy:ultimate_potion_lingering",
        "reliquary:potion_essence"
    ].forEach((potion) => {
        const item = Item.of(potion).withNBT({ Potion: "minecraft:water" });
        const { namespace, path } = Utils.id(item.id);
        event.groupSameItem(groupId(`${namespace}/${path}`), item.getName().copy().append(" (Potions)"), item);
    });

    // Also group spawn eggs, using regex here because instanceof would be icky
    event.groupItems(groupId("spawn_eggs"), "Spawn Eggs", [
        /spawn_egg/,
        /^ars_nouveau:.*_se$/,
        "supplementaries:red_merchant_spawn_egg",
    ]);
/*
    // region Chipped Blocks (Warning: Long array!)
    let chippedTypes = [
        "granite",
        "diorite",
        "andesite",
        "prismarine",
        "dark_prismarine",
        "purpur_block",
        "quartz_block",
        "sandstone",
        "red_sandstone",
        "nether_bricks",
        "red_nether_bricks",
        "stone",
        "cobblestone",
        "end_stone",
        "netherrack",
        "gilded_blackstone",
        "blackstone",
        "basalt",
        "obsidian",
        "crying_obsidian",
        "glowstone",
        "sea_lantern",
        "shroomlight",
        "redstone_lamp",
        "glass",
        "glass_pane",
        "clay",
        "dried_kelp_block",
        "hay_block",
        "melon",
        "vine",
        "brown_mushroom",
        "red_mushroom",
        "warped_fungus",
        "crimson_fungus",
        "warped_roots",
        "crimson_roots",
        "nether_sprouts",
        "brown_mushroom_block",
        "red_mushroom_block",
        "warped_wart_block",
        "nether_wart_block",
        "cobweb",
        "soul_sand",
        "lily_pad",
        "lantern",
        "soul_lantern",
        "redstone_torch",
        "torch",
        "pumpkin",
        "jack_o_lantern",
        "carved_pumpkin",
        "glass",
        "glass_pane",
    ];

    // no flatMap in rhino yet, so we have to concat manually
    Color.DYE.keySet()
        .map((color) => [
            `${color}_concrete`,
            `${color}_terracotta`,
            `${color}_wool`,
            `${color}_carpet`,
            `${color}_stained_glass`,
            `${color}_stained_glass_pane`,
        ])
        .forEach((types) => (chippedTypes = chippedTypes.concat(types)));

    global.vanillaWoodTypes.forEach((wood) => chippedTypes.push(`${wood}_planks`));

    // "the old way", leaving this here as a backup
    /*chippedTypes.forEach((type) => {
        event.groupItems(
            groupId(`chipped/${type}`),
            Item.of(`chipped:${type}_1`).name,
            Utils.regex(`/^chipped:${type}_\\d+$/`)
        );
    });*/

    chippedTypes.forEach((type) => {
        event.groupItemsIf(
            groupId(`chipped/${type}`),
            Item.of(`chipped:${type}_1`).name,
            // filter by items that are from chipped because
            // we don't want vanilla stuff to be lumped together with them
            Ingredient.of(`#chipped:${type}`).filter("@chipped")
        );
   });
    // endregion Chipped Blocks
});