// Those imports are handled by url-loader
import '../dist/wasm/libsvm.wasm';
import '../dist/wasm/libsvm.asm.js';


async function load() {
    try {
        global.SVM = await import('../wasm');
    } catch (e) {
        console.warn('wasm failed, trying asm'); // eslint-disable-line no-console
        global.SVM = await import('../asm');
    }
    import('./bootstrap');
}

load();

