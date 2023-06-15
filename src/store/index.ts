import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(createPersistedState({
    serializer: {
        serialize: JSON.stringify,
        deserialize: JSON.parse
    }
}))
export default store
