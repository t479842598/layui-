var activeData = {
    tableScroll: {
        scrollTop: 0,
        scrollLeft: 0
    }
};

function saveScrollPosition() {
    var $tableBody = $('.layui-table-body');
    activeData.tableScroll.scrollTop = $tableBody.scrollTop();
    activeData.tableScroll.scrollLeft = $tableBody.scrollLeft();
}

function restoreScrollPosition() {
    var $tableBody = $('.layui-table-body');
    if ($tableBody.length) {
        $tableBody.scrollTop(activeData.tableScroll.scrollTop);
        $tableBody.scrollLeft(activeData.tableScroll.scrollLeft);
    }
}