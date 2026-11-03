PalladiumEvents.registerAnimations((event) => {
    event.registerForPower('ah/gas_form_animation', 'ah:sublimation', 10, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'ah:sublimation', 'gas_form_animation', builder.getPartialTicks());
        if (progress > 0.0) {
            builder.get('head')
                .setY(17)
                .animate('InOutCubic', progress);
            builder.get('chest')
                .scaleY(0)
                .scaleX(0)
                .scaleZ(0)
                .animate('InOutCubic', progress);
            builder.get('left_leg')
                .scaleY(0)
                .scaleX(0)
                .scaleZ(0)
                .animate('InOutCubic', progress);
            builder.get('right_leg')
                .scaleY(0)
                .scaleX(0)
                .scaleZ(0)
                .animate('InOutCubic', progress);
            builder.get('left_arm')
                .scaleY(0)
                .scaleX(0)
                .scaleZ(0)
                .animate('InOutCubic', progress);
            builder.get('right_arm')
                .scaleY(0)
                .scaleX(0)
                .scaleZ(0)
                .animate('InOutCubic', progress);
        }
    });

    event.registerForPower('ah/half_mass_animation', 'ah:sublimation', 16, (builder) => {

        const progress = animationUtil.getAnimationTimerAbilityValue(
            builder.getPlayer(),
            'ah:sublimation',
            'half_mass_animation',
            builder.getPartialTicks()
        );

        if (progress > 0.0) {

            // ---- Forward → Hold → Reverse ---- //
            let p;
            if (progress < 0.25) {
                // First 50 ticks → play forward
                p = progress * 4; // 0 → 1
            } else if (progress < 0.75) {
                // Middle 100 ticks → hold at peak
                p = 1; // stay at full transform
            } else {
                // Final 50 ticks → reverse back to zero
                p = (1 - progress) * 4; // 1 → 0
            }

            // HEAD
            builder.get('head')
                .rotateY(0.2 * p)
                .rotateZ(-0.5 * p)
                .rotateX(0.9 * p)
                .animate('InOutCubic', p);

            // CHEST
            builder.get('chest')
                .animate('InOutCubic', p);

            // LEGS
            builder.get('left_leg')
                .rotateX(-0.2 * p)
                .rotateZ(-0.2 * p)
                .animate('InOutCubic', p);

            builder.get('right_leg')
                .rotateX(0.3 * p)
                .rotateZ(0.4 * p)
                .animate('InOutCubic', p);

            // ARMS
            builder.get('left_arm')
                .rotateX(-1.6 * p)
                .rotateY(0.7 * p)
                .rotateZ(0.4 * p)
                .animate('InOutCubic', p);

            builder.get('right_arm')
                .rotateX(0.3 * p)
                .rotateZ(0.4 * p)
                .rotateY(-0.4 * p)
                .animate('InOutCubic', p);
        }
    });

    event.registerForPower('ah/flash_step_animation', 'ah:sublimation', 5, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'ah:sublimation', 'flash_step_animation', builder.getPartialTicks());
        if (progress > 0.0) {
            if (progress > 0.0) {
                builder.get('left_leg')
                    .setXRotDegrees(-40)
                    .animate('InOutQuint', progress);
            }
            if (progress > 0.0) {
                builder.get('right_leg')
                    .setXRotDegrees(-10)
                    .animate('InOutExpo', progress / 2);
            }
            if (progress > 0.0) {
                builder.get('right_arm')
                    .setXRotDegrees(-20)
                    .animate('InOutCubic', progress);
            }
            if (progress > 0.0) {
                builder.get('left_arm')
                    .setXRotDegrees(10)
                    .animate('InOutCubic', progress);
            }
            builder.get('body')
                .moveZ(-5)
                .setXRotDegrees(-10)
                .animate('InOutCubic', progress);
        }
    });
    event.registerForPower('ah/vapor_kick_animation', 'ah:sublimation', 5, (builder) => {
        const progress = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'ah:sublimation', 'vapor_kick_animation', builder.getPartialTicks());
        if (progress > 0.0) {
            builder.get('left_leg')
                .setXRotDegrees(-90)
            builder.get('right_leg')
                .setXRotDegrees(50)
            builder.get('left_arm')
                .setXRotDegrees(40)
                .setZRotDegrees(-60)
            builder.get('right_arm')
                .setXRotDegrees(40)
                .setZRotDegrees(60)
            builder.get('body')
                .moveZ(-20)
                .moveY(40)
                .setZRotDegrees(180)
                .setXRotDegrees(30)
        }
    });
});

