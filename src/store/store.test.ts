import CounterStore from './store'
const store = new CounterStore()

describe('Counter store', () => {
    it('check increment and decrement acctions', () => {
        expect(store.counter).toBe(0)
        store.increment()
        expect(store.counter).toBe(1)
        store.decrement()
        store.decrement()
        expect(store.counter).toBe(-1)
    })
})

