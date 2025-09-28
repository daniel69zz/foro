import * as AvatarPrimitive from "@radix-ui/react-avatar";
import styles from "./Avatar.module.css";

import cn from "../utils/cn";

function Avatar({
    className, size="md", shape="rounded",
    ring=false, children, ...props
}){
    return (
        <AvatarPrimitive.Root
            data-slot="avatar"
            className={cn(styles.avt, className)}
            data-size={size}
            data-shape={shape}
            data-ring={String(ring)}
            {...props}
        >
            {children}
        </AvatarPrimitive.Root>
    );
}

function AvatarImage({className, ...props}){
    return (
        <AvatarPrimitive.Image
            data-slot="avatar-image"
            className={cn(styles.image, className)}
            {...props}
        />
    );
}

function AvatarFallback({className, ...props}){
    return (
        <AvatarPrimitive.Fallback
            data-slot="avatar-fallback"
            className={cn(styles.fallback, className)}
            {...props}
        />
    );
}

export {Avatar, AvatarImage, AvatarFallback};