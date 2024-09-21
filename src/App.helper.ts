
export const processKeydown = (event: React.KeyboardEvent, setCount: React.Dispatch<React.SetStateAction<number>>, count: number) => {
    switch (event.key) {
      case "ArrowUp":
        setCount(count + 1);
        break;
      case "ArrowDown":
        setCount(count - 1);
        break;
      default:
        break;
    }
  };