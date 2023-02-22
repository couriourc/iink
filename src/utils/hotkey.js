import hotkeys from 'hotkeys-js';

export function registerHotKey(shortcut, fn) {
  hotkeys(shortcut, fn);
}
