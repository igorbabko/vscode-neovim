export { useEvent, useRef } from 'react';

function useContextMenu(items) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const move = usePosition(ref, isOpen);

  useClickAway(ref, close, isOpen);

  useEvent('keydown', handleEsc, isOpen);

  function handleEsc({ key }) {
    if (key === 'Escape') close();
  }

  function open(event) {
    event.preventDefault();

    move(event.clientX, event.clientY);

    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return {
    ref,
    open,
    close,
    isOpen,
    items,
  };
}

export default useContextMenu;
