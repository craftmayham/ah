PlayerEvents.loggedIn(event => {
    const player = event.player
    const username = player.getGameProfile().getName();
    event.server.runCommandSilent(`scoreboard objectives add ah.skill_points dummy`);
    event.server.runCommandSilent(`scoreboard objectives add ah.potential_energy dummy`);

	event.server.runCommandSilent(`scoreboard objectives add ah.golden_carrot minecraft.used:minecraft.golden_carrot`);
	event.server.runCommandSilent(`scoreboard objectives add ah.cake minecraft.custom:minecraft.eat_cake_slice`);
	event.server.runCommandSilent(`scoreboard objectives add ah.melon minecraft.used:minecraft.melon_slice`);
	
	event.server.runCommandSilent(`scoreboard objectives add ah.glow_berries minecraft.used:minecraft.glow_berries`);
	event.server.runCommandSilent(`scoreboard objectives add ah.potato minecraft.used:minecraft.potato`);
	event.server.runCommandSilent(`scoreboard objectives add ah.rotten_flesh minecraft.used:minecraft.rotten_flesh`);

	event.server.runCommandSilent(`scoreboard objectives add ah.half_mass_decay dummy`);
	
	event.server.runCommandSilent(`scoreboard objectives add ah.heat_build_up dummy`);
	event.server.runCommandSilent(`scoreboard objectives add ah.struck_by_lightning dummy`);
	event.server.runCommandSilent(`scoreboard objectives add ah.heat_build_up_timer dummy`);	
	
	event.server.runCommandSilent(`scoreboard objectives add ah.kinetic_energy dummy`);	
	event.server.runCommandSilent(`scoreboard objectives add ah.item_charge dummy`);	

	event.server.runCommandSilent(`scoreboard objectives add ah.bee_wings_anim dummy`);

	event.server.runCommandSilent(`scoreboard objectives add ah.capo_shotgun_ammo dummy`);
})