function ratingStars(stars) {

    switch (stars) {
        case 5:
            return '<i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>';

        case 4.5:
            return '<i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-half-o" aria-hidden="true"></i>';

        case 4:
            return '<i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>';


        case 3.5:
            return '<i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-half-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>';

        case 3:
            return '<i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>';

        case 2.5:
            return '<i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-half-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>';

        case 2:
            return '<i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>';

        case 1.5:
            return '<i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-half-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>';

        case 1:
            return '<i class="fa fa-star" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>';

        case 0.5:
            return '<i class="fa fa-star-half-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>';

        default:
            return '<i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>\n' +
                '                            <i class="fa fa-star-o" aria-hidden="true"></i>';

    }
}