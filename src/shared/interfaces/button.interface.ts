export interface Buttons {
    color: 'primary' | 'secondary' | 'accent' | 'dark' | 'positive' | 'negative' | 'info' | 'warning';
    icon: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    acction: () => void;
}