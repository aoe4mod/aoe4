import "cardinal.scar"
import "ScarUtil.scar"
import { ModuleName } from './shared'

Core_RegisterModule(ModuleName)

globalThis.Mod_OnInit = () => {
  print('Hello, world!')
}
