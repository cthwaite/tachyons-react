const colorClass = {
    color: (value?: string) => value ? `${value}` : null,
    bgColor: (value?: string) => value ? `bg-${value}` : null,
};

export interface Color {
    color?: string;
    bgColor?: string;
}

export { colorClass };
