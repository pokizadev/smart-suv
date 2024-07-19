import React from "react"

export type ButtonSize = "sm" | "md" | "lg" 
export type ButtonColor = "primary" | "red" | "black" | "gray" | "white"


export type ButtonProps = {
    size?: ButtonSize
    color?: ButtonColor
    className?: string
    children?: React.ReactNode
    onClick?: () => void;
}