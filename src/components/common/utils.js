export function throttle(func, aboutTime) {
    let time = null;
    return function() {
        if (time) clearTimeout(time)
        time = setTimeout(() => {
            func.apply(this)
        }, aboutTime);
    }
}