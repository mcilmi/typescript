// Drag and drop interfaces
interface IDraggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

export { IDraggable };