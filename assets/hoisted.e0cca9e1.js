import{p as o}from"./hoisted.f15f1a47.js";const r=document.querySelector("css-doodle"),d={light:`

        :doodle {
            @grid: 8 / 100%;
            border-radius: 50%;
        }
            
        transition: .2s @r(.6s);
        border-radius: @pick(100% 0, 0 100%);
        transform: scale(@r(.25, 1.25));
            
        background: hsla(
            calc(240 - 6 * @x * @y),
            70%, 68%, @r.8
        )

    `,dark:`

        :doodle {
            @grid: 7 / 100%;
            border-radius: 50%;
        }

        @shape: clover 5;
        background: hsla(-@i(*4), 70%, 68%, @r.8);
        transform:
            scale(@r(.2, 1.5))
            translate(@m2.@r(±50%));

    `};window.addEventListener("load",()=>r.update(d[window.theme]));window.addEventListener(`${o}-theme`,e=>{r.update(d[e.detail])});
