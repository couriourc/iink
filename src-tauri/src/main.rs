#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// using mod
mod display;
use display::transparentify;
use tauri::command;
use tauri::{AppHandle, Manager};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[command]
fn greet() -> String {
    format!("Hello, You've been greeted from Rust!")
}
#[command]
fn start_control(app: AppHandle) -> String {
    println!("z执行了");
    transparentify::transparent_window(&app, true);
    format!("Hello, You've been greeted from Rust!")
}

#[command]
fn cancel_control(app: AppHandle) -> String {
    print!("z执行了 cancel_control");
    transparentify::transparent_window(&app, false);
    format!("Hello, You've been greeted from Rust!")
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            // transparent_window(&app, true);
            let app_handle: AppHandle = Manager::app_handle(app);
            // let win = app_handle.get_window("main").unwrap();
            // 设置全局的快捷键
            transparentify::transparent_window(&app_handle, true);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            greet,
            cancel_control,
            start_control
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
