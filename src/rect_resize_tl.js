const rads_from_degs = require('./rads_from_degs');
const point_rotate = require('./point_rotate');

function rect_resize_tl(item, dx, dy)
{
    const p = point_rotate(dx, dy, 0, 0, -rads_from_degs(item.transform.rotate));
    item.left += dx;
    item.top += dy;
    item.width -= p.x;
    item.height -= p.y;
    return item;
}

module.exports = rect_resize_tl;
