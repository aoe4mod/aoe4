const noop = () => {}

export function defineEntry (
  moduleName: string,
  // Called during load as part of the game setup sequence
  onGameSetup?: () => void,
  // Called before initialization, preceding other module OnInit functions
  preInit?: () => void,
  // Called on match initialization before handing control to the player
  onInit?: () => void,
  // Called after initialization is done when game is fading up from black
  start?: () => void,
  // Called when Core_SetPlayerDefeated() is invoked. Signals that a player has been eliminated from play due to defeat.
  onPlayerDefeated?: (player: Player, reason: number) => void,
  // When a victory condition is met, a module must call Core_OnGameOver() in order to invoke this delegate and notify all modules that the match is about to end. Generally used for clean up (removal of rules, objectives, and UI elements specific to the module).
  onGameOver?: () => void
) {
  Core_RegisterModule(moduleName)
  const g = globalThis as any
  g[`${moduleName}_OnGameSetup`] = onGameSetup || noop
  g[`${moduleName}_PreInit`] = preInit || noop
  g[`${moduleName}_OnInit`] = onInit || noop
  g[`${moduleName}_Start`] = start || noop
  g[`${moduleName}_OnPlayerDefeated`] = onPlayerDefeated || noop
  g[`${moduleName}_OnGameOver`] = onGameOver || noop
}
