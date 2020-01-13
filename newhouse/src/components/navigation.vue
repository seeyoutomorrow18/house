<template>
    <div class="HousePrices">
        <div class="title-top">
            <slot name="title-housePrice"></slot>
            <slot name='icon'></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.HousePrices{
    margin-bottom:30.209px;
    margin-top: 25px;
    .title-top{
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: .55556rem;
        h1{
            color: #333;
            font-size: .55556rem;
            font-weight: 700;
            height: .74074rem;
            line-height: .74074rem;
            margin: 0;
            padding-left: .37037rem;
        }
        i{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA6CAYAAADRN1sJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0QTFDRkEzMUZBOTExRTlCRkVDQkMwQUZGQ0NFQTFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ0QTFDRkE0MUZBOTExRTlCRkVDQkMwQUZGQ0NFQTFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDRBMUNGQTExRkE5MTFFOUJGRUNCQzBBRkZDQ0VBMUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDRBMUNGQTIxRkE5MTFFOUJGRUNCQzBBRkZDQ0VBMUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Fp1lxAAACqElEQVR42sSZO08bQRSFN1ZKCiCAwYBtjHkn4VVQg4AUaampIkt0tPwCSkokxB9BIGgpICEJYBsw2LwJzyI93BVn0MrYd2fXc+2Rjlz4WudjWM+ce/0hkUhYlVwBq8LLCRAkLZBWSUukWDkAPuK1hrRJijremyJNkrbKsQMzeeYKyt6N4XIAxIu8Xw2IIWmAP0yN2olBSYBl0l+mrhYQA1IA/0nfSGmm9hMg+qW+hlekMdIBU18HiK9SB9ElIA6Zz9ST1kifpU7CC0AcuUCsk/qkjuJz0igpowHRK3UXKIhjpqYBED1Sl9EZIE6YmiAguqVuw1NAZJmaRkB0SV3HOUDkmJomQHRK5YEsIE6ZmhBpwwuE10ByAogzFwh7JzqkEtGxBkQzIOJSkSwDiHOmpgX/jnapTOgFIiYVSo9wbF8wNa2AaJNKxYeAuGRqwoCISsXyA0BcMTURQESk+oI0IK6ZmiggwlKNSQoQN0xNGyBCUp1REhD/mJoYmh+x1mwfELdMzXc74kn2hs9QRZrTXhzFDUyN/RzcSQD0wDzocqlNS+xAt4Z51nmEmwTognmjhnnO9DPQCfMmjVSVNf0QdsA85CdXlgoQh3mz32RdCkA7vkotpfQWfgFiHswzpg8idZm0MjU6/aUvgHfXaYGl02H7AogWChR5S2fG4AsgUixSOdY1zNOmO6OwhvkNzFOme0M20eaZJ013x66ZHqlnDAHE6HxAp6u5LdW8GIBOX6fM90zPiHQ6W9t8nLRr4hoNeBww3JEmLH606wugirTiMmK5h/lvkxFKAfwgfWHqHmC+YzpAKgBu9PoI818S8TngaLMLrSeY/5RqHhTAovV+Aqb+8m3B5uXtNyPbbIQ0Z70Ooe34NG/xU1KjAOpMn7XKvCr+u+GLAAMAwDCbkXQ1phIAAAAASUVORK5CYII=);
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: .27778rem .55556rem;
        display: block;
        height: .74074rem;
        width: .92593rem;
        }
    }
}
</style>

