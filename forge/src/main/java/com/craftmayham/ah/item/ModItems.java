package com.craftmayham.ah.item;

import com.craftmayham.ah.AhMod;
import com.craftmayham.ah.item.gunswithoutroses.QuirkDestroyingBullet;
import net.minecraft.world.item.BucketItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.Items;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public class ModItems {
    public static final DeferredRegister<Item> ITEMS =
            DeferredRegister.create(ForgeRegistries.ITEMS, AhMod.MODID);

    public static final RegistryObject<Item> QUIRK_DESTROYING_BULLET = ITEMS.register("quirk_destroying_bullet",
            () -> new QuirkDestroyingBullet(new Item.Properties(), 2));


    public static void register(IEventBus eventBus) {
        ITEMS.register(eventBus);
    }
}
