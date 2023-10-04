/** @noSelfInFile */

/**
 * List of all players.
 */
declare const PLAYERS: Player[]

declare module '*.scar' {
  const content: any
  export default content
}

declare global {
  //#region Scripting framework
  // Called during load as part of the game setup sequence
  var Mod_OnGameSetup: () => void
  // Called before initialization, preceding other module OnInit functions
  var Mod_PreInit: () => void
  // Called on match initialization before handing control to the player
  var Mod_OnInit: () => void
  // Called after initialization is done when game is fading up from black
  var Mod_Start: () => void
  // Called when Core_SetPlayerDefeated() is invoked. Signals that a player has been eliminated from play due to defeat.
  var Mod_OnPlayerDefeated: (player: Player, reason: number) => void
  // When a victory condition is met, a module must call Core_OnGameOver() in order to invoke this delegate and notify all modules that the match is about to end. Generally used for clean up (removal of rules, objectives, and UI elements specific to the module).
  var Mod_OnGameOver: () => void
  //#endregion
}

export {}
