/**
 * Generic class
 * Syntax Class<T>
 * Generic Classes gives flexibility and strong types
 */

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(): T[] {
        return [...this.data];
    }
}

// Text storage
const textStorage = new DataStorage<string>();
textStorage.addItem('Madinah');
textStorage.addItem('Mikal');

console.log('Stored text:', textStorage.getItems());

// Numeric storage
const numericStorage = new DataStorage<number>();
numericStorage.addItem(1000);
numericStorage.addItem(1010);
numericStorage.addItem(1020);

console.log('Stored numbers:', numericStorage.getItems());

/**
 *
 * Issue arises when working with Object types.
 * Issue: The default impl. of the .removeItem method assumes the type is an Array
 * array.indexOf return -1 if not found, thus the last item is always removed if the type is Object.
 * Solution: only allow specific data types and build a specialized generic class for objects for example.
 * */
// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: 'Madinah' });
// objectStorage.addItem({ name: 'Mikal' });
// objectStorage.removeItem({ name: 'Madinah' });

// console.log('Object storage', objectStorage);

export { }; 