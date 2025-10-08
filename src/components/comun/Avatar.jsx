import * as AvatarPrimitive from "@radix-ui/react-avatar";
import styles from "./Avatar.module.css";

import styled from "styled-components"

export function Avatar({ user="null", className, size="md", shape="rounded", ring=false, children, ...props }){
    return (
        <Container>
            <AvatarPrimitive.Root
                data-slot="avatar"
                className={styles.avt}
                data-size={size}
                data-shape={shape}
                data-ring={String(ring)}
                {...props}  
            >
                {children}
            </AvatarPrimitive.Root>
            
            <div className={styles.AvatarInfo}>
                <span>{user}</span>
            </div>
        </Container>
    );
}

export function AvatarImage({className, ...props}){
    return (
        <AvatarPrimitive.Image
            data-slot="avatar-image"
            className={styles.image}
            {...props}
        />
    );
}

export function AvatarFallback({className, ...props}){
    return (
        <AvatarPrimitive.Fallback
            data-slot="avatar-fallback"
            className={styles.fallback}
            {...props}
        />
    );
}

const Container = styled.div`
    align-items: center;
    margin: 0 auto;
    color: ${(props) => props.theme.text};

    
`;