import CounterStore from './store'
const store = new CounterStore()

it('check increment and decrement actions', () => {
    expect(store.counter).toBe(0)
    store.increment()
    expect(store.counter).toBe(1)
    store.decrement()
    store.decrement()
    expect(store.counter).toBe(-1)
})

