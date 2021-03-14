function match(selector, element) {
    if (!selector || !element.attributes) {
        return false;
    }
    // reverse 标签匹配从当前元素往外匹配，首先获取当前元素
    // 检查一个选择器是否匹配当前元素，需要一级一级往父元素去找
    let selectLists = selector.split(" ").reverse();//所有选择器 ["#id.class","div"]
    // 将得到的第一个选择器进行检索
    let selectList =selectLists[0].match(/(#|.)?[\w]+/g);
    if (selectList.length > 1) {
      // 重新走一遍match函数
        for (let i = 0; i < selectList.length; i++) {
            if(!match(selectList[i],element)){
                return false;
            }
        }
        // 不返回false
        return true;
    }
    if(selector.charAt(0) == "#"){
        var attr =  element.attributes['id'].name === 'id';
        if(attr && element.attributes['id'].value === selector.replace("#","")){
            return true;
        }
    }else if (selector.charAt(0) == ".") {
        var attr = element.attributes['class'].name === 'class'
        if (attr) {
            return element.attributes['class'].value.split(" ").some((value) => {
                return value === selector.replace(".", '');
            });
        }
    }else{
        if(element.tagName === selector){
            return true;
        }
    }
    return false;
}