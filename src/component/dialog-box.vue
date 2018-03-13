<template>
    <div class="dialog-box-bg">
        <div class="dialog-box">
            <div class="dialog-body">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>
<style scoped>
.dialog-box-bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: 0.7;
    z-index: 999;
}

.dialog-box {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 1rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 1000;
    background-color: #fff;
}

.dialog-box .dialog-body {
    width: 2rem;
    height: 2rem;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>