export default {
    name: 'dashboard',
    directive: {
        inserted(el, binding, vnode) {
            let {designWidth, designHeight, position = 'top-left', timer = 300} = binding.value;
            let parentNode = el.parentNode; // 上级元素
            let diffUnit = 0; // 比例差值
            let pWidth = 0; // 上级宽度
            let pHeight = 0; // 上级高度
            let scaling = 0; // 缩放比例
            let translate = '0,0'; // 偏移量
            let timeout = null;
            // 获取上级的长度和宽度
            const _calcParentWH = () => {
                pWidth = parentNode.offsetWidth;
                pHeight = parentNode.offsetHeight;
                diffUnit = pWidth / pHeight - designWidth / designHeight;
            }
            // 计算缩放比例
            const _calcScaling = () => {
                scaling = pWidth === designWidth && pHeight === designHeight ? 1 // 宽度和高度都相等
                    : (diffUnit > 0 ? pHeight / designHeight : pWidth / designWidth);
            }
            // 计算偏移量
            const _calcTranslate = () => {
                switch (position) {
                    case 'top-left':
                        translate = '0,0';
                        break;
                    case 'top-center':
                        translate = `${(pWidth - designWidth * scaling) / 2 / scaling}px,0`;
                        break
                    case 'top-right':
                        translate = `${(pWidth - designWidth * scaling) / scaling}px,0`;
                        break;
                    case 'bottom-left':
                        translate = `0,${(pHeight - designHeight * scaling) / scaling}px`;
                        break;
                    case 'left-center':
                        translate = `0,${(pHeight - designHeight * scaling) / 2 / scaling}px`;
                        break;
                }
            }
            // 绑定style
            const _bindStyleText = () => {
                el.style = `transform-origin: 0 0;
                        transform: scale(${scaling},${scaling}) translate(${translate});
                        width:${designWidth}px;
                        height:${designHeight}px;`
            }
            // 窗口变化后重新计算
            let resize = () => {
                _calcParentWH();
                _calcScaling();
                _calcTranslate();
                _bindStyleText();
            }
            // 先调用一次
            resize();
            // 时间监听函数
            el.bind = () => {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                timeout = setTimeout(resize, timer)
            }
            // 添加事件监听
            window.addEventListener('resize', el.bind);
        },
        unbind(el, binding, vnode) {
            // 移除事件监听
            window.removeEventListener('resize', el.bind);
        }
    }
}