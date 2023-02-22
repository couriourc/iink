/*
 * @Author: CouriourC
 * @Date: 2023-02-19 16:11:42
 * @Last Modified by: CouriourC
 * @Last Modified time: 2023-02-19 22:06:15
 */

use tauri::{AppHandle, Manager};
#[cfg(windows)]
pub fn transparent_window(app: &AppHandle, trigger_type: bool) {
    let window = app.get_window("main").unwrap();

    use windows::Win32::Foundation::HWND;
    let hwnd = window.hwnd().unwrap().0;
    let hwnd = HWND(hwnd);
    if trigger_type {
        print!("true");
        // 如果关闭窗口
        unsafe {
            print!("true");
            let mut style_ex = WINDOW_EX_STYLE(GetWindowLongW(hwnd, GWL_EXSTYLE) as u32);
            style_ex |= WS_EX_APPWINDOW // for taskbar
                | WS_EX_COMPOSITED
                | WS_EX_LAYERED
                | WS_EX_TOPMOST;
            use windows::Win32::UI::WindowsAndMessaging::*;
            let nindex = GWL_EXSTYLE;
            let _pre_val = SetWindowLongA(hwnd, nindex, style_ex.0 as i32);
        }
    } else {
        // 如果开启窗口
        print!("false");
        unsafe {
            let mut style_ex = WINDOW_EX_STYLE(GetWindowLongW(hwnd, GWL_EXSTYLE) as u32);
            style_ex |= WS_EX_APPWINDOW // for taskbar
                | WS_EX_COMPOSITED
                | WS_EX_LAYERED
                | WS_EX_TRANSPARENT
                | WS_EX_TOPMOST;
            use windows::Win32::UI::WindowsAndMessaging::*;
            let nindex = GWL_EXSTYLE;
            let _pre_val = SetWindowLongA(hwnd, nindex, style_ex.0 as i32);
        }
    }
}
