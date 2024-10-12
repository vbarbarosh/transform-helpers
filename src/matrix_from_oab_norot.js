const angle = require('./angle');
const distance = require('./distance');
const matrix_multiply = require('./matrix_multiply');
const matrix_rotate = require('./matrix_rotate');
const matrix_scale = require('./matrix_scale');
const matrix_translate = require('./matrix_translate');

function matrix_from_oab_norot(o, a, b)
{
    const r = angle(o.x, o.y, b.x, b.y) - angle(o.x, o.y, a.x, a.y);
    return matrix_multiply(
        matrix_translate(b.x, b.y),
        matrix_rotate(r),
        matrix_scale(
            distance(o.x, o.y, b.x, b.y) / distance(o.x, o.y, a.x, a.y),
        ),
        matrix_translate(-a.x, -a.y),
        matrix_translate(o.x,o.y),
        matrix_rotate(-r),
        matrix_translate(-o.x, -o.y),
    );
}

module.exports = matrix_from_oab_norot;
