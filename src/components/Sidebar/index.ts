
export const getRemSize = () => {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
};


export const handleMouseDown = (
    e: MouseEvent,
    divRef: React.RefObject<HTMLDivElement>,
    setSize: React.Dispatch<React.SetStateAction<{ width: number }>>
) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = divRef.current?.offsetWidth || 0;

    const handleMouseMove = (e: MouseEvent) => {
        const newWidth = startWidth + e.clientX - startX;
        setSize({ width: newWidth });
    };

    const handleMouseUp = () => {
        removeEventListener('mousemove', handleMouseMove as any);
        removeEventListener('mouseup', handleMouseUp);
    };

    addEventListener('mousemove', handleMouseMove as any);
    addEventListener('mouseup', handleMouseUp);
};