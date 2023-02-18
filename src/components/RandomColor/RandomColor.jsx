export const RandomColor = () => {
    const newColor = Math.floor(Math.random() * 16777215).toString(16);
    const whiteColor = 'FFFFFF';
    if (newColor.toUpperCase !== whiteColor) {
        return "#" + newColor;
    }
} 