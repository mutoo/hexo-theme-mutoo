let scrollbarWidth;
// credit:
// https://davidwalsh.name/detect-scrollbar-width
export function getScrollBarWidth() {
    if (scrollbarWidth === undefined) {
        // Create the measurement node
        var scrollDiv = document.createElement('div');
        scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
        document.body.appendChild(scrollDiv);

        // Get the scrollbar width
        scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }

    return scrollbarWidth;
}
