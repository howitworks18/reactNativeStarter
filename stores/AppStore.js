import {observable} from 'mobx'

class AppStore {
  @observable test = "Hello from MobX"
}

const appStore = new AppStore()
export default appStore