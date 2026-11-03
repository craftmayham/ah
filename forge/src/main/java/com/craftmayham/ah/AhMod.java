package com.craftmayham.ah;

import com.craftmayham.ah.item.ModItems;
import net.minecraft.world.entity.player.Player;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.event.entity.living.LivingEntityUseItemEvent;
import net.minecraftforge.event.entity.player.PlayerInteractEvent;
import net.minecraftforge.event.server.ServerStartedEvent;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.eventbus.api.SubscribeEvent;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;
import net.threetag.palladiumcore.forge.PalladiumCoreForge;

@Mod(AhMod.MODID)
public class AhMod {
    public static final String MODID = "ah";
    public AhMod(FMLJavaModLoadingContext context) {
        // Submit our event bus to let PalladiumCore register our content on the right time
        IEventBus modEventBus = context.getModEventBus();
        PalladiumCoreForge.registerModEventBus(AhMod.MODID, modEventBus);
        MinecraftForge.EVENT_BUS.register(this);

        ModItems.register(modEventBus);
    }

    //make shooting guns power exclusive
    @SubscribeEvent
    public void onRightClickItem(PlayerInteractEvent.RightClickItem event) {
        Player player = event.getEntity();

        if (player.isCrouching()) {
            String namespace = event.getItemStack()
                    .getItem()
                    .builtInRegistryHolder()
                    .key()
                    .location()
                    .getNamespace();

            if (namespace.equals("gunswithoutroses")) {
                event.setCanceled(true);
            }
        }
    }
}
