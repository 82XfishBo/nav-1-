const $siteList = $(`.siteList`);
const $lastLi = $siteList.find(`li.last`);
const x = localStorage.getItem(`x`);
const xObject = JSON.parse(x);
const hashMap = xObject || [];
const render = ()=>{
    $siteList.find(`.new`).remove();
    hashMap.forEach((node, index)=>{
        const $li = $(`<li class="new">
            <div class="close"><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-closel"></use>
            </svg></div>        
            <a href="${node.url}">
                <div class="logo">${node.logo[0]}</div>
                <div class="url">${node.logo}</div>
            </a>
        </li>`).insertBefore($lastLi);
        $li.on(`click`, `.close`, (e)=>{
            hashMap.splice(index, 1);
            render.call(null);
        });
    });
};
if (hashMap !== null) render.call(null);
$(`.addButton`).on(`click`, ()=>{
    let url = window.prompt(`请输入想要添加的网址：`);
    if (url.indexOf(`http`) !== 0) {
        url = `https://` + url;
        console.log(url);
    }
    let name = window.prompt(`请输入收藏的网站名称：`);
    hashMap.push({
        logo: name,
        logoType: "text",
        url: url
    });
    render.call(null);
});
window.onbeforeunload = ()=>{
    console.log(`页面关闭,开始存储。`);
    const string = JSON.stringify(hashMap);
    localStorage.setItem(`x`, string); //在本地设置一个key为x，其值为string。
};

//# sourceMappingURL=index.de158e3a.js.map
