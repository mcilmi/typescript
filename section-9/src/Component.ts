// Component base class

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string) {
        this.templateElement = <HTMLTemplateElement>document.getElementById(templateId)!;
        this.hostElement = <T>document.getElementById(hostElementId)!;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = <U>importedNode.firstElementChild;
        // Add ID to the element for css styling
        if (newElementId)
            this.element.id = newElementId;

        this.attach(insertAtStart);
    }

    private attach(insertAtBegin: boolean): void {
        this.hostElement.insertAdjacentElement(insertAtBegin ? "afterbegin" : "beforeend", this.element);
    }

    abstract configure?(): void;
    abstract renderContent(): void;
}

export { Component };
