package com.craftmayham.ah.item.gunswithoutroses;

import lykrast.gunswithoutroses.entity.BulletEntity;
import lykrast.gunswithoutroses.item.BulletItem;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.effect.MobEffect;
import net.minecraft.world.effect.MobEffectInstance;
import net.minecraft.world.effect.MobEffects;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraftforge.registries.ForgeRegistries;

import javax.annotation.Nullable;

public class QuirkDestroyingBullet extends BulletItem {
    public QuirkDestroyingBullet(Properties properties, int damage) {
        super(properties, damage);
    }

    ResourceLocation dampenedEffect = new ResourceLocation("dampened", "genetic");
    MobEffect effect = ForgeRegistries.MOB_EFFECTS.getValue(dampenedEffect);

    public void onLivingEntityHit(BulletEntity projectile, LivingEntity target, @Nullable Entity shooter, Level level, boolean headshot) {
        super.onLivingEntityHit(projectile, target, shooter, level, headshot);


        target.addEffect(new MobEffectInstance(effect,1200,2));
    }
    }
