<template>

    <div class="container">

        <div class="title">
            <h1
                style="color: white; letter-spacing: 1px; font-weight: bold;   font-family:Poppins, sans-serif; text-transform: capitalize; text-align: center;">
                Login</h1>
        </div>

        <label class="label">
            <span class="icon">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="30" height="30" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-width="1.25"
                        d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z">
                    </path>
                </svg>
            </span>
            <input type="text" class="input" placeholder="E-mail" autocomplete="off" />
        </label>

        <label class="label">
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                    width="26px" height="26px" fill-rule="nonzero">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(9.84615,9.84615)">
                            <path
                                d="M13,0c-2.67969,0 -4.80469,0.83203 -6.15625,2.34375c-1.35156,1.51172 -1.84375,3.49609 -1.84375,5.5625v1.09375h3v-1.09375c0,-1.59375 0.35938,-2.77734 1.0625,-3.5625c0.70313,-0.78516 1.83594,-1.34375 3.9375,-1.34375c2.10547,0 3.23828,0.53516 3.9375,1.3125c0.69922,0.77734 1.0625,1.98438 1.0625,3.59375v1.09375h3v-1.09375c0,-2.07812 -0.48828,-4.08594 -1.84375,-5.59375c-1.35547,-1.50781 -3.48047,-2.3125 -6.15625,-2.3125zM5,10c-1.65625,0 -3,1.34375 -3,3v10c0,1.65625 1.34375,3 3,3h16c1.65625,0 3,-1.34375 3,-3v-10c0,-1.65625 -1.34375,-3 -3,-3zM7,16c1.10547,0 2,0.89453 2,2c0,1.10547 -0.89453,2 -2,2c-1.10547,0 -2,-0.89453 -2,-2c0,-1.10547 0.89453,-2 2,-2zM13,16c1.10547,0 2,0.89453 2,2c0,1.10547 -0.89453,2 -2,2c-1.10547,0 -2,-0.89453 -2,-2c0,-1.10547 0.89453,-2 2,-2zM19,16c1.10547,0 2,0.89453 2,2c0,1.10547 -0.89453,2 -2,2c-1.10547,0 -2,-0.89453 -2,-2c0,-1.10547 0.89453,-2 2,-2z">
                            </path>
                        </g>
                    </g>
                </svg>
            </span>
            <input type="text" class="input" placeholder="Senha" autocomplete="off" />
        </label>
        <div class="btn">
            <button class="btntop"> Entrar
            </button>
        </div>

    </div>


</template>


<script>
export default {
    name: 'LoginPage',
}

</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


/* From Uiverse.io by Na3ar-17 */
.container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.label {
    position: relative;
    display: block;
    width: 250px;
    margin-top: 40px;
    display: flex;
    border-radius: 6px;
    border: 2px solid white;
    padding: 15px 8px 15px 10px;
    text-align: left;

    .icon {
        position: absolute;
        top: 53%;
        right: 0;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
        color: #c5c5c5;
    }

    .input {
        background-color: transparent;
        outline: none;
        border: none;
        color: #c5c5c5;
        font-size: 16px;
    }
}

/* From Uiverse.io by alexroumi */
button {
    padding: 15px 25px;
    border: unset;
    border-radius: 15px;
    color: #212121;
    z-index: 1;
    background: #e8e8e8;
    position: relative;
    font-weight: 1000;
    font-size: 17px;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
    overflow: hidden;
}

button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #212121;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms
}

button:hover {
    color: #e8e8e8;
}

button:hover::before {
    width: 100%;
}

.btntop {
    margin-top: 35px;
}
</style>