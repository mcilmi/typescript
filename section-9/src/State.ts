import { Listener } from "./Listener";

class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>): void {
        this.listeners.push(listenerFn);
    }
}

export { State };
