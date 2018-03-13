<template>
    <div>hello{{where}}</div>
</template>
<script>
export default {
    props: ['hhh'],
    data: function() {
        return {
            where: this.hhh
        }
    }
}
</script>